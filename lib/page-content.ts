export type PageRoute =
  | "/services"
  | "/site-vitrine"
  | "/site-acquisition"
  | "/solutions-metiers"
  | "/accompagnement"
  | "/realisations"
  | "/methode"
  | "/a-propos"
  | "/mentions-legales"
  | "/politique-confidentialite"
  | "/cookies";

export type PageSection = Readonly<{
  heading: string;
  body: string;
  bullets?: readonly string[];
}>;

export type PageCta = Readonly<{
  label: string;
  href: string;
}>;

export type PageContent = Readonly<{
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  seo: Readonly<{
    title: string;
    description: string;
  }>;
  sections: readonly PageSection[];
  cta?: PageCta;
}>;

export const pageContentByRoute = {
  "/services": {
    slug: "services",
    eyebrow: "Sites, acquisition et automatisation",
    title: "Le bon levier digital pour votre objectif",
    description:
      "Une présence crédible, davantage de demandes ou un processus métier plus fluide : chaque offre répond à un besoin précis, avec un périmètre lisible dès le départ.",
    seo: {
      title: "Services web, acquisition et automatisation | 3h36 Agency",
      description:
        "Sites vitrines dès 1 200 € HT, sites d’acquisition dès 2 500 € HT et solutions métiers sur devis pour TPE et PME.",
    },
    sections: [
      {
        heading: "Un site utile avant d’être spectaculaire",
        body:
          "Le point de départ n’est pas une technologie ou un effet visuel, mais le problème que l’entreprise doit résoudre. La réponse est ensuite dimensionnée pour rester simple, mesurable et adaptée à la réalité du terrain.",
        bullets: [
          "Moderniser une image devenue peu rassurante",
          "Transformer les visites en devis, appels ou rendez-vous",
          "Améliorer la visibilité locale sur Google",
          "Réduire les tâches répétitives et les doubles saisies",
        ],
      },
      {
        heading: "Trois offres, trois niveaux d’ambition",
        body:
          "Les offres partagent la même exigence de clarté, de performance et d’accompagnement. Leur différence tient au niveau de stratégie, de mesure et de personnalisation nécessaire.",
        bullets: [
          "Site vitrine — jusqu’à 5 pages, SEO technique de base et mesure d’audience, à partir de 1 200 € HT",
          "Site acquisition — 8 à 10 pages, SEO local, tracking complet et parcours de conversion, à partir de 2 500 € HT",
          "Solutions métiers & automatisations — outil ou workflow conçu autour de vos processus, sur devis",
        ],
      },
      {
        heading: "Choisir sans surdimensionner",
        body:
          "Un site vitrine convient pour présenter clairement une activité. Un site d’acquisition ajoute les pages, les formulaires et la mesure nécessaires pour générer des demandes. Une solution métier intervient quand le besoin dépasse le site public et touche aux opérations internes.",
        bullets: [
          "Design responsive : inclus pour les sites, adapté au projet pour les outils métiers",
          "SEO : socle technique en vitrine, travail local avancé en acquisition",
          "Tracking : mesure de base en vitrine, suivi complet des conversions en acquisition",
          "Automatisation : en option avec l’acquisition, au cœur des solutions métiers",
        ],
      },
      {
        heading: "Continuer à améliorer après la mise en ligne",
        body:
          "Maintenance, SEO local, tracking et Google Ads peuvent faire l’objet d’un accompagnement mensuel. Ces forfaits sont proposés comme un choix d’évolution, jamais comme des frais cachés obligatoires.",
      },
    ],
    cta: {
      label: "Discuter de votre projet",
      href: "/contact",
    },
  },

  "/site-vitrine": {
    slug: "site-vitrine",
    eyebrow: "Une présence professionnelle et solide",
    title: "Un site vitrine clair, rapide et rassurant",
    description:
      "À partir de 1 200 € HT, une formule cadrée pour présenter votre entreprise, faciliter le contact et poser une base technique saine sans lancer un projet inutilement complexe.",
    seo: {
      title: "Création de site vitrine dès 1 200 € HT | 3h36 Agency",
      description:
        "Un site vitrine responsive jusqu’à 5 pages, rapide, mesurable et optimisé pour les bases du SEO. Délai indicatif : 2 à 4 semaines.",
    },
    sections: [
      {
        heading: "Pour être compris et contacté plus facilement",
        body:
          "Cette offre s’adresse aux entreprises qui ont besoin d’une présence en ligne professionnelle, sans fonctionnalité métier complexe. L’arborescence reste volontairement courte pour rendre l’activité, les services et le prochain pas immédiatement compréhensibles.",
        bullets: [
          "Jusqu’à 5 pages, par exemple Accueil, Services, À propos, Réalisations et Contact",
          "Design responsive et optimisation mobile",
          "Formulaire de contact et appels à l’action clairs",
          "Intégration des textes et visuels fournis",
        ],
      },
      {
        heading: "Le socle inclus dans la formule",
        body:
          "Le périmètre de base couvre la conception, la mise en ligne et la prise en main du site. Les choix techniques visent une expérience rapide, accessible et facile à maintenir.",
        bullets: [
          "Appel de cadrage, arborescence simple et design responsive",
          "Optimisation des performances, SEO technique de base, titres et descriptions",
          "Connexion du domaine, mise en ligne et outil de mesure d’audience",
          "Conformité RGPD minimale selon les outils réellement utilisés",
          "Deux séries de corrections et une formation rapide à l’utilisation",
        ],
      },
      {
        heading: "Un cadre transparent sur les délais et les options",
        body:
          "Le délai indicatif est de 2 à 4 semaines après réception de l’ensemble des contenus. Le calendrier de paiement conseillé est de 50 % à la commande, 30 % à la validation de la maquette et 20 % avant la mise en ligne.",
        bullets: [
          "Non inclus par défaut : rédaction complète, logo, identité visuelle et shooting photo",
          "Non inclus par défaut : espace client, réservation complexe et fonctions métier",
          "Non inclus par défaut : traduction, campagne publicitaire et stratégie SEO éditoriale approfondie",
          "Toute extension de périmètre fait l’objet d’un chiffrage clair avant réalisation",
        ],
      },
    ],
    cta: {
      label: "Obtenir une estimation",
      href: "/contact",
    },
  },

  "/site-acquisition": {
    slug: "site-acquisition",
    eyebrow: "Plus de visibilité, surtout plus d’actions",
    title: "Un site conçu pour générer des demandes qualifiées",
    description:
      "À partir de 2 500 € HT, un dispositif plus complet pour attirer les bons visiteurs, les guider vers l’action et mesurer les formulaires, appels ou rendez-vous obtenus.",
    seo: {
      title: "Site d’acquisition dès 2 500 € HT | 3h36 Agency",
      description:
        "SEO local, pages de services, formulaires qualifiants et tracking des conversions pour transformer votre visibilité en demandes commerciales.",
    },
    sections: [
      {
        heading: "De la visite à la demande commerciale",
        body:
          "Le site d’acquisition reprend le socle du site vitrine et ajoute un travail plus approfondi sur la cible, les offres, les zones géographiques et les points de conversion. Chaque page répond à une intention précise et conduit vers une action mesurable.",
        bullets: [
          "Atelier de cadrage marketing et analyse de la cible",
          "Arborescence orientée conversion avec 8 à 10 pages",
          "Pages dédiées par prestation et travail sur les zones géographiques",
          "Appels à l’action et formulaires qualifiants, avec envoi de fichiers si nécessaire",
        ],
      },
      {
        heading: "SEO local et tracking intégrés",
        body:
          "L’offre met en place les fondations nécessaires pour être trouvé localement et comprendre l’origine des demandes. Les données servent à décider, pas à produire un rapport illisible.",
        bullets: [
          "Optimisation SEO locale et de Google Business Profile",
          "Installation de GA4 et configuration de Google Tag Manager",
          "Suivi des formulaires, clics téléphone et prises de rendez-vous",
          "Tableau de bord simple et recommandations d’acquisition",
          "Intégration d’un outil de prise de rendez-vous et suivi pendant 30 jours après la mise en ligne",
        ],
      },
      {
        heading: "Des options activées selon la stratégie",
        body:
          "La rédaction SEO, les pages locales supplémentaires, le blog, le CRM, les séquences e-mail, Google Ads, le suivi des appels, la création de visuels, la photographie ou le multilingue ne sont ajoutés que lorsqu’ils servent réellement l’objectif.",
      },
      {
        heading: "Un projet cadré sur 4 à 8 semaines",
        body:
          "Le délai indicatif est de 4 à 8 semaines. Le calendrier de paiement conseillé est de 40 % à la commande, 30 % à la validation de la structure, 20 % à la validation du développement et 10 % avant la mise en ligne.",
        bullets: [
          "Les contenus, accès et validations fournis par le client conditionnent le planning",
          "Le tracking est vérifié avant d’interpréter les résultats",
          "Aucun volume de demandes ni position sur Google ne peut être garanti",
        ],
      },
    ],
    cta: {
      label: "Générer plus de demandes",
      href: "/contact",
    },
  },

  "/solutions-metiers": {
    slug: "solutions-metiers",
    eyebrow: "Outils web et automatisations sur mesure",
    title: "Un outil adapté à votre façon de travailler",
    description:
      "Plutôt que d’imposer un logiciel générique trop lourd, 3h36 Agency conçoit un outil ciblé autour de votre processus, de vos utilisateurs et des tâches qui vous font perdre du temps.",
    seo: {
      title: "Solutions métiers et automatisations sur mesure | 3h36 Agency",
      description:
        "Espaces clients, configurateurs, tableaux de bord et workflows sur mesure pour simplifier les processus des TPE et PME. Étude sur devis.",
    },
    sections: [
      {
        heading: "Partir du processus réel",
        body:
          "Le travail commence par observer ce qui existe : informations collectées, personnes impliquées, outils utilisés, validations et points de friction. Le premier objectif est de définir un MVP utile, pas d’accumuler des fonctions.",
        bullets: [
          "Identifier les tâches répétitives, les doubles saisies et les ruptures de suivi",
          "Définir les utilisateurs, leurs droits et leurs actions prioritaires",
          "Choisir un périmètre testable avant d’envisager les évolutions",
        ],
      },
      {
        heading: "Des usages concrets pour l’entreprise",
        body:
          "La solution peut être interne, destinée aux clients ou connectée à plusieurs outils existants. Sa forme dépend du besoin, de la sensibilité des données et du niveau d’automatisation attendu.",
        bullets: [
          "Espace client, portail documentaire ou suivi de dossiers",
          "Tableau de bord, formulaire métier, estimateur ou configurateur",
          "Génération de devis ou de rapports et workflows de validation",
          "Synchronisation d’outils, e-mails automatisés ou interface de réservation",
          "Base de connaissances, chatbot métier ou intégration d’IA encadrée",
        ],
      },
      {
        heading: "Une réalisation par étapes",
        body:
          "Le projet avance par lots pour valider rapidement les choix importants et réduire le risque d’un outil déconnecté des usages.",
        bullets: [
          "1. Analyse du processus actuel",
          "2. Identification des tâches répétitives",
          "3. Définition du MVP et prototype",
          "4. Développement et tests utilisateurs",
          "5. Déploiement, maintenance et évolutions",
        ],
      },
      {
        heading: "Un budget établi après cadrage",
        body:
          "Les solutions métiers sont proposées sur devis, sans prix de départ public : le budget dépend trop fortement du périmètre, des connexions et des exigences de sécurité. Une phase de cadrage peut être facturée lorsqu’elle constitue un livrable à part entière.",
        bullets: [
          "Devis détaillé et développement par lots",
          "Périmètre, limites et responsabilités écrits",
          "Accès et propriété intellectuelle précisés dans le contrat",
          "Maintenance obligatoire ou fortement recommandée selon la criticité de l’outil",
        ],
      },
    ],
    cta: {
      label: "Étudier mon besoin",
      href: "/contact",
    },
  },

  "/accompagnement": {
    slug: "accompagnement",
    eyebrow: "Maintenance, visibilité et acquisition",
    title: "Un accompagnement mensuel au rythme de vos objectifs",
    description:
      "Les forfaits récurrents maintiennent le site, développent sa visibilité ou pilotent l’acquisition. Ils sont proposés clairement, avec un périmètre défini et sans promesse de résultat garanti.",
    seo: {
      title: "Maintenance, SEO local et Google Ads | 3h36 Agency",
      description:
        "Forfaits mensuels dès 89 € HT pour maintenir votre site, travailler le SEO local, suivre les conversions et piloter Google Ads.",
    },
    sections: [
      {
        heading: "Sérénité — 89 € HT par mois",
        body:
          "Le socle pour conserver un site disponible, sécurisé et suivi. Le tarif de 89 € HT par mois correspond à un engagement annuel conseillé de 12 mois ; la formule est proposée à 109 € HT par mois sans engagement annuel.",
        bullets: [
          "Hébergement, sauvegardes et surveillance de disponibilité",
          "Mises à jour et maintenance de sécurité",
          "Correction des anomalies liées au site",
          "Rapport trimestriel",
          "30 minutes de petites modifications par mois",
        ],
      },
      {
        heading: "Visibilité locale — 290 € HT par mois",
        body:
          "Ce forfait reprend tout le contenu de Sérénité et ajoute un suivi régulier du référencement local. Il vise une amélioration continue, sans promettre une première position sur Google.",
        bullets: [
          "Suivi SEO technique, Search Console et positions principales",
          "Optimisation de Google Business Profile",
          "Mise à jour mensuelle d’un contenu ou d’une page",
          "Recommandations SEO et rapport mensuel synthétique",
          "Échange trimestriel",
        ],
      },
      {
        heading: "Acquisition — à partir de 590 € HT par mois",
        body:
          "Le forfait couvre le pilotage Google Ads pour une dépense publicitaire allant jusqu’à 2 500 € par mois. Au-delà, les honoraires représentent 15 % des dépenses publicitaires, avec un minimum de 590 € HT par mois. Le budget média est payé directement par le client à Google.",
        bullets: [
          "Suivi du tracking, des conversions et des termes de recherche",
          "Pilotage et optimisation des campagnes et annonces",
          "Tableau de bord, reporting et rendez-vous mensuels",
          "Recommandations sur les landing pages",
          "Engagement initial de 3 mois recommandé, avec objectifs et KPI définis au démarrage",
        ],
      },
      {
        heading: "Croissance locale — 790 € HT par mois",
        body:
          "Une formule réunissant les principaux leviers pour les entreprises locales qui souhaitent un pilotage plus global de leur présence digitale.",
        bullets: [
          "Maintenance et SEO local",
          "Google Business Profile et Google Ads",
          "Tracking et tableau de bord",
          "Une optimisation de page par mois",
          "Accompagnement mensuel",
        ],
      },
    ],
    cta: {
      label: "Choisir mon accompagnement",
      href: "/contact",
    },
  },

  "/realisations": {
    slug: "realisations",
    eyebrow: "Projets et produits",
    title: "Des projets pensés comme de vrais outils",
    description:
      "Cette sélection montre des problématiques différentes — réputation locale, organisation éditoriale et e-commerce — sans résultats chiffrés ni statut client inventés.",
    seo: {
      title: "Réalisations web et produits digitaux | 3h36 Agency",
      description:
        "Découvrez AvisZen, Plum et URGEZA : des projets de plateforme, de produit SaaS et d’e-commerce conçus autour d’usages concrets.",
    },
    sections: [
      {
        heading: "AvisZen — e-réputation locale",
        body:
          "AvisZen explore une approche structurée de la réputation locale : aider une entreprise à suivre sa présence, préparer ses réponses et mieux exploiter son profil Google Business.",
        bullets: [
          "Génération assistée de réponses",
          "Audit Google Business Profile et ressources SEO local",
          "QR codes, logique SaaS et automatisations",
          "Statut du projet : [À préciser avant publication]",
        ],
      },
      {
        heading: "Plum — planification éditoriale",
        body:
          "Plum rassemble la préparation et l’organisation des contenus dans un même produit, afin de passer plus facilement de l’idée au calendrier éditorial.",
        bullets: [
          "Calendrier et gestion des idées",
          "Assistant IA et organisation des contenus",
          "Logique de produit SaaS",
          "Statut du projet : [À préciser avant publication]",
        ],
      },
      {
        heading: "URGEZA — expérience e-commerce outdoor",
        body:
          "URGEZA travaille la présentation d’une marque outdoor et la fluidité de son parcours d’achat, en particulier sur mobile.",
        bullets: [
          "Structuration des collections et fiches produits",
          "Expérience mobile et parcours de conversion",
          "Collecte d’inscriptions",
          "Statut du projet : [À préciser avant publication]",
        ],
      },
    ],
    cta: {
      label: "Parler de votre projet",
      href: "/contact",
    },
  },

  "/methode": {
    slug: "methode",
    eyebrow: "Un cadre clair, du premier échange au suivi",
    title: "Une méthode qui réduit les zones floues",
    description:
      "Chaque projet avance par validations successives. Vous savez ce qui est attendu, ce qui est livré et à quel moment une décision doit être prise.",
    seo: {
      title: "Méthode de création web et cadrage projet | 3h36 Agency",
      description:
        "Découvrez les 7 étapes d’un projet avec 3h36 Agency : découverte, cadrage, conception, développement, recette, mise en ligne et suivi.",
    },
    sections: [
      {
        heading: "1. Comprendre avant de proposer",
        body:
          "L’appel de découverte sert à comprendre l’entreprise, ses clients, son offre, ses contraintes, son budget et son échéance. L’analyse permet ensuite de recommander le bon niveau de solution.",
        bullets: [
          "Appel de découverte",
          "Analyse du besoin et des objectifs",
          "Proposition, périmètre, planning et cadrage des responsabilités",
        ],
      },
      {
        heading: "2. Concevoir, développer et valider",
        body:
          "La structure, les contenus et le parcours sont posés avant les détails d’exécution. Le développement progresse sur une base validée, puis la recette vérifie le rendu, les fonctions et les parcours clés.",
        bullets: [
          "Conception de l’arborescence, des parcours et de l’interface",
          "Développement responsive et intégration des contenus",
          "Recette, retours regroupés et corrections prévues au périmètre",
        ],
      },
      {
        heading: "3. Mettre en ligne puis mesurer",
        body:
          "La livraison comprend la mise en ligne, les dernières vérifications et la prise en main. Selon l’offre, le suivi permet ensuite d’observer les performances, les conversions et les prochains axes d’amélioration.",
        bullets: [
          "Validation finale, mise en ligne et formation",
          "Mesure des formulaires, appels ou rendez-vous selon le dispositif",
          "Maintenance, SEO et acquisition proposés selon les besoins",
        ],
      },
    ],
    cta: {
      label: "Démarrer par un échange",
      href: "/contact",
    },
  },

  "/a-propos": {
    slug: "a-propos",
    eyebrow: "3h36 Agency, basée en Savoie",
    title: "Un interlocuteur unique pour des outils digitaux réellement utiles",
    description:
      "3h36 Agency accompagne les entreprises dans la conception de sites, de parcours d’acquisition et d’outils sur mesure, localement comme à distance.",
    seo: {
      title: "À propos de 3h36 Agency, agence web en Savoie",
      description:
        "Une approche directe qui relie création web, SEO, tracking, conversion et automatisation pour les TPE et PME en Savoie et à distance.",
    },
    sections: [
      {
        heading: "Pourquoi 3h36 Agency",
        body:
          "Le nom traduit une conviction simple : un bon outil digital continue d’informer, de rassurer, de qualifier ou de simplifier une tâche lorsque l’entreprise ne travaille pas. Un site doit donc faire plus que simplement exister.",
      },
      {
        heading: "Relier les enjeux plutôt que les isoler",
        body:
          "L’approche combine compréhension du besoin, gestion de projet, performance web, SEO, tracking et conversion. Cette vision d’ensemble évite de créer un beau site sans visibilité, ou une campagne sans parcours capable de convertir.",
        bullets: [
          "Une recommandation adaptée au besoin et au budget",
          "Un périmètre écrit et des étapes compréhensibles",
          "Des choix techniques au service de l’usage",
          "Un suivi possible après la mise en ligne",
        ],
      },
      {
        heading: "Des valeurs concrètes dans le projet",
        body:
          "Clarté, fiabilité, exigence, proximité, utilité et amélioration continue guident la manière de cadrer, concevoir et suivre chaque réalisation.",
      },
      {
        heading: "En Savoie et au-delà",
        body:
          "Basée en Savoie, l’agence travaille en priorité avec les entreprises de la région — notamment en Haute-Savoie, Isère, Ain, Rhône et Suisse romande — tout en accompagnant des projets à distance lorsque la collaboration s’y prête.",
      },
    ],
    cta: {
      label: "Discuter de votre projet",
      href: "/contact",
    },
  },

  "/mentions-legales": {
    slug: "mentions-legales",
    eyebrow: "Informations légales",
    title: "Mentions légales",
    description:
      "Les informations ci-dessous constituent une trame à compléter avec les données juridiques réelles de l’éditeur avant toute mise en ligne publique.",
    seo: {
      title: "Mentions légales | 3h36 Agency",
      description:
        "Consultez les informations relatives à l’éditeur, à l’hébergement et à l’utilisation du site de 3h36 Agency.",
    },
    sections: [
      {
        heading: "Édition du site",
        body:
          "Le présent site est édité sous la marque 3h36 Agency. Les éléments d’identification obligatoires doivent être renseignés et vérifiés avant publication.",
        bullets: [
          "Raison sociale ou nom de l’entrepreneur : [À compléter]",
          "Forme juridique et capital social, si applicable : [À compléter]",
          "Adresse du siège ou de domiciliation : [À compléter — adresse légale]",
          "SIRET / numéro d’immatriculation : [À compléter — SIRET]",
          "Numéro de TVA intracommunautaire, si applicable : [À compléter]",
          "Directeur ou directrice de la publication : [À compléter]",
          "Coordonnées de contact : [À compléter]",
        ],
      },
      {
        heading: "Hébergement",
        body:
          "Les coordonnées de l’hébergeur effectivement retenu pour la version en production doivent figurer ici.",
        bullets: [
          "Nom de l’hébergeur : [À compléter — hébergeur]",
          "Raison sociale : [À compléter]",
          "Adresse : [À compléter — adresse de l’hébergeur]",
          "Téléphone ou moyen de contact : [À compléter]",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body:
          "Sauf mention contraire, les textes, éléments graphiques, interfaces et contenus originaux présents sur ce site sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou réutilisation substantielle nécessite l’autorisation préalable de leur titulaire.",
      },
      {
        heading: "Responsabilité et validation",
        body:
          "Les informations publiées sont fournies à titre général et peuvent évoluer. Les liens externes restent sous la responsabilité de leurs éditeurs. Cette trame ne remplace pas un conseil juridique et doit être validée par un professionnel compétent avant publication.",
      },
    ],
  },

  "/politique-confidentialite": {
    slug: "politique-confidentialite",
    eyebrow: "Protection des données personnelles",
    title: "Politique de confidentialité",
    description:
      "Cette trame explique comment les données peuvent être collectées et utilisées. Elle devra être ajustée aux formulaires, prestataires et durées réellement retenus avant la mise en ligne.",
    seo: {
      title: "Politique de confidentialité | 3h36 Agency",
      description:
        "Informations sur la collecte, l’utilisation, la conservation et l’exercice de vos droits concernant vos données personnelles.",
    },
    sections: [
      {
        heading: "Responsable du traitement et données collectées",
        body:
          "Le responsable du traitement est [À compléter — identité juridique, adresse et coordonnées de contact]. Selon les fonctions effectivement activées, le site peut recueillir les informations transmises dans un formulaire, lors d’une prise de rendez-vous ou dans un document joint, ainsi que des données techniques soumises au consentement lorsqu’il est requis.",
        bullets: [
          "Identité et coordonnées : nom, entreprise, e-mail et téléphone",
          "Informations sur le projet : secteur, localisation, objectif, budget, échéance et message",
          "Site actuel et fichier facultatif transmis par l’utilisateur",
          "Données de navigation uniquement selon les outils réellement déployés et les choix de consentement",
        ],
      },
      {
        heading: "Finalités et bases légales",
        body:
          "Les données servent à répondre aux demandes, qualifier un projet, préparer une proposition, assurer la sécurité du site et, avec le consentement requis, mesurer l’audience. Les bases légales exactes doivent être confirmées pour chaque traitement dans le registre de l’éditeur.",
        bullets: [
          "Mesures précontractuelles ou intérêt légitime pour traiter une demande professionnelle, selon le contexte",
          "Exécution du contrat pour les données nécessaires à une prestation en cours",
          "Obligation légale pour les données comptables ou administratives concernées",
          "Consentement pour les traceurs et communications qui l’exigent",
        ],
      },
      {
        heading: "Destinataires, conservation et sécurité",
        body:
          "L’accès doit être limité aux personnes autorisées et aux prestataires nécessaires au fonctionnement du service. La liste des sous-traitants, leurs lieux de traitement, les éventuels transferts hors Espace économique européen et les garanties associées sont à documenter selon les outils retenus.",
        bullets: [
          "Durée de conservation des demandes sans suite : [À compléter]",
          "Durée de conservation des données clients et obligations d’archivage : [À compléter]",
          "Prestataires de formulaire, e-mail, rendez-vous, analytics, CRM et hébergement : [À compléter selon la production]",
          "Mesures d’accès, de sauvegarde et de protection : [À documenter]",
        ],
      },
      {
        heading: "Vos droits",
        body:
          "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données lorsque ces droits s’appliquent, ainsi que vous opposer à certains traitements ou retirer votre consentement. La demande peut être adressée via la page de contact. Vous pouvez également introduire une réclamation auprès de la CNIL.",
      },
    ],
    cta: {
      label: "Exercer mes droits",
      href: "/contact",
    },
  },

  "/cookies": {
    slug: "cookies",
    eyebrow: "Vos choix de navigation",
    title: "Gestion des cookies",
    description:
      "Cette page présente les catégories de traceurs susceptibles d’être utilisées et la manière de les accepter, les refuser ou modifier votre choix.",
    seo: {
      title: "Gestion des cookies | 3h36 Agency",
      description:
        "Comprenez l’usage des cookies nécessaires et optionnels, puis modifiez vos préférences de consentement à tout moment.",
    },
    sections: [
      {
        heading: "Cookies strictement nécessaires",
        body:
          "Certains traceurs peuvent être indispensables au fonctionnement, à la sécurité ou à la mémorisation de vos choix de consentement. Ils ne sont pas utilisés pour mesurer l’audience ou personnaliser une publicité et ne peuvent pas être désactivés depuis le gestionnaire lorsque leur dépôt est strictement nécessaire.",
      },
      {
        heading: "Mesure d’audience et services optionnels",
        body:
          "Des outils tels que Google Analytics 4 ou Microsoft Clarity ne doivent être mentionnés ici que s’ils sont réellement activés. Lorsqu’un consentement est requis, aucun traceur optionnel ne doit être déposé avant votre accord.",
        bullets: [
          "Outil de mesure d’audience effectivement utilisé : [À compléter]",
          "Finalité, fournisseur, durée et nom des cookies : [À compléter]",
          "Services externes ou publicitaires éventuellement intégrés : [À compléter]",
        ],
      },
      {
        heading: "Accepter, refuser ou changer d’avis",
        body:
          "Vous pouvez accepter ou refuser les traceurs optionnels avec le même niveau de simplicité, puis modifier votre choix à tout moment. Les durées de conservation du consentement et des traceurs doivent être renseignées selon les outils retenus et la réglementation applicable.",
      },
    ],
    cta: {
      label: "Gérer mes préférences",
      href: "#cookie-preferences",
    },
  },
} as const satisfies Record<PageRoute, PageContent>;
