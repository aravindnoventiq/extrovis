process.env.NODE_ENV = 'production';
await import('../prisma/seed.ts');
