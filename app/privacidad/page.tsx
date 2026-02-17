export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Responsable del tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pulpo Digital es responsable del tratamiento de tus datos personales. Puedes contactar con nosotros en <a href="mailto:hola@pulpodigital.es" className="text-accent hover:underline">hola@pulpodigital.es</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Datos que recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recopilamos información a través de:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Formularios de contacto (nombre, email, teléfono)</li>
              <li>• Google Analytics 4: comportamiento de navegación</li>
              <li>• Meta Pixel: interacciones en el sitio</li>
              <li>• Google Ads: datos de conversión</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Google Analytics 4</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Utilizamos Google Analytics 4 para analizar el uso del sitio web. Esto nos ayuda a:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Entender cómo navegas por nuestro sitio</li>
              <li>• Identificar páginas populares</li>
              <li>• Mejorar la experiencia de usuario</li>
              <li>• Medir la efectividad de campañas</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Google Analytics utiliza cookies para almacenar información anónima. <a href="https://policies.google.com/privacy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Lee la política de privacidad de Google</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Meta Pixel</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Meta Pixel nos ayuda a:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Rastrear conversiones desde anuncios de Facebook/Instagram</li>
              <li>• Crear audiencias de remarketing</li>
              <li>• Medir la efectividad de campañas de publicidad</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <a href="https://www.facebook.com/policies/cookies/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Lee la política de cookies de Meta</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Google Ads Conversion Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos Google Ads Conversion Tracking para medir si los usuarios que hacen clic en nuestros anuncios realizan acciones valiosas en nuestro sitio, como completar un formulario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tus derechos</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bajo el RGPD, tienes derecho a:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Acceder a tus datos personales</li>
              <li>• Rectificar datos incorrectos</li>
              <li>• Solicitar la eliminación de tus datos</li>
              <li>• Oponerme al procesamiento de tus datos</li>
              <li>• Solicitar la portabilidad de tus datos</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Para ejercer estos derechos, contacta con nosotros en <a href="mailto:hola@pulpodigital.es" className="text-accent hover:underline">hola@pulpodigital.es</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Cambios en esta política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos sobre cambios significativos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tienes preguntas sobre esta política, contacta con nosotros en <a href="mailto:hola@pulpodigital.es" className="text-accent hover:underline">hola@pulpodigital.es</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
