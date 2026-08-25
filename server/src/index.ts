import 'dotenv/config';
import { applyDatabaseConfig } from './loadConfig.js';
applyDatabaseConfig();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import authRoutes from './routes/auth.js';
import apiRoutes from './routes/api.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.APP_PORT || process.env.PORT || 4000);
const host = process.env.APP_HOST || '0.0.0.0';
const origin = process.env.CLIENT_ORIGIN || true;

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

// Serve React frontend build (Refex / Adonis-style single-server setup)
// Workflow: cd client && npm run build  →  cd server && npm start
// Then open http://localhost:APP_PORT for site + API + uploads
const clientBuildPath = path.join(__dirname, '../../client/out');
const distIndexPath = path.join(clientBuildPath, 'index.html');

if (fs.existsSync(clientBuildPath) && fs.existsSync(distIndexPath)) {
  console.log('Serving frontend from:', clientBuildPath);

  app.use(
    express.static(clientBuildPath, {
      maxAge: '1d',
      etag: true,
      lastModified: true,
      index: false,
    }),
  );

  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return next();
    }
    if (req.path.startsWith('/api/') || req.path.startsWith('/uploads')) {
      return next();
    }

    if (/\.[a-z0-9]+$/i.test(req.path) && !/\.html?$/i.test(req.path)) {
      return res.status(404).send('Not found');
    }

    return res.sendFile(distIndexPath);
  });
} else {
  console.warn(
    'Client build folder not found at',
    clientBuildPath,
    "- API will work but frontend will not be served. Run 'npm run build' in the client folder.",
  );
  app.get('/', (_req, res) => {
    res.json({
      ok: true,
      message: 'Extrovis CMS API is running',
      note: 'Build the client (cd client && npm run build) so this server can serve client/out',
    });
  });
}

app.listen(port, host, () => {
  console.log(`Extrovis server running on http://${host}:${port}`);
  console.log(`Local:   http://localhost:${port}`);
});
