"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const nombre = formData.get("nombre")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const clinica = formData.get("clinica")?.toString().trim();

    if (!nombre) newErrors.nombre = "El nombre completo es requerido";
    if (!email) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email inválido";
    }
    if (!clinica) newErrors.clinica = "El nombre de la clínica es requerido";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xreakoko", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: "Error al enviar el formulario. Intenta de nuevo." });
      }
    } catch (error) {
      setErrors({ submit: "Error de conexión. Intenta de nuevo." });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contacto" className="px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-block rounded-full bg-accent/10 p-4">
            <MessageCircle className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            ¡Perfecto! Recibido.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Te contactamos en 24h por WhatsApp o email. ¡Gracias por confiar en Pulpo Digital!
          </p>
          <a
            href="https://wa.me/34644737957"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle size={20} />
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Empezar
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            ¿Quieres más pacientes para tu clínica?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Agenda una llamada de diagnóstico gratuita. Analizamos tu situación actual, tus objetivos y te proponemos un plan de captación claro y medible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-border bg-card p-8">
          {errors.submit && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {errors.submit}
            </div>
          )}

          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-foreground">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Tu nombre"
            />
            {errors.nombre && (
              <p className="mt-1 text-sm text-red-600">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="tu@correo.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-foreground">
              Teléfono/WhatsApp
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="+34 644 73 79 57"
            />
          </div>

          <div>
            <label htmlFor="clinica" className="block text-sm font-medium text-foreground">
              Nombre clínica *
            </label>
            <input
              type="text"
              id="clinica"
              name="clinica"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
              placeholder="Nombre de tu clínica"
            />
            {errors.clinica && (
              <p className="mt-1 text-sm text-red-600">{errors.clinica}</p>
            )}
          </div>

          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-foreground">
              Servicio *
            </label>
            <select
              id="servicio"
              name="servicio"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Selecciona un servicio</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="TikTok Ads">TikTok Ads</option>
              <option value="Personalizado">Personalizado</option>
            </select>
          </div>

          <div>
            <label htmlFor="presupuesto" className="block text-sm font-medium text-foreground">
              Presupuesto mensual *
            </label>
            <select
              id="presupuesto"
              name="presupuesto"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            >
              <option value="">Selecciona un rango</option>
              <option value="<1000€">Menos de 1.000€</option>
              <option value="1-2k€">1.000 - 2.000€</option>
              <option value="2-4k€">2.000 - 4.000€</option>
              <option value="4-8k€">4.000 - 8.000€</option>
              <option value="8k€+">Más de 8.000€</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {isLoading ? "Enviando..." : "Solicitar diagnóstico gratuito"}
          </button>

          <p className="text-center text-sm text-muted-foreground">
            Respuesta en 24-48h por WhatsApp/email
          </p>
        </form>
      </div>
    </section>
  );
}
