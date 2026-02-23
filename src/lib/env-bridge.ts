/**
 * Copie les variables POSTGRES_* de import.meta.env vers process.env
 * pour que @vercel/postgres puisse se connecter (il lit process.env).
 * À importer AVANT tout import de @vercel/postgres.
 */
const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
const vars = ['POSTGRES_URL', 'POSTGRES_USER', 'POSTGRES_HOST', 'POSTGRES_PASSWORD', 'POSTGRES_DATABASE'];
if (typeof process !== 'undefined' && process.env) {
  for (const key of vars) {
    const v = (env as Record<string, string | undefined>)[key];
    if (v !== undefined && v !== '' && !process.env[key]) process.env[key] = v;
  }
}
