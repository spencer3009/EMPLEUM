import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobSearch } from "@/components/marketing/job-search";
import { cn } from "@/lib/utils";

type Modality = "Remoto" | "Híbrido" | "Presencial";

interface FeaturedJob {
  slug: string;
  title: string;
  company: string;
  location: string;
  modality: Modality;
  salaryMin: number;
  salaryMax: number;
  postedDays: number;
  tags: readonly string[];
  verified: boolean;
  isFresh?: boolean;
  isFeatured?: boolean;
  excerpt?: string;
}

/**
 * Hardcoded for the initial scaffold.
 * Salary ranges + titles reflect the real Peruvian tech/marketing market.
 * Practicantes S/1k–1.5k · Asistentes S/2k–3.5k · Analistas/Coordinadores S/4k–7k · Líderes S/7k–12k.
 * Later: replace with `await db.query(...)` or a fetch to /api/jobs.
 */
const FEATURED_JOBS: readonly FeaturedJob[] = [
  {
    slug: "lider-desarrollo-full-stack-crehana",
    title: "Líder de Desarrollo Full Stack",
    company: "Crehana",
    location: "Remoto · Latinoamérica",
    modality: "Remoto",
    salaryMin: 7000,
    salaryMax: 10500,
    postedDays: 2,
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    verified: true,
    isFeatured: true,
    excerpt:
      "Lidera el desarrollo del producto principal de Crehana. Equipo distribuido en Latinoamérica, tecnología moderna y decisiones de arquitectura desde el primer día.",
  },
  {
    slug: "disenador-de-producto-yape",
    title: "Diseñador de Producto (UX/UI)",
    company: "Yape",
    location: "San Isidro, Lima",
    modality: "Híbrido",
    salaryMin: 5500,
    salaryMax: 7800,
    postedDays: 1,
    tags: ["Figma", "Sistemas de Diseño", "Móvil"],
    verified: true,
    isFresh: true,
  },
  {
    slug: "jefe-de-marketing-digital-joinnus",
    title: "Jefe de Marketing Digital",
    company: "Joinnus",
    location: "Remoto · Perú",
    modality: "Remoto",
    salaryMin: 4500,
    salaryMax: 6500,
    postedDays: 3,
    tags: ["Rendimiento", "SEO", "CRM"],
    verified: true,
  },
  {
    slug: "practicante-analisis-datos-culqi",
    title: "Practicante de Análisis de Datos",
    company: "Culqi",
    location: "Miraflores, Lima",
    modality: "Presencial",
    salaryMin: 1300,
    salaryMax: 1500,
    postedDays: 1,
    tags: ["SQL", "Excel", "Power BI"],
    verified: true,
    isFresh: true,
  },
  {
    slug: "desarrollador-backend-kambista",
    title: "Desarrollador Backend (Node.js)",
    company: "Kambista",
    location: "Remoto · Perú",
    modality: "Remoto",
    salaryMin: 4500,
    salaryMax: 6500,
    postedDays: 4,
    tags: ["Node.js", "AWS", "MySQL"],
    verified: true,
  },
  {
    slug: "asistente-redes-sociales-rappi",
    title: "Asistente de Redes Sociales",
    company: "Rappi",
    location: "Surquillo, Lima",
    modality: "Híbrido",
    salaryMin: 2200,
    salaryMax: 3000,
    postedDays: 6,
    tags: ["Redes Sociales", "Redacción", "Anuncios Meta"],
    verified: true,
  },
];

const FILTERS = [
  { label: "Todos", count: 28 },
  { label: "Remoto", count: 14 },
  { label: "Híbrido", count: 9 },
  { label: "Presencial", count: 5 },
] as const;

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

function JobCard({ job }: { job: FeaturedJob }) {
  const isFeatured = job.isFeatured ?? false;

  return (
    <Link
      href={`/empleos/${job.slug}`}
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border p-5 transition-all duration-200 md:p-6",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-14px_rgba(10,10,10,0.18)]",
        isFeatured
          ? "border-foreground/20 bg-paper hover:border-foreground/50"
          : "border-border bg-card hover:border-foreground/30",
      )}
    >
      {/* Top row — badge + arrow */}
      <div className="flex items-start justify-between gap-3">
        {isFeatured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
            <Sparkles
              className="h-3 w-3"
              aria-hidden="true"
              strokeWidth={2.5}
            />
            Destacado de la semana
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Postula en 1 clic
          </span>
        )}
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-muted-foreground/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        />
      </div>

      {/* Title */}
      <h3
        className={cn(
          "mt-4 text-balance font-semibold tracking-tight text-foreground",
          isFeatured
            ? "text-2xl leading-[1.15] md:text-[26px]"
            : "text-lg leading-snug md:text-xl",
        )}
      >
        {job.title}
      </h3>

      {/* Company · Location */}
      <p className="mt-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground/85">{job.company}</span>
        <span aria-hidden="true" className="mx-1.5 text-foreground/25">
          ·
        </span>
        {job.location}
      </p>

      {/* Excerpt — featured only */}
      {job.excerpt && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {job.excerpt}
        </p>
      )}

      {/* Salary pill */}
      <div className="mt-5">
        <span
          className={cn(
            "inline-flex items-baseline gap-1.5 rounded-lg px-3 py-2 text-sm font-medium",
            isFeatured
              ? "bg-foreground text-background"
              : "bg-secondary text-foreground",
          )}
        >
          <span className="nums font-mono">
            {formatSalary(job.salaryMin, job.salaryMax)}
          </span>
          <span
            className={cn(
              "text-xs font-normal",
              isFeatured ? "text-background/70" : "text-muted-foreground",
            )}
          >
            por mes
          </span>
        </span>
      </div>

      {/* Bottom row — modality · verified · posted */}
      <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-5 text-xs text-muted-foreground">
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
            <span
              title="Empresa y vacante verificadas por Empleum"
              className="inline-flex items-center gap-1"
            >
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
    </Link>
  );
}

export function FeaturedJobs() {
  return (
    <section
      id="empleos-destacados"
      aria-labelledby="featured-jobs-heading"
      className="relative pt-20 pb-16 md:pt-28 md:pb-24"
    >
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

        {/* Search bar */}
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

        {/* Grid */}
        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {FEATURED_JOBS.map((job) => (
            <li key={job.slug} className="flex">
              <JobCard job={job} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center md:hidden">
          <Button asChild variant="outline" size="lg">
            <Link href="/empleos">
              Ver todos los empleos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
