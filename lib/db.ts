/**
 * Database connection placeholder.
 * Real MySQL client (e.g. mysql2 / drizzle / prisma) will be wired up later.
 */

export const DB_URL = process.env.DATABASE_URL ?? "";

export function isDbConfigured(): boolean {
  return DB_URL.length > 0;
}
