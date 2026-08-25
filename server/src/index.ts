import 'dotenv/config';
import { applyDatabaseConfig } from './loadConfig.js';

try {
  const db = applyDatabaseConfig();
  console.log(`[boot] DB target ${db.database}@${db.host}:${db.port}`);
} catch (err) {
  console.error('[boot] applyDatabaseConfig failed (continuing):', err);
}

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

process.on('uncaughtException', (err) => {
  console.error('[boot] uncaughtException', err);
});
process.on('unhandledRejection', (err) => {
  console.error('[boot] unhandledRejection', err);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.APP_PORT || process.env.PORT || 3072);
const host = process.env.APP_HOST || '0.0.0.0';
const origin = process.env.CLIENT_ORIGIN || true;

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin, credentials: true }));
app.use(express.json({ limit: '2mb' }));
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'extrovis-cms', port });
});

const clientBuildPath = path.join(__dirname, '../../client/out');
const distIndexPath = path.join(clientBuildPath, 'index.html');
const hasClient = fs.existsSync(clientBuildPath) && fs.existsSync(distIndexPath);

async function mountAppRoutes() {
  const { default: authRoutes } = await import('./routes/auth.js');
  const { default: apiRoutes } = await import('./routes/api.js');
  app.use('/api/auth', authRoutes);
  app.use('/api', apiRoutes);

  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err);
    res.status(500).json({ error: err.message || 'Server error' });
  });

  if (hasClient) {
    console.log('[boot] Serving frontend from:', clientBuildPath);
    app.use(
      express.static(clientBuildPath, {
        maxAge: '1d',
        etag: true,
        lastModified: true,
        index: false,
      }),
    );
    app.use((req, res, next) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') return next();
      if (req.path.startsWith('/api/') || req.path.startsWith('/uploads')) return next();
      if (/\.[a-z0-9]+$/i.test(req.path) && !/\.html?$/i.test(req.path)) {
        return res.status(404).send('Not found');
      }
      return res.sendFile(distIndexPath);
    });
  } else {
    console.warn('[boot] client/out missing — API only');
    app.get('/', (_req, res) => {
      res.json({
        ok: true,
        message: 'Extrovis CMS API is running',
        note: 'Build the client so this server can serve client/out',
      });
    });
  }
}

const server = app.listen(port, host, async () => {
  console.log(`[boot] Extrovis listening on http://${host}:${port}`);
  try {
    await mountAppRoutes();
    console.log('[boot] Routes mounted');
  } catch (err) {
    console.error('[boot] Failed to mount routes (health still up):', err);
  }
});

server.on('error', (err) => {
  console.error('[boot] server error', err);
  process.exit(1);
});
