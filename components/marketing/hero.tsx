import Link from "next/link";
import { JobSearch } from "@/components/marketing/job-search";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-20 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]"
      />

      <div className="container-tight flex flex-col items-center text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Lanzamiento en Perú · 2026
        </div>

        <h1
          id="hero-heading"
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          <span className="block">Empleos verificados.</span>
          <span className="block">Salarios visibles.</span>
          <span className="block text-accent">Postula en 1 clic.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          La bolsa de trabajo moderna para profesionales de tecnología y
          marketing en Perú. Sin empleos falsos, sin formularios eternos.
        </p>

        <div className="mt-8 w-full">
          <JobSearch />
        </div>

        <div className="mt-5">
          <Link
            href="/publicar"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            ¿Buscas talento? Publica una vacante gratis →
          </Link>
        </div>
      </div>
    </section>
  );
}
