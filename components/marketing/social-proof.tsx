import { SOCIAL_PROOF_COMPANIES } from "@/lib/constants";

export function SocialProof() {
  return (
    <section
      aria-label="Empresas en Empleum"
      className="mt-24 border-y border-border bg-background/60 py-12 md:mt-32 md:py-16"
    >
      <div className="container-tight">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Empresas que ya buscan talento en Empleum
        </p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {SOCIAL_PROOF_COMPANIES.map((company) => (
            <li
              key={company}
              className="flex items-center justify-center text-center text-base font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground md:text-lg"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
