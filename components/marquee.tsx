const words = [
  "Google Ads",
  "Meta Ads",
  "Paid Media",
  "Captación de Pacientes",
  "Clínicas",
  "Leads Cualificados",
  "Citas Agendadas",
  "Sector Salud",
  "Conversión",
  "Data-Driven",
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-border py-6">
      <div className="flex animate-[marquee_30s_linear_infinite]">
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="mx-6 whitespace-nowrap font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            {word}
            <span className="ml-6 text-accent">{"///"}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
