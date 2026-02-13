import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "FitZone Pro",
    category: "Google Ads",
    result: "+320% ROAS",
    color: "bg-accent/10",
  },
  {
    name: "Casa Bella Deco",
    category: "Meta Ads",
    result: "-45% CPA",
    color: "bg-accent/5",
  },
  {
    name: "TechVault",
    category: "Google Ads + Meta",
    result: "+180% ventas",
    color: "bg-accent/10",
  },
  {
    name: "NutriVida",
    category: "TikTok Ads",
    result: "+500% alcance",
    color: "bg-accent/5",
  },
  {
    name: "Urban Style Co.",
    category: "Meta Ads",
    result: "4.2x ROAS",
    color: "bg-accent/10",
  },
  {
    name: "CloudSoft",
    category: "Google Ads",
    result: "+250% leads",
    color: "bg-accent/5",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="bg-muted/30 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">
            Proyectos
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Resultados que hablan por si solos
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Lanzamos y escalamos proyectos. Cada caso es un sistema probado con
            resultados medibles.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30"
            >
              <div>
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {project.category}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-card-foreground">
                  {project.name}
                </h3>
              </div>
              <div className="mt-8 flex items-end justify-between">
                <span className="font-mono text-3xl font-bold text-accent">
                  {project.result}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:bg-accent">
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground transition-colors group-hover:text-accent-foreground"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
