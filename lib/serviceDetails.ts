const S3 = "https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/32223";

export interface ServiceSection {
  title: string;
  text: string;
  items?: string[];
  image?: string;
  imageAlt?: string;
}

export interface ServiceProject {
  name: string;
  city: string;
  enTete: string;
  photos: Array<{ src: string; alt: string }>;
}

export interface ServiceDetail {
  slug: string;
  heroImage: string;
  heroVideo?: string;
  pageDescription: string;
  sections: ServiceSection[];
  gallery: Array<{ src: string; alt: string }>;
  projects?: ServiceProject[];
}

export const serviceDetails: ServiceDetail[] = [
  // ─── Maison Individuelle ───────────────────────────────────────────────────
  {
    slug: "maison-individuelle",
    heroImage: `${S3}/RECADRE%CC%81/DJI_0310%202.jpg`,
    heroVideo: "GlC8yrzRg6k",
    pageDescription:
      "Chez Maçonnerie 70 Père & Fils, nous savons que la construction de votre maison individuelle est bien plus qu'un simple chantier : c'est un projet de vie. En tant que maçons expérimentés, nous vous accompagnons dans la réalisation de votre rêve, de la première pierre jusqu'à la livraison, avec exigence et passion.",
    sections: [
      {
        title: "Un savoir-faire à toute épreuve pour une construction solide",
        text: "Notre expertise en maçonnerie générale nous permet de maîtriser chaque étape de la construction de votre maison individuelle, dans le respect des normes techniques et des délais convenus.",
        items: [
          "Fondations et structure : la base d'une maison durable",
          "Murs et élévation : des matériaux de qualité pour une solidité maximale",
          "Finitions et détails : un travail soigné pour un résultat parfait",
        ],
        image: `${S3}/RECADRE%CC%81/DJI_0310%202.jpg`,
        imageAlt: "Vue aérienne chantier maison individuelle",
      },
      {
        title: "Accompagnement sur-mesure avec nos architectes partenaires",
        text: "Bien que nous ne soyons pas promoteurs, nous avons l'habitude de travailler en étroite collaboration avec des architectes pour que votre maison soit parfaitement adaptée à vos besoins et à votre terrain. Nous intervenons dans un rayon de 100 kms autour de Champagney (70290), couvrant la Haute-Saône, le Doubs, le Territoire de Belfort, le Haut-Rhin et les Vosges.",
        image: "/photos/maisons-individuelles/image-section-02.jpg",
        imageAlt: "Accompagnement sur-mesure maison individuelle",
      },
      {
        title: "Brique ou aggloméré : quel matériau choisir ?",
        text: "Nous vous conseillons sur le choix des matériaux selon vos priorités : performance énergétique, budget et esthétique. Chaque option a ses avantages, et nous saurons vous guider vers la solution la plus adaptée à votre projet.",
        items: [
          "Brique : excellente isolation thermique et acoustique, forte inertie thermique, réduction des coûts énergétiques à long terme",
          "Aggloméré : solution économique à l'achat, bonne solidité structurelle, facilité de mise en œuvre",
          "Les deux matériaux permettent de réaliser des maisons durables, performantes et esthétiques",
        ],
        image: "/photos/maisons-individuelles/image-section-03.JPG",
        imageAlt: "Brique ou aggloméré : choix des matériaux",
      },
    ],
    gallery: [],
    projects: [
      {
        name: "Maison à Champagney",
        city: "Champagney — 70290",
        enTete: "/photos/maisons-individuelles/champagney/en-tete.JPG",
        photos: [
          { src: "/photos/maisons-individuelles/champagney/IMG_5372.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5374.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5393.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5446.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5487.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5490.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5527.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5569.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5573.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5574.jpg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_5575.jpeg", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_4668.JPG", alt: "Chantier Champagney" },
          { src: "/photos/maisons-individuelles/champagney/IMG_4669.JPG", alt: "Chantier Champagney" },
        ],
      },
      {
        name: "Maison à Roppe",
        city: "Roppe — 90380",
        enTete: "/photos/maisons-individuelles/roppe/en-tete.jpg",
        photos: [
          { src: "/photos/maisons-individuelles/roppe/IMG_4579.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_4984.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_4988.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5044.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5220.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5247.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5468.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5847.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5849.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5851.jpg", alt: "Chantier Roppe" },
          { src: "/photos/maisons-individuelles/roppe/IMG_5852.jpg", alt: "Chantier Roppe" },
        ],
      },
      {
        name: "Maison à Ronchamp",
        city: "Ronchamp — 70250",
        enTete: "/photos/maisons-individuelles/ronchamp/en-tete.jpg",
        photos: [
          { src: "/photos/maisons-individuelles/ronchamp/IMG_3325.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_3555.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_3747.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_3793.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_4025.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_4042.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_4208.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_4433.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_5165.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_5789.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_5790.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_5793.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6174.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6461.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6557.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6558.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6560.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6571.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6574.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6575.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6585.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6586.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6590.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6591.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6595.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_6596.jpg", alt: "Chantier Ronchamp" },
          { src: "/photos/maisons-individuelles/ronchamp/IMG_7070.jpg", alt: "Chantier Ronchamp" },
        ],
      },
    ],
  },

  // ─── Rénovation ────────────────────────────────────────────────────────────
  {
    slug: "renovation",
    heroImage: `${S3}/RECADRE%CC%81/IMG_9342.jpg`,
    pageDescription:
      "Votre maison évolue avec vos besoins, et nous sommes là pour vous accompagner dans vos projets d'extension, de rénovation et de reconstruction. Maçonnerie 70 Père & Fils met son savoir-faire à votre service pour transformer et agrandir votre habitation tout en respectant son architecture existante.",
    sections: [
      {
        title: "Travaux de gros œuvre",
        text: "Les travaux de gros œuvre sont essentiels à la stabilité et à la structure du bâtiment. La réalisation d'ouvertures sur mur porteur est l'une de ces interventions délicates, nécessitant une expertise pointue pour modifier la structure tout en maintenant la solidité de l'ensemble.",
        items: [
          "Reprise de maçonnerie et consolidation de murs",
          "Réfection et rénovation des façades (enduits, joints, pierres apparentes)",
          "Création ou agrandissement d'ouvertures (fenêtres, baies vitrées, portes…)",
          "Reconstruction d'escaliers en béton ou en pierre",
          "Reconstruction partielle de bâtiments en pierre, brique ou aggloméré",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_9342.jpg`,
        imageAlt: "Travaux de rénovation maçonnerie",
      },
      {
        title: "Extensions et agrandissements",
        text: "Les extensions et agrandissements visent à accroître la surface de vie de votre habitat. Que vous souhaitiez gagner en confort, en fonctionnalité ou en superficie, nous réalisons tous types d'extensions, en parfaite harmonie avec le bâti existant.",
        items: [
          "Création de pièces supplémentaires (chambres, salons, bureaux, cuisines ouvertes…)",
          "Construction d'un garage ou d'un carport pour protéger vos véhicules",
          "Extension latérale pour agrandir votre surface habitable",
          "Nous prenons en charge toutes les étapes du projet, de la structure aux finitions",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_2251.jpg`,
        imageAlt: "Extension maison",
      },
      {
        title: "Aménagements extérieurs et finitions",
        text: "Les aménagements extérieurs et les finitions concernent les travaux visant à embellir et à sécuriser vos espaces. Le pavage et dallage permettent de créer des surfaces fonctionnelles et esthétiques, tandis que nos équipes s'assurent d'une finition soignée sur l'ensemble du chantier.",
        image: `${S3}/RECADRE%CC%81/IMG_0697.jpg`,
        imageAlt: "Aménagement extérieur maçonnerie",
      },
      {
        title: "Gestion des déchets et organisation de chantier",
        text: "La gestion des déchets sur les chantiers est un aspect essentiel pour garantir un environnement propre et conforme aux normes environnementales. Notre organisation rigoureuse et notre parc matériel moderne nous permettent d'assurer un chantier propre et sécurisé à chaque intervention.",
        items: [
          "Tri et recyclage des déchets de chantier",
          "Location de bennes via notre filiale Transports 70",
          "Chantier propre et sécurisé en permanence",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_1279.jpg`,
        imageAlt: "Organisation chantier rénovation",
      },
    ],
    gallery: [],
    projects: [
      {
        name: "Rénovation à Champagney",
        city: "Champagney — 70290",
        enTete: `${S3}/RECADRE%CC%81/IMG_9342.jpg`,
        photos: [
          { src: `${S3}/RECADRE%CC%81/IMG_2251.jpg`, alt: "Extension maison" },
          { src: `${S3}/RECADRE%CC%81/IMG_0697.jpg`, alt: "Travaux maçonnerie" },
        ],
      },
      {
        name: "Extension à Héricourt",
        city: "Héricourt — 70400",
        enTete: `${S3}/RECADRE%CC%81/IMG_1279.jpg`,
        photos: [
          { src: `${S3}/RECADRE%CC%81/IMG_5483.jpg`, alt: "Finitions maçonnerie" },
          { src: `${S3}/RECADRE%CC%81/DSC_7843.jpg`, alt: "Rénovation façade" },
        ],
      },
    ],
  },

  // ─── Béton Banché ──────────────────────────────────────────────────────────
  {
    slug: "beton-banche",
    heroImage: `${S3}/RECADRE%CC%81/IMG_3793.jpg`,
    pageDescription:
      "Maçonnerie 70 Père & Fils, entreprise champagnerote, est spécialisée dans la conception et la réalisation d'ouvrages en béton armé sur mesure. Grâce à notre expertise et à l'utilisation de techniques de pointe, nous garantissons des structures robustes, adaptées aux exigences de chaque projet, qu'il s'agisse d'une construction neuve ou d'une rénovation.",
    sections: [
      {
        title: "Nos différents ouvrages en béton armé",
        text: "Le béton armé, et plus particulièrement le béton banché, est un matériau incontournable dans le domaine de la construction. Il offre résistance, durabilité et adaptabilité pour tous types de projets.",
        items: [
          "Poteaux et poutres : assurent la stabilité et la solidité des bâtiments",
          "Dalles et planchers : conçus pour supporter des charges importantes",
          "Murs en béton banché : parfaits pour les constructions nécessitant une grande résistance",
          "Escaliers en béton : fonctionnels, esthétiques et durables",
          "Autres ouvrages : radier, fondations, longrines, piscine, rampes d'accès",
        ],
        image: `${S3}/RECADRE%CC%81/new.JPG`,
        imageAlt: "Ouvrage en béton banché",
      },
      {
        title: "Fabrication de poteaux en béton armé",
        text: "La fabrication de poteaux en béton armé est un élément essentiel pour garantir la stabilité des structures verticales. Nous concevons des poteaux sur mesure pour soutenir des charges lourdes tout en respectant les normes de sécurité en vigueur. Chaque poteau est ferraillé et bétonné avec précision.",
        image: `${S3}/RECADRE%CC%81/IMG_3793.jpg`,
        imageAlt: "Poteaux béton armé",
      },
      {
        title: "Réalisation de murs en béton armé",
        text: "Les murs en béton armé sont indispensables dans de nombreux types de construction, assurant à la fois résistance et durabilité. Notre équipe maîtrise parfaitement la technique du coffrage et du coulage pour garantir des murs parfaitement verticaux et homogènes.",
        image: `${S3}/RECADRE%CC%81/IMG_5245.jpg`,
        imageAlt: "Murs en béton banché",
      },
      {
        title: "Conception de dalles pleines en béton armé",
        text: "Les dalles pleines en béton armé sont utilisées pour réaliser des planchers solides et durables. Dotées d'une grande solidité, elles sont conçues sur mesure pour assurer une résistance maximale aux charges, avec un ferraillage adapté à chaque projet.",
        image: `${S3}/RECADRE%CC%81/c0934216-54a3-4065-8e44-229798f49d88.jpg`,
        imageAlt: "Dalle béton armé",
      },
      {
        title: "Béton décoratif : esthétique et moderne",
        text: "Apportez une touche contemporaine et élégante à vos projets grâce aux murs et sols en béton décoratifs. Adaptés aussi bien aux constructions résidentielles que commerciales, ces ouvrages sont conçus sur mesure pour allier résistance et esthétique.",
        items: [
          "Béton taloché mécaniquement : surface lisse et raffinée",
          "Béton balayé : effet texturé apportant du caractère",
          "Béton imprimé : finition personnalisée imitant des motifs variés",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_5940.jpg`,
        imageAlt: "Béton décoratif",
      },
    ],
    gallery: [],
    projects: [
      {
        name: "Béton banché à Lure",
        city: "Lure — 70200",
        enTete: `${S3}/RECADRE%CC%81/new.JPG`,
        photos: [
          { src: `${S3}/RECADRE%CC%81/IMG_3793.jpg`, alt: "Poteaux béton" },
          { src: `${S3}/RECADRE%CC%81/IMG_5245.jpg`, alt: "Murs béton armé" },
        ],
      },
      {
        name: "Dalles et poteaux à Champagney",
        city: "Champagney — 70290",
        enTete: `${S3}/RECADRE%CC%81/c0934216-54a3-4065-8e44-229798f49d88.jpg`,
        photos: [
          { src: `${S3}/RECADRE%CC%81/IMG_5940.jpg`, alt: "Béton décoratif" },
          { src: `${S3}/RECADRE%CC%81/IMG_5246.jpg`, alt: "Ouvrage béton" },
        ],
      },
    ],
  },

  // ─── Enduits ────────────────────────────────────────────────────────────────
  {
    slug: "enduits-exterieurs",
    heroImage: `${S3}/Crea2025/modif%2010.2.25/L%E2%80%99enduit-gratt%C3%A9-pr%C3%A8s-de-Belfort3.png`,
    pageDescription:
      "Maçonnerie 70 vous propose la pose d'enduits extérieurs par projection, une solution idéale pour améliorer l'aspect esthétique et la durabilité de vos façades, en neuf comme en rénovation. Nous mettons à votre service notre savoir-faire pour garantir un résultat de qualité, durable et parfaitement adapté à vos besoins.",
    sections: [
      {
        title: "L'enduit gratté",
        text: "L'enduit gratté est un type d'enduit décoratif et texturé, qui garantit une finition robuste et esthétique. Ce type d'application consiste à appliquer un enduit sur la façade puis à le gratter à l'aide d'un outil spécifique, créant ainsi des reliefs réguliers qui donnent du caractère à votre maison.",
        image: `${S3}/Crea2025/modif%2010.2.25/L%E2%80%99enduit-gratt%C3%A9-pr%C3%A8s-de-Belfort3.png`,
        imageAlt: "Enduit gratté façade",
      },
      {
        title: "L'enduit taloché",
        text: "L'enduit taloché est un revêtement extérieur très recherché pour sa finition lisse et soignée. Appliqué avec une taloche, un outil plat et large, ce type d'enduit est utilisé pour obtenir un effet mat ou satiné, avec des finitions plus douces et discrètes que le gratté.",
        image: `${S3}/Crea2025/L%E2%80%99enduit%20taloch%C3%A9%20%C3%A0%20Champagney.webp`,
        imageAlt: "Enduit taloché à Champagney",
      },
      {
        title: "L'enduit projeté",
        text: "L'enduit projeté est appliqué à l'aide d'un appareil de projection, ce qui permet d'obtenir un résultat rapide et uniforme, avec une texture en relief. Cette technique convient parfaitement aux grandes surfaces et garantit une couverture homogène.",
        image: `${S3}/Crea2025/L%E2%80%99enduit-projet%C3%A9-pr%C3%A8s-de-Belfort.png`,
        imageAlt: "Enduit projeté près de Belfort",
      },
      {
        title: "L'enduit écrasé",
        text: "L'enduit écrasé est une technique d'application où l'enduit est projeté puis écrasé ou lissé à l'aide d'une taloche ou d'un autre outil, pour créer une surface lisse ou légèrement texturée avec un effet esthétique distinctif et moderne.",
        image: `${S3}/Crea2025/modif%2010.2.25/L%E2%80%99enduit-gratt%C3%A9-pr%C3%A8s-de-Belfort2.png`,
        imageAlt: "Enduit écrasé façade",
      },
      {
        title: "Réparation de fissures",
        text: "Nous comprenons l'importance de préserver l'authenticité de votre habitat. Nous proposons des services spécialisés de réparation de fissures pour restaurer l'intégrité de vos murs tout en maintenant leur caractère d'origine. Chaque fissure est traitée avec les matériaux adaptés pour éviter toute récidive.",
        image: `${S3}/Crea2025/R%C3%A9paration%20de%20fissure%20%C3%A0%20Champagney.webp`,
        imageAlt: "Réparation de fissure à Champagney",
      },
      {
        title: "Pointement des maisons en pierres",
        text: "Pour les maisons en pierres, nous réalisons des travaux de pointement, une technique traditionnelle qui consiste à refaire les joints entre les pierres. Ce travail minutieux redonne vie à votre façade tout en assurant une étanchéité parfaite et en préservant l'aspect authentique du bâti ancien.",
        image: `${S3}/Crea2025/Pointement%20des%20maisons%20en%20pierres%20%C3%A0%20Champagney.webp`,
        imageAlt: "Pointement maison en pierres à Champagney",
      },
    ],
    gallery: [],
    projects: [
      {
        name: "Enduit gratté près de Belfort",
        city: "Belfort — 90000",
        enTete: `${S3}/Crea2025/modif%2010.2.25/L%E2%80%99enduit-gratt%C3%A9-pr%C3%A8s-de-Belfort3.png`,
        photos: [
          { src: `${S3}/Crea2025/modif%2010.2.25/L%E2%80%99enduit-gratt%C3%A9-pr%C3%A8s-de-Belfort2.png`, alt: "Enduit gratté" },
          { src: `${S3}/Crea2025/L%E2%80%99enduit-projet%C3%A9-pr%C3%A8s-de-Belfort.png`, alt: "Enduit projeté" },
        ],
      },
      {
        name: "Enduit taloché à Champagney",
        city: "Champagney — 70290",
        enTete: `${S3}/Crea2025/L%E2%80%99enduit%20taloch%C3%A9%20%C3%A0%20Champagney.webp`,
        photos: [
          { src: `${S3}/Crea2025/R%C3%A9paration%20de%20fissure%20%C3%A0%20Champagney.webp`, alt: "Réparation fissure" },
          { src: `${S3}/Crea2025/Pointement%20des%20maisons%20en%20pierres%20%C3%A0%20Champagney.webp`, alt: "Pointement pierres" },
        ],
      },
    ],
  },

  // ─── Terrassement ──────────────────────────────────────────────────────────
  {
    slug: "terrassement",
    heroImage: `${S3}/Crea2025/Projet%20de%20terrassement%20%C3%A0%20Champagney.webp`,
    pageDescription:
      "Maçonnerie 70, votre entreprise champagnerote, vous propose des prestations de qualité en terrassement et en VRD. Nous effectuons tous les travaux de réseaux divers dans les meilleures conditions, et vous accompagnons dans l'installation de différents réseaux privés : eau, gaz, électricité ou télécommunication.",
    sections: [
      {
        title: "Terrassement de pleine masse",
        text: "Le terrassement de pleine masse consiste à remettre un terrain à niveau ou à lui donner une forme spécifique. C'est la première étape fondamentale de tout projet de construction. Nous réalisons ces travaux avec précision, à l'aide de notre parc matériel moderne (pelles hydrauliques, chargeur articulé).",
        image: `${S3}/Crea2025/Terrassement%20de%20pleine%20masse%20%C3%A0%20Champagney.webp`,
        imageAlt: "Terrassement de pleine masse à Champagney",
      },
      {
        title: "Décapage de terres végétales",
        text: "Le décapage des terres végétales permet de retirer la couche supérieure du sol, souvent riche en matières organiques, pour atteindre un sol porteur stable. Cette étape est indispensable avant toute fondation pour garantir la pérennité de la construction.",
        image: `${S3}/Crea2025/D%C3%A9capage%20de%20terres%20v%C3%A9g%C3%A9tales%20%C3%A0%20Champagney.webp`,
        imageAlt: "Décapage terres végétales à Champagney",
      },
      {
        title: "Fondation au radier",
        text: "La création de fondations au radier est une technique qui consiste à couler une dalle en béton directement sur le sol. Cette approche assure une répartition optimale des charges et une excellente résistance structurelle, particulièrement adaptée aux terrains argileux ou instables.",
        image: `${S3}/Crea2025/Fondation%20au%20radier%20%C3%A0%20Champagney.webp`,
        imageAlt: "Fondation au radier à Champagney",
      },
      {
        title: "Réalisation des évacuations du terrain",
        text: "Une bonne gestion des eaux est cruciale pour éviter les problèmes d'humidité ou d'infiltration dans votre construction. Nous mettons en place des systèmes de drainage efficaces pour protéger votre bâtiment sur le long terme.",
        items: [
          "Pose de drains et systèmes de drainage périphérique",
          "Canalisations d'évacuation des eaux pluviales",
          "Mise en place de regards et de puisards",
        ],
        image: `${S3}/Crea2025/Syst%C3%A8mes%20de%20drainage%20%C3%A0%20Champagney.webp`,
        imageAlt: "Systèmes de drainage à Champagney",
      },
      {
        title: "VRD — Réseaux humides",
        text: "Les réseaux humides concernent la gestion des fluides tels que l'eau potable, les eaux usées et les eaux pluviales. Nous installons et raccordons tous les réseaux enterrés pour assurer une viabilité complète de votre terrain.",
        items: [
          "Adduction d'eau potable",
          "Évacuation des eaux usées et raccordement au tout-à-l'égout",
          "Gestion des eaux pluviales",
        ],
        image: `${S3}/Crea2025/Installation%20canal%20%C3%A0%20Champagney.webp`,
        imageAlt: "Installation canal à Champagney",
      },
      {
        title: "VRD — Réseaux secs",
        text: "Les réseaux secs regroupent les installations nécessaires à la distribution d'électricité, de gaz et de télécommunications. Nous réalisons les tranchées et posons les fourreaux pour permettre l'alimentation de votre futur bâtiment.",
        items: [
          "Tranchées pour réseaux électriques et gaz",
          "Pose de fourreaux télécommunications (fibre, téléphone)",
          "Raccordement aux réseaux publics",
        ],
        image: `${S3}/Crea2025/Canalisation%20%C3%A0%20Champagney.webp`,
        imageAlt: "Canalisation à Champagney",
      },
    ],
    gallery: [],
    projects: [
      {
        name: "Terrassement à Champagney",
        city: "Champagney — 70290",
        enTete: `${S3}/Crea2025/Projet%20de%20terrassement%20%C3%A0%20Champagney.webp`,
        photos: [
          { src: `${S3}/Crea2025/Terrassement%20de%20pleine%20masse%20%C3%A0%20Champagney.webp`, alt: "Terrassement pleine masse" },
          { src: `${S3}/Crea2025/D%C3%A9capage%20de%20terres%20v%C3%A9g%C3%A9tales%20%C3%A0%20Champagney.webp`, alt: "Décapage terres végétales" },
          { src: `${S3}/Crea2025/Fondation%20au%20radier%20%C3%A0%20Champagney.webp`, alt: "Fondation au radier" },
        ],
      },
      {
        name: "VRD à Héricourt",
        city: "Héricourt — 70400",
        enTete: `${S3}/Crea2025/Syst%C3%A8mes%20de%20drainage%20%C3%A0%20Champagney.webp`,
        photos: [
          { src: `${S3}/Crea2025/Installation%20canal%20%C3%A0%20Champagney.webp`, alt: "Installation canal" },
          { src: `${S3}/Crea2025/Canalisation%20%C3%A0%20Champagney.webp`, alt: "Canalisation" },
        ],
      },
    ],
  },
  // ─── Transports 70 ────────────────────────────────────────────────────────
  {
    slug: "transports-70",
    heroImage: `${S3}/RECADRE%CC%81/IMG_5931.jpg`,
    pageDescription:
      "Maçonnerie 70 dispose de sa propre filiale de transport, Transports 70, pour assurer l'acheminement de matériaux, matériels et déchets de chantier dans les meilleures conditions. Grâce à notre camion amplirol équipé d'une grue, nous offrons une solution logistique complète et réactive à tous nos clients.",
    sections: [
      {
        title: "Camion amplirol avec grue embarquée",
        text: "Notre véhicule amplirol est équipé d'une grue embarquée qui permet la manutention de charges lourdes directement sur le chantier. Cet équipement polyvalent nous permet de charger, décharger et positionner avec précision tous types de matériaux ou de bennes.",
        items: [
          "Chargement et déchargement de matériaux de construction",
          "Livraison sur chantiers difficiles d'accès",
          "Manutention de charges lourdes grâce à la grue",
          "Pose et reprise de bennes à déchets",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_5931.jpg`,
        imageAlt: "Camion amplirol Transports 70",
      },
      {
        title: "Location et gestion de bennes",
        text: "Nous mettons à disposition des bennes pour la collecte et l'évacuation de vos déchets de chantier. Qu'il s'agisse de gravats, de déblais ou de matériaux en fin de vie, nous assurons une gestion propre, efficace et respectueuse de l'environnement.",
        items: [
          "Location de bennes de différentes capacités",
          "Évacuation de gravats, déblais et déchets de chantier",
          "Tri et acheminement vers les filières de recyclage agréées",
          "Intervention rapide pour les demandes urgentes",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_5509.jpg`,
        imageAlt: "Gestion de bennes et déchets de chantier",
      },
      {
        title: "Livraison de matériaux sur chantier",
        text: "Pour répondre aux besoins logistiques de vos chantiers, Transports 70 assure la livraison de matériaux directement sur site. Palettes, agglos, sable, gravier, terres, bois de coffrage : nous transportons tout ce dont vous avez besoin, quand vous en avez besoin.",
        items: [
          "Livraison de palettes et matériaux de construction",
          "Transport de terres, sable, graviers et remblais",
          "Approvisionnement en bois de coffrage et matériels",
          "Rayon d'intervention de 100 kms autour de Champagney",
        ],
        image: `${S3}/RECADRE%CC%81/IMG_5936%202.jpg`,
        imageAlt: "Livraison de matériaux sur chantier",
      },
    ],
    gallery: [
      { src: `${S3}/RECADRE%CC%81/IMG_5931.jpg`, alt: "Camion amplirol Transports 70" },
      { src: `${S3}/RECADRE%CC%81/IMG_5509.jpg`, alt: "Chantier terrassement" },
      { src: `${S3}/RECADRE%CC%81/IMG_5936%202.jpg`, alt: "Parc matériel" },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((d) => d.slug === slug);
}
