# AWESOME Visuel — Site vitrine

Site vitrine premium pour **AWESOME Visuel**, studio créatif spécialisé en vidéo, photo, aftermovie, clip, contenus réseaux sociaux et direction artistique.

## Stack technique

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- **Tailwind CSS** (système de design dark / orange chaud / rouge profond)
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- Polices Google : **Inter** + **Manrope**

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Scripts disponibles :

```bash
npm run dev     # serveur de dev
npm run build   # build de production
npm run start   # serve le build
npm run lint    # lint Next.js
```

## Structure du projet

```
.
├── app/
│   ├── layout.tsx        # Layout racine, polices, metadata
│   ├── page.tsx          # Assemblage des sections
│   └── globals.css       # Tailwind + styles globaux
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ShortServices.tsx
│   ├── Trust.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── DetailedServices.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── config/
│   └── site.ts           # ⭐ Toute la config éditable
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Personnalisation rapide

Tout le contenu éditorial est centralisé dans `config/site.ts` :

- **Textes** (hero, à propos, contact, footer)
- **Navigation** + liens
- **Services courts** (bande #01 → #04)
- **Services détaillés** (grille avec icônes)
- **Réalisations** (portfolio)
- **Clients / partenaires**
- **Réseaux sociaux**
- **Email & contact**

Pour changer les **couleurs**, voir `tailwind.config.ts` :

```ts
ink   → fond principal noir
flame → orange chaud (#ff5a1f)
ember → rouge profond (#b91c1c)
bone  → blanc cassé (#f5f0e8)
```

Pour ajouter une **image**, utilisez une URL Unsplash (déjà autorisée dans `next.config.js`) ou ajoutez votre domaine dans `images.remotePatterns`.

## Sections du site

1. **Header** — Logo, navigation, CTA "Me contacter"
2. **Hero** — Grand bloc immersif dégradé orange/rouge + stats
3. **Services courts** — 4 blocs #01 → #04
4. **Trust** — Bande défilante des typologies de clients
5. **À propos** — Présentation studio + CTA
6. **Réalisations** — Grille de cartes avec hover premium
7. **Services détaillés** — 6 prestations avec icônes
8. **Contact** — CTA + formulaire (nom, email, projet, message)
9. **Footer** — Navigation, réseaux sociaux, copyright

## Direction artistique

- Fond principal : `#080808`
- Accent orange : `#ff5a1f`
- Rouge profond : `#b91c1c`
- Blanc cassé : `#f5f0e8`
- Rayons d'arrondi : 24 → 40px (`rounded-3xl` → `rounded-5xl`)
- Typographie : Manrope (display, gros titres) + Inter (texte courant)
- Animations : `framer-motion` au scroll + transitions hover premium

## Responsive

Mobile-first, optimisé pour :

- 📱 Mobile : < 640px
- 📱 Tablette : 640px → 1024px
- 💻 Desktop : > 1024px
