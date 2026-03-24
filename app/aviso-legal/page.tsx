import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | Pulpo Digital",
  description: "Aviso legal e información sobre el titular del sitio web pulpodigital.es.",
  robots: { index: false },
};

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Aviso Legal
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Última actualización: marzo de 2026
        </p>

        <Section title="1. Datos identificativos del titular">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se ponen a disposición del usuario los siguientes datos identificativos:
          </p>
          <div className="mt-4 space-y-0 rounded-xl border border-border overflow-hidden">
            {[
              ["Nombre / Razón social", "Manuel Alejandro Caicedo Hurtado"],
              ["NIF", "47668112Z"],
              ["Domicilio", "Pje Maruja Cazalla 12, Córdoba, España"],
              ["Correo electrónico", "hola@pulpodigital.es"],
              ["Sitio web", "https://pulpodigital.es"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex gap-4 border-b border-border/60 px-4 py-3 text-sm last:border-0"
              >
                <span className="w-44 shrink-0 font-medium text-foreground">{label}</span>
                <span className="text-muted-foreground">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="2. Objeto y ámbito de aplicación">
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web <strong>pulpodigital.es</strong> (en adelante, «el Sitio Web»), titularidad de Pulpo Digital.
          </p>
          <p>
            El acceso al Sitio Web implica la aceptación plena y sin reservas de las condiciones recogidas en el presente Aviso Legal. Pulpo Digital se reserva el derecho a modificar estas condiciones en cualquier momento, siendo responsabilidad del usuario consultarlas periódicamente.
          </p>
        </Section>

        <Section title="3. Condiciones de uso">
          <p>El usuario se compromete a:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Hacer un uso lícito del Sitio Web, conforme a la ley, la moral y el orden público.</li>
            <li>No realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el Sitio Web o impedir su uso normal.</li>
            <li>No introducir o difundir contenidos falsos, ambiguos, inexactos o que induzcan a error.</li>
            <li>No transmitir publicidad no solicitada ni correo no deseado (spam).</li>
            <li>No intentar acceder, modificar o manipular cuentas, sistemas o redes de Pulpo Digital sin autorización.</li>
          </ul>
        </Section>

        <Section title="4. Propiedad intelectual e industrial">
          <p>
            Todos los contenidos del Sitio Web —incluyendo, con carácter enunciativo y no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente y otros elementos— son propiedad de Pulpo Digital o de terceros que han autorizado su uso, y están protegidos por las leyes españolas y europeas de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, transformación o comunicación pública de cualquier elemento del Sitio Web sin autorización previa y expresa por escrito de Pulpo Digital, salvo para uso personal y privado.
          </p>
          <p>
            Las marcas, nombres comerciales o signos distintivos que aparecen en el Sitio Web son propiedad de Pulpo Digital o de terceros, sin que el acceso al Sitio Web pueda entenderse como una cesión o licencia sobre los mismos.
          </p>
        </Section>

        <Section title="5. Limitación de responsabilidad">
          <p>
            Pulpo Digital no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse del acceso, uso, mala utilización o falta de disponibilidad del Sitio Web, ni del uso de la información contenida en el mismo.
          </p>
          <p>
            Pulpo Digital no controla ni garantiza la ausencia de virus u otros elementos que puedan alterar el sistema informático del usuario. Tampoco se hace responsable de los contenidos de sitios web de terceros a los que el Sitio Web pueda enlazar.
          </p>
          <p>
            La información publicada en el Sitio Web tiene carácter meramente informativo y orientativo, y no constituye asesoramiento legal, financiero ni de ningún otro tipo.
          </p>
        </Section>

        <Section title="6. Política de privacidad y cookies">
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <a href="/politica-de-privacidad" className="text-accent underline underline-offset-2">
              Política de Privacidad
            </a>
            . El uso de cookies en el Sitio Web se regula en nuestra{" "}
            <a href="/politica-de-cookies" className="text-accent underline underline-offset-2">
              Política de Cookies
            </a>
            .
          </p>
        </Section>

        <Section title="7. Legislación aplicable y jurisdicción">
          <p>
            El presente Aviso Legal se rige en su totalidad por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales del domicilio del usuario, salvo que la normativa aplicable establezca otro fuero imperativo.
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
