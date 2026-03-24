"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Pulpo Digital logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Pulpo Digital
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Agencia de Paid Media especializada en captación de casos para abogados de accidentes y despachos legales. Google Ads, Meta Ads y estrategia basada en datos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegación
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
                  Resultados
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
                  href="mailto:hola@pulpodigital.es"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  hola@pulpodigital.es
                </a>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  LinkedIn
                </span>
              </li>
              <li>
                <a href="https://www.instagram.com/_pulpodigital_/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted-foreground">
              © 2026 Pulpo Digital. Todos los derechos reservados.
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="/aviso-legal"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Aviso Legal
              </a>
              <a
                href="/politica-de-privacidad"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Política de Privacidad
              </a>
              <a
                href="/politica-de-cookies"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Política de Cookies
              </a>
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new Event("openCookieSettings"));
                  }
                }}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Gestionar cookies
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
