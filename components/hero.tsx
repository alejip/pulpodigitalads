import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,69,183,0.10)_0%,_transparent_70%)]" />
      
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-accent">
          Agencia de Paid Media para Clínicas
        </p>

        <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Captamos pacientes para tu{" "}
          <span className="text-accent">clínica</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Generamos leads cualificados y citas reales para clínicas y centros médicos mediante Google Ads y Meta Ads. Sin promesas vacías, solo resultados medibles.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Quiero más pacientes
          </a>
          <a
            href="#nosotros"
            className="rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown size={20} className="text-muted-foreground" />
      </div>
    </section>
  );
}
