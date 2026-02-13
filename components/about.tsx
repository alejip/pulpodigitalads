import { Brain, Target, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "Pensar antes de actuar",
    description:
      "En un mundo donde todos ejecutan sin criterio, el pensamiento estrategico es la ventaja competitiva de tu negocio.",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description:
      "Cada decision esta respaldada por datos. No adivinamos, analizamos, medimos y optimizamos constantemente.",
  },
  {
    icon: TrendingUp,
    title: "Resultados predecibles",
    description:
      "No escalamos negocios con publicidad al azar. Establecemos sistemas probados para escalar de forma predecible.",
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
            Somos la agencia de Ads que no promete milagros.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Simplemente trabajamos utilizando estrategia, datos e inteligencia
            artificial el 99.9% de las veces. Cada euro invertido tiene un
            proposito claro.
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
