"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Flame,
  MapPin,
  Share2,
  Sparkles,
} from "lucide-react";
import { JobSearch } from "@/components/marketing/job-search";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

type Modality = "Remoto" | "Híbrido" | "Presencial";
type JobType = "Tiempo completo" | "Medio tiempo" | "Prácticas";

interface FeaturedJob {
  slug: string;
  title: string;
  company: string;
  location: string;
  modality: Modality;
  jobType: JobType;
  salaryMin: number;
  salaryMax: number;
  postedDays: number;
  tags: readonly string[];
  verified: boolean;
  isFresh?: boolean;
  isFeatured?: boolean;
  isUrgent?: boolean;
  description: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  benefits: readonly string[];
}

// ─────────────────────────────────────────────────────────────
// Data — Hardcoded for the scaffold.
// Salary ranges + titles reflect the real Peruvian market.
// Later: replace with `await db.query(...)` or fetch /api/jobs.
// ─────────────────────────────────────────────────────────────

const FEATURED_JOBS: readonly FeaturedJob[] = [
  {
    slug: "lider-desarrollo-full-stack-crehana",
    title: "Líder de Desarrollo Full Stack",
    company: "Crehana",
    location: "Remoto · Latinoamérica",
    modality: "Remoto",
    jobType: "Tiempo completo",
    salaryMin: 7000,
    salaryMax: 10500,
    postedDays: 2,
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    verified: true,
    isFeatured: true,
    description:
      "Buscamos un líder de desarrollo full stack para guiar el equipo del producto principal de Crehana, la plataforma educativa más grande de Latinoamérica. Trabajarás de cerca con producto y diseño tomando decisiones técnicas que impactan a más de 5 millones de usuarios. Equipo distribuido (Perú, México, Colombia, Argentina), 100% remoto.",
    responsibilities: [
      "Liderar técnicamente un equipo de 5 a 8 desarrolladores.",
      "Definir la arquitectura de nuevas funcionalidades del producto.",
      "Hacer mentoría a desarrolladores semi-senior y senior.",
      "Participar en la planificación de roadmap con producto.",
    ],
    requirements: [
      "Más de 5 años de experiencia en desarrollo full stack.",
      "Dominio sólido de TypeScript, Next.js y PostgreSQL.",
      "Experiencia liderando equipos técnicos distribuidos.",
      "Inglés intermedio-avanzado (equipo bilingüe).",
    ],
    benefits: [
      "Salario en dólares con ajuste por inflación.",
      "20 días de vacaciones más feriados peruanos.",
      "Subvención mensual para internet y home office.",
      "Plataforma Crehana gratis (todos los cursos).",
    ],
  },
  {
    slug: "disenador-de-producto-yape",
    title: "Diseñador de Producto (UX/UI)",
    company: "Yape",
    location: "San Isidro, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 5500,
    salaryMax: 7800,
    postedDays: 1,
    tags: ["Figma", "Sistemas de Diseño", "Móvil"],
    verified: true,
    isFresh: true,
    description:
      "Yape busca un diseñador de producto para sumarse al equipo que define la experiencia de la billetera más usada del Perú (más de 18 millones de usuarios). Trabajarás directamente con product managers y desarrolladores en las decisiones de diseño que impactan a millones de transacciones diarias.",
    responsibilities: [
      "Diseñar nuevas funcionalidades de la app Yape (iOS y Android).",
      "Mantener y evolucionar el sistema de diseño de Yape.",
      "Realizar research con usuarios y validar prototipos.",
      "Trabajar en sprints quincenales con producto y desarrollo.",
    ],
    requirements: [
      "Más de 3 años diseñando productos digitales móviles.",
      "Dominio avanzado de Figma y prototipado interactivo.",
      "Experiencia con sistemas de diseño escalables.",
      "Portafolio que demuestre casos de research aplicado.",
    ],
    benefits: [
      "EPS familiar 100% cubierto, incluye dental.",
      "Bonos por desempeño semestral.",
      "Días libres por cumpleaños y mudanza.",
      "Subvención mensual para bienestar.",
    ],
  },
  {
    slug: "jefe-de-marketing-digital-joinnus",
    title: "Jefe de Marketing Digital",
    company: "Joinnus",
    location: "Remoto · Perú",
    modality: "Remoto",
    jobType: "Tiempo completo",
    salaryMin: 4500,
    salaryMax: 6500,
    postedDays: 3,
    tags: ["Rendimiento", "SEO", "CRM"],
    verified: true,
    description:
      "Joinnus, la plataforma líder de eventos en Perú, busca un jefe de marketing digital para liderar la estrategia de adquisición y retención. Trabajarás de la mano con la dirección comercial definiendo KPIs y ejecutando campañas que llevan a millones de peruanos a vivir experiencias inolvidables.",
    responsibilities: [
      "Liderar la estrategia de marketing digital (pagado, orgánico, CRM).",
      "Gestionar un equipo de 3 a 5 especialistas.",
      "Definir y reportar KPIs mensuales al directorio.",
      "Trabajar con producto en ciclos de crecimiento.",
    ],
    requirements: [
      "Más de 4 años de experiencia en marketing digital B2C.",
      "Manejo de presupuestos sobre $10,000 mensuales en publicidad pagada.",
      "Dominio de GA4, Meta Ads, Google Ads y HubSpot.",
      "Inglés intermedio.",
    ],
    benefits: [
      "100% remoto con flexibilidad horaria.",
      "EPS familiar cubierto.",
      "Acceso gratis a eventos premium de Joinnus.",
      "Capacitación anual con presupuesto dedicado.",
    ],
  },
  {
    slug: "practicante-analisis-datos-culqi",
    title: "Practicante de Análisis de Datos",
    company: "Culqi",
    location: "Miraflores, Lima",
    modality: "Presencial",
    jobType: "Prácticas",
    salaryMin: 1300,
    salaryMax: 1500,
    postedDays: 1,
    tags: ["SQL", "Excel", "Power BI"],
    verified: true,
    isFresh: true,
    isUrgent: true,
    description:
      "Culqi, la fintech peruana que procesa pagos digitales para miles de empresas, busca un practicante para sumarse al equipo de Data. Vas a aprender análisis de datos en un contexto real, con datos de pagos en producción y mentoría directa del Head of Data.",
    responsibilities: [
      "Construir reportes en Power BI para los equipos de producto y operaciones.",
      "Hacer consultas SQL sobre la base de transacciones.",
      "Apoyar al equipo de data en limpieza y validación.",
      "Presentar hallazgos semanales al equipo.",
    ],
    requirements: [
      "Estudiante de últimos ciclos de Ingeniería de Sistemas, Estadística o afines.",
      "Conocimientos sólidos de SQL y Excel avanzado.",
      "Inglés básico (lectura técnica).",
      "Disponibilidad de 30 horas semanales presencial en Miraflores.",
    ],
    benefits: [
      "Subvención por encima del promedio del mercado.",
      "Mentoría uno a uno con el Head of Data.",
      "Posibilidad real de quedarse al terminar prácticas (60% lo logra).",
      "EPS desde el primer día.",
    ],
  },
  {
    slug: "desarrollador-backend-kambista",
    title: "Desarrollador Backend (Node.js)",
    company: "Kambista",
    location: "Remoto · Perú",
    modality: "Remoto",
    jobType: "Tiempo completo",
    salaryMin: 4500,
    salaryMax: 6500,
    postedDays: 4,
    tags: ["Node.js", "AWS", "MySQL"],
    verified: true,
    description:
      "Kambista, la casa de cambio digital más confiable del Perú, busca un desarrollador backend para nuestro núcleo de transacciones. Trabajarás en sistemas críticos que procesan millones de soles en operaciones cambiarias diarias.",
    responsibilities: [
      "Mantener y evolucionar microservicios en Node.js sobre AWS.",
      "Optimizar consultas y diseñar nuevos endpoints sobre MySQL.",
      "Implementar pruebas automatizadas y monitoreo.",
      "Revisar código y dar mentoría a desarrolladores junior.",
    ],
    requirements: [
      "Más de 3 años desarrollando backend con Node.js.",
      "Experiencia con AWS (Lambda, RDS, SQS).",
      "Sólido SQL sobre MySQL o PostgreSQL.",
      "Conocimientos de Docker e integración continua.",
    ],
    benefits: [
      "100% remoto en Perú.",
      "Bonos semestrales por desempeño.",
      "EPS para ti y tu familia directa.",
      "Cambio de divisas con tarifa preferencial.",
    ],
  },
  {
    slug: "asistente-redes-sociales-rappi",
    title: "Asistente de Redes Sociales",
    company: "Rappi",
    location: "Surquillo, Lima",
    modality: "Híbrido",
    jobType: "Tiempo completo",
    salaryMin: 2200,
    salaryMax: 3000,
    postedDays: 6,
    tags: ["Redes Sociales", "Redacción", "Anuncios Meta"],
    verified: true,
    description:
      "Rappi Perú busca un asistente para liderar la presencia de la marca en redes sociales (Instagram, TikTok, Facebook). Trabajarás de la mano con el equipo de marketing definiendo la voz, creando contenido y gestionando la comunidad de fans de Rappi.",
    responsibilities: [
      "Planificar y publicar contenido diario en redes sociales.",
      "Responder mensajes y comentarios en menos de 4 horas.",
      "Coordinar con diseño la creación de piezas gráficas.",
      "Reportar métricas semanales de engagement y crecimiento.",
    ],
    requirements: [
      "Más de 1 año gestionando redes sociales de marcas.",
      "Redacción excelente en español (uso natural del peruanismo).",
      "Manejo de Meta Business, Hootsuite y Canva.",
      "Disponibilidad para trabajo híbrido (3 días en oficina Surquillo).",
    ],
    benefits: [
      "Vales de comida mensuales Rappi.",
      "Días libres por cumpleaños.",
      "Plan de carrera definido (camino a Coordinador en 18 meses).",
      "Equipo joven y energético.",
    ],
  },
];

