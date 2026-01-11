import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  server: {
    host: '127.0.0.1',
    port: 4321
  },
  build: {
    assets: 'assets'
  }
});
