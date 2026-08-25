#!/bin/sh
set -e

cd /app/server

export NODE_ENV="${NODE_ENV:-production}"
export APP_PORT="${APP_PORT:-3072}"
export APP_HOST="${APP_HOST:-0.0.0.0}"
export DB_HOST="${DB_HOST:-mysql}"
export DB_PORT="${DB_PORT:-3306}"

echo "[entrypoint] NODE_ENV=$NODE_ENV APP_PORT=$APP_PORT DB_HOST=$DB_HOST"

if [ ! -f config/config.json ] && [ -f config/config.example.json ]; then
  echo "[entrypoint] Creating config.json from config.example.json"
  cp config/config.example.json config/config.json
fi

echo "[entrypoint] Waiting for MySQL TCP ${DB_HOST}:${DB_PORT}..."
node <<'NODE'
const net = require('net');
const host = process.env.DB_HOST || 'mysql';
const port = Number(process.env.DB_PORT || 3306);
(async () => {
  for (let i = 1; i <= 40; i++) {
    try {
      await new Promise((resolve, reject) => {
        const s = net.connect(port, host, () => {
          s.end();
          resolve();
        });
        s.on('error', reject);
        s.setTimeout(3000, () => {
          s.destroy();
          reject(new Error('timeout'));
        });
      });
      console.log(`[entrypoint] MySQL port open (attempt ${i})`);
      process.exit(0);
    } catch {
      console.log(`[entrypoint] MySQL not ready (attempt ${i}/40)`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  console.warn('[entrypoint] MySQL TCP wait timed out — continuing');
  process.exit(0);
})();
NODE

echo "[entrypoint] prisma db push (best-effort)..."
npx tsx scripts/prisma-with-config.ts --production db push \
  || echo "[entrypoint] prisma db push failed — starting server anyway"

if [ "${RUN_SEED:-0}" = "1" ]; then
  echo "[entrypoint] Seeding database..."
  npm run seed:production || true
fi

echo "[entrypoint] Starting Extrovis server on :${APP_PORT}..."
exec npm run start:production
