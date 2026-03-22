import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_fnnClJRy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Connexion - Administration Chalet Husky", "description": "Page de connexion pour l'administration du Chalet Husky", "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="login-section" data-astro-cid-sgpqyurt> <div class="container" data-astro-cid-sgpqyurt> <div class="login-container" data-astro-cid-sgpqyurt> <div class="login-box" data-astro-cid-sgpqyurt> <div class="login-header" data-astro-cid-sgpqyurt> <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-sgpqyurt> <rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-sgpqyurt></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-sgpqyurt></path> </svg> <h1 data-astro-cid-sgpqyurt>Administration</h1> <p data-astro-cid-sgpqyurt>Chalet Husky</p> </div> <form id="loginForm" class="login-form" data-astro-cid-sgpqyurt> <div class="form-group" data-astro-cid-sgpqyurt> <label for="username" data-astro-cid-sgpqyurt>Identifiant</label> <input type="text" id="username" name="username" required autocomplete="username" data-astro-cid-sgpqyurt> </div> <div class="form-group" data-astro-cid-sgpqyurt> <label for="password" data-astro-cid-sgpqyurt>Mot de passe</label> <input type="password" id="password" name="password" required autocomplete="current-password" data-astro-cid-sgpqyurt> </div> <div id="errorMessage" class="error-message" style="display: none;" data-astro-cid-sgpqyurt></div> <button type="submit" class="btn btn-primary btn-full" data-astro-cid-sgpqyurt>Se connecter</button> </form> </div> </div> </div> </section> ` })}  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/login.astro", void 0);

const $$file = "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
