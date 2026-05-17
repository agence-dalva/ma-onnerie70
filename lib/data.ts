const S3 = "https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/32223";

export const siteConfig = {
  name: "Maçonnerie 70",
  fullName: "Maçonnerie 70 Père & Fils",
  tagline: "Votre expert en maçonnerie et terrassement",
  description: "Entreprise familiale fondée avec passion. Maçonnerie, construction, rénovation et terrassement en Haute-Saône depuis 2010.",
  phone: "03 39 55 00 08",
  email: "contact.maconnerie70@gmail.com",
  address: "5 Rue Sieur de Gersanne",
  city: "Champagney",
  zip: "70290",
  radius: "100 kms",
  founded: "2010",
  team: "7 artisans",
  hours: [
    { day: "Du lundi au vendredi", time: "9h00 - 12h00 / 13h30 - 17h30" },
    { day: "Samedi", time: "Sur rendez-vous" },
    { day: "Dimanche", time: "Fermé" },
  ],
  logo: `${S3}/modif28022025/logo-MACONNERIE%2070-3.webp`,
  socials: {
    facebook: "https://www.facebook.com/maconnerie70",
    instagram: "https://www.instagram.com/maconnerie70/",
    youtube: "https://www.youtube.com/@Maconnerie70",
    tiktok: "https://www.tiktok.com/@maconnerie_70",
    maps: "https://www.google.com/maps/place/Maçonnerie+70/",
  },
};

export const services = [
  {
    id: "maisons",
    slug: "maison-individuelle",
    title: "Maisons Individuelles",
    subtitle: "Construction neuve",
    description:
      "Construction de maisons individuelles. De la conception à la livraison, nous réalisons votre projet de vie avec expertise et passion.",
    image: "/photos/maisons-individuelles/construction-neuve.JPG",
    icon: "🏠",
    features: ["Plans & conception", "Fondations & structure", "Sous-sol & vides sanitaires", "Rez de chaussé & étages"],
    galleryCategory: "construction",
  },
  {
    id: "renovation",
    slug: "renovation",
    title: "Rénovation & Extensions",
    subtitle: "Transformation & agrandissement",
    description:
      "Donnez une nouvelle vie à votre habitat. Ouvertures, extensions latérales, création de pièces supplémentaires et rénovation complète.",
    image: `${S3}/RECADRE%CC%81/DSC_7843.jpg`,
    icon: "🔨",
    features: ["Ouvertures de murs porteurs", "Extensions", "Aménagements extérieurs", "Maçonnerie en pierres"],
    galleryCategory: "renovation",
  },
  {
    id: "beton",
    slug: "beton-banche",
    title: "Béton Armé",
    subtitle: "Structure & solidité",
    description:
      "Spécialistes du béton armé pour des constructions d'une solidité et d'une durabilité exemplaires. Murs, poteaux, dalles ...",
    image: "/photos/beton-arme/beton-arme.jpg",
    icon: "⚙️",
    features: ["Murs en béton banché", "Prémur / prédalle", "Poteaux / poutres", "Dalle pleine", "Escaliers"],
    galleryCategory: "construction",
  },
  {
    id: "enduits",
    slug: "enduits-exterieurs",
    title: "Enduits Extérieurs",
    subtitle: "Protection & esthétique",
    description:
      "Application d'enduits monocouche et de finitions pour protéger et embellir vos facades. Travail soigné et matériaux durables.",
    image: "/photos/enduits-exterieurs/enduits-exterieurs.JPG",
    icon: "🎨",
    features: ["Enduits monocouche", "Finitions décoratives", "Isolation par l'extérieur", "Ravalement complet"],
    galleryCategory: "enduits",
  },
  {
    id: "terrassement",
    slug: "terrassement",
    title: "Terrassement & VRD",
    subtitle: "Préparation du terrain",
    description:
      "Décapage, nivellement, et fouilles. Nous maîtrisons toutes les étapes de préparation du terrain jusqu'au VRD.",
    image: `${S3}/RECADRE%CC%81/IMG_5509.jpg`,
    icon: "🚜",
    features: ["Terrassement général", "Fondations & radiers", "Réseaux VRD", "Drainage & assainissement"],
    galleryCategory: "terrassement",
  },
];

export const stats = [
  { value: 15, suffix: " ans", label: "d'expérience" },
  { value: 7, suffix: "", label: "artisans qualifiés" },
  { value: 100, suffix: " kms", label: "de rayon d'action" },
  { value: 5000, suffix: " m²", label: "d'entrepôt moderne" },
];

export const gallery = [
  {
    src: `${S3}/RECADRE%CC%81/IMG_5846.jpg`,
    alt: "Construction maison individuelle",
    category: "construction",
    span: "tall",
  },
  {
    src: `${S3}/RECADRE%CC%81/DSC_7843.jpg`,
    alt: "Rénovation maçonnerie",
    category: "renovation",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5509.jpg`,
    alt: "Terrassement",
    category: "terrassement",
    span: "wide",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5246.jpg`,
    alt: "Béton banché",
    category: "construction",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_0687.jpg`,
    alt: "Enduit extérieur",
    category: "enduits",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5487%202.jpg`,
    alt: "Entrepôt moderne",
    category: "construction",
    span: "tall",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5931.jpg`,
    alt: "Parc matériel",
    category: "terrassement",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5936%202.jpg`,
    alt: "Recyclage matériaux",
    category: "construction",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_9342.jpg`,
    alt: "Rénovation chantier",
    category: "renovation",
    span: "wide",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_2251.jpg`,
    alt: "Extension maison",
    category: "renovation",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_0697.jpg`,
    alt: "Travaux maçonnerie",
    category: "construction",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_1279.jpg`,
    alt: "Chantier en cours",
    category: "construction",
    span: "normal",
  },
  {
    src: `${S3}/RECADRE%CC%81/IMG_5483.jpg`,
    alt: "Finitions maçonnerie",
    category: "renovation",
    span: "normal",
  },
];

export const zones = [
  { dept: "70", name: "Haute-Saône", cities: ["Champagney", "Héricourt", "Vesoul", "Lure"] },
  { dept: "25", name: "Doubs", cities: ["Montbéliard", "Besançon", "Audincourt"] },
  { dept: "90", name: "Territoire de Belfort", cities: ["Belfort", "Offemont", "Delle"] },
  { dept: "68", name: "Haut-Rhin", cities: ["Mulhouse", "Thann", "Saint-Louis"] },
  { dept: "88", name: "Vosges", cities: ["Remiremont", "Épinal"] },
];

export const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Vidéos", href: "#videos" },
  { label: "Contact", href: "#contact" },
  { label: "Transports 70", href: "https://www.transports70.fr", external: true },
];

export const tiktokVideoIds = [
  "7624815754583592214",
  "7622249469232401686",
  "7602725925276372246",
  "7573786980086074646",
  "7569348295768755478",
  "7558928242904747286",
  "7531816096219909398",
  "7529215602167221526",
  "7505095193343921430",
  "7483855896989240599",
  "7480263279638613270",
  "7473920812286971159",
  "7463931358663019798",
  "7463575153142713622",
  "7454163688220593430",
  "7446373691958545686",
  "7446019142739643670",
  "7445222465481116951",
  "7444905731318369558",
];
