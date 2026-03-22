import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_fnnClJRy.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Reserver = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "R\xE9server votre s\xE9jour - Chalet Husky", "description": "R\xE9servez votre s\xE9jour au Chalet Husky aux 2 Alpes. Contactez-nous pour v\xE9rifier les disponibilit\xE9s et planifier vos vacances de r\xEAve \xE0 la montagne.", "data-astro-cid-zh3erf7n": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header" data-astro-cid-zh3erf7n> <div class="container" data-astro-cid-zh3erf7n> <div class="page-header-content" data-astro-cid-zh3erf7n> <span class="page-badge" data-astro-cid-zh3erf7n>Réservation</span> <h1 class="page-title" data-astro-cid-zh3erf7n>Réservez votre séjour</h1> <p class="page-subtitle" data-astro-cid-zh3erf7n>Contactez-nous pour vérifier les disponibilités et planifier vos vacances aux 2 Alpes</p> </div> </div> </section> <section class="section" data-astro-cid-zh3erf7n> <div class="container" data-astro-cid-zh3erf7n> <div class="contact-wrapper" data-astro-cid-zh3erf7n> <form id="reservationForm" class="contact-form" data-astro-cid-zh3erf7n> <h3 data-astro-cid-zh3erf7n>Formulaire de réservation</h3> <div class="form-group" data-astro-cid-zh3erf7n> <label for="nom" class="form-label" data-astro-cid-zh3erf7n>Nom et Prénom *</label> <input type="text" id="nom" name="nom" class="form-input" required placeholder="Votre nom et prénom" data-astro-cid-zh3erf7n> </div> <div class="form-group" data-astro-cid-zh3erf7n> <label for="email" class="form-label" data-astro-cid-zh3erf7n>Email *</label> <input type="email" id="email" name="email" class="form-input" required placeholder="votre@email.com" data-astro-cid-zh3erf7n> </div> <div class="form-group" data-astro-cid-zh3erf7n> <label for="telephone" class="form-label" data-astro-cid-zh3erf7n>Téléphone *</label> <input type="tel" id="telephone" name="telephone" class="form-input" required placeholder="+33 X XX XX XX XX" data-astro-cid-zh3erf7n> </div> <div class="form-group" data-astro-cid-zh3erf7n> <label for="message" class="form-label" data-astro-cid-zh3erf7n>Message</label> <textarea id="message" name="message" class="form-textarea" rows="6" placeholder="Décrivez votre projet de séjour, vos questions ou vos besoins spécifiques..." data-astro-cid-zh3erf7n></textarea> </div> <button type="submit" class="btn btn-primary btn-large" data-astro-cid-zh3erf7n>
Envoyer la demande
</button> </form> </div> </div> </section> ` })}  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/reserver.astro", void 0);

const $$file = "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/reserver.astro";
const $$url = "/reserver";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reserver,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
