import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import prisma from '../prisma.js';
import { requireAuth, type AuthRequest } from '../middleware/auth.js';

const router = Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.resolve(__dirname, '../../uploads/cvs');
fs.mkdirSync(uploadDir, { recursive: true });

function param(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? '';
  return value ?? '';
}

const upload = multer({
  storage: multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, uploadDir),
    filename: (_req, file, cb) => {
      const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
      cb(null, `${Date.now()}-${safe}`);
    },
  }),
  limits: { fileSize: 25 * 1024 * 1024 },
});

// —— Public content ——
router.get('/pages/:slug', async (req, res) => {
  const slug = param(req.params.slug);
  const page = await prisma.pageContent.findUnique({ where: { slug } });
  if (!page) {
    res.status(404).json({ error: 'Page not found' });
    return;
  }
  res.json({ slug: page.slug, data: page.data, updatedAt: page.updatedAt });
});

router.get('/leadership', async (_req, res) => {
  const members = await prisma.leadershipMember.findMany({ orderBy: [{ group: 'asc' }, { sortOrder: 'asc' }] });
  res.json({
    executiveBoard: members.filter((m) => m.group === 'executiveBoard'),
    leadershipTeam: members.filter((m) => m.group === 'leadershipTeam'),
  });
});

router.get('/offices', async (_req, res) => {
  const offices = await prisma.office.findMany({ orderBy: { sortOrder: 'asc' } });
  res.json({ offices });
});

router.get('/jobs', async (_req, res) => {
  const jobs = await prisma.job.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: 'asc' },
  });
  res.json({ jobs });
});

router.get('/career-benefits', async (_req, res) => {
  const benefits = await prisma.careerBenefit.findMany({ orderBy: { sortOrder: 'asc' } });
  res.json({ benefits });
});

router.post('/contact', async (req, res) => {
  const { source = 'get-in-touch', name, email, message, phone_alt } = req.body as Record<string, string>;
  if (phone_alt && String(phone_alt).trim() !== '') {
    res.json({ ok: true });
    return;
  }
  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: 'Name and email required' });
    return;
  }
  await prisma.contactSubmission.create({
    data: {
      source: source === 'home' ? 'home' : 'get-in-touch',
      name: name.trim(),
      email: email.trim(),
      message: message?.trim() || null,
    },
  });
  res.json({ ok: true });
});

router.post('/careers/apply', upload.single('cv'), async (req, res) => {
  const { name, email, phone_alt } = req.body as Record<string, string>;
  if (phone_alt && String(phone_alt).trim() !== '') {
    res.json({ ok: true });
    return;
  }
  if (!name?.trim() || !email?.trim()) {
    res.status(400).json({ error: 'Name and email required' });
    return;
  }
  if (!req.file) {
    res.status(400).json({ error: 'CV file required' });
    return;
  }
  await prisma.careerApplication.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      cvPath: `/uploads/cvs/${req.file.filename}`,
    },
  });
  res.json({ ok: true });
});

// —— Admin ——
router.get('/admin/pages', requireAuth, async (_req, res) => {
  const pages = await prisma.pageContent.findMany({
    select: { id: true, slug: true, updatedAt: true },
    orderBy: { slug: 'asc' },
  });
  res.json({ pages });
});

router.put('/admin/pages/:slug', requireAuth, async (req, res) => {
  const data = req.body?.data;
  if (data === undefined) {
    res.status(400).json({ error: 'data required' });
    return;
  }
  const slug = param(req.params.slug);
  const page = await prisma.pageContent.upsert({
    where: { slug },
    create: { slug, data },
    update: { data },
  });
  res.json({ slug: page.slug, data: page.data, updatedAt: page.updatedAt });
});

router.get('/admin/leadership', requireAuth, async (_req, res) => {
  const members = await prisma.leadershipMember.findMany({ orderBy: [{ group: 'asc' }, { sortOrder: 'asc' }] });
  res.json({ members });
});

router.post('/admin/leadership', requireAuth, async (req, res) => {
  const m = req.body;
  const member = await prisma.leadershipMember.create({
    data: {
      name: m.name,
      role: m.role,
      shortDesc: m.shortDesc,
      fullDesc: m.fullDesc ?? [],
      image: m.image,
      alt: m.alt || m.name,
      group: m.group || 'leadershipTeam',
      sortOrder: m.sortOrder ?? 0,
    },
  });
  res.status(201).json({ member });
});

