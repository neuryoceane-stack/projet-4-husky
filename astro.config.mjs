import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// En local : charger .env.local dans process.env pour que @vercel/postgres puisse se connecter
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env.local') });

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  server: {
    host: '127.0.0.1',
    port: 4321
  },
  build: {
    assets: 'assets'
  }
});
