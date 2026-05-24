import { LogIn, SlidersHorizontal, Send } from "lucide-react";

const STEPS = [
  {
    icon: LogIn,
    title: "1. Entra con Google",
    description: "Sin formularios, sin contraseñas. 10 segundos.",
  },
  {
    icon: SlidersHorizontal,
    title: "2. Filtra lo que buscas",
    description:
      "Remoto, híbrido, salario, seniority. Encuentra rápido lo que importa.",
  },
  {
    icon: Send,
    title: "3. Postula en 1 click",
    description:
      "Tu perfil llega directo al hiring manager. Sin intermediarios.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="how-heading"
      className="py-16 md:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="how-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Encontrar trabajo no debería tomar meses.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tres pasos. Cero fricción.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
