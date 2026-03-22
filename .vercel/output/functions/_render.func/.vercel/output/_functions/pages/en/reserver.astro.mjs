import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_fnnClJRy.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

const $$Reserver = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Book Your Stay - Chalet Husky", "description": "Book your stay at Chalet Husky in Les 2 Alpes. Contact us to check availability and plan your dream mountain holiday.", "data-astro-cid-lsh7arka": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-header" data-astro-cid-lsh7arka> <div class="container" data-astro-cid-lsh7arka> <div class="page-header-content" data-astro-cid-lsh7arka> <span class="page-badge" data-astro-cid-lsh7arka>Reservation</span> <h1 class="page-title" data-astro-cid-lsh7arka>Book Your Stay</h1> <p class="page-subtitle" data-astro-cid-lsh7arka>Contact us to check availability and plan your holidays in Les 2 Alpes</p> </div> </div> </section> <section class="section" data-astro-cid-lsh7arka> <div class="container" data-astro-cid-lsh7arka> <div class="contact-wrapper" data-astro-cid-lsh7arka> <form id="reservationForm" class="contact-form" data-astro-cid-lsh7arka> <h3 data-astro-cid-lsh7arka>Reservation Form</h3> <div class="form-group" data-astro-cid-lsh7arka> <label for="nom" class="form-label" data-astro-cid-lsh7arka>Full Name *</label> <input type="text" id="nom" name="nom" class="form-input" required placeholder="Your full name" data-astro-cid-lsh7arka> </div> <div class="form-group" data-astro-cid-lsh7arka> <label for="email" class="form-label" data-astro-cid-lsh7arka>Email *</label> <input type="email" id="email" name="email" class="form-input" required placeholder="your@email.com" data-astro-cid-lsh7arka> </div> <div class="form-group" data-astro-cid-lsh7arka> <label for="telephone" class="form-label" data-astro-cid-lsh7arka>Phone *</label> <input type="tel" id="telephone" name="telephone" class="form-input" required placeholder="+XX X XX XX XX XX" data-astro-cid-lsh7arka> </div> <div class="form-group" data-astro-cid-lsh7arka> <label for="message" class="form-label" data-astro-cid-lsh7arka>Message</label> <textarea id="message" name="message" class="form-textarea" rows="6" placeholder="Describe your stay project, your questions, or specific needs..." data-astro-cid-lsh7arka></textarea> </div> <button type="submit" class="btn btn-primary btn-large" data-astro-cid-lsh7arka>
Send Inquiry
</button> </form> </div> </div> </section> ` })}  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/en/reserver.astro", void 0);

const $$file = "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/en/reserver.astro";
const $$url = "/en/reserver";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Reserver,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
