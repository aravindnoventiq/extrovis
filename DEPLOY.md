# Deploy Extrovis (Docker on refex host)

Live site **502** = nginx cannot reach the Node container.

On this host the service is named **`extrovis-uat`** and listens on **`3072`**.

## Fix pull conflict + rebuild

```bash
cd /opt/apps/extrovis

# Keep your old compose for reference
mv -f docker-compose.yml docker-compose.server-bak.yml 2>/dev/null || true

git pull origin main

# Inspect current container
docker ps -a | grep -i extrovis
docker logs extrovis-uat --tail 100

# Rebuild with repo compose (publishes 3072 → host)
docker compose up -d --build

# Verify from host (nginx needs this)
curl -s http://127.0.0.1:3072/api/health

# Verify inside container
docker compose exec extrovis-uat curl -s http://127.0.0.1:3072/api/health
```

If you already use an external MySQL (not the compose `mysql` service), set env before up:

```bash
export DB_HOST=...          # your real MySQL host
export DB_USER=...
export DB_PASSWORD=...
export DB_NAME=extrovis
docker compose up -d --build
```

Or edit `docker-compose.yml` / a `.env` file next to it.

## Nginx

`proxy_pass` must target **`http://127.0.0.1:3072`** (or the published `APP_PUBLISH_PORT`).

If `docker ps` shows only `3072/tcp` with **no** `0.0.0.0:3072->3072/tcp`, the port is not published and nginx will 502.
