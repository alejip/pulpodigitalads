import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contacto" className="px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Empezar
        </p>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Listo para escalar tu negocio con Ads?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Agenda una llamada estrategica gratuita. Analizamos tu negocio, tus
          objetivos y te proponemos un plan de accion claro y medible.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hola@pulpodigital.es"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Agendar llamada
            <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
