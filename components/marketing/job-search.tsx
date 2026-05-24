"use client";

import * as React from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";

const ROTATING_PLACEHOLDERS = [
  "Frontend Developer",
  "Data Analyst",
  "Growth Marketing",
  "Product Designer (UX/UI)",
  "Backend Engineer",
] as const;

const POPULAR_LOCATIONS = [
  "Remoto",
  "Lima",
  "Arequipa",
  "Trujillo",
  "Cusco",
  "Piura",
  "Chiclayo",
] as const;

export function JobSearch() {
  const [phIndex, setPhIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setPhIndex((i) => (i + 1) % ROTATING_PLACEHOLDERS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <form
      action="/empleos"
      method="GET"
      role="search"
      aria-label="Buscar empleos"
      className="mx-auto w-full max-w-3xl"
    >
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-foreground/15 bg-card shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_8px_32px_-16px_rgba(10,10,10,0.18)] sm:grid-cols-[1fr_1fr_auto]">
        {/* Field 1 — Puesto / Keyword */}
        <div className="border-b border-foreground/10 px-5 py-3 sm:border-b-0 sm:border-r">
          <label
            htmlFor="js-q"
            className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            Puesto / Keyword
          </label>
          <div className="mt-1 flex items-center gap-2">
            <Search
              className="h-4 w-4 shrink-0 text-foreground/40"
              aria-hidden="true"
            />
            <input
              id="js-q"
              type="search"
              name="q"
              placeholder={ROTATING_PLACEHOLDERS[phIndex]}
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/60"
            />
            <kbd
              aria-hidden="true"
              className="hidden h-6 shrink-0 items-center rounded border border-foreground/15 bg-secondary px-1.5 font-mono text-[10px] font-medium tracking-tight text-muted-foreground sm:inline-flex"
            >
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Field 2 — Ubicación */}
        <div className="border-b border-foreground/10 px-5 py-3 sm:border-b-0 sm:border-r">
          <label
            htmlFor="js-loc"
            className="block font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            Ubicación
          </label>
          <div className="mt-1 flex items-center gap-2">
            <MapPin
              className="h-4 w-4 shrink-0 text-foreground/40"
              aria-hidden="true"
            />
            <input
              id="js-loc"
              type="text"
              name="loc"
              list="empleum-locations"
              placeholder="Ciudad o «Remoto»"
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground/60"
            />
            <datalist id="empleum-locations">
              {POPULAR_LOCATIONS.map((l) => (
                <option key={l} value={l} />
              ))}
            </datalist>
          </div>
        </div>

        {/* Submit */}
        <div className="p-2 sm:p-2">
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-background transition-[transform,background-color] hover:bg-foreground/90 active:scale-[0.98] sm:h-full sm:min-h-[3.5rem] sm:px-6"
          >
            Buscar
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Editorial stat strip */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <span>
          <span className="nums text-foreground">1,247</span> empleos
        </span>
        <span aria-hidden="true" className="text-foreground/25">
          ·
        </span>
        <span>
          <span className="nums text-foreground">28</span> nuevos hoy
        </span>
        <span aria-hidden="true" className="text-foreground/25">
          ·
        </span>
        <span>
          <span className="nums text-foreground">12</span> empresas verificadas
        </span>
        <span aria-hidden="true" className="text-foreground/25">
          ·
        </span>
        <span>
          act. <span className="nums">09:42</span>
        </span>
      </div>
    </form>
  );
}
