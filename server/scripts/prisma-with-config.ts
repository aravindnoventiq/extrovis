/**
 * Run Prisma CLI with DATABASE_URL from config.json for the current NODE_ENV.
 * Usage:
 *   tsx scripts/prisma-with-config.ts db push
 *   tsx scripts/prisma-with-config.ts --production db push
 */
import 'dotenv/config';
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { applyDatabaseConfig } from '../src/loadConfig.js';

const serverRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let args = process.argv.slice(2);

if (args[0] === '--production') {
  process.env.NODE_ENV = 'production';
  args = args.slice(1);
} else if (args[0] === '--uat') {
  process.env.NODE_ENV = 'uat';
  args = args.slice(1);
} else if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

const db = applyDatabaseConfig();
console.log(`[db] NODE_ENV=${process.env.NODE_ENV} → ${db.database}@${db.host}:${db.port}`);

if (args.length === 0) {
  console.error('Usage: tsx scripts/prisma-with-config.ts [--production|--uat] <prisma-args...>');
  process.exit(1);
}

const child = spawn('npx', ['prisma', ...args], {
  stdio: 'inherit',
  env: process.env,
  shell: true,
  cwd: serverRoot,
});

child.on('exit', (code) => process.exit(code ?? 1));
