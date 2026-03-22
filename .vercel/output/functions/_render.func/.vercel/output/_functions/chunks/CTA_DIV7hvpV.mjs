import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$CTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CTA;
  const { title, text, buttonText, buttonLink, variant = "default" } = Astro2.props;
  const sectionClass = variant === "alt" ? "section-alt" : "";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`cta-section ${sectionClass}`, "class")} data-astro-cid-4xty6sx2> <div class="container" data-astro-cid-4xty6sx2> <div class="cta-content" data-astro-cid-4xty6sx2> <h2 class="cta-title" data-astro-cid-4xty6sx2>${title}</h2> <p class="cta-text" data-astro-cid-4xty6sx2>${text}</p> <a${addAttribute(buttonLink, "href")} class="cta-btn" data-astro-cid-4xty6sx2> ${buttonText} </a> </div> </div> </section> `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/components/CTA.astro", void 0);

export { $$CTA as $ };
