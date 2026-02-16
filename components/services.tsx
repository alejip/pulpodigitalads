import { Megaphone, BarChart3, Sparkles, Monitor, Zap } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Google Ads para Cl\u00ednicas",
    description:
      "Campa\u00f1as de Search y Display orientadas a captar pacientes con alta intenci\u00f3n. Aparece cuando buscan tu especialidad.",
    tag: "Alta intenci\u00f3n",
  },
  {
    icon: BarChart3,
    title: "Meta Ads para Cl\u00ednicas",
    description:
      "Captaci\u00f3n de pacientes en Facebook e Instagram con segmentaci\u00f3n avanzada por ubicaci\u00f3n, intereses y perfil demogr\u00e1fico.",
    tag: "IA",
  },
  {
    icon: Sparkles,
    title: "Optimizaci\u00f3n de Conversi\u00f3n",
    description:
      "Mejoramos cada punto del embudo para que m\u00e1s clics se conviertan en citas agendadas. Tests A/B, creatividades y landing pages.",
    tag: null,
  },
  {
    icon: Monitor,
    title: "Landing Pages Cl\u00ednicas",
    description:
      "P\u00e1ginas de aterrizaje dise\u00f1adas para el sector salud. Cada elemento est\u00e1 pensado para generar confianza y convertir visitas en pacientes.",
    tag: null,
  },
  {
    icon: Zap,
    title: "Tracking & Reporting",
    description:
      "Medimos cada lead, cada cita y cada euro invertido. Dashboards en tiempo real para que veas exactamente de d\u00f3nde vienen tus pacientes.",
    tag: "Data",
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
            {"Todo lo que tu cl\u00ednica necesita para captar pacientes"}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Un equipo especializado en Paid Media para el sector salud. Gestionamos tus campa\u00f1as de principio a fin para que t\u00fa te centres en tus pacientes."}
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
