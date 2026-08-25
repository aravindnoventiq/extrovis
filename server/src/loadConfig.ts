import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type DbConfig = {
  username: string;
  password: string;
  database: string;
  host: string;
  port?: number;
  dialect?: string;
};

type ConfigFile = Record<string, DbConfig>;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configDir = path.resolve(__dirname, '../config');
const configPath = path.join(configDir, 'config.json');
const examplePath = path.join(configDir, 'config.example.json');

function parseDatabaseUrl(url: string): DbConfig {
  const u = new URL(url);
  return {
    username: decodeURIComponent(u.username),
    password: decodeURIComponent(u.password),
    database: u.pathname.replace(/^\//, ''),
    host: u.hostname,
    port: Number(u.port || 3306),
    dialect: 'mysql',
  };
}

/**
 * Load MySQL settings from server/config/config.json (Refex-style).
 * Falls back to config.example.json, then DATABASE_URL / DB_* env vars
 * so a missing config.json does not crash the process (avoids nginx 502).
 */
export function applyDatabaseConfig(): DbConfig {
  const env = process.env.NODE_ENV || 'development';

  if (process.env.FORCE_DATABASE_URL === '1' && process.env.DATABASE_URL) {
    return parseDatabaseUrl(process.env.DATABASE_URL);
  }

  let base: DbConfig | undefined;

  const pathToRead = fs.existsSync(configPath)
    ? configPath
    : fs.existsSync(examplePath)
      ? examplePath
      : null;

  if (pathToRead) {
    if (pathToRead === examplePath) {
      console.warn(
        `[db] ${configPath} missing — using config.example.json. Copy it to config.json for production.`,
      );
    }
    const all = JSON.parse(fs.readFileSync(pathToRead, 'utf8')) as ConfigFile;
    base = all[env] || all.development;
  }

  if (!base && process.env.DATABASE_URL) {
    base = parseDatabaseUrl(process.env.DATABASE_URL);
  }

  if (!base) {
    base = {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'extrovis',
      host: process.env.DB_HOST || '127.0.0.1',
      port: Number(process.env.DB_PORT || 3306),
      dialect: 'mysql',
    };
    console.warn('[db] No config.json found — using DB_* env defaults');
  }

  const username = process.env.DB_USER || base.username;
  const password = process.env.DB_PASSWORD || base.password;
  const database = process.env.DB_NAME || base.database;
  const host = process.env.DB_HOST || base.host;
  const port = Number(process.env.DB_PORT || base.port || 3306);

  const encUser = encodeURIComponent(username);
  const encPass = encodeURIComponent(password);
  process.env.DATABASE_URL = `mysql://${encUser}:${encPass}@${host}:${port}/${database}`;

  console.log(`[db] NODE_ENV=${env} → ${database}@${host}:${port}`);
  return { username, password, database, host, port, dialect: 'mysql' };
}
