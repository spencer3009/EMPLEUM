import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "¿Empleum es gratis para candidatos?",
    a: "Sí, 100% gratis. Crear tu perfil, buscar empleos y postular nunca te va a costar nada. Vivimos de lo que pagan las empresas por publicar vacantes.",
  },
  {
    q: "¿Qué tipos de empleos publican?",
    a: "Empleos en tecnología (desarrollo, data, producto, diseño UX/UI) y marketing digital. Buscamos roles full-time, remotos, híbridos y presenciales en Perú — desde junior hasta lead.",
  },
  {
    q: "¿Cómo verifican que los empleos sean reales?",
    a: "Cada empresa pasa por un proceso de verificación: validamos su RUC, presencia online y al hiring manager. Si un anuncio no cumple, no se publica. Por eso no vas a ver 'vendedor independiente' disfrazado de 'asesor comercial senior'.",
  },
  {
    q: "¿Cuánto cuesta para empresas?",
    a: "La primera vacante es gratis para que pruebes la plataforma. Después tenemos planes mensuales y por vacante. Mira la página de Precios para el detalle.",
  },
  {
    q: "¿Tienen app móvil?",
    a: "Empleum está construido mobile-first, así que la experiencia en tu celular es nativa desde el navegador. App nativa en iOS y Android está en el roadmap para 2026.",
  },
  {
    q: "¿Puedo postular sin subir CV?",
    a: "Sí. Tu perfil de Empleum reemplaza al CV — completas tu experiencia una vez y postulas en 1 click. Si una empresa quiere tu CV en PDF, lo generamos automáticamente desde tu perfil.",
  },
] as const;

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-32"
    >
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-balance text-3xl font-semibold tracking-tight md:text-5xl"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
