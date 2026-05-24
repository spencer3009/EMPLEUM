import { Search, DollarSign, Zap, Smartphone } from "lucide-react";

const ITEMS = [
  {
    icon: Search,
    title: "Empleos verificados",
    description:
      "Cada vacante se valida antes de publicarse. Sin 'vendedor independiente' disfrazado de 'ejecutivo senior'.",
  },
  {
    icon: DollarSign,
    title: "Salarios siempre visibles",
    description:
      "Si no hay salario, no se publica. Punto. Tu tiempo vale.",
  },
  {
    icon: Zap,
    title: "Postulación en 1 click",
    description:
      "Cero subir CVs en Word con foto de carnet. Tu perfil y listo.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first de verdad",
    description:
      "Diseñado para tu celular. Postula desde el bus, el café o donde sea.",
  },
] as const;

export function Differentiators() {
  return (
    <section
      id="diferenciadores"
      aria-labelledby="diff-heading"
      className="py-16 md:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="diff-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            No somos otra bolsa de trabajo.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Construimos Empleum para arreglar todo lo que odiabas de los
            portales tradicionales.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-xl border border-border bg-card p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md md:p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
