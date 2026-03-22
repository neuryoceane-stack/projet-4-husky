import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_fnnClJRy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Administration - Chalet Husky", "description": "Plateforme d'administration du Chalet Husky", "data-astro-cid-2zp6q64z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-section" data-astro-cid-2zp6q64z> <div class="container" data-astro-cid-2zp6q64z> <div class="admin-header" data-astro-cid-2zp6q64z> <h1 data-astro-cid-2zp6q64z>Administration Chalet Husky</h1> <button id="logoutBtn" class="btn btn-secondary" data-astro-cid-2zp6q64z>Déconnexion</button> </div> <div class="admin-grid" data-astro-cid-2zp6q64z> <a href="/admin/crm" class="admin-card" data-astro-cid-2zp6q64z> <div class="admin-card-icon" data-astro-cid-2zp6q64z>📋</div> <h2 data-astro-cid-2zp6q64z>CRM Clients</h2> <p data-astro-cid-2zp6q64z>Gérer les contacts et demandes de réservation</p> </a> <a href="/admin/synthese" class="admin-card" data-astro-cid-2zp6q64z> <div class="admin-card-icon" data-astro-cid-2zp6q64z>📊</div> <h2 data-astro-cid-2zp6q64z>Synthèse</h2> <p data-astro-cid-2zp6q64z>Vue d'ensemble et statistiques</p> </a> <a href="/admin/calendrier" class="admin-card" data-astro-cid-2zp6q64z> <div class="admin-card-icon" data-astro-cid-2zp6q64z>📅</div> <h2 data-astro-cid-2zp6q64z>Calendrier</h2> <p data-astro-cid-2zp6q64z>Gérer les réservations et prix par semaine</p> </a> </div> </div> </section> ` })}  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/admin.astro", void 0);
const $$file = "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
