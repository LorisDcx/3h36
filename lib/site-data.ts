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

export type ProjectStatus = "Produit indépendant" | "Démonstrateur";

export type Project = {
  name: string;
  sector: string;
  type: string;
  context: string;
  objective: string;
  solution: string;
  levers: readonly string[];
  status: ProjectStatus;
  href: string | null;
  image: string | null;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type MonthlyPlan = {
  id: "serenite" | "visibilite-locale" | "acquisition" | "croissance-locale";
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
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Méthode", href: "/methode" },
  { label: "À propos", href: "/a-propos" },
  { label: "Conseils", href: "/#conseils" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];

export const offers = [
  {
    id: "site-vitrine",
    title: "Site vitrine",
    description:
      "Pour présenter votre entreprise avec une image professionnelle et une base technique solide.",
    price: "À partir de 1 200 € HT",
    features: [
      "Jusqu’à 5 pages",
      "Design responsive",
      "Formulaire de contact",
      "Optimisation mobile et des performances",
      "SEO technique de base",
      "Mesure d’audience",
      "Mise en ligne et formation rapide",
    ],
    timeline: "2 à 4 semaines après réception des contenus",
    cta: { label: "Découvrir l’offre", href: "/site-vitrine" },
  },
  {
    id: "site-acquisition",
    title: "Site acquisition",
    description:
      "Pour transformer votre visibilité en demandes de devis, appels ou prises de rendez-vous.",
    price: "À partir de 2 500 € HT",
    badge: "Le plus demandé",
    features: [
      "Tout le socle du site vitrine",
      "Jusqu’à 8 à 10 pages",
      "Parcours et appels à l’action orientés conversion",
      "Formulaires qualifiants",
      "SEO local et Google Business Profile",
      "GA4, Tag Manager et suivi des conversions",
      "Prise de rendez-vous et tableau de bord simple",
      "Suivi pendant 30 jours après la mise en ligne",
    ],
    timeline: "4 à 8 semaines",
    cta: { label: "Développer mon acquisition", href: "/site-acquisition" },
  },
  {
    id: "solutions-metiers",
    title: "Solutions métiers & automatisations",
    description:
      "Pour créer un espace client, un configurateur, un tableau de bord ou automatiser un processus métier.",
    price: "Sur devis",
    features: [
      "Analyse du processus actuel",
      "Définition d’un MVP",
      "Prototype et tests utilisateurs",
      "Outils adaptés aux usages réels",
      "Connexions et synchronisations entre outils",
      "Déploiement, maintenance et évolutions",
    ],
    timeline: "Planning défini après le cadrage",
    cta: { label: "Étudier mon besoin", href: "/solutions-metiers" },
  },
] as const satisfies readonly Offer[];

export const problems = [
  "Un site daté ou peu rassurant",
  "Des visiteurs qui ne prennent pas contact",
  "Une faible visibilité sur Google",
  "Des tâches répétitives encore réalisées manuellement",
] as const;

export const approachPillars = [
  {
    title: "Comprendre",
    description: "Partir de la réalité de votre entreprise avant de proposer une solution.",
    points: ["Activité", "Clients", "Offre", "Objectifs", "Contraintes"],
  },
  {
    title: "Concevoir",
    description: "Construire une expérience claire, utile et cohérente de bout en bout.",
    points: ["Structure", "Parcours", "Contenus", "Design", "Développement"],
  },
  {
    title: "Mesurer",
    description: "Suivre les actions qui comptent réellement pour votre activité.",
    points: ["Analytics", "Formulaires", "Appels", "Conversions", "Performances"],
  },
  {
    title: "Améliorer",
    description: "Faire évoluer l’outil à partir des usages et des données disponibles.",
    points: ["Maintenance", "SEO", "Campagnes", "Automatisation", "Évolution continue"],
  },
] as const satisfies readonly ApproachPillar[];

export const projects = [
  {
    name: "AvisZen",
    sector: "E-réputation locale",
    type: "Plateforme SaaS",
    context:
      "Un produit dédié aux entreprises locales qui souhaitent mieux structurer la gestion de leur réputation en ligne.",
    objective:
      "Réunir dans une même expérience l’audit, la collecte d’avis et l’aide à la réponse.",
    solution:
      "Une plateforme qui associe audit Google Business Profile, réponses assistées, ressources SEO local et QR codes.",
    levers: ["Produit SaaS", "Automatisation", "SEO local", "QR codes"],
    status: "Produit indépendant",
    href: null,
    image: null,
  },
  {
    name: "Plum",
    sector: "Création de contenu",
    type: "Outil de planification éditoriale",
    context:
      "Un produit pensé pour organiser les idées et les publications sans disperser le travail éditorial.",
    objective:
      "Centraliser la planification, le calendrier et la préparation des contenus.",
    solution:
      "Un espace SaaS avec calendrier, gestion d’idées, organisation des contenus et assistant IA.",
    levers: ["Produit SaaS", "Calendrier éditorial", "Organisation", "Assistant IA"],
    status: "Produit indépendant",
    href: null,
    image: null,
  },
  {
    name: "URGEZA",
    sector: "Outdoor",
    type: "Boutique e-commerce",
    context:
      "Un concept de marque outdoor nécessitant une boutique claire et fluide sur mobile.",
    objective:
      "Structurer les collections, valoriser les produits et faciliter le passage à l’achat.",
    solution:
      "Une expérience e-commerce centrée sur les collections, les fiches produits, la conversion mobile et la collecte d’inscriptions.",
    levers: ["E-commerce", "Expérience mobile", "Conversion", "Collecte d’inscriptions"],
    status: "Démonstrateur",
    href: null,
    image: null,
  },
] as const satisfies readonly Project[];

export const sectors = [
  "Bâtiment et habitat",
  "Tourisme et activités outdoor",
  "Services professionnels",
  "Commerces et entreprises locales",
  "PME techniques et industrielles",
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Appel de découverte",
    description: "Un premier échange pour comprendre l’entreprise, le besoin et les priorités.",
  },
  {
    number: "02",
    title: "Analyse du besoin",
    description: "Les objectifs, contraintes, utilisateurs et contenus sont passés en revue.",
  },
  {
    number: "03",
    title: "Proposition et cadrage",
    description: "Le périmètre, les livrables, le planning et le budget sont formalisés.",
  },
  {
    number: "04",
    title: "Conception",
    description: "La structure, les parcours, les contenus et la direction visuelle prennent forme.",
  },
  {
    number: "05",
    title: "Développement",
    description: "La solution est intégrée avec une attention portée au mobile et aux performances.",
  },
  {
    number: "06",
    title: "Recette et mise en ligne",
    description: "Le site est testé, corrigé, validé puis déployé dans son environnement final.",
  },
  {
    number: "07",
    title: "Suivi et optimisation",
    description: "Les données et retours guident la maintenance et les améliorations utiles.",
  },
] as const satisfies readonly ProcessStep[];

export const monthlyPlans = [
  {
    id: "serenite",
    name: "Sérénité",
    price: "89 € HT / mois",
    description: "Le socle pour garder un site hébergé, surveillé et à jour.",
    features: [
      "Hébergement et sauvegardes",
      "Surveillance de disponibilité",
      "Mises à jour et maintenance de sécurité",
      "Correction des anomalies liées au site",
      "Rapport trimestriel",
      "30 minutes de petites modifications par mois",
    ],
    note: "12 mois conseillés, ou 109 € HT / mois sans engagement annuel.",
    published: true,
  },
  {
    id: "visibilite-locale",
    name: "Visibilité locale",
    price: "290 € HT / mois",
    description: "Un suivi régulier pour consolider votre présence dans les recherches locales.",
    features: [
      "Tout le forfait Sérénité",
      "Suivi SEO technique et Search Console",
      "Suivi des positions principales",
      "Optimisation de Google Business Profile",
      "Mise à jour mensuelle d’un contenu ou d’une page",
      "Rapport mensuel et échange trimestriel",
    ],
    note: "Aucune position sur Google ne peut être garantie.",
    published: true,
  },
  {
    id: "acquisition",
    name: "Acquisition",
    price: "590 € HT / mois minimum",
    description: "Le pilotage et la mesure de campagnes Google Ads orientées conversion.",
    features: [
      "Suivi du tracking et des conversions",
      "Pilotage et optimisation Google Ads",
      "Suivi des termes de recherche et ajustement des annonces",
      "Recommandations sur les landing pages",
      "Tableau de bord et reporting mensuel",
      "Rendez-vous mensuel",
    ],
    note:
      "Le budget média est payé directement à Google. Le tarif couvre jusqu’à 2 500 € de dépenses publicitaires mensuelles ; au-delà, 15 % des dépenses, avec un minimum de 590 € HT / mois.",
    published: true,
  },
  {
    id: "croissance-locale",
    name: "Croissance locale",
    price: "790 € HT / mois",
    description: "Un accompagnement qui réunit maintenance, SEO local, Ads et suivi mensuel.",
    features: [
      "Maintenance",
      "SEO local et Google Business Profile",
      "Google Ads",
      "Tracking et tableau de bord",
      "Une optimisation de page par mois",
      "Accompagnement mensuel",
    ],
    note: "Offre disponible sur proposition commerciale.",
    published: false,
  },
] as const satisfies readonly MonthlyPlan[];

export const faqItems = [
  {
    question: "Combien coûte un site internet ?",
    answer:
      "Un site vitrine démarre à 1 200 € HT et un site acquisition à 2 500 € HT. Les outils et automatisations sont chiffrés sur devis selon leur périmètre.",
  },
  {
    question: "Combien de temps faut-il pour créer un site ?",
    answer:
      "Comptez généralement 2 à 4 semaines pour un site vitrine après réception des contenus, et 4 à 8 semaines pour un site acquisition. Le planning d’un outil sur mesure est défini au cadrage.",
  },
  {
    question: "Puis-je modifier le contenu moi-même ?",
    answer:
      "Oui, le niveau d’autonomie est défini dès le cadrage. Une formation rapide à l’utilisation est prévue lors de la livraison.",
  },
  {
    question: "Le référencement est-il inclus ?",
    answer:
      "Le site vitrine inclut une base SEO technique. L’offre acquisition ajoute une optimisation SEO locale ; un suivi éditorial régulier peut ensuite faire l’objet d’un accompagnement mensuel.",
  },
  {
    question: "Travaillez-vous avec des entreprises hors de Savoie ?",
    answer:
      "Oui. L’agence est basée en Savoie et travaille aussi à distance avec des entreprises d’autres régions et de Suisse romande.",
  },
  {
    question: "Proposez-vous un paiement en plusieurs fois ?",
    answer:
      "Oui. Les projets web sont réglés par étapes, selon un calendrier précisé dans la proposition commerciale.",
  },
  {
    question: "Pouvez-vous reprendre un site existant ?",
    answer:
      "Oui. Un audit permet d’abord de déterminer s’il est plus pertinent d’optimiser, de migrer ou de refondre l’existant.",
  },
  {
    question: "Gérez-vous Google Ads ?",
    answer:
      "Oui, de la configuration du tracking au pilotage des campagnes. Le budget publicitaire reste payé directement par le client à Google.",
  },
  {
    question: "Que se passe-t-il après la mise en ligne ?",
    answer:
      "La livraison comprend la formation et les éléments prévus au contrat. L’offre acquisition inclut 30 jours de suivi ; maintenance, SEO et Ads peuvent ensuite être accompagnés par abonnement, sans frais cachés obligatoires.",
  },
] as const satisfies readonly FaqItem[];

export const footerLinks = [
  {
    title: "Offres",
    links: [
      { label: "Site vitrine", href: "/site-vitrine" },
      { label: "Site acquisition", href: "/site-acquisition" },
      { label: "Solutions métiers", href: "/solutions-metiers" },
      { label: "Accompagnement mensuel", href: "/accompagnement" },
    ],
  },
  {
    title: "Agence",
    links: [
      { label: "Réalisations", href: "/realisations" },
      { label: "Méthode", href: "/methode" },
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
      { label: "Gestion des cookies", href: "/cookies" },
    ],
  },
] as const satisfies readonly FooterLinkGroup[];

export const contact = {
  email: "",
  phone: "",
  location: "Savoie",
  note: "Projets locaux et à distance.",
} as const satisfies ContactDetails;
