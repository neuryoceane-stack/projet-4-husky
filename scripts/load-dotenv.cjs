/**
 * Précharge .env.local depuis la racine du projet (à côté de package.json).
 * Utilisé par npm run dev pour que POSTGRES_URL soit disponible avant Astro.
 */
const path = require('path');
const dotenv = require('dotenv');
const root = path.resolve(__dirname, '..');
const envPath = path.join(root, '.env.local');
dotenv.config({ path: envPath });
