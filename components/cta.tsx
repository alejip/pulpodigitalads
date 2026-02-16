"use client";

import { ArrowRight } from "lucide-react";
import { MouseEvent } from "react";

export function CTA() {
  const handleEmailClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "mailto:hola@pulpodigital.es";
  };

  return (
    <section id="contacto" className="px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Empezar
        </p>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          ¿Quieres más pacientes para tu clínica?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Agenda una llamada de diagnóstico gratuita. Analizamos tu situación actual, tus objetivos y te proponemos un plan de captación claro y medible.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 cursor-pointer"
          >
            Agendar llamada
            <ArrowRight size={18} />
          </button>
          <a
            href="https://wa.me/34644737957"
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
