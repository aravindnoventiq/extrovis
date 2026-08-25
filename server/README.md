# Extrovis CMS API

Express + Prisma + MySQL. Serves `../client/out` after `cd client && npm run build`.

## Setup

1. Edit `config/config.json` for your MySQL env (`development` / `uat` / `production`).
2. Optional `.env`:

```bash
NODE_ENV=development
APP_PORT=4000
APP_HOST=0.0.0.0
JWT_SECRET=change-me
ADMIN_EMAIL=admin@extrovis.com
ADMIN_PASSWORD=Admin@12345
ADMIN_NAME=Extrovis Admin
# Optional override of config.json:
# DATABASE_URL=mysql://root:password@127.0.0.1:3306/extrovis
# CLIENT_ORIGIN=http://localhost:3000
```

3. Install and sync:

```bash
npm install
npx prisma db push
npm run seed
```

4. Dev API:

```bash
npm run dev
```

## Production database

`config/config.json` → `production` uses database **`extrovis`** (same name as development; point `host` / credentials at your prod MySQL).

```bash
# Create schema + seed production DB
npm run db:push:production
npm run seed:production

# Run server against production DB
npm run start:production
```

Override host/user/password without editing JSON:

```bash
set DB_HOST=your-mysql-host
set DB_USER=extrovis
set DB_PASSWORD=secret
set DB_NAME=extrovis
npm run db:push:production
```
