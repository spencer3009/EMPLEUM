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
  Flame,
  MapPin,
  Share2,
  Sparkles,
} from "lucide-react";
import { JobSearch } from "@/components/marketing/job-search";
import {
  FEATURED_JOBS,
  type FeaturedJob,
  type Modality,
} from "@/lib/featured-jobs.data";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────────────────
// Filters (decorative — counts will become live once DB is wired up)
// ──────────────────────────────────────────────────────────────

const FILTERS = [
  { label: "Todos", count: FEATURED_JOBS.length },
  {
    label: "Remoto",
    count: FEATURED_JOBS.filter((j) => j.modality === "Remoto").length,
  },
  {
    label: "Híbrido",
    count: FEATURED_JOBS.filter((j) => j.modality === "Híbrido").length,
  },
  {
    label: "Presencial",
    count: FEATURED_JOBS.filter((j) => j.modality === "Presencial").length,
  },
] as const;

// ──────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────

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

// ──────────────────────────────────────────────────────────────
// JobListItem — left column card
// ──────────────────────────────────────────────────────────────

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
      {isSelected && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-accent"
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        {job.isFeatured ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background">
            <Sparkles
              className="h-3 w-3"
              aria-hidden="true"
              strokeWidth={2.5}
            />
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

      <h3 className="mt-3 text-balance text-lg font-semibold tracking-tight text-foreground md:text-xl">
        {job.title}
      </h3>

      <p className="mt-1.5 text-sm text-muted-foreground">
        <span className="font-medium text-foreground/85">{job.company}</span>
        <span aria-hidden="true" className="mx-1.5 text-foreground/25">
          ·
        </span>
        {job.location}
      </p>

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

// ──────────────────────────────────────────────────────────────
// JobDetailPanel — right column, sticky on desktop
// ──────────────────────────────────────────────────────────────

function JobDetailPanel({ job }: { job: FeaturedJob }) {
  const hasResponsibilities =
    job.responsibilities && job.responsibilities.length > 0;
  const hasRequirements = job.requirements && job.requirements.length > 0;
  const hasBenefits = job.benefits && job.benefits.length > 0;
  const hasTags = job.tags.length > 0;

  return (
    <article
      key={job.slug}
      className="animate-fade-in-up flex flex-col rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]"
    >
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

      <div className="space-y-7 p-6 md:p-8">
        <DetailSection title="Descripción del empleo">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {job.description}
          </p>
        </DetailSection>

        {hasResponsibilities && (
          <DetailSection title="Responsabilidades">
            <BulletList items={job.responsibilities!} variant="default" />
          </DetailSection>
        )}

        {hasRequirements && (
          <DetailSection title="Requisitos">
            <BulletList items={job.requirements!} variant="default" />
          </DetailSection>
        )}

        {hasBenefits && (
          <DetailSection title="Beneficios">
            <BulletList items={job.benefits!} variant="benefit" />
          </DetailSection>
        )}

        {hasTags && (
          <DetailSection title="Habilidades / herramientas">
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

// ──────────────────────────────────────────────────────────────
// FeaturedJobs — main section
// ──────────────────────────────────────────────────────────────

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[640px] bg-gradient-to-br from-accent/[0.07] via-transparent to-rose-500/[0.04]"
      />
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="container-tight">
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

        <div className="mt-8 md:mt-10">
          <JobSearch />
        </div>

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

        {/* Master-detail: 50/50 columns. Right panel is sticky with
            internal scroll when content exceeds viewport. */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-2 lg:items-start lg:gap-8">
          {/* Left: vertical list — 40 items, scroll de la página */}
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

          {/* Right: sticky detail panel with subtle internal scroll */}
          <aside
            aria-label="Detalle del empleo seleccionado"
            className="scrollbar-thin lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto"
          >
            <JobDetailPanel job={selected} />
          </aside>
        </div>

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
