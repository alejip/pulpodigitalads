import { Megaphone, BarChart3, Sparkles, Monitor, Zap } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Campanas de Search, Display, Shopping y YouTube optimizadas con IA para maximizar conversiones y reducir el CPA.",
    tag: "IA",
  },
  {
    icon: BarChart3,
    title: "Meta Ads",
    description:
      "Publicidad en Facebook e Instagram con segmentacion avanzada, creatividades que convierten y optimizacion continua.",
    tag: "IA",
  },
  {
    icon: Sparkles,
    title: "TikTok Ads",
    description:
      "Llega a nuevas audiencias con contenido nativo, formatos Spark Ads y estrategias de performance en TikTok.",
    tag: null,
  },
  {
    icon: Monitor,
    title: "Landing Pages",
    description:
      "Paginas de aterrizaje disenadas para convertir. Cada elemento esta pensado estrategicamente para maximizar tus resultados.",
    tag: null,
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Flujos automatizados que retienen, fidelizan y convierten en piloto automatico con revision estrategica constante.",
    tag: "IA",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-muted/30 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Servicios
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Todo lo que necesitas para escalar con Ads
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Un equipo experto en las principales plataformas publicitarias,
            apasionado por los negocios y la publicidad digital.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:-translate-y-1"
            >
              {service.tag && (
                <span className="absolute right-6 top-6 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {service.tag}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <service.icon size={24} className="text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
