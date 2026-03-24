import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { OpenCookieSettingsButton } from "@/components/open-cookie-settings-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Pulpo Digital",
  description: "Información sobre las cookies utilizadas en pulpodigital.es y cómo gestionarlas.",
  robots: { index: false },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Política de Cookies
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Última actualización: marzo de 2026
        </p>

        <Section title="¿Qué son las cookies?">
          <p>
            Las cookies son archivos que se descargan en tu dispositivo al acceder a determinadas páginas web. Son herramientas esenciales para la prestación de servicios de la Sociedad de la Información, ya que permiten a un sitio web almacenar y recuperar información sobre los hábitos de navegación del usuario o de su equipo, con el fin de reconocerlo y mejorar el servicio ofrecido.
          </p>
        </Section>

        <Section title="Tipos de cookies según su gestión">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cookies propias:</strong> se envían desde un equipo gestionado por el propio editor del sitio web.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> se envían desde equipos gestionados por una entidad ajena al editor, que trata los datos obtenidos.
            </li>
          </ul>
        </Section>

        <Section title="Tipos de cookies según su duración">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cookies de sesión:</strong> se eliminan automáticamente al cerrar el navegador.
            </li>
            <li>
              <strong>Cookies persistentes:</strong> permanecen almacenadas durante un período determinado.
            </li>
          </ul>
        </Section>

        <Section title="Tipos de cookies según su finalidad">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Cookies técnicas:</strong> estrictamente necesarias para la navegación por el sitio. Su desactivación impide el correcto funcionamiento de la web.
            </li>
            <li>
              <strong>Cookies de preferencias o personalización:</strong> permiten recordar información para personalizar la experiencia del usuario (idioma, región, etc.).
            </li>
            <li>
              <strong>Cookies analíticas o de medición:</strong> permiten el seguimiento y análisis del comportamiento de los usuarios para mejorar el servicio.
            </li>
            <li>
              <strong>Cookies publicitarias o de comportamiento:</strong> almacenan información del comportamiento del usuario para mostrar publicidad personalizada.
            </li>
          </ul>
        </Section>

        <Section title="Cookies utilizadas en este sitio web">
          <h3 className="mb-3 font-semibold text-foreground">Cookies técnicas (siempre activas)</h3>
          <CookieTable
            rows={[
              { name: "GRECAPTCHA", provider: "Google", purpose: "Diferenciar entre humanos y bots", duration: "179 días" },
              { name: "cookieconsent", provider: "Propio", purpose: "Guarda el estado del consentimiento del usuario", duration: "1 año" },
              { name: "Rc:.a", provider: "Google", purpose: "Diferenciar entre humanos y bots", duration: "Persistente" },
              { name: "Rc:.b", provider: "Google", purpose: "Diferenciar entre humanos y bots", duration: "Sesión" },
            ]}
          />

          <h3 className="mb-3 mt-8 font-semibold text-foreground">Cookies analíticas (requieren consentimiento)</h3>
          <CookieTable
            rows={[
              { name: "_ga", provider: "Google Analytics", purpose: "Recopila datos sobre frecuencia de visitas", duration: "2 años" },
              { name: "_ga_*", provider: "Google Analytics", purpose: "Genera datos estadísticos sobre el uso del sitio", duration: "2 años" },
            ]}
          />

          <h3 className="mb-3 mt-8 font-semibold text-foreground">Cookies publicitarias (requieren consentimiento)</h3>
          <CookieTable
            rows={[
              { name: "_fbp", provider: "Meta (Facebook)", purpose: "Mostrar anuncios de terceros anunciantes", duration: "3 meses" },
              { name: "fr", provider: "Meta (Facebook)", purpose: "Mostrar anuncios de terceros anunciantes", duration: "3 meses" },
              { name: "tr", provider: "Meta (Facebook)", purpose: "Mostrar anuncios de terceros anunciantes", duration: "Sesión" },
              { name: "NID", provider: "Google", purpose: "Registra identificación única para publicidad dirigida", duration: "6 meses" },
            ]}
          />
        </Section>

        <Section title="Gestión del consentimiento">
          <p className="mb-4">
            Al acceder a este sitio web se muestra un panel de configuración de cookies desde el que puedes aceptar, rechazar o personalizar tu elección por categorías. El simple acceso a esta política, sin haber realizado una acción previa, no implica aceptación de ninguna cookie.
          </p>
          <p className="mb-6">
            Puedes modificar tus preferencias en cualquier momento:
          </p>
          <OpenCookieSettingsButton />
        </Section>

        <Section title="Configuración del navegador">
          <p className="mb-3">
            Adicionalmente, puedes gestionar o deshabilitar cookies directamente desde la configuración de tu navegador:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                Microsoft Edge / Internet Explorer
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Ten en cuenta que deshabilitar cookies puede afectar al funcionamiento de algunas funcionalidades del sitio. Si aceptas cookies de terceros, deberás eliminarlas desde las opciones de ese navegador.
          </p>
        </Section>

        <Section title="Actualizaciones de esta política">
          <p>
            Esta Política de Cookies podrá modificarse en función de nuevas exigencias legales o técnicas. Te recomendamos que la consultes periódicamente. Para más información sobre el tratamiento de tus datos personales, consulta nuestra{" "}
            <a href="/politica-de-privacidad" className="text-accent underline underline-offset-2">
              Política de Privacidad
            </a>
            .
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 border-t border-border pt-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function CookieTable({
  rows,
}: {
  rows: { name: string; provider: string; purpose: string; duration: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted/40">
          <tr>
            {["Cookie", "Proveedor", "Finalidad", "Duración"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.name} className="transition-colors hover:bg-muted/20">
              <td className="px-4 py-3 font-mono text-xs text-foreground">{row.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.provider}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
