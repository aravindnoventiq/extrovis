#!/bin/sh
set -e

cd /app/server

export NODE_ENV="${NODE_ENV:-production}"
export APP_PORT="${APP_PORT:-3072}"
export APP_HOST="${APP_HOST:-0.0.0.0}"

echo "[entrypoint] NODE_ENV=$NODE_ENV APP_PORT=$APP_PORT"

if [ ! -f config/config.json ] && [ -f config/config.example.json ]; then
  echo "[entrypoint] Creating config.json from config.example.json"
  cp config/config.example.json config/config.json
fi

echo "[entrypoint] Syncing Prisma schema (waiting for MySQL if needed)..."
i=0
until npx tsx scripts/prisma-with-config.ts --production db push; do
  i=$((i + 1))
  if [ "$i" -ge 30 ]; then
    echo "[entrypoint] Database not ready after retries — starting anyway"
    break
  fi
  echo "[entrypoint] DB not ready (attempt $i/30), retrying in 3s..."
  sleep 3
done

if [ "${RUN_SEED:-0}" = "1" ]; then
  echo "[entrypoint] Seeding database..."
  npm run seed:production || true
fi

echo "[entrypoint] Starting Extrovis server..."
exec npm run start:production
