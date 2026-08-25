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
const configPath = path.resolve(__dirname, '../config/config.json');

/**
 * Load MySQL settings from server/config/config.json (Refex-style).
 * Env vars win: DATABASE_URL, or DB_HOST / DB_PORT / DB_USER / DB_PASSWORD / DB_NAME.
 */
export function applyDatabaseConfig(): DbConfig {
  const env = process.env.NODE_ENV || 'development';
  const all = JSON.parse(fs.readFileSync(configPath, 'utf8')) as ConfigFile;
  const base = all[env] || all.development;
  if (!base) {
    throw new Error(`No database config for NODE_ENV=${env} in ${configPath}`);
  }

  const username = process.env.DB_USER || base.username;
  const password = process.env.DB_PASSWORD || base.password;
  const database = process.env.DB_NAME || base.database;
  const host = process.env.DB_HOST || base.host;
  const port = Number(process.env.DB_PORT || base.port || 3306);

  if (!process.env.DATABASE_URL) {
    const encUser = encodeURIComponent(username);
    const encPass = encodeURIComponent(password);
    process.env.DATABASE_URL = `mysql://${encUser}:${encPass}@${host}:${port}/${database}`;
  }

  return { username, password, database, host, port, dialect: 'mysql' };
}
