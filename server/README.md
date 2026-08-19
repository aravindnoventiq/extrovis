# Extrovis CMS API

Express + Prisma + MySQL backend for the Extrovis marketing site.

## Setup

1. Create MySQL database:

```sql
CREATE DATABASE extrovis CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Copy env and edit credentials:

```bash
cp .env.example .env
```

3. Install and sync schema:

```bash
npm install
npx prisma db push
npm run seed
```

4. Run API (port 4000):

```bash
npm run dev
```

Default admin (from `.env`):

- Email: `admin@extrovis.com`
- Password: `Admin@12345`

Admin UI: `http://localhost:3000/admin/login` (Vite app proxied to this API).
