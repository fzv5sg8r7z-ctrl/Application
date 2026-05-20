/**
 * Configuration centrale du site AWESOME Visuel.
 * Tout y est éditable : textes, couleurs, services, images, liens sociaux.
 */

export const siteConfig = {
  name: "AWESOME Visuel",
  shortName: "AWESOME",
  tagline: "Studio créatif visuel",
  email: "contact@awesomevisuel.com",
  phone: "+33 6 00 00 00 00",
  location: "France · Disponible partout",

  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "À propos", href: "#a-propos" },
    { label: "Contact", href: "#contact" },
  ],

  socials: {
    instagram: "https://instagram.com/awesomevisuel",
    tiktok: "https://tiktok.com/@awesomevisuel",
    youtube: "https://youtube.com/@awesomevisuel",
    behance: "https://behance.net/awesomevisuel",
  },

  hero: {
    eyebrow: "Studio créatif · Vidéo · Photo · Direction artistique",
    title: ["Créateur d'images", "pour marques,", "artistes & événements"],
    description:
      "Photo, vidéo, aftermovie, clip et contenus premium pour donner plus d'impact à votre image.",
    primaryCta: { label: "Voir les réalisations", href: "#realisations" },
    secondaryCta: { label: "Demander un devis", href: "#contact" },
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Portrait artistique sous lumière orange chaude",
    stats: [
      { value: "120+", label: "Projets livrés" },
      { value: "45", label: "Clients fidèles" },
      { value: "8", label: "Années d'expérience" },
      { value: "100%", label: "Sur-mesure" },
    ],
  },

  shortServices: [
    {
      number: "01",
      title: "Vidéo événementielle",
      description: "Aftermovies cinématiques, captations live, formats premium.",
    },
    {
      number: "02",
      title: "Photo professionnelle",
      description: "Portraits, reportages, lookbooks et campagnes éditoriales.",
    },
    {
      number: "03",
      title: "Clips & contenus artistes",
      description: "Clips musicaux, visualizers et direction artistique sur mesure.",
    },
    {
      number: "04",
      title: "Réseaux & formats courts",
      description: "Reels, TikTok, contenus brand & teasers haute fréquence.",
    },
  ],

  clients: [
    "Clubs",
    "Restaurants",
    "Marques",
    "Artistes",
    "Événements",
    "Agences",
    "Studios",
    "Festivals",
  ],

  about: {
    eyebrow: "À propos",
    title: "Des visuels qui donnent du poids à votre image.",
    text: "AWESOME Visuel accompagne les marques, artistes et lieux de vie dans la création de contenus modernes, cinématiques et efficaces. De la direction artistique à la post-production, chaque image est pensée pour marquer, convertir et durer.",
    cta: { label: "Parlons de votre projet", href: "#contact" },
    bullets: [
      "Direction artistique 360°",
      "Production légère & équipes mobiles",
      "Post-production cinéma & color grading",
      "Stratégie de contenu réseaux",
    ],
  },

  portfolio: [
    {
      title: "Neon Nights",
      category: "Aftermovie",
      image:
        "https://images.unsplash.com/photo-1571266028243-d220bc7f6dee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Echo Sessions",
      category: "Clip musical",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Maya · Editorial",
      category: "Portrait artiste",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Maison Brûlée",
      category: "Restaurant / Food",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "After Hours",
      category: "Night event",
      image:
        "https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Forme & Matière",
      category: "Brand content",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    },
  ],

  detailedServices: [
    {
      title: "Photo",
      description: "Portraits, lookbooks, packshots et reportages événementiels.",
      points: ["Direction de pose", "Lumière naturelle & studio", "Retouche premium"],
    },
    {
      title: "Vidéo",
      description: "Captation cinéma, formats brand, clips et reportages.",
      points: ["Caméras 6K", "Stabilisation gimbal", "Sound design inclus"],
    },
    {
      title: "Montage",
      description: "Post-production sur-mesure, narration et color grading cinéma.",
      points: ["Editing rythmé", "Color grading DaVinci", "Versions multi-formats"],
    },
    {
      title: "Réseaux sociaux",
      description: "Stratégie de contenu et formats courts pensés pour performer.",
      points: ["Reels & TikTok", "Calendrier éditorial", "A/B testing créatif"],
    },
    {
      title: "Direction artistique",
      description: "Moodboards, identités visuelles, scénographie et stylisme.",
      points: ["Concept global", "Charte visuelle", "Casting & repérage"],
    },
    {
      title: "Drone & captation aérienne",
      description: "Vues aériennes spectaculaires pour vos lieux et événements.",
      points: ["Pilote certifié", "4K HDR", "Plans signature"],
    },
  ],

  contact: {
    eyebrow: "Contact",
    title: "On donne vie à votre prochain projet ?",
    description:
      "Parlons de votre vision : un événement, une campagne, un clip, une marque à faire briller. Réponse sous 24h.",
  },

  footer: {
    rights: `© ${new Date().getFullYear()} AWESOME Visuel — Tous droits réservés.`,
    note: "Studio créatif · Vidéo, photo & direction artistique.",
  },
};

export type SiteConfig = typeof siteConfig;
