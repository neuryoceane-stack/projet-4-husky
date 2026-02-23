/**
 * En local : charge .env.local si POSTGRES_URL n'est pas défini
 * (pour que @vercel/postgres puisse se connecter quand on lance npm run dev)
 */
export async function ensurePostgresEnv(): Promise<void> {
  if (typeof process === 'undefined' || process.env.POSTGRES_URL) return;
  try {
    const path = await import('path');
    const envPath = path.join(process.cwd(), '.env.local');
    const dotenv = await import('dotenv');
    dotenv.config({ path: envPath });
  } catch {
    // Ignorer si dotenv ou .env.local absent
  }
}
