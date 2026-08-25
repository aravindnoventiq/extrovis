# Extrovis

Refex-style layout: Vite React client + Express CMS API. Client builds to `client/out`; the server serves that folder (SPA) plus `/api` and `/uploads`.

```
extrovis/
├── client/          # Vite + React (build → client/out)
├── server/          # Express + Prisma + MySQL
│   └── config/
│       └── config.json   # DB settings per NODE_ENV
└── README.md
```

## Development (two processes)

```bash
# Terminal 1 — API (default APP_PORT=4000)
cd server
npm install
npx prisma db push
npm run seed
npm run dev

# Terminal 2 — Vite (port 3000, proxies /api + /uploads → :4000)
cd client
npm install
npm run dev
```

Open http://localhost:3000

## Production / single-server (like Refex)

```bash
cd client && npm run build
cd ../server && npm start
```

Open http://localhost:4000 — site + API + uploads.

## Config

- DB: `server/config/config.json` (`development` / `uat` / `production`). Env overrides: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, or full `DATABASE_URL`.
- App: `server/.env` — `APP_PORT`, `APP_HOST`, `JWT_SECRET`, `ADMIN_*`, optional `CLIENT_ORIGIN` (Vite only).

## Admin

- URL: `/admin/login`
- Default: `admin@extrovis.com` / `Admin@12345` (from seed / env)
