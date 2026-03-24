import { Brain, Target, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Estrategia antes de invertir",
    description:
      "Antes de lanzar cualquier campaña, analizamos tu despacho, tu cliente ideal y tu competencia para diseñar un plan de captación eficaz.",
  },
  {
    icon: Target,
    title: "Leads cualificados",
    description:
      "Cada campaña está optimizada para atraer accidentados reales, no clics vacíos. Medimos, analizamos y mejoramos continuamente.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento predecible",
    description:
      "Creamos sistemas de Paid Media probados para que tu despacho reciba casos nuevos de forma constante y escalable.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Nosotros
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            La agencia de Paid Media que entiende el sector legal.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Trabajamos exclusivamente con abogados, despachos y bufetes especializados en accidentes. Utilizamos estrategia, datos e inteligencia artificial para convertir cada euro invertido en casos reales.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {principles.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <item.icon size={24} className="text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
