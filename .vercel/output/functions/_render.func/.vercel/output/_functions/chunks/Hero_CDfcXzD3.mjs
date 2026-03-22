import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, u as unescapeHTML } from './astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    badge,
    title,
    subtitle,
    image = "/assets/chalet/chalet-01.jpg",
    video,
    ctaPrimary,
    ctaSecondary
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="hero-media" data-astro-cid-bbe6dxrz> ${video ? renderTemplate`<video class="hero-video" autoplay muted loop playsinline${addAttribute(title, "aria-label")} data-astro-cid-bbe6dxrz> <source${addAttribute(video, "src")} type="video/mp4" data-astro-cid-bbe6dxrz> ${image && renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-bbe6dxrz>`} </video>` : renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} width="1920" height="1080" loading="eager" fetchpriority="high" data-astro-cid-bbe6dxrz>`} <div class="hero-overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="hero-content container" data-astro-cid-bbe6dxrz> ${badge && renderTemplate`<div class="hero-badge" data-astro-cid-bbe6dxrz> ${badge} </div>`} <h1 class="hero-title" data-astro-cid-bbe6dxrz>${title}</h1> ${subtitle && renderTemplate`<p class="hero-subtitle" data-astro-cid-bbe6dxrz>${unescapeHTML(subtitle)}</p>`} ${ctaPrimary && renderTemplate`<div class="hero-cta" data-astro-cid-bbe6dxrz> <a${addAttribute(ctaPrimary.link, "href")} class="btn btn-hero btn-hero-primary" data-astro-cid-bbe6dxrz> ${ctaPrimary.text} </a> ${ctaSecondary && renderTemplate`<a${addAttribute(ctaSecondary.link, "href")} class="btn btn-hero btn-hero-secondary" data-astro-cid-bbe6dxrz> ${ctaSecondary.text} </a>`} </div>`} </div> </section> `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/components/Hero.astro", void 0);

export { $$Hero as $ };
