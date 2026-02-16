import { Brain, Target, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Estrategia antes de invertir",
    description:
      "Antes de lanzar cualquier campa\u00f1a, analizamos tu cl\u00ednica, tu paciente ideal y tu competencia para dise\u00f1ar un plan de captaci\u00f3n eficaz.",
  },
  {
    icon: Target,
    title: "Leads cualificados",
    description:
      "Cada campa\u00f1a est\u00e1 optimizada para atraer pacientes reales, no clics vac\u00edos. Medimos, analizamos y mejoramos continuamente.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento predecible",
    description:
      "Creamos sistemas de Paid Media probados para que tu cl\u00ednica reciba pacientes nuevos de forma constante y escalable.",
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
            {"La agencia de Paid Media que entiende el sector salud."}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {"Trabajamos exclusivamente con cl\u00ednicas, centros m\u00e9dicos y negocios de salud. Utilizamos estrategia, datos e inteligencia artificial para convertir cada euro invertido en pacientes reales."}
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
