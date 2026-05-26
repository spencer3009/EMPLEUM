/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static HTML export para deploy en Hostinger (Apache estático).
  // Genera la carpeta `out/` lista para subir al public_html.
  output: "export",

  // Quita el optimizer de next/image — requerido cuando hay output:'export'
  // porque no hay servidor que sirva imágenes optimizadas dinámicamente.
  images: {
    unoptimized: true,
  },

  // URLs como /empleos/algo (sin barra final) → /empleos/algo/index.html
  // trailingSlash: true permite que Apache las sirva sin .htaccess complejo.
  trailingSlash: true,
};

export default nextConfig;
