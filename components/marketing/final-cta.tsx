import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden py-24 md:py-40"
    >
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />

      <div className="container-tight flex flex-col items-center text-center">
        <h2
          id="final-cta-heading"
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl"
        >
          Tu próximo trabajo está a 1 clic.
        </h2>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          Únete a la nueva forma de encontrar empleo en Perú.
        </p>
        <Button asChild size="xl" className="mt-10 w-full sm:w-auto">
          <Link href="/signup">
            Empezar gratis con Google
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
