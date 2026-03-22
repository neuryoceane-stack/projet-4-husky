import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_lH6t3Tny.mjs';
import { manifest } from './manifest_vzy5ALV4.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/calendrier.astro.mjs');
const _page2 = () => import('./pages/admin/crm.astro.mjs');
const _page3 = () => import('./pages/admin/synthese.astro.mjs');
const _page4 = () => import('./pages/admin.astro.mjs');
const _page5 = () => import('./pages/api/admin/calendar.astro.mjs');
const _page6 = () => import('./pages/api/admin/contacts.astro.mjs');
const _page7 = () => import('./pages/api/admin/init-db.astro.mjs');
const _page8 = () => import('./pages/api/send-reservation.astro.mjs');
const _page9 = () => import('./pages/chalet.astro.mjs');
const _page10 = () => import('./pages/en/chalet.astro.mjs');
const _page11 = () => import('./pages/en/reserver.astro.mjs');
const _page12 = () => import('./pages/en/station.astro.mjs');
const _page13 = () => import('./pages/en.astro.mjs');
const _page14 = () => import('./pages/login.astro.mjs');
const _page15 = () => import('./pages/reserver.astro.mjs');
const _page16 = () => import('./pages/station.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/calendrier.astro", _page1],
    ["src/pages/admin/crm.astro", _page2],
    ["src/pages/admin/synthese.astro", _page3],
    ["src/pages/admin.astro", _page4],
    ["src/pages/api/admin/calendar.ts", _page5],
    ["src/pages/api/admin/contacts.ts", _page6],
    ["src/pages/api/admin/init-db.ts", _page7],
    ["src/pages/api/send-reservation.ts", _page8],
    ["src/pages/chalet.astro", _page9],
    ["src/pages/en/chalet.astro", _page10],
    ["src/pages/en/reserver.astro", _page11],
    ["src/pages/en/station.astro", _page12],
    ["src/pages/en/index.astro", _page13],
    ["src/pages/login.astro", _page14],
    ["src/pages/reserver.astro", _page15],
    ["src/pages/station.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "36ef32e4-9a81-4dbb-87f1-dfe91e4c309a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