const FILTERS = [
  { label: "Todos", count: 28 },
  { label: "Remoto", count: 14 },
  { label: "Híbrido", count: 9 },
  { label: "Presencial", count: 5 },
] as const;

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

const solesFormat = new Intl.NumberFormat("es-PE", {
  style: "decimal",
  maximumFractionDigits: 0,
});

function formatSalary(min: number, max: number): string {
  if (min === max) return `S/ ${solesFormat.format(min)}`;
  return `S/ ${solesFormat.format(min)} – ${solesFormat.format(max)}`;
}

function relativeTime(days: number): string {
  if (days === 1) return "Hace 1 día";
  return `Hace ${days} días`;
}

function modalityDot(m: Modality): string {
  switch (m) {
    case "Remoto":
      return "bg-accent";
    case "Híbrido":
      return "bg-amber-600";
    case "Presencial":
      return "bg-stone-500";
  }
}

// ─────────────────────────────────────────────────────────────
// JobListItem — left column card
// ─────────────────────────────────────────────────────────────

function JobListItem({
  job,
  isSelected,
  onSelect,
}: {
  job: FeaturedJob;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isSelected}
      className={cn(
        "group relative block w-full overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-14px_rgba(10,10,10,0.18)]",
        isSelected
          ? "border-accent bg-card ring-1 ring-accent/40"
          : job.isFeatured
            ? "border-foreground/15 bg-paper hover:border-foreground/40"
            : "border-border bg-card hover:border-foreground/30",
      )}
    >
      {/* Selected accent rail */}
      {isSelected && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-accent"
        />
      )}

      {/* Top row — badges */}
      <div className="flex flex-wrap items-center gap-2">
        {job.isFeatured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">
            <Sparkles className="h-3 w-3" aria-hidden="true" strokeWidth={2.5} />
            Destacado
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            Postula en 1 clic
          </span>
        )}
        {job.isUrgent && (
          <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-700">
            <Flame className="h-3 w-3" aria-hidden="true" />
            Urge contratar
          </span>
        )}
        <span
          aria-hidden="true"
          className="ml-auto text-muted-foreground/40 transition-colors group-hover:text-foreground"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-balance text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {job.title}
      </h3>

      {/* Company · location */}
      <p className="mt-1.5 text-sm text-muted-foreground">
        <span className="font-medium text-foreground/85">{job.company}</span>
        <span aria-hidden="true" className="mx-1.5 text-foreground/25">
          ·
        </span>
        {job.location}
      </p>

      {/* Salary + jobType pills */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-baseline gap-1.5 rounded-lg bg-secondary px-2.5 py-1.5 text-sm font-medium text-foreground">
          <span className="nums font-mono">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </span>
          <span className="text-xs font-normal text-muted-foreground">
            por mes
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
          <Briefcase className="h-3 w-3" aria-hidden="true" />
          {job.jobType}
        </span>
      </div>

      {/* Bottom row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              modalityDot(job.modality),
            )}
          />
          <span className="text-foreground/85">{job.modality}</span>
        </span>
        {job.verified && (
          <>
            <span aria-hidden="true" className="text-foreground/20">
              ·
            </span>
            <span className="inline-flex items-center gap-1">
              <BadgeCheck
                className="h-3.5 w-3.5 text-accent"
                aria-hidden="true"
              />
              Verificado
            </span>
          </>
        )}
        <span aria-hidden="true" className="text-foreground/20">
          ·
        </span>
        {job.isFresh ? (
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Nuevo · {relativeTime(job.postedDays).toLowerCase()}
          </span>
        ) : (
          <span>{relativeTime(job.postedDays)}</span>
        )}
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// JobDetailPanel — right column, sticky on desktop
// ─────────────────────────────────────────────────────────────

function JobDetailPanel({ job }: { job: FeaturedJob }) {
  return (
    <article
      key={job.slug}
      className="animate-fade-in-up flex flex-col rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]"
    >
      {/* Header */}
      <header className="border-b border-border/70 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {job.isFeatured && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">
              <Sparkles
                className="h-3 w-3"
                aria-hidden="true"
                strokeWidth={2.5}
              />
              Destacado de la semana
            </span>
          )}
          {job.isUrgent && (
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-medium text-rose-700">
              <Flame className="h-3 w-3" aria-hidden="true" />
              Urge contratar
            </span>
          )}
          {job.verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
              <BadgeCheck className="h-3 w-3" aria-hidden="true" />
              Empresa verificada
            </span>
          )}
        </div>

        <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {job.title}
        </h2>

        <div className="mt-3 flex flex-col gap-1.5 text-sm text-foreground/85">
          <p className="inline-flex items-center gap-2">
            <Building2
              className="h-4 w-4 shrink-0 text-muted-foreground"
              aria-hidden="true"
            />
            <span className="font-medium">{job.company}</span>
          </p>
          <p className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
            {job.location}
          </p>
        </div>

        <div className="mt-5 inline-flex items-baseline gap-2 rounded-xl bg-foreground px-4 py-2.5 text-background">
          <span className="nums font-mono text-lg font-semibold md:text-xl">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </span>
          <span className="text-sm font-normal text-background/70">
            por mes
          </span>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link
            href={`/empleos/${job.slug}`}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:from-accent hover:to-blue-700 hover:shadow-md active:scale-[0.98] sm:flex-initial"
          >
            Postular ahora
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label="Guardar empleo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Bookmark className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Compartir empleo"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Info grid */}
      <section
        aria-labelledby="info-heading"
        className="grid grid-cols-2 gap-4 border-b border-border/70 p-6 md:grid-cols-4 md:p-8"
      >
        <h3 id="info-heading" className="sr-only">
          Información del empleo
        </h3>
        <InfoCell
          label="Tipo"
          value={job.jobType}
          icon={<Briefcase className="h-3.5 w-3.5" aria-hidden="true" />}
        />
        <InfoCell
          label="Modalidad"
          value={
            <span className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  modalityDot(job.modality),
                )}
              />
              {job.modality}
            </span>
          }
        />
        <InfoCell
          label="Publicado"
          value={relativeTime(job.postedDays)}
          icon={<Calendar className="h-3.5 w-3.5" aria-hidden="true" />}
        />
        <InfoCell
          label="Verificación"
          value={
            <span className="inline-flex items-center gap-1 text-accent">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              Por Empleum
            </span>
          }
        />
      </section>

      {/* Content sections */}
      <div className="space-y-7 p-6 md:p-8">
        <DetailSection title="Descripción del empleo">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {job.description}
          </p>
        </DetailSection>

        <DetailSection title="Responsabilidades">
          <BulletList items={job.responsibilities} variant="default" />
        </DetailSection>

        <DetailSection title="Requisitos">
          <BulletList items={job.requirements} variant="default" />
        </DetailSection>

        <DetailSection title="Beneficios">
          <BulletList items={job.benefits} variant="benefit" />
        </DetailSection>

        {/* Tags */}
        {job.tags.length > 0 && (
          <DetailSection title="Tecnologías y habilidades">
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </DetailSection>
        )}
      </div>
    </article>
  );
}

