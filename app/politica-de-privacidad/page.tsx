import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Pulpo Digital",
  description: "Información sobre el tratamiento de tus datos personales conforme al RGPD.",
  robots: { index: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-36">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Política de Privacidad
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Última actualización: marzo de 2026
        </p>

        <Section title="1. Responsable del tratamiento">
          <DataRow label="Identidad" value="Manuel Alejandro Caicedo Hurtado" />
          <DataRow label="NIF" value="47668112Z" />
          <DataRow label="Domicilio" value="Pje Maruja Cazalla 12, Córdoba, España" />
          <DataRow label="Correo electrónico" value="hola@pulpodigital.es" />
          <DataRow label="Sitio web" value="pulpodigital.es" />
        </Section>

        <Section title="2. Datos que tratamos y cómo los obtenemos">
          <p>Tratamos los datos personales que nos facilitas a través de:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Formulario de contacto:</strong> nombre, apellidos, correo electrónico, teléfono y el mensaje que nos envíes.
            </li>
            <li>
              <strong>Cookies y tecnologías de seguimiento:</strong> datos de navegación (dirección IP, páginas visitadas, tiempo de permanencia), de acuerdo con lo descrito en nuestra{" "}
              <a href="/politica-de-cookies" className="text-accent underline underline-offset-2">
                Política de Cookies
              </a>
              .
            </li>
            <li>
              <strong>Comunicaciones por correo electrónico:</strong> cualquier dato incluido en los mensajes que nos remitas.
            </li>
          </ul>
        </Section>

        <Section title="3. Finalidad del tratamiento">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Gestionar y responder a las solicitudes recibidas a través del formulario de contacto.
            </li>
            <li>
              Enviar información comercial sobre nuestros servicios, siempre que hayas prestado tu consentimiento o exista una relación contractual previa.
            </li>
            <li>
              Realizar análisis estadísticos de la navegación en el sitio web para mejorar su funcionamiento (únicamente si has aceptado cookies analíticas).
            </li>
            <li>
              Mostrar publicidad personalizada en plataformas de terceros (Google Ads, Meta) en función de tu comportamiento de navegación, únicamente si has aceptado cookies publicitarias.
            </li>
          </ul>
        </Section>

        <Section title="4. Base jurídica del tratamiento">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  {["Finalidad", "Base jurídica (art. 6 RGPD)"].map((h) => (
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
                {[
                  ["Responder a tu consulta", "Art. 6.1.b) — ejecución de medidas precontractuales a petición del interesado"],
                  ["Cookies técnicas", "Art. 6.1.f) — interés legítimo (funcionamiento del sitio)"],
                  ["Cookies analíticas", "Art. 6.1.a) — consentimiento expreso del interesado"],
                  ["Cookies publicitarias", "Art. 6.1.a) — consentimiento expreso del interesado"],
                  ["Comunicaciones comerciales", "Art. 6.1.a) — consentimiento, o art. 6.1.f) relación previa"],
                ].map(([fin, base]) => (
                  <tr key={fin} className="hover:bg-muted/20">
                    <td className="px-4 py-3 text-muted-foreground">{fin}</td>
                    <td className="px-4 py-3 text-muted-foreground">{base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="5. Destinatarios y transferencias internacionales">
          <p>
            Tus datos no se cederán a terceros, salvo obligación legal o cuando sea estrictamente necesario para la prestación del servicio. Los encargados del tratamiento con los que trabajamos son:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Google LLC</strong> (Google Analytics, Google Ads, reCAPTCHA) — con sede en EE.UU. Transferencia amparada en las Cláusulas Contractuales Tipo de la CE y en la adecuación del marco EU-US Data Privacy Framework.
            </li>
            <li>
              <strong>Meta Platforms, Inc.</strong> (Meta Ads, Facebook Pixel) — con sede en EE.UU. Transferencia amparada en las Cláusulas Contractuales Tipo de la CE.
            </li>
            <li>
              <strong>n8n GmbH</strong> (automatización de formularios) — con sede en la UE. Sin transferencia internacional.
            </li>
          </ul>
        </Section>

        <Section title="6. Plazo de conservación">
          <p>
            Conservaremos tus datos durante el tiempo necesario para la finalidad para la que fueron recabados y, en todo caso, durante los plazos legales aplicables:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Datos de contacto y consultas: hasta 3 años desde la última comunicación.</li>
            <li>Datos de facturación y contratos: 5 años (obligación mercantil) o 10 años si existe relación laboral.</li>
            <li>Datos obtenidos mediante cookies: según el período de cada cookie (ver{" "}
              <a href="/politica-de-cookies" className="text-accent underline underline-offset-2">
                Política de Cookies
              </a>).
            </li>
          </ul>
        </Section>

        <Section title="7. Tus derechos">
          <p>
            En virtud del RGPD y la LOPDGDD, puedes ejercer los siguientes derechos:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
            <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
            <li><strong>Limitación:</strong> solicitar que suspendamos el tratamiento en determinadas circunstancias.</li>
            <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
            <li><strong>Retirada del consentimiento:</strong> puedes retirar en cualquier momento el consentimiento prestado, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p className="mt-4">
            Para ejercer cualquiera de estos derechos, escríbenos a{" "}
            <a href="mailto:hola@pulpodigital.es" className="text-accent underline underline-offset-2">
              hola@pulpodigital.es
            </a>{" "}
            indicando el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad. Responderemos en el plazo máximo de un mes.
          </p>
          <p className="mt-3">
            Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una reclamación ante la{" "}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Agencia Española de Protección de Datos (AEPD)
            </a>
            .
          </p>
        </Section>

        <Section title="8. Seguridad">
          <p>
            Aplicamos las medidas técnicas y organizativas apropiadas para garantizar un nivel de seguridad adecuado al riesgo, de conformidad con el artículo 32 del RGPD, incluyendo el cifrado de comunicaciones (HTTPS), el control de acceso a sistemas y la formación del personal.
          </p>
        </Section>

        <Section title="9. Actualización de esta política">
          <p>
            Esta Política de Privacidad puede actualizarse en función de cambios normativos o en nuestros servicios. La versión vigente estará siempre disponible en esta página con la fecha de última actualización.
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

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 border-b border-border/50 py-2 text-sm last:border-0">
      <span className="w-40 shrink-0 font-medium text-foreground">{label}</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  );
}
