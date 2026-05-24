import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CHECKS = [
  "Perfiles 100% verificados",
  "Audiencia especializada",
  "Primera vacante gratis",
] as const;

export function ForCompanies() {
  return (
    <section
      id="empresas"
      aria-labelledby="companies-heading"
      className="relative overflow-hidden bg-black py-20 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]"
      />

      <div className="container-tight relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="companies-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            ¿Reclutas talento tech o marketing?
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-white/70 md:text-lg">
            En Computrabajo recibes 500 CVs random. En Empleum recibes 20
            candidatos calificados. Tu equipo de RRHH te lo agradecerá.
          </p>
        </div>

        <ul className="mx-auto mt-10 flex flex-col flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm sm:flex-row md:text-base">
          {CHECKS.map((label) => (
            <li
              key={label}
              className="inline-flex items-center gap-2 text-white/90"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <Button asChild size="xl" variant="invert">
            <Link href="/publicar">
              Publica tu primera vacante
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
