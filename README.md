# Chalet Husky - Site Vitrine

Site vitrine premium pour la location du Chalet Husky aux 2 Alpes, développé avec Astro.

## 🚀 Technologies

- **Astro** (v4.0+) - Framework statique moderne
- **HTML/CSS natif** - Pas de framework JS
- **TypeScript** - Typage optionnel
- **CSS Variables** - Système de design cohérent

## 📁 Structure du projet

```
Projet 4 Husky/
├── public/
│   └── assets/
│       ├── logo/          # Logo du chalet
│       ├── station/       # Images de la station Les 2 Alpes
│       ├── chalet/        # Images du chalet
│       └── icons/         # Icônes optionnelles
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Gallery.astro
│   │   └── CTA.astro
│   ├── layouts/           # Layouts de base
│   │   └── BaseLayout.astro
│   ├── pages/             # Pages du site
│   │   ├── index.astro    # Accueil
│   │   ├── station.astro  # Les 2 Alpes
│   │   ├── chalet.astro   # Le Chalet
│   │   └── contact.astro  # Contact
│   └── styles/
│       └── global.css     # Styles globaux
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🖼️ Images attendues

### Logo
- `/public/assets/logo/logo.svg` (ou `logo.png`)

### Station Les 2 Alpes
- `/public/assets/station/station-01.jpg` (hero)
- `/public/assets/station/station-02.jpg` à `station-06.jpg`

### Chalet
- `/public/assets/chalet/chalet-01.jpg` (hero)
- `/public/assets/chalet/chalet-02.jpg` à `chalet-09.jpg`

**⚠️ Important :** Les images sont actuellement en placeholder. Remplacez-les par vos propres images pour le déploiement.

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:4321
```

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit le site pour la production
- `npm run preview` - Prévisualise la build de production localement
- `npm run astro` - Accès à la CLI Astro

## 🎨 Palette de couleurs

- **Neige** : `#FAFAFA`
- **Crème** : `#F5F1EB`
- **Bois** : `#D4C4B0`
- **Sapin** : `#2D5016` (principal)
- **Bleu nuit** : `#1A2E3D` (secondaire)
- **Accent** : `#C9A87A` (chaleureux)

## ✨ Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ SEO optimisé (meta tags, OpenGraph, structure sémantique)
- ✅ Navigation sticky avec menu mobile
- ✅ Formulaire de contact avec fallback mailto
- ✅ Galeries d'images optimisées (lazy loading)
- ✅ Accessibilité (contrastes, focus states, alt text)
- ✅ Performance optimale (CSS natif, pas de JS framework)

## 📝 Pages

1. **Accueil** (`/`) - Présentation générale, avantages, aperçu
2. **Les 2 Alpes** (`/station`) - Présentation de la station, activités
3. **Le Chalet** (`/chalet`) - Description détaillée, équipements, galerie
4. **Contact** (`/contact`) - Formulaire de contact et coordonnées

## 🔧 Personnalisation

### Modifier les contenus
- Éditez directement les fichiers `.astro` dans `/src/pages/`
- Les composants réutilisables se trouvent dans `/src/components/`

### Modifier les styles
- Le fichier principal est `/src/styles/global.css`
- Les variables CSS sont définies dans `:root`
- Chaque composant peut avoir ses propres styles dans la balise `<style>`

### SEO
- Les meta tags sont définis dans chaque page via `BaseLayout`
- Personnalisez `title` et `description` pour chaque page

## 📧 Formulaire de contact

Le formulaire de contact utilise un système de mailto (client de messagerie local). Pour une solution plus robuste en production, vous pouvez :

1. Intégrer un service de formulaire (Formspree, Netlify Forms, etc.)
2. Configurer un endpoint backend pour traiter les soumissions
3. Utiliser un service email (SendGrid, Mailgun, etc.)

## 🚀 Déploiement

Le site peut être déployé sur :
- **Netlify** : `npm run build` puis upload du dossier `dist/`
- **Vercel** : Connexion directe au repo Git
- **GitHub Pages** : Via GitHub Actions
- **Serveur statique** : Upload du dossier `dist/` après `npm run build`

## 📄 Licence

Propriétaire - Chalet Husky
