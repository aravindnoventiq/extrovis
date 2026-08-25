import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export type AuthRequest = Request & { adminId?: number; adminEmail?: string };

type JwtAdminPayload = { sub: number; email: string };

function readAdminPayload(token: string, secret: string): JwtAdminPayload {
  const decoded = jwt.verify(token, secret);
  if (typeof decoded === 'string' || decoded == null) {
    throw new Error('Invalid token payload');
  }
  const sub = typeof decoded.sub === 'number' ? decoded.sub : Number(decoded.sub);
  const email = typeof decoded.email === 'string' ? decoded.email : '';
  if (!Number.isFinite(sub) || !email) {
    throw new Error('Invalid token claims');
  }
  return { sub, email };
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  const token = header.slice(7);
  try {
    const secret = process.env.JWT_SECRET || 'dev-secret';
    const payload = readAdminPayload(token, secret);
    req.adminId = payload.sub;
    req.adminEmail = payload.email;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
