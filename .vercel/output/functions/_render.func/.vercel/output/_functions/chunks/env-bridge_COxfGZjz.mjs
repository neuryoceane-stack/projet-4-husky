const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const env = typeof import.meta !== "undefined" && Object.assign(__vite_import_meta_env__, { POSTGRES_URL: process.env.POSTGRES_URL, POSTGRES_USER: process.env.POSTGRES_USER, POSTGRES_HOST: process.env.POSTGRES_HOST, POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD, POSTGRES_DATABASE: process.env.POSTGRES_DATABASE, USER: process.env.USER, _: process.env._ }) ? Object.assign(__vite_import_meta_env__, { POSTGRES_URL: process.env.POSTGRES_URL, POSTGRES_USER: process.env.POSTGRES_USER, POSTGRES_HOST: process.env.POSTGRES_HOST, POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD, POSTGRES_DATABASE: process.env.POSTGRES_DATABASE, USER: process.env.USER, _: process.env._ }) : {};
const vars = ["POSTGRES_URL", "POSTGRES_USER", "POSTGRES_HOST", "POSTGRES_PASSWORD", "POSTGRES_DATABASE"];
if (typeof process !== "undefined" && process.env) {
  for (const key of vars) {
    const v = env[key];
    if (v !== void 0 && v !== "" && !process.env[key]) process.env[key] = v;
  }
}
