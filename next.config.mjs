/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Cache headers explícitos para evitar el problema de
  // "el sitio se rompe a las horas" en Hostinger.
  //
  // Idea: el HTML siempre revalida (max-age=0 must-revalidate),
  // los assets con hash en su nombre se cachean 1 año (immutable).
  // Así nunca queda HTML viejo apuntando a hashes que ya no existen.
  async headers() {
    return [
      {
        // Assets generados por Next con hash en el nombre — inmutables
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Fuentes desde /_next/static/media/ — inmutables
        source: "/_next/static/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Todo lo demás (HTML, páginas) — revalidar siempre
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
