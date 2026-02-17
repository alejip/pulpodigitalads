import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MessageCircle, CheckCircle } from "lucide-react";

export default function ThanksPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-accent bg-opacity-10 rounded-full p-6">
              <CheckCircle size={64} className="text-accent" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            ¡Perfecto! Recibido.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Te contactaremos en 24 horas por WhatsApp o email con tu diagnóstico personalizado.
          </p>
          
          <div className="bg-card border border-border rounded-2xl p-8 mb-8">
            <p className="text-base text-foreground mb-6">
              Mientras tanto, puedes contactarnos directamente por WhatsApp:
            </p>
            
            <a
              href="https://wa.me/34644737957"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full bg-accent text-accent-foreground px-8 py-4 rounded-full font-medium text-lg transition-opacity hover:opacity-90"
            >
              <MessageCircle size={24} />
              Contactar por WhatsApp
            </a>
          </div>
          
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium transition-colors hover:bg-muted"
          >
            Volver al inicio
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
