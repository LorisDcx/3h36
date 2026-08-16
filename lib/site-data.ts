export type NavigationItem = {
  label: string;
  href: string;
};

export type Offer = {
  id: "site-vitrine" | "site-acquisition" | "solutions-metiers";
  title: string;
  description: string;
  price: string;
  badge?: string;
  features: readonly string[];
  timeline: string;
  cta: NavigationItem;
};

export type ApproachPillar = {
  title: string;
  description: string;
  points: readonly string[];
};

export type ProjectSlug =
  | "plum"
  | "urgeza"
  | "aviszen"
  | "delco-ink"
  | "flowsaver"
  | "wildeye"
  | "cramdesk"
  | "loris-lazulis";

export type Project = {
  slug: ProjectSlug;
  name: string;
  sector: string;
  type: string;
  context: string;
  objective: string;
  solution: string;
  levers: readonly string[];
  status: "En ligne";
  href: string;
  image: string;
  imageAlt: string;
  tone: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type MonthlyPlan = {
  id: "technique" | "visibilite" | "acquisition";
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  note?: string;
  published: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FooterLinkGroup = {
  title: string;
  links: readonly NavigationItem[];
};

export type ContactDetails = {
  email: string;
  phone: string;
  location: string;
  note: string;
};

export const navigation = [
  { label: "Solutions", href: "/services" },
  { label: "Secteurs", href: "/secteurs" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Ressources", href: "/ressources" },
  { label: "Collectif", href: "/a-propos" },
] as const satisfies readonly NavigationItem[];

export const clientMarks = [
  { name: "Plum", slug: "plum", image: "/images/clients/plum-logo-sm.webp" },
  { name: "URGEZA", slug: "urgeza", wordmark: "URGEZA" },
  { name: "AvisZen", slug: "aviszen", image: "/images/clients/aviszen-logo-sm.webp" },
  { name: "Delco Ink", slug: "delco-ink", image: "/images/clients/delco-ink-logo.webp" },
  { name: "FlowSaver", slug: "flowsaver", wordmark: "FlowSaver" },
  { name: "WildEye", slug: "wildeye", wordmark: "WildEye" },
  { name: "Cramdesk", slug: "cramdesk", image: "/images/clients/cramdesk-logo-sm.webp", wordmark: "Cramdesk" },
  { name: "Loris Lazulis", slug: "loris-lazulis", wordmark: "Loris Lazulis" },
] as const;

export const expertises = [
  {
    id: "strategie",
    number: "01",
    title: "Stratégie & pilotage",
    lead: "Donner une direction commune avant de produire.",
    description:
      "Nous clarifions l’offre, les publics et les priorités. Toute l’équipe avance ensuite avec le même cap et des décisions faciles à suivre.",
    deliverables: ["Cadrage et priorisation", "Architecture de l’offre", "Planning et coordination"],
    image: "/images/expertises/strategy-v2.webp",
    imageAlt: "Atelier de stratégie composé de cartes, repères et fils convergeant vers une direction commune",
    visualLabel: "Cadrer avant de produire",
  },
  {
    id: "digital",
    number: "02",
    title: "Sites & outils digitaux",
    lead: "Transformer un besoin métier en expérience claire.",
    description:
      "Du site vitrine à l’outil métier, nous concevons la structure, les parcours, l’interface et le développement comme un ensemble lisible.",
    deliverables: ["UX et arborescence", "Design d’interface", "Développement responsive"],
    image: "/images/expertises/digital-v2.webp",
    imageAlt: "Ordinateur et tablette présentant un système d’interface abstrait et cohérent",
    visualLabel: "Des outils pensés pour leurs usages",
  },
  {
    id: "identite",
    number: "03",
    title: "Identité & création graphique",
    lead: "Rendre la marque reconnaissable et cohérente.",
    description:
      "Nous créons un langage visuel capable de rester cohérent sur le site, les réseaux et les supports commerciaux.",
    deliverables: ["Direction artistique", "Identité visuelle", "Déclinaisons print et digitales"],
    image: "/images/expertises/identity-v2.webp",
    imageAlt: "Atelier d’identité visuelle avec papiers, formes géométriques et nuancier sans texte",
    visualLabel: "Un système visuel cohérent",
  },
  {
    id: "photo-video",
    number: "04",
    title: "Photo & vidéo",
    lead: "Montrer le vrai visage de l’activité.",
    description:
      "Portraits, gestes métier, lieux et produits donnent une matière crédible à chaque support. Les usages sont prévus dès la prise de vue.",
    deliverables: ["Intentions et repérage", "Prises de vue", "Montage et déclinaisons"],
    image: "/images/expertises/photo-video-v2.webp",
    imageAlt: "Matériel de production photo et vidéo disposé dans un studio éditorial lumineux",
    visualLabel: "Des images prévues pour leurs supports",
  },
  {
    id: "acquisition",
    number: "05",
    title: "SEO, SEA & acquisition",
    lead: "Créer de la visibilité que l’on peut piloter.",
    description:
      "Nous relions contenus, recherche locale, campagnes et conversions pour comprendre ce qui fonctionne et améliorer le dispositif.",
    deliverables: ["SEO et recherche locale", "Landing pages", "Suivi et pilotage des campagnes"],
    image: "/images/expertises/acquisition-v2.webp",
    imageAlt: "Système de mesure abstrait représentant une progression maîtrisée de l’acquisition",
    visualLabel: "Mesurer ce qui compte",
  },
  {
    id: "contenus",
    number: "06",
    title: "Contenus & réseaux sociaux",
    lead: "Installer une parole régulière sans la diluer.",
    description:
      "Nous construisons une ligne, des formats récurrents et un calendrier réaliste pour publier avec constance sans perdre la cohérence de marque.",
    deliverables: ["Ligne éditoriale", "Calendrier de publication", "Gabarits et production"],
    image: "/images/expertises/content-v2.webp",
    imageAlt: "Organisation éditoriale composée d’un téléphone abstrait, de cartes et d’un calendrier sans texte",
    visualLabel: "Un rythme éditorial tenable",
  },
] as const;

export const offers: readonly Offer[] = [
  {
    id: "site-vitrine",
    title: "Site vitrine",
    description:
      "Une présence claire et crédible pour présenter l’activité, les services et faciliter la prise de contact.",
    price: "À partir de 1 200 € HT",
    features: [
      "Cadrage et arborescence",
      "Jusqu’à 5 pages",
      "Design responsive sur mesure",
      "Socle SEO et mesure d’audience",
      "Mise en ligne et prise en main",
    ],
    timeline: "2 à 4 semaines après réception des contenus",
    cta: { label: "Découvrir l’offre", href: "/site-vitrine" },
  },
  {
    id: "site-acquisition",
    title: "Site acquisition",
    description:
      "Un dispositif plus complet pour être trouvé, guider vers l’action et mesurer les demandes obtenues.",
    price: "À partir de 2 500 € HT",
    badge: "Le plus complet",
    features: [
      "Cadrage marketing",
      "8 à 10 pages orientées conversion",
      "SEO local et landing pages",
      "Formulaires qualifiants et tracking",
      "Suivi pendant 30 jours",
    ],
    timeline: "4 à 8 semaines",
    cta: { label: "Voir le périmètre", href: "/site-acquisition" },
  },
  {
    id: "solutions-metiers",
    title: "Outil métier",
    description:
      "Un portail, configurateur, tableau de bord ou workflow conçu autour de votre manière de travailler.",
    price: "Sur devis",
    features: [
      "Analyse du processus actuel",
      "Définition d’un MVP",
      "Prototype et tests d’usage",
      "Développement sur mesure",
      "Déploiement et évolutions",
    ],
    timeline: "Planning défini après cadrage",
    cta: { label: "Étudier le besoin", href: "/solutions-metiers" },
  },
];

export const approachPillars = [
  {
    title: "Comprendre",
    description: "Partir de l’activité, des publics et des contraintes réelles.",
    points: ["Écoute", "Audit", "Objectifs", "Priorités"],
  },
  {
    title: "Aligner",
    description: "Partager une direction, un périmètre et des critères de réussite.",
    points: ["Stratégie", "Périmètre", "Planning", "Validation"],
  },
  {
    title: "Produire",
    description: "Faire travailler les expertises ensemble, avec des points de décision clairs.",
    points: ["Design", "Contenus", "Développement", "Recette"],
  },
  {
    title: "Lancer & améliorer",
    description: "Mettre en ligne, transmettre et faire évoluer à partir des retours utiles.",
    points: ["Lancement", "Formation", "Mesure", "Évolution"],
  },
] as const satisfies readonly ApproachPillar[];

export const projects = [
  {
    slug: "plum",
    name: "Plum",
    sector: "Création de contenu",
    type: "Outil éditorial",
    context: "Les créateurs et petites équipes dispersent souvent idées, brouillons, médias, calendrier et statistiques entre plusieurs outils.",
    objective: "Réunir tout le cycle éditorial dans une expérience légère, de l’idée au contenu publié.",
    solution: "Un espace éditorial doux et direct qui associe boîte à idées, calendrier, création assistée, médias, publication et analyse.",
    levers: ["Produit", "Identité", "UX/UI", "Développement"],
    status: "En ligne",
    href: "https://plum-dun-six.vercel.app/",
    image: "/images/projects/plum-home-web.webp",
    imageAlt: "Aperçu du site Plum",
    tone: "plum",
  },
  {
    slug: "urgeza",
    name: "URGEZA",
    sector: "Outdoor",
    type: "E-commerce",
    context: "Une jeune marque devait réunir pêche, terrain et quotidien dans un univers cohérent, technique mais facile à porter.",
    objective: "Installer une présence crédible dès la première capsule et guider sans friction vers les collections.",
    solution: "Une boutique Shopify mobile-first articulée autour de l’univers Fishing × Terrain, des usages et des détails produit.",
    levers: ["E-commerce", "Direction visuelle", "Mobile", "Contenus"],
    status: "En ligne",
    href: "https://urgeza.com/",
    image: "/images/projects/urgeza-hero.webp",
    imageAlt: "Univers de la marque outdoor URGEZA",
    tone: "stone",
  },
  {
    slug: "aviszen",
    name: "AvisZen",
    sector: "E-réputation locale",
    type: "Plateforme SaaS",
    context: "Les entreprises locales doivent répondre rapidement aux avis sans perdre leur ton ni aggraver une situation sensible.",
    objective: "Réunir génération contextualisée, validation humaine, collecte d’avis et contenu local dans une expérience simple.",
    solution: "Un écosystème d’e-réputation avec générateur de réponses, Inbox avec garde-fous, QR codes et hubs SEO locaux.",
    levers: ["Produit", "UX/UI", "Développement", "SEO"],
    status: "En ligne",
    href: "https://www.monaviszen.fr/",
    image: "/images/projects/aviszen-home-web.webp",
    imageAlt: "Aperçu du site AvisZen",
    tone: "sky",
  },
  {
    slug: "delco-ink",
    name: "Delco Ink",
    sector: "Tatouage · Chambéry",
    type: "Site éditorial",
    context: "Un studio privé à Cognin devait présenter une pratique très visuelle et rassurer avant le premier rendez-vous.",
    objective: "Faire ressentir l’univers blackwork, manga et pop culture tout en clarifiant le processus et le contact.",
    solution: "Un site immersif réunissant galerie filtrable, flashs, spécialités, processus, informations pratiques et formulaire de projet.",
    levers: ["Direction visuelle", "Site", "Galerie", "SEO local"],
    status: "En ligne",
    href: "https://www.delco-ink.fr/",
    image: "/images/projects/delco-ink-home-web.webp",
    imageAlt: "Aperçu du site Delco Ink",
    tone: "sage",
  },
  {
    slug: "flowsaver",
    name: "FlowSaver",
    sector: "SaaS · Stripe",
    type: "Produit SaaS",
    context: "Les équipes SaaS doivent protéger le passage de l’essai au paiement sans reconstruire leurs propres scénarios Stripe.",
    objective: "Rendre lisibles la connexion, le suivi des essais et les actions de récupération dans un même espace.",
    solution: "Un parcours Stripe-native qui relie landing produit, dashboard, suivi des paiements et scénarios de relance.",
    levers: ["Stratégie produit", "UX/UI", "Stripe", "Full-stack"],
    status: "En ligne",
    href: "https://flowsaver.vercel.app/",
    image: "/images/projects/flowsaver-home-web.webp",
    imageAlt: "Aperçu du site FlowSaver",
    tone: "forest",
  },
  {
    slug: "wildeye",
    name: "WildEye",
    sector: "Nature & sciences citoyennes",
    type: "Application cartographique",
    context: "Des observations naturalistes dispersées devaient devenir explorables sans exposer les localisations sensibles.",
    objective: "Réunir plusieurs sources de données et les contributions citoyennes dans une carte accessible et maîtrisée.",
    solution: "Une interface cartographique avec recherche, filtres, clusters, dépôt d’observation, confidentialité et modération.",
    levers: ["Produit", "Cartographie", "Interface", "Données"],
    status: "En ligne",
    href: "https://wild-eye-theta.vercel.app/",
    image: "/images/projects/wildeye-home-web.webp",
    imageAlt: "Aperçu de l’application WildEye",
    tone: "moss",
  },
  {
    slug: "cramdesk",
    name: "Cramdesk",
    sector: "Éducation",
    type: "Produit SaaS",
    context: "Les étudiants ont besoin de transformer rapidement leurs PDF de cours en supports réellement utilisables pour réviser.",
    objective: "Rendre le passage du document aux formats d’apprentissage immédiat, clair et sans détour.",
    solution: "Une expérience centrée sur le dépôt de PDF qui produit flashcards, quiz, résumés, présentations et chat documentaire.",
    levers: ["Positionnement", "Parcours", "UX/UI", "Landing SaaS"],
    status: "En ligne",
    href: "https://www.cramdesk.com/",
    image: "/images/projects/cramdesk-home-web.webp",
    imageAlt: "Aperçu de Cramdesk",
    tone: "orange",
  },
  {
    slug: "loris-lazulis",
    name: "Loris Lazulis",
    sector: "Pierres naturelles certifiées",
    type: "Présence éditoriale",
    context: "Un service indépendant devait rassurer avant un achat engageant dans un marché où certificats et intérêts sont difficiles à lire.",
    objective: "Expliquer le rôle du service, ses limites, sa méthode et les informations nécessaires avant toute prise de contact.",
    solution: "Une présence éditoriale quiet luxury qui clarifie sourcing, analyse documentaire, honoraires et parcours de demande.",
    levers: ["Positionnement", "Éditorial", "UX/UI", "Développement"],
    status: "En ligne",
    href: "https://loris-lazulis.com/",
    image: "/images/projects/loris-lazulis-og.svg",
    imageAlt: "Aperçu de l’univers Loris Lazulis",
    tone: "sand",
  },
] as const satisfies readonly Project[];

export const processSteps = [
  { number: "01", title: "Comprendre", description: "Un premier échange et un cadrage pour cerner l’activité, les publics, le besoin et les contraintes." },
  { number: "02", title: "Aligner", description: "Une direction, un périmètre, un planning et des points de validation partagés avant la production." },
  { number: "03", title: "Produire", description: "Les expertises nécessaires avancent ensemble, avec des décisions visibles et des livrables testables." },
  { number: "04", title: "Lancer & améliorer", description: "Recette, mise en ligne, transmission puis évolutions guidées par les usages et les données disponibles." },
] as const satisfies readonly ProcessStep[];

export const monthlyPlans = [
  {
    id: "technique",
    name: "Suivi technique",
    price: "99 € HT / mois",
    description: "Pour garder un site surveillé, sauvegardé et maintenu dans le temps.",
    features: ["Hébergement et sauvegardes", "Surveillance", "Maintenance de sécurité", "Petites corrections cadrées"],
    note: "Périmètre et engagement précisés dans la proposition.",
    published: true,
  },
  {
    id: "visibilite",
    name: "Visibilité",
    price: "390 € HT / mois",
    description: "Pour faire progresser régulièrement les contenus et la présence dans les recherches.",
    features: ["Socle technique", "Suivi SEO", "Optimisation locale", "Contenu ou page prioritaire", "Point de pilotage"],
    note: "Aucune position sur Google ne peut être garantie.",
    published: true,
  },
  {
    id: "acquisition",
    name: "Acquisition",
    price: "690 € HT / mois",
    description: "Pour piloter campagnes, conversions et améliorations des pages d’atterrissage.",
    features: ["Tracking des conversions", "Pilotage SEA", "Optimisation des campagnes", "Recommandations de pages", "Reporting utile"],
    note: "Le budget média est distinct et payé directement à la régie.",
    published: true,
  },
] as const satisfies readonly MonthlyPlan[];

export const collectiveRoles = [
  {
    number: "01",
    name: "Loris",
    role: "Stratégie, web & acquisition",
    description: "Cadrage, expérience, développement, SEO/SEA et pilotage des actions mesurables.",
  },
  {
    number: "02",
    name: "Lilian",
    role: "Communication, image & direction graphique",
    description: "Direction artistique, identité visuelle, systèmes graphiques et déclinaisons de marque.",
  },
] as const;

export const faqItems = [
  {
    question: "Combien coûte un projet avec 3h36 agency ?",
    answer: "Le site vitrine démarre à 1 200 € HT, le site d’acquisition à 2 500 € HT et les outils métiers sont chiffrés après cadrage. Toute proposition détaille le périmètre, les options et les coûts tiers éventuels.",
  },
  {
    question: "Avec qui vais-je travailler ?",
    answer: "3h36 agency réunit Loris, pour la stratégie web et l’acquisition, et Lilian, pour la communication, l’image et la direction graphique. Vous gardez un interlocuteur principal et les expertises sont activées selon le besoin réel du projet.",
  },
  {
    question: "Combien de temps faut-il prévoir ?",
    answer: "Comptez généralement 2 à 4 semaines pour un site vitrine après réception des contenus, et 4 à 8 semaines pour un site d’acquisition. Un outil métier fait l’objet d’un planning spécifique.",
  },
  {
    question: "Pouvez-vous reprendre un site ou une identité existante ?",
    answer: "Oui. Un état des lieux permet de décider ce qui peut être conservé, amélioré ou doit être refondu. La recommandation tient compte du budget et de la valeur réelle d’une reprise.",
  },
  {
    question: "Qui fournit les textes et les images ?",
    answer: "Le rôle de chacun est défini au devis. Nous pouvons structurer ou rédiger les contenus et organiser une production photo/vidéo. Si vous les fournissez, nous donnons un cadre précis sur les formats et les échéances.",
  },
  {
    question: "Le référencement est-il inclus ?",
    answer: "Chaque site comprend un socle technique. Le travail éditorial, local ou continu dépend ensuite de l’offre et des objectifs. Aucune position précise dans Google n’est promise.",
  },
  {
    question: "Pouvez-vous garantir un nombre de demandes ?",
    answer: "Non. Nous mettons en place une stratégie, des parcours et une mesure sérieuse, mais un volume de demandes dépend aussi du marché, de l’offre, du budget et du temps. Les hypothèses et limites sont rendues explicites.",
  },
  {
    question: "Est-ce que je reste propriétaire du site ?",
    answer: "Oui, dans le cadre prévu au contrat. Les accès, comptes et livrables concernés vous sont transmis. Les éventuelles licences ou services tiers sont identifiés séparément.",
  },
  {
    question: "Un abonnement est-il obligatoire ?",
    answer: "Non. Les accompagnements mensuels sont proposés lorsque maintenance, visibilité ou acquisition justifient un suivi. Ils ne sont pas une condition cachée à la livraison du projet.",
  },
  {
    question: "Travaillez-vous uniquement en Savoie ?",
    answer: "Le collectif est basé en Savoie et peut travailler localement ou à distance. Les modalités de réunion et de production sont adaptées au projet.",
  },
  {
    question: "Le paiement peut-il être échelonné ?",
    answer: "Oui. Les projets sont généralement réglés par étapes liées au lancement, aux validations et à la mise en ligne. Le calendrier exact figure dans la proposition.",
  },
] as const satisfies readonly FaqItem[];

export const footerLinks = [
  {
    title: "Explorer",
    links: [
      { label: "Tous les services", href: "/services" },
      { label: "Secteurs accompagnés", href: "/secteurs" },
      { label: "Réalisations", href: "/realisations" },
      { label: "Ressources", href: "/ressources" },
    ],
  },
  {
    title: "Solutions prioritaires",
    links: [
      { label: "Agence web Chambéry", href: "/agence-web-chambery" },
      { label: "Sites pour le bâtiment", href: "/site-internet-batiment-savoie" },
      { label: "Refonte de site PME", href: "/refonte-site-internet-pme-savoie" },
      { label: "SEO en Savoie", href: "/referencement-seo" },
      { label: "Visibilité GEO", href: "/geo" },
      { label: "Google Ads", href: "/gestion-google-ads" },
      { label: "Agence web Aix-les-Bains", href: "/agence-web-aix-les-bains" },
      { label: "Agence web Albertville", href: "/agence-web-albertville" },
    ],
  },
  {
    title: "3h36 Agency",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Notre méthode", href: "/methode" },
      { label: "Accompagnement", href: "/accompagnement" },
      { label: "Contact", href: "/contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/politique-confidentialite" },
    ],
  },
] as const satisfies readonly FooterLinkGroup[];

export const contact = {
  email: "contact@3h36agency.fr",
  phone: "06 11 15 75 01",
  location: "Savoie",
  note: "Projets locaux et à distance.",
} as const satisfies ContactDetails;
