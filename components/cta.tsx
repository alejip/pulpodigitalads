"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export function CTA() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    clinica: "",
    servicio: "Google Ads",
    presupuesto: "<1.000€",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const response = await fetch("https://formspree.io/f/xreakoko", {
        method: "POST",
        body: new FormData(formElement),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        router.push("/gracias");
      } else {
        alert("Hubo un error al enviar el formulario. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="px-6 py-32">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Diagnóstico Gratuito
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            ¿Quieres más pacientes para tu clínica?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Rellena este formulario y nuestro equipo te contactará en 24-48h con un diagnóstico personalizado y sin compromiso.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border">
          {/* Nombre Completo */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Tu nombre"
            />
          </div>

          {/* Email Corporativo */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email corporativo <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="tu@empresa.com"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
              Tu nº de Móvil
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Tu nº WhatsApp"
            />
          </div>

          {/* Nombre Clínica */}
          <div>
            <label htmlFor="clinica" className="block text-sm font-medium text-foreground mb-2">
              Nombre clínica <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="clinica"
              name="clinica"
              value={formData.clinica}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Nombre de tu clínica"
            />
          </div>

          {/* Servicio */}
          <div>
            <label htmlFor="servicio" className="block text-sm font-medium text-foreground mb-2">
              Servicio <span className="text-red-500">*</span>
            </label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="Google Ads">Google Ads</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="TikTok Ads">TikTok Ads</option>
              <option value="Personalizado">Personalizado</option>
            </select>
          </div>

          {/* Presupuesto */}
          <div>
            <label htmlFor="presupuesto" className="block text-sm font-medium text-foreground mb-2">
              Presupuesto mensual <span className="text-red-500">*</span>
            </label>
            <select
              id="presupuesto"
              name="presupuesto"
              value={formData.presupuesto}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            >
              <option value="<1.000€">Menos de 1.000€</option>
              <option value="1-2k€">1.000€ - 2.000€</option>
              <option value="2-4k€">2.000€ - 4.000€</option>
              <option value="4-8k€">4.000€ - 8.000€</option>
              <option value="8k€+">Más de 8.000€</option>
            </select>
          </div>

          {/* Botón Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-8"
          >
            {isSubmitting ? "Enviando..." : "Solicitar diagnóstico gratuito"}
            <ArrowRight size={18} />
          </button>

          {/* Microcopy */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Respuesta en 24-48h por WhatsApp/email
          </p>
        </form>
      </div>
    </section>
  );
}
