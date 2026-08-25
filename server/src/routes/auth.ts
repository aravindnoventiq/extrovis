import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma.js';

const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body as { email?: string; password?: string };
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password required' });
    return;
  }

  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const secret = process.env.JWT_SECRET || 'dev-secret';
  const token = jwt.sign({ sub: user.id, email: user.email }, secret, { expiresIn: '7d' });

  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.name },
  });
});

router.get('/me', async (req, res) => {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  try {
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const decoded = jwt.verify(header.slice(7), secret);
    if (typeof decoded === 'string' || decoded == null) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const sub = typeof decoded.sub === 'number' ? decoded.sub : Number(decoded.sub);
    if (!Number.isFinite(sub)) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const user = await prisma.adminUser.findUnique({
      where: { id: sub },
      select: { id: true, email: true, name: true },
    });
    if (!user) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    res.json({ user });
  } catch {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

export default router;
