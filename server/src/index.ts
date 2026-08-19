import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import authRoutes from './routes/auth.js';
import apiRoutes from './routes/api.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT || 4000);
const origin = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'extrovis-cms' });
});

app.use('/api/auth', authRoutes);
app.use('/api', apiRoutes);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Server error' });
});

app.listen(port, () => {
  console.log(`Extrovis CMS API listening on http://localhost:${port}`);
});
