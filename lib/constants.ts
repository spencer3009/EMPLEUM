export const SITE = {
  name: "Empleum",
  tagline: "Empleos tech y marketing en Perú",
  description:
    "La bolsa de trabajo moderna para profesionales de tecnología y marketing en Perú. Postula en 1 click. Empleos remotos, híbridos y presenciales.",
  url: "https://empleum.pe",
  locale: "es_PE",
} as const;

export const NAV_LINKS = [
  { label: "Empleos", href: "/empleos" },
  { label: "Para empresas", href: "/empresas" },
  { label: "Precios", href: "/precios" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
] as const;

export const SOCIAL_PROOF_COMPANIES = [
  "Crehana",
  "Joinnus",
  "Kambista",
  "Culqi",
  "Yape",
  "Rappi",
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Producto",
    links: [
      { label: "Buscar empleos", href: "/empleos" },
      { label: "Publicar vacante", href: "/publicar" },
      { label: "Para empresas", href: "/empresas" },
      { label: "Precios", href: "/precios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Empleum", href: "/sobre-nosotros" },
      { label: "Contacto", href: "/contacto" },
      { label: "Trabaja con nosotros", href: "/careers" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Centro de ayuda", href: "/ayuda" },
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
] as const;
