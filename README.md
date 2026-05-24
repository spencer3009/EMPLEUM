# Empleum

La bolsa de trabajo moderna para profesionales de tecnología y marketing en Perú.
Empleos verificados, salarios visibles y postulación en 1 click.

## Stack

- **Next.js 14** (App Router) + **TypeScript** estricto
- **TailwindCSS** 3.4 con sistema de diseño basado en variables CSS
- **shadcn/ui** (estilo `new-york`) — Button, Card, Accordion
- **Radix UI** para primitivos accesibles (Accordion, Slot)
- **Lucide React** para íconos
- **Inter** vía `next/font/google`

## Estructura

```
empleum/
├── app/
│   ├── (marketing)/           # Rutas públicas (landing, /empresas)
│   │   ├── layout.tsx         # Navbar + Footer
│   │   ├── page.tsx           # Landing
│   │   └── empresas/page.tsx
│   ├── api/health/route.ts    # GET /api/health
│   ├── layout.tsx             # Layout raíz (fuente, metadata, OG)
│   └── globals.css            # Tokens del sistema de diseño
├── components/
│   ├── ui/                    # Primitivos (button, card, accordion)
│   ├── marketing/             # 10 secciones del landing
│   └── shared/                # Logo, etc.
├── lib/
│   ├── utils.ts               # cn() helper
│   ├── constants.ts           # SITE, NAV_LINKS, FOOTER_COLUMNS...
│   └── db.ts                  # Conexión MySQL (placeholder)
└── public/                    # Assets estáticos
```

## Cómo correrlo

```bash
# 1. Instala dependencias
npm install

# 2. Copia variables de entorno
cp .env.example .env.local
# (edita .env.local con tus credenciales)

# 3. Corre el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

| Comando         | Qué hace                                  |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Servidor de desarrollo en `localhost:3000`|
| `npm run build` | Build de producción                       |
| `npm start`     | Sirve el build de producción              |
| `npm run lint`  | Corre ESLint                              |

## Sistema de diseño

Variables CSS definidas en [app/globals.css](app/globals.css):

| Token              | Valor      | Uso                            |
| ------------------ | ---------- | ------------------------------ |
| `--background`     | `#FAFAFA`  | Fondo de la página             |
| `--foreground`     | `#0A0A0A`  | Texto principal                |
| `--accent`         | `#3B82F6`  | CTAs, énfasis                  |
| `--muted-foreground` | `#737373` | Texto secundario               |
| `--border`         | `#E5E5E5`  | Bordes sutiles                 |
| `--card`           | `#FFFFFF`  | Superficies (cards)            |
| `--radius`         | `0.75rem`  | Border radius base             |

## Componentes del landing

1. `Navbar` — sticky con blur, menú hamburguesa en mobile
2. `Hero` — headline en 3 líneas con CTA primario y trust signal
3. `SocialProof` — 6 logos placeholder en grayscale
4. `HowItWorks` — 3 pasos del flujo de postulación
5. `Differentiators` — grid 2x2 con propuestas de valor
6. `Categories` — 6 categorías clickeables con conteos
7. `ForCompanies` — sección oscura con CTA para reclutadores
8. `Faq` — accordion con 6 preguntas
9. `FinalCta` — cierre con CTA gigante
10. `Footer` — 4 columnas + sociales

## Próximos pasos

- [ ] Conectar Google OAuth para signup
- [ ] Schema y migraciones de MySQL
- [ ] Páginas `/empleos`, `/empleos/[id]`, `/publicar`
- [ ] Dashboard para empresas
- [ ] App nativa (iOS / Android)

Hecho en Perú 🇵🇪
