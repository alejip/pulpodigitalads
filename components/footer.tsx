export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <span className="text-lg font-bold text-accent-foreground font-mono">
                  P
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Pulpo Digital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Agencia de Ads & Performance. Escalamos negocios con publicidad
              digital basada en datos, estrategia e inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegacion
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="#nosotros"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hola@pulpodigital.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hola@pulpodigital.com
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  LinkedIn
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  Instagram
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"2026 Pulpo Digital. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-muted-foreground">
            Ads & Performance Marketing
          </p>
        </div>
      </div>
    </footer>
  );
}
