import { c as createComponent, a as createAstro, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_fnnClJRy.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Synthese = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Synthese;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Synth\xE8se - Administration Chalet Husky", "description": "Vue d'ensemble et statistiques", "data-astro-cid-4ddmhdzb": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="admin-section" data-astro-cid-4ddmhdzb> <div class="container" data-astro-cid-4ddmhdzb> <div class="admin-header" data-astro-cid-4ddmhdzb> <div class="header-left" data-astro-cid-4ddmhdzb> <a href="/admin" class="back-link" data-astro-cid-4ddmhdzb>← Retour</a> <h1 data-astro-cid-4ddmhdzb>Synthèse</h1> <div class="period-selector" data-astro-cid-4ddmhdzb> <label for="periodSelect" class="period-label" data-astro-cid-4ddmhdzb>Période :</label> <select id="periodSelect" class="period-select" data-astro-cid-4ddmhdzb> <!-- Options générées par JavaScript --> </select> </div> </div> <button id="logoutBtn" class="btn btn-secondary" data-astro-cid-4ddmhdzb>Déconnexion</button> </div> <div class="synthese-grid" data-astro-cid-4ddmhdzb> <div class="synthese-card" data-astro-cid-4ddmhdzb> <h2 data-astro-cid-4ddmhdzb>Taux d'occupation</h2> <div class="stat-large" id="occupationRate" data-astro-cid-4ddmhdzb>0%</div> <p class="stat-change" data-astro-cid-4ddmhdzb>Sur la période</p> </div> <div class="synthese-card" data-astro-cid-4ddmhdzb> <h2 data-astro-cid-4ddmhdzb>Revenus totaux</h2> <div class="stat-large" id="totalRevenue" data-astro-cid-4ddmhdzb>0 €</div> <p class="stat-change" data-astro-cid-4ddmhdzb>Sur la période</p> </div> <div class="synthese-card" data-astro-cid-4ddmhdzb> <h2 data-astro-cid-4ddmhdzb>Réservations</h2> <div class="stat-large" id="reservationsCount" data-astro-cid-4ddmhdzb>0</div> <p class="stat-change" data-astro-cid-4ddmhdzb>Confirmées</p> </div> </div> <div class="synthese-charts" data-astro-cid-4ddmhdzb> <div class="chart-card" data-astro-cid-4ddmhdzb> <h2 data-astro-cid-4ddmhdzb>Réservations par mois</h2> <div id="chartByMonth" class="chart-container" data-astro-cid-4ddmhdzb></div> </div> <div class="chart-card" data-astro-cid-4ddmhdzb> <h2 data-astro-cid-4ddmhdzb>Répartition par plateforme</h2> <div id="chartByPlatform" class="chart-container" data-astro-cid-4ddmhdzb></div> </div> </div> </div> </section> ` })}  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/admin/synthese.astro", void 0);

const $$file = "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/admin/synthese.astro";
const $$url = "/admin/synthese";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Synthese,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
