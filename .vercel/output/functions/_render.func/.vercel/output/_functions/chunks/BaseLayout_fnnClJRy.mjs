import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_lY7DtpCo.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const currentPath = Astro2.url.pathname;
  const isEn = currentPath.startsWith("/en");
  const isAdmin = currentPath.includes("/admin") || currentPath === "/login";
  const locale = isEn ? "en" : "fr";
  const translations = {
    fr: {
      station: "Station 2 Alpes",
      chalet: "Le Chalet",
      reserver: "R\xE9server",
      admin: "Espace administration",
      lang: "EN",
      langTarget: "en",
      homeLink: "/",
      stationLink: "/station",
      chaletLink: "/chalet",
      reserverLink: "/reserver"
    },
    en: {
      station: "2 Alpes Resort",
      chalet: "The Chalet",
      reserver: "Book Now",
      admin: "Admin Space",
      lang: "FR",
      langTarget: "fr",
      homeLink: "/en",
      stationLink: "/en/station",
      chaletLink: "/en/chalet",
      reserverLink: "/en/reserver"
    }
  };
  const t = translations[locale];
  let langSwitcherUrl = "#";
  if (!isAdmin) {
    langSwitcherUrl = isEn ? currentPath.replace("/en", "") : `/en${currentPath}`;
    if (langSwitcherUrl === "") langSwitcherUrl = "/";
    if (langSwitcherUrl.endsWith("//")) langSwitcherUrl = langSwitcherUrl.slice(0, -1);
  }
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <nav class="nav container" data-astro-cid-3ef6ksr2> <div class="nav-left" data-astro-cid-3ef6ksr2> <button class="nav-toggle" aria-label="Menu" aria-expanded="false" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </button> </div> <a${addAttribute(isAdmin ? "/admin" : t.homeLink, "href")} class="nav-logo-center" data-astro-cid-3ef6ksr2> <h1 class="nav-logo-title" data-astro-cid-3ef6ksr2>Chalet Husky</h1> <p class="nav-logo-subtitle" data-astro-cid-3ef6ksr2>Les Deux Alpes</p> </a> <div class="nav-right" data-astro-cid-3ef6ksr2> ${!isAdmin && renderTemplate`<a${addAttribute(langSwitcherUrl, "href")} class="lang-switcher" data-astro-cid-3ef6ksr2> <span class="lang-flag" data-astro-cid-3ef6ksr2>${isEn ? "\u{1F1EB}\u{1F1F7}" : "\u{1F1EC}\u{1F1E7}"}</span> <span class="lang-text" data-astro-cid-3ef6ksr2>${t.lang}</span> </a>`} </div> </nav> </header> <!-- Menu latéral --> <div class="sidebar-overlay" id="sidebarOverlay" data-astro-cid-3ef6ksr2></div> <aside class="sidebar" id="sidebar" data-astro-cid-3ef6ksr2> <div class="sidebar-header" data-astro-cid-3ef6ksr2> <img src="/assets/logo/logo husky.png" alt="Chalet Husky" class="sidebar-logo" data-astro-cid-3ef6ksr2> </div> <nav class="sidebar-nav" data-astro-cid-3ef6ksr2> <a${addAttribute(t.stationLink, "href")} class="sidebar-link" data-astro-cid-3ef6ksr2>${t.station}</a> <a${addAttribute(t.chaletLink, "href")} class="sidebar-link" data-astro-cid-3ef6ksr2>${t.chalet}</a> <a${addAttribute(t.reserverLink, "href")} class="sidebar-link" data-astro-cid-3ef6ksr2>${t.reserver}</a> </nav> <a href="/login" class="sidebar-admin"${addAttribute(t.admin, "title")} data-astro-cid-3ef6ksr2> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2> <rect x="3" y="11" width="18" height="11" rx="2" ry="2" data-astro-cid-3ef6ksr2></rect> <path d="M7 11V7a5 5 0 0 1 10 0v4" data-astro-cid-3ef6ksr2></path> </svg> </a> </aside>  `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentPath = Astro2.url.pathname;
  const isEn = currentPath.startsWith("/en");
  const locale = isEn ? "en" : "fr";
  const translations = {
    fr: {
      description: "Location premium au c\u0153ur des 2 Alpes. Un chalet d'exception pour vos vacances \xE0 la montagne.",
      nav: "Navigation",
      home: "Accueil",
      station: "Les 2 Alpes",
      chalet: "Le Chalet",
      rights: "Tous droits r\xE9serv\xE9s.",
      homeLink: "/",
      stationLink: "/station",
      chaletLink: "/chalet"
    },
    en: {
      description: "Premium rental in the heart of Les 2 Alpes. An exceptional chalet for your mountain holidays.",
      nav: "Navigation",
      home: "Home",
      station: "Les 2 Alpes",
      chalet: "The Chalet",
      rights: "All rights reserved.",
      homeLink: "/en",
      stationLink: "/en/station",
      chaletLink: "/en/chalet"
    }
  };
  const t = translations[locale];
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-grid" data-astro-cid-sz7xmlte> <div class="footer-col" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>Chalet Husky</h3> <p data-astro-cid-sz7xmlte>${t.description}</p> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>${t.nav}</h4> <ul class="footer-links" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a${addAttribute(t.homeLink, "href")} data-astro-cid-sz7xmlte>${t.home}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(t.stationLink, "href")} data-astro-cid-sz7xmlte>${t.station}</a></li> <li data-astro-cid-sz7xmlte><a${addAttribute(t.chaletLink, "href")} data-astro-cid-sz7xmlte>${t.chalet}</a></li> </ul> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2024 Chalet Husky. ${t.rights}</p> </div> </div> </footer> `;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$LoadingScreen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div class="loading-screen" id="loadingScreen" data-astro-cid-g2nbzz2z> <script>
    // Script d'ex\xE9cution imm\xE9diate pour \xE9viter le flash bleu si d\xE9j\xE0 vu
    if (sessionStorage.getItem('hasShownLoading')) {
      document.getElementById('loadingScreen').style.display = 'none';
    }
  <\/script> <svg style="position: absolute; width: 0; height: 0;" data-astro-cid-g2nbzz2z> <defs data-astro-cid-g2nbzz2z> <filter id="white-filter" x="0" y="0" width="100%" height="100%" data-astro-cid-g2nbzz2z> <!-- Pr\xE9server la transparence et transformer seulement les pixels opaques en blanc --> <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0" data-astro-cid-g2nbzz2z></feColorMatrix> </filter> </defs> </svg> <div class="door-left" data-astro-cid-g2nbzz2z></div> <div class="door-right" data-astro-cid-g2nbzz2z></div> <div class="loading-content" data-astro-cid-g2nbzz2z> <div class="loading-logo-wrapper" data-astro-cid-g2nbzz2z> <img src="/assets/logo/logo husky transparent.png" alt="Chalet Husky" class="loading-logo" data-astro-cid-g2nbzz2z> </div> <h1 class="loading-title" data-astro-cid-g2nbzz2z>Chalet Husky</h1> <p class="loading-subtitle" data-astro-cid-g2nbzz2z>Les Deux Alpes</p> </div> </div>  `])), maybeRenderHead());
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/components/LoadingScreen.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, image = "/assets/logo/logo.svg" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const isEn = currentPath.startsWith("/en");
  const locale = isEn ? "en" : "fr";
  const localeFull = isEn ? "en_US" : "fr_FR";
  const siteURL = Astro2.site || "https://chalethusky.fr";
  let canonicalURL;
  try {
    canonicalURL = Astro2.url ? new URL(Astro2.url.pathname, siteURL) : new URL("/", siteURL);
  } catch {
    canonicalURL = new URL(Astro2.url?.pathname || "/", siteURL);
  }
  return renderTemplate`<html${addAttribute(locale, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/png" href="/favicon.png"><link rel="icon" type="image/png" href="/assets/logo/logo.png"><link rel="shortcut icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/assets/logo/logo.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google Fonts - Playfair Display (style AIRELLES) et Montserrat (style COURCHEVEL) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500&family=Lobster&display=swap" rel="stylesheet"><!-- SEO Meta Tags --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image.startsWith("http") ? image : `${siteURL}${image}`, "content")}><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(localeFull, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:site_name" content="Chalet Husky"><!-- Alternate languages --><link rel="alternate" hreflang="fr"${addAttribute(siteURL + (currentPath.startsWith("/en") ? currentPath.replace("/en", "") : currentPath), "href")}><link rel="alternate" hreflang="en"${addAttribute(siteURL + (currentPath.startsWith("/en") ? currentPath : `/en${currentPath}`), "href")}><link rel="alternate" hreflang="x-default"${addAttribute(siteURL + (currentPath.startsWith("/en") ? currentPath.replace("/en", "") : currentPath), "href")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image.startsWith("http") ? image : `${siteURL}${image}`, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "LoadingScreen", $$LoadingScreen, {})} ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/oceaneneury/Desktop/Cursor/Projet 4 Husky/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
