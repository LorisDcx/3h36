import type { ProjectSlug } from "@/lib/site-data";

export type CaseContribution = {
  title: string;
  description: string;
};

export type CaseStudy = {
  headline: string;
  introduction: string;
  audience: string;
  challenge: string;
  approach: string;
  contributions: readonly CaseContribution[];
  outcome: string;
  stack?: readonly string[];
  note?: string;
};

export const caseStudies: Record<ProjectSlug, CaseStudy> = {
  plum: {
    headline: "De l’idée au post publié, sans tableur ni dispersion.",
    introduction:
      "Plum est un espace de pilotage éditorial conçu pour les personnes qui produisent régulièrement du contenu sans disposer d’une équipe marketing complète.",
    audience: "Créateurs, freelances, consultants, petites marques et petites équipes",
    challenge:
      "Les idées, brouillons, médias, dates de publication et statistiques étaient répartis entre des notes, des dossiers et plusieurs plateformes. L’enjeu consistait à réunir ce cycle sans recréer un outil lourd à administrer.",
    approach:
      "Nous avons construit une expérience calme et éditoriale autour d’un geste simple : capturer une idée, la transformer, la planifier puis suivre sa publication. Le langage visuel, le dashboard et l’assistance à la création suivent tous cette même logique de continuité.",
    contributions: [
      {
        title: "Positionnement & identité",
        description:
          "Une promesse accessible et une direction douce qui distinguent Plum des outils de gestion plus techniques.",
      },
      {
        title: "Expérience produit",
        description:
          "Boîte à idées, board éditorial, calendriers hebdomadaire et mensuel, bibliothèque média et suivi dans un même espace.",
      },
      {
        title: "Création assistée",
        description:
          "Un assistant pour générer angles, accroches, scripts, appels à l’action et variantes adaptées aux différents canaux.",
      },
    ],
    outcome:
      "Le projet installe un environnement cohérent entre la landing page, l’inscription et le travail quotidien, avec un parcours qui reste lisible à chaque étape de production.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Gemini", "Stockage cloud"],
    note:
      "Les connecteurs sociaux sont prévus dans le produit ; leur activation dépend des comptes OAuth et des validations propres à chaque plateforme.",
  },
  urgeza: {
    headline: "Donner une présence crédible à une marque outdoor dès sa première capsule.",
    introduction:
      "URGEZA relie l’univers de la pêche, le terrain et le quotidien dans une marque d’essentiels outdoor à la fois technique, sobre et facile à porter.",
    audience: "Passionnés de pêche, travailleurs de terrain et communauté outdoor",
    challenge:
      "La marque devait exister au-delà d’un simple catalogue : exprimer un territoire visuel identifiable, expliquer les usages et préparer une première capsule sans surjouer la technicité.",
    approach:
      "Le site a été pensé comme un dispositif de lancement modulaire. L’univers Fishing × Terrain structure la navigation, tandis que les collections, matières, protections, saisons et coupes donnent les repères concrets nécessaires à l’achat.",
    contributions: [
      {
        title: "Direction de marque",
        description:
          "Un système visuel outdoor premium, reconnaissable et suffisamment flexible pour accompagner les futures capsules.",
      },
      {
        title: "Boutique modulaire",
        description:
          "Un thème Shopify profondément personnalisé avec héros, produits, piliers, capsule, réassurance et newsletter.",
      },
      {
        title: "Parcours produit",
        description:
          "Des collections pêche et terrain, des fiches orientées usages et des métadonnées utiles pour comparer les pièces.",
      },
    ],
    outcome:
      "URGEZA dispose d’une base e-commerce cohérente pour présenter son histoire, organiser ses gammes et lancer progressivement son catalogue.",
    stack: ["Shopify Online Store 2.0", "Liquid", "Dawn personnalisé", "Metafields"],
    note:
      "Le dispositif accompagne une phase de lancement : plusieurs références peuvent encore être présentées comme bientôt disponibles.",
  },
  aviszen: {
    headline: "Transformer les avis sensibles en réponses maîtrisées et en visibilité locale.",
    introduction:
      "AvisZen est un écosystème d’e-réputation pensé pour aider les professionnels locaux à répondre, collecter et exploiter leurs avis avec davantage de méthode.",
    audience: "Commerces et professionnels locaux, sur huit grands secteurs d’activité",
    challenge:
      "Répondre vite ne suffit pas : le ton, le contexte métier et le niveau de risque changent d’un avis à l’autre. Il fallait associer assistance, contrôle humain et acquisition locale sans donner l’impression d’une réponse automatique générique.",
    approach:
      "Le produit a été structuré en briques complémentaires : génération contextualisée, boîte de réception, collecte par QR code et contenus locaux. Chaque parcours garde visibles les informations nécessaires à une décision humaine.",
    contributions: [
      {
        title: "Architecture produit",
        description:
          "Des parcours distincts pour générer une réponse, traiter une situation sensible, collecter un nouvel avis ou découvrir l’offre.",
      },
      {
        title: "Outils opérationnels",
        description:
          "Générateur par métier, ton et langue, Inbox avec brouillons et analyse de risque, puis QR codes exportables en PNG et PDF.",
      },
      {
        title: "Présence locale",
        description:
          "Une architecture SEO par secteurs, métiers et villes, complétée par des contenus éditoriaux et des parcours commerciaux.",
      },
    ],
    outcome:
      "Le dispositif relie la gestion quotidienne des avis à une présence locale structurée, tout en maintenant la validation humaine au cœur des réponses.",
    stack: ["Astro", "React", "Tailwind", "Gemini", "PDF-lib", "Vercel"],
    note:
      "Certaines fonctions de synchronisation Google Business Profile restent conditionnées par l’approbation de l’API concernée.",
  },
  "delco-ink": {
    headline: "Faire ressentir un univers artistique avant le premier rendez-vous.",
    introduction:
      "Delco Ink est le site d’un studio privé de tatouage à Cognin, spécialisé dans le blackwork illustratif, le manga, la pop culture et les flashs.",
    audience: "Personnes recherchant un tatoueur à Chambéry et Cognin",
    challenge:
      "Un portfolio d’images ne suffisait pas à expliquer une démarche, les styles proposés et la façon dont se déroule un projet. Le site devait être immersif sans rendre les informations pratiques difficiles à trouver.",
    approach:
      "Nous avons transposé l’univers organique et blackwork dans une expérience éditoriale fluide. La galerie reste centrale, mais elle s’inscrit dans un parcours complet qui rassure avant la prise de contact.",
    contributions: [
      {
        title: "Univers digital",
        description:
          "Une direction visuelle sombre, texturée et expressive qui prolonge le geste artistique sans masquer les contenus.",
      },
      {
        title: "Galerie & interaction",
        description:
          "Filtres, défilement automatique, swipe mobile et lightbox pour explorer les réalisations avec souplesse.",
      },
      {
        title: "Parcours local",
        description:
          "Pages flash, spécialités, studio, processus, FAQ, formulaire de projet et contenus optimisés pour la recherche locale.",
      },
    ],
    outcome:
      "Le studio dispose d’un site qui présente autant la personnalité artistique que le cadre concret d’un projet, du premier repérage à la demande de rendez-vous.",
    stack: ["Astro", "React", "Tailwind", "GSAP", "Lenis", "Netlify"],
  },
  flowsaver: {
    headline: "Rendre lisible le passage critique de l’essai au paiement.",
    introduction:
      "FlowSaver est une couche Stripe-native conçue pour suivre les essais gratuits et déclencher les bons scénarios lorsqu’un paiement ou une conversion nécessite une action.",
    audience: "Équipes SaaS et fondateurs indépendants utilisant Stripe",
    challenge:
      "Les équipes reconstruisent souvent les mêmes webhooks, relances et écrans de suivi. Le produit devait expliquer une mécanique complexe tout en restant simple à connecter et à piloter.",
    approach:
      "Le parcours a été organisé autour de trois moments : connecter Stripe, activer un scénario puis suivre les essais, paiements et récupérations depuis un dashboard unique.",
    contributions: [
      {
        title: "Stratégie produit",
        description:
          "Un positionnement centré sur la continuité essai-paiement et des cas d’usage immédiatement compréhensibles.",
      },
      {
        title: "Expérience SaaS",
        description:
          "Landing, onboarding, dashboard, suivi des paiements et actions opérateur conçus comme un seul parcours.",
      },
      {
        title: "Intégration Stripe",
        description:
          "Connexion Stripe Connect, essais et checkout hébergés, widget d’intégration et scénarios automatisés de récupération.",
      },
    ],
    outcome:
      "FlowSaver transforme une infrastructure dispersée en un produit cohérent, capable de montrer où se situe chaque essai et quelle action peut suivre.",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Stripe Connect", "Netlify"],
    note: "Le produit est actuellement présenté comme une bêta expérimentale.",
  },
  wildeye: {
    headline: "Explorer le vivant sans exposer ce qui doit rester protégé.",
    introduction:
      "WildEye est un observatoire communautaire qui rassemble faune, flore et minéralogie dans une expérience cartographique commune.",
    audience: "Curieux, naturalistes et contributeurs citoyens",
    challenge:
      "Les observations provenaient de plusieurs bases avec des formats et niveaux de précision différents. Il fallait les rendre explorables tout en protégeant les espèces et localisations sensibles.",
    approach:
      "La carte devient l’interface principale, enrichie par la recherche, les filtres temporels, les clusters et des fiches d’observation. La confidentialité, la fiabilité et la modération sont traitées comme des fonctions de premier niveau.",
    contributions: [
      {
        title: "Conception cartographique",
        description:
          "Une navigation Mapbox capable d’absorber de nombreux points sans perdre la lecture générale du territoire.",
      },
      {
        title: "Données naturalistes",
        description:
          "Agrégation de sources GBIF, iNaturalist et OBIS, puis filtres par catégories et périodes.",
      },
      {
        title: "Contribution maîtrisée",
        description:
          "Ajout avec photo, autocomplétion taxonomique, coordonnées floutées, niveaux de confidentialité et modération.",
      },
    ],
    outcome:
      "L’application rend une grande quantité d’observations immédiatement accessible, sans opposer exploration publique et protection des données sensibles.",
    stack: ["Next.js", "React", "TypeScript", "Mapbox GL", "Supabase", "Zustand"],
  },
  cramdesk: {
    headline: "Transformer un PDF de cours en session de révision.",
    introduction:
      "Cramdesk part d’un geste familier — déposer un document — pour produire les formats dont un étudiant a besoin pour apprendre et s’entraîner.",
    audience: "Étudiants qui révisent à partir de supports PDF",
    challenge:
      "La richesse fonctionnelle pouvait rapidement rendre le service abstrait. La priorité était de faire comprendre le bénéfice dès le premier écran et de réduire la distance entre le document et la première activité de révision.",
    approach:
      "L’expérience a été recentrée sur le dépôt du PDF, puis sur une démonstration courte du traitement et des formats générés. Le ton, les preuves visuelles et les appels à l’action restent directs.",
    contributions: [
      {
        title: "Positionnement",
        description:
          "Une promesse simple, formulée autour du résultat immédiat pour l’étudiant plutôt que de la technologie employée.",
      },
      {
        title: "Parcours de conversion",
        description:
          "Dépôt du PDF dans le héros, explication en trois étapes et progression claire vers la création d’un compte.",
      },
      {
        title: "Présentation du produit",
        description:
          "Flashcards, QCM, résumés, présentations, chat documentaire, progression et exports rendus faciles à parcourir.",
      },
    ],
    outcome:
      "Le service rend tangible une proposition pourtant large : partir d’un seul document et accéder rapidement à plusieurs manières de réviser.",
  },
  "loris-lazulis": {
    headline: "Installer la confiance avant un achat engageant.",
    introduction:
      "Loris Lazulis accompagne de manière indépendante les particuliers qui souhaitent mieux comprendre une pierre naturelle certifiée avant de l’acheter.",
    audience: "Particuliers préparant l’achat d’une pierre naturelle certifiée",
    challenge:
      "Certificats, provenance et intérêts commerciaux rendent ce marché difficile à lire. Le service devait inspirer confiance sans se présenter comme vendeur, expert de laboratoire ou organisme de certification.",
    approach:
      "Une direction quiet luxury, des espaces généreux et une rédaction pédagogique installent une posture calme. La méthode, les honoraires et les limites d’intervention sont expliqués avant le formulaire.",
    contributions: [
      {
        title: "Positionnement & rédaction",
        description:
          "Un rôle indépendant clairement délimité, une méthode compréhensible et un vocabulaire qui évite toute promesse excessive.",
      },
      {
        title: "Direction éditoriale",
        description:
          "Palette pierre, typographies élégantes, blog et contenus consacrés à la provenance et aux documents de certification.",
      },
      {
        title: "Qualification des demandes",
        description:
          "Un formulaire structuré autour du type de pierre, du budget, de l’usage et du délai pour préparer l’échange.",
      },
    ],
    outcome:
      "La présence en ligne clarifie le service, son cadre et ses honoraires tout en donnant aux visiteurs les informations nécessaires avant de demander un accompagnement.",
    stack: ["Astro", "Tailwind", "React Islands", "MDX", "Vercel"],
  },
};
