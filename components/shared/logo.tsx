import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Empleum — Inicio"
      className={cn(
        "inline-flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-80",
        variant === "light" ? "text-foreground" : "text-white",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block h-6 w-6 rounded-md",
          variant === "light" ? "bg-foreground" : "bg-white",
        )}
      />
      <span>Empleum</span>
    </Link>
  );
}
