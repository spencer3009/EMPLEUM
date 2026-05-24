import type { Metadata } from "next";
import { ForCompanies } from "@/components/marketing/for-companies";

export const metadata: Metadata = {
  title: "Para empresas",
  description:
    "Publica tu vacante en Empleum y recibe candidatos calificados en tecnología y marketing. Primera vacante gratis.",
};

export default function EmpresasPage() {
  return (
    <div className="pt-16 md:pt-24">
      <ForCompanies />
    </div>
  );
}