function InfoCell({
  label,
  value,
  icon,
}: {
  label: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        {icon}
        {label}
      </span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground/70">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function BulletList({
  items,
  variant,
}: {
  items: readonly string[];
  variant: "default" | "benefit";
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {variant === "benefit" ? (
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
          ) : (
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────
// FeaturedJobs — main section
// ─────────────────────────────────────────────────────────────

export function FeaturedJobs() {
  const [selectedSlug, setSelectedSlug] = React.useState<string>(
    FEATURED_JOBS[0].slug,
  );
  const selected =
    FEATURED_JOBS.find((j) => j.slug === selectedSlug) ?? FEATURED_JOBS[0];

  return (
    <section
      id="empleos-destacados"
      aria-labelledby="featured-jobs-heading"
      className="relative pt-20 pb-16 md:pt-28 md:pb-24"
    >
      {/* Backdrop — soft gradient + dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[640px] bg-gradient-to-br from-accent/[0.07] via-transparent to-rose-500/[0.04]"
      />
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="container-tight">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h1
              id="featured-jobs-heading"
              className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Empleos para ti
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Verificados, con salario claro. Postula directo, sin
              intermediarios.
            </p>
          </div>

          <Link
            href="/empleos"
            className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Ver los <span className="nums font-mono">1,247</span> empleos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Search */}
        <div className="mt-8 md:mt-10">
          <JobSearch />
        </div>

        {/* Filter pills */}
        <div
          role="tablist"
          aria-label="Filtrar por modalidad"
          className="mt-10 flex flex-wrap items-center gap-2 md:mt-12"
        >
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground",
              )}
            >
              {f.label}
              <span
                className={cn(
                  "nums font-mono text-xs",
                  i === 0 ? "text-background/60" : "text-foreground/40",
                )}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Master-detail layout */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-[minmax(0,2.5fr)_minmax(0,3.5fr)] lg:gap-6">
          {/* Left: list */}
          <ul className="space-y-3 lg:space-y-4">
            {FEATURED_JOBS.map((job) => (
              <li key={job.slug}>
                <JobListItem
                  job={job}
                  isSelected={job.slug === selectedSlug}
                  onSelect={() => setSelectedSlug(job.slug)}
                />
              </li>
            ))}
          </ul>

          {/* Right: detail panel — sticky on desktop */}
          <aside
            aria-label="Detalle del empleo seleccionado"
            className="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto"
          >
            <JobDetailPanel job={selected} />
          </aside>
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/empleos"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
          >
            Ver todos los empleos
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
