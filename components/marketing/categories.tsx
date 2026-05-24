import Link from "next/link";
import {
  Code,
  Megaphone,
  Palette,
  BarChart,
  Rocket,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const CATEGORIES = [
  { name: "Tecnología", icon: Code, count: 47, href: "/empleos?cat=tech" },
  {
    name: "Marketing Digital",
    icon: Megaphone,
    count: 23,
    href: "/empleos?cat=marketing",
  },
  { name: "Diseño UX/UI", icon: Palette, count: 18, href: "/empleos?cat=design" },
  {
    name: "Data & Analytics",
    icon: BarChart,
    count: 12,
    href: "/empleos?cat=data",
  },
  { name: "Producto", icon: Rocket, count: 9, href: "/empleos?cat=product" },
  {
    name: "Ventas Tech",
    icon: Briefcase,
    count: 14,
    href: "/empleos?cat=sales",
  },
] as const;

export function Categories() {
  return (
    <section
      id="categorias"
      aria-labelledby="cat-heading"
      className="py-16 md:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="cat-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Encuentra trabajo en lo que dominas.
          </h2>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <li key={cat.name}>
                <Link
                  href={cat.href}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-md md:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight md:text-lg">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.count} empleos
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
