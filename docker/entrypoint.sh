#!/bin/sh
set -e

cd /app/server

export NODE_ENV="${NODE_ENV:-production}"
export APP_PORT="${APP_PORT:-3072}"
export APP_HOST="${APP_HOST:-0.0.0.0}"
export DB_HOST="${DB_HOST:-mysql}"
export DB_PORT="${DB_PORT:-3306}"

echo "[entrypoint] NODE_ENV=$NODE_ENV APP_PORT=$APP_PORT DB_HOST=$DB_HOST"

if [ ! -f config/config.json ] && [ -f config.example.json ]; then
  cp config.example.json config.json
fi
if [ ! -f config/config.json ] && [ -f config/config.example.json ]; then
  echo "[entrypoint] Creating config.json from config.example.json"
  cp config/config.example.json config/config.json
fi

if [ "${RUN_MIGRATE:-0}" = "1" ]; then
  echo "[entrypoint] prisma db push..."
  npx tsx scripts/prisma-with-config.ts --production db push || true
fi

if [ "${RUN_SEED:-0}" = "1" ]; then
  echo "[entrypoint] seeding..."
  npm run seed:production || true
fi

echo "[entrypoint] Starting Extrovis (tsx) on :${APP_PORT}..."
exec npx tsx src/index.ts
