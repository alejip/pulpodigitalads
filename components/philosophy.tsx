export function Philosophy() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              La tecnologia sin estrategia,{" "}
              <span className="text-accent">es solo ruido.</span>
            </h2>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Existen infinidad de plataformas publicitarias y herramientas que
              sin una hoja de ruta totalmente definida y clara, no serviran
              absolutamente nada a tus objetivos de negocio.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              En Pulpo Digital lo tenemos claro. Publicidad si, por supuesto,
              pero basada en estrategia, conocimiento y datos reales.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Hablar con el equipo
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-3xl font-bold text-accent">01</span>
                  <p className="mt-3 font-medium text-card-foreground">
                    Estrategia
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Definimos objetivos claros y un plan de accion medible
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-3xl font-bold text-accent">02</span>
                  <p className="mt-3 font-medium text-card-foreground">
                    Ejecucion
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Lanzamos campanas optimizadas con las mejores practicas
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-3xl font-bold text-accent">03</span>
                  <p className="mt-3 font-medium text-card-foreground">
                    Optimizacion
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Analizamos datos en tiempo real y ajustamos constantemente
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-3xl font-bold text-accent">04</span>
                  <p className="mt-3 font-medium text-card-foreground">
                    Escalado
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Escalamos lo que funciona de forma predecible y rentable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