router.put('/admin/leadership/:id', requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const m = req.body;
  const member = await prisma.leadershipMember.update({
    where: { id },
    data: {
      name: m.name,
      role: m.role,
      shortDesc: m.shortDesc,
      fullDesc: m.fullDesc,
      image: m.image,
      alt: m.alt,
      group: m.group,
      sortOrder: m.sortOrder,
    },
  });
  res.json({ member });
});

router.delete('/admin/leadership/:id', requireAuth, async (req, res) => {
  await prisma.leadershipMember.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

router.get('/admin/offices', requireAuth, async (_req, res) => {
  const offices = await prisma.office.findMany({ orderBy: { sortOrder: 'asc' } });
  res.json({ offices });
});

router.put('/admin/offices/:id', requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const o = req.body;
  const office = await prisma.office.update({
    where: { id },
    data: {
      name: o.name,
      country: o.country,
      mapImage: o.mapImage,
      lineImage: o.lineImage,
      address: o.address,
      defaultOpen: o.defaultOpen,
      sortOrder: o.sortOrder,
    },
  });
  res.json({ office });
});

router.get('/admin/jobs', requireAuth, async (_req, res) => {
  const jobs = await prisma.job.findMany({ orderBy: { sortOrder: 'asc' } });
  res.json({ jobs });
});

router.post('/admin/jobs', requireAuth, async (req, res) => {
  const j = req.body;
  const job = await prisma.job.create({
    data: {
      title: j.title,
      location: j.location || '',
      department: j.department || '',
      description: j.description || '',
      isActive: j.isActive !== false,
      sortOrder: j.sortOrder ?? 0,
    },
  });
  res.status(201).json({ job });
});

router.put('/admin/jobs/:id', requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const j = req.body;
  const job = await prisma.job.update({
    where: { id },
    data: {
      title: j.title,
      location: j.location,
      department: j.department,
      description: j.description,
      isActive: j.isActive,
      sortOrder: j.sortOrder,
    },
  });
  res.json({ job });
});

router.delete('/admin/jobs/:id', requireAuth, async (req, res) => {
  await prisma.job.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

router.get('/admin/career-benefits', requireAuth, async (_req, res) => {
  const benefits = await prisma.careerBenefit.findMany({ orderBy: { sortOrder: 'asc' } });
  res.json({ benefits });
});

router.put('/admin/career-benefits/:id', requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const b = req.body;
  const benefit = await prisma.careerBenefit.update({
    where: { id },
    data: {
      title: b.title,
      image: b.image,
      cardClass: b.cardClass,
      sortOrder: b.sortOrder,
    },
  });
  res.json({ benefit });
});

router.get('/admin/inbox/contacts', requireAuth, async (_req, res) => {
  const items = await prisma.contactSubmission.findMany({ orderBy: { createdAt: 'desc' } });
  res.json({ items });
});

router.get('/admin/inbox/applications', requireAuth, async (_req, res) => {
  const items = await prisma.careerApplication.findMany({ orderBy: { createdAt: 'desc' } });
  res.json({ items });
});

router.patch('/admin/inbox/contacts/:id/read', requireAuth, async (req, res) => {
  const item = await prisma.contactSubmission.update({
    where: { id: Number(req.params.id) },
    data: { isRead: true },
  });
  res.json({ item });
});

router.patch('/admin/inbox/applications/:id/read', requireAuth, async (req, res) => {
  const item = await prisma.careerApplication.update({
    where: { id: Number(req.params.id) },
    data: { isRead: true },
  });
  res.json({ item });
});

router.delete('/admin/inbox/contacts/:id', requireAuth, async (req, res) => {
  await prisma.contactSubmission.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

router.delete('/admin/inbox/applications/:id', requireAuth, async (req, res) => {
  await prisma.careerApplication.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

router.get('/admin/stats', requireAuth, async (_req: AuthRequest, res) => {
  const [pages, members, contacts, applications, jobs] = await Promise.all([
    prisma.pageContent.count(),
    prisma.leadershipMember.count(),
    prisma.contactSubmission.count({ where: { isRead: false } }),
    prisma.careerApplication.count({ where: { isRead: false } }),
    prisma.job.count(),
  ]);
  res.json({ pages, members, unreadContacts: contacts, unreadApplications: applications, jobs });
});

export default router;
