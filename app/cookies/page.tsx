export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Las cookies son pequeños archivos de texto que se descargan en tu dispositivo cuando visitas nuestro sitio web. Se utilizan para recordar tus preferencias, entender cómo utilizas nuestro sitio y mejorar tu experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
            
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies Necesarias</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Son esenciales para el funcionamiento del sitio web. Siempre están activas.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Gestión de consentimiento de cookies</li>
                  <li>• Funciones de seguridad</li>
                  <li>• Preferencias de accesibilidad</li>
                </ul>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Analítica</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Nos ayudan a entender cómo interactúas con nuestro sitio.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Google Analytics 4 (GA4)</li>
                  <li>• Datos de uso y comportamiento</li>
                  <li>• Páginas visitadas y duración de sesiones</li>
                </ul>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de Publicidad</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Permiten personalizar anuncios relevantes.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Meta Pixel</li>
                  <li>• Google Ads Conversion Tracking</li>
                  <li>• Remarketing y retargeting</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Gestión de cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Puedes controlar y gestionar tus preferencias de cookies en cualquier momento haciendo clic en el botón "Configurar" en nuestro banner de cookies. Además, puedes gestionar las cookies desde la configuración de tu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Si tienes preguntas sobre nuestro uso de cookies, contacta con nosotros en{" "}
              <a href="mailto:hola@pulpodigital.es" className="text-accent hover:underline">
                hola@pulpodigital.es
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
