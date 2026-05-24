import Link from "next/link";
import { Zap } from "lucide-react";
import { JobSearch } from "@/components/marketing/job-search";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 md:pt-44"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]"
      />

      <div className="container-tight flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Lanzamiento en Perú · 2026
        </div>

        <h1
          id="hero-heading"
          className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          <span className="block">Empleos verificados.</span>
          <span className="block">Salarios visibles.</span>
          <span className="block text-accent">Postula en 1 click.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          La bolsa de trabajo moderna para profesionales de tecnología y
          marketing en Perú. Sin empleos falsos, sin formularios eternos.
        </p>

        <div className="mt-10 w-full">
          <JobSearch />
        </div>

        <div className="mt-6">
          <Link
            href="/publicar"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            ¿Buscas talento? Publica una vacante gratis →
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
            +500 profesionales esperando
          </span>
          <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true">🇵🇪</span>
            Hecho en Perú
          </span>
        </div>
      </div>
    </section>
  );
}
