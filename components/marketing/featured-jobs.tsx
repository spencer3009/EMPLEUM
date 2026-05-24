import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Modality = "Remoto" | "Híbrido" | "Presencial";

interface FeaturedJob {
  slug: string;
  title: string;
  company: string;
  monogram: string;
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
 * Later: replace with `await db.query(...)` or a fetch to /api/jobs.
 */
const FEATURED_JOBS: readonly FeaturedJob[] = [
  {
    slug: "senior-fullstack-engineer-crehana",
    title: "Senior Full-Stack Engineer",
    company: "Crehana",
    monogram: "C",
    location: "Remoto · LatAm",
    modality: "Remoto",
    salaryMin: 8000,
    salaryMax: 12000,
    postedDays: 2,
    tags: ["TypeScript", "Next.js", "PostgreSQL"],
    verified: true,
    isFeatured: true,
    excerpt:
      "Lidera el roadmap del producto principal de Crehana. Stack moderno, equipo distribuido en LatAm, decisiones de arquitectura desde día uno.",
  },
  {
    slug: "product-designer-yape",
    title: "Product Designer (UX/UI)",
    company: "Yape",
    monogram: "Y",
    location: "Lima",
    modality: "Híbrido",
    salaryMin: 6500,
    salaryMax: 9000,
    postedDays: 1,
    tags: ["Figma", "Design Systems", "Mobile"],
    verified: true,
    isFresh: true,
  },
  {
    slug: "growth-marketing-manager-joinnus",
    title: "Growth Marketing Manager",
    company: "Joinnus",
    monogram: "J",
    location: "Remoto · Perú",
    modality: "Remoto",
    salaryMin: 7000,
    salaryMax: 10000,
    postedDays: 3,
    tags: ["Performance", "SEO", "CRM"],
    verified: true,
  },
  {
    slug: "data-analyst-senior-culqi",
    title: "Data Analyst Sr.",
    company: "Culqi",
    monogram: "Cq",
    location: "Lima",
    modality: "Presencial",
    salaryMin: 5500,
    salaryMax: 8000,
    postedDays: 5,
    tags: ["SQL", "Looker", "Python"],
    verified: true,
  },
  {
    slug: "backend-engineer-kambista",
    title: "Backend Engineer (Node.js)",
    company: "Kambista",
    monogram: "K",
    location: "Remoto · Perú",
    modality: "Remoto",
    salaryMin: 7500,
    salaryMax: 11000,
    postedDays: 4,
    tags: ["Node.js", "AWS", "MySQL"],
    verified: true,
  },
  {
    slug: "performance-marketing-lead-rappi",
    title: "Performance Marketing Lead",
    company: "Rappi",
    monogram: "R",
    location: "Lima",
    modality: "Híbrido",
    salaryMin: 8000,
    salaryMax: 13000,
    postedDays: 6,
    tags: ["Paid Media", "Analytics", "B2C"],
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
  return `S/ ${solesFormat.format(min)} – ${solesFormat.format(max)}`;
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
        "group relative flex h-full flex-col rounded-xl border border-foreground/10 p-6 transition-all duration-300",
        "shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]",
        "hover:-translate-y-0.5 hover:border-foreground/40 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_8px_28px_-14px_rgba(10,10,10,0.18)]",
        isFeatured ? "bg-paper" : "bg-card",
      )}
    >
      {/* Top row — monogram + company + verified seal */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            aria-hidden="true"
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-mono text-base font-semibold tracking-tight",
              isFeatured
                ? "bg-foreground text-background"
                : "bg-foreground/5 text-foreground",
            )}
          >
            {job.monogram}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">
              {job.company}
            </p>
            <p className="mt-0.5 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {job.location}
            </p>
          </div>
        </div>
        {job.verified && (
          <span
            title="Empresa y vacante verificadas por Empleum"
            className="inline-flex shrink-0 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55"
          >
            <BadgeCheck className="h-3 w-3" aria-hidden="true" />
            Verificado
          </span>
        )}
      </div>

      {/* Featured-of-the-week label */}
      {isFeatured && (
        <div className="mt-5 inline-flex items-center gap-1.5 self-start rounded-md border border-foreground/15 bg-background/50 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
          <Sparkles
            className="h-3 w-3 text-amber-600"
            aria-hidden="true"
            strokeWidth={2.5}
          />
          Destacado de la semana
        </div>
      )}

      {/* Title */}
      <h3
        className={cn(
          "mt-4 font-semibold tracking-tight text-foreground",
          isFeatured ? "text-2xl leading-[1.15] md:text-[28px]" : "text-lg",
        )}
      >
        {job.title}
      </h3>

      {/* Excerpt (featured only) */}
      {job.excerpt && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {job.excerpt}
        </p>
      )}

      {/* Salary — Bloomberg-style */}
      <div className="mt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Salario mensual
        </p>
        <p
          className={cn(
            "nums mt-1 font-mono font-semibold text-foreground",
            isFeatured ? "text-2xl" : "text-xl",
          )}
        >
          {formatSalary(job.salaryMin, job.salaryMax)}
        </p>
      </div>

      {/* Modality ticker + tags */}
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
          <span
            aria-hidden="true"
            className={cn("h-1.5 w-1.5 rounded-full", modalityDot(job.modality))}
          />
          {job.modality}
        </span>
        {job.tags.length > 0 && (
          <span className="font-mono text-[11px] text-muted-foreground">
            {job.tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && (
                  <span aria-hidden="true" className="text-foreground/25">
                    {" · "}
                  </span>
                )}
                {tag}
              </span>
            ))}
          </span>
        )}
      </div>

      {/* Bottom row — posted time + hover CTA */}
      <div className="mt-auto flex items-center justify-between border-t border-foreground/10 pt-4">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {job.isFresh && (
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          )}
          {job.isFresh ? "Nuevo · " : ""}
          <span className="nums">
            Hace {job.postedDays === 1 ? "1d" : `${job.postedDays}d`}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="inline-flex translate-x-1 items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          Postular
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}

export function FeaturedJobs() {
  return (
    <section
      id="empleos-destacados"
      aria-labelledby="featured-jobs-heading"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-multiply"
      />

      <div className="container-tight relative">
        {/* Editorial header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              [ Nº 03 ] · Empleos destacados
            </p>
            <h2
              id="featured-jobs-heading"
              className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
            >
              Curados esta semana.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
              Verificados, con salario visible. Postulación directa al hiring
              manager — sin intermediarios.
            </p>
          </div>

          <Link
            href="/empleos"
            className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-accent"
          >
            Ver los <span className="nums">1,247</span> empleos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div aria-hidden="true" className="my-8 h-px w-full bg-foreground/10" />

        {/* Filters with counts */}
        <div
          role="tablist"
          aria-label="Filtrar por modalidad"
          className="flex flex-wrap items-center gap-2"
        >
          {FILTERS.map((f, i) => (
            <button
              key={f.label}
              type="button"
              role="tab"
              aria-selected={i === 0}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-md border px-3 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-foreground/15 bg-card text-muted-foreground hover:border-foreground/40 hover:text-foreground",
              )}
            >
              {f.label}
              <span
                className={cn(
                  "nums",
                  i === 0 ? "text-background/70" : "text-foreground/40",
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
