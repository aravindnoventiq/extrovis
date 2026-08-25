# Deploy Extrovis (Docker)

Live URL returns **502** when the app container is down / crashing (nginx → container).

## Quick recovery on the server

```bash
cd /opt/apps/extrovis
git pull origin main

# See what is running
docker ps -a | grep -i extrovis
docker compose ps
docker compose logs app --tail 100

# Rebuild & restart
docker compose up -d --build

# Health check inside the stack
docker compose exec app wget -qO- http://127.0.0.1:4000/api/health || \
  docker compose exec app curl -s http://127.0.0.1:4000/api/health
```

If MySQL is empty (first time):

```bash
# Option A — seed via env on next start
RUN_SEED=1 docker compose up -d --build

# Option B — import dump into the mysql service
docker compose exec -T mysql mysql -uroot -prootpassword extrovis < extrovis.sql
```

## Stack

- `app` — builds `client/out`, runs Express on `APP_PORT` (default **4000**)
- `mysql` — hostname **`mysql`** (matches `config.example.json` production)

Nginx/openresty should proxy `extrovis.refexlifesciences.in` → `127.0.0.1:4000` (or your `APP_PUBLISH_PORT`).

## Env overrides

Set in a host `.env` next to `docker-compose.yml` (not committed):

```bash
MYSQL_ROOT_PASSWORD=...
JWT_SECRET=...
APP_PUBLISH_PORT=4000
RUN_SEED=0
```

`DB_HOST=mysql` is already set in compose for the app service.
