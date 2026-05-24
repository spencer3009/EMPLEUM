import Link from "next/link";
import { Linkedin, Instagram, Twitter, Heart } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { FOOTER_COLUMNS } from "@/lib/constants";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/company/empleum", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/empleum", icon: Instagram },
  { label: "Twitter / X", href: "https://twitter.com/empleum", icon: Twitter },
] as const;

export function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-border bg-background"
    >
      <h2 id="footer-heading" className="sr-only">
        Pie de página
      </h2>

      <div className="container-tight py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              Hecho con{" "}
              <Heart
                className="h-3.5 w-3.5 fill-current text-red-500"
                aria-hidden="true"
              />{" "}
              en Perú <span aria-hidden="true">🇵🇪</span>
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Empleum. Todos los derechos reservados.
          </p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
