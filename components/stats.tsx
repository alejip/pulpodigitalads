const stats = [
  { value: "+200", label: "Proyectos gestionados" },
  { value: "+30M", label: "En inversion publicitaria" },
  { value: "+8", label: "Anos de experiencia" },
  { value: "4.8x", label: "ROAS promedio" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center px-6 py-12 ${
              i < stats.length - 1 ? "border-r border-border" : ""
            } ${i < 2 ? "border-b border-border lg:border-b-0" : ""}`}
          >
            <span className="font-mono text-4xl font-bold text-accent md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-3 text-center text-sm text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
