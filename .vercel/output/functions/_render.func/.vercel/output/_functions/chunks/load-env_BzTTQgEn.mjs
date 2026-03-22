async function ensurePostgresEnv() {
  if (typeof process === "undefined" || process.env.POSTGRES_URL) return;
  try {
    const path = await import('path');
    const envPath = path.join(process.cwd(), ".env.local");
    const dotenv = await import('dotenv');
    dotenv.config({ path: envPath });
  } catch {
  }
}

export { ensurePostgresEnv as e };
