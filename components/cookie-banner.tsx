"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem("cookie_consent_v1");
    if (!stored) {
      setIsVisible(true);
    } else {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    localStorage.setItem("cookie_consent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
    loadScripts(newConsent);
  };

  const handleRejectNonEssential = () => {
    const newConsent = {
      necessary: true,
      analytics: false,
      advertising: false,
    };
    localStorage.setItem("cookie_consent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie_consent_v1", JSON.stringify(consent));
    setIsVisible(false);
    setShowModal(false);
    loadScripts(consent);
  };

  const loadScripts = (consentSettings: typeof consent) => {
    if (consentSettings.analytics) {
      loadGA4();
    }
    if (consentSettings.advertising) {
      loadMetaPixel();
      loadGoogleAds();
    }
  };

  const loadGA4 = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      (window.dataLayer as any).push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  };

  const loadMetaPixel = () => {
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  };

  const loadGoogleAds = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX";
    document.head.appendChild(script);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border p-6 shadow-lg">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-sm leading-relaxed text-foreground max-w-md">
            🍪 Personalizamos tu experiencia: <strong>Analítica</strong> (Google Analytics) | <strong>Publicidad</strong> (Meta Pixel, Google Ads)
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-6 py-2 border border-border text-foreground rounded-lg text-sm font-medium transition-colors hover:bg-muted"
            >
              Rechazar no esenciales
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2 border border-border text-foreground rounded-lg text-sm font-medium transition-colors hover:bg-muted"
            >
              Configurar
            </button>
          </div>
        </div>
      </div>

      {/* Modal de Configuración */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="bg-background border border-border rounded-lg max-w-md w-full p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">
                Configuración de cookies
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necesarias */}
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Necesarias</p>
                  <p className="text-xs text-muted-foreground">Siempre activas</p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5"
                />
              </div>

              {/* Analítica */}
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Analítica</p>
                  <p className="text-xs text-muted-foreground">Google Analytics 4</p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent({ ...consent, analytics: e.target.checked })
                  }
                  className="w-5 h-5"
                />
              </div>

              {/* Publicidad */}
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Publicidad</p>
                  <p className="text-xs text-muted-foreground">Meta Pixel, Google Ads</p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.advertising}
                  onChange={(e) =>
                    setConsent({ ...consent, advertising: e.target.checked })
                  }
                  className="w-5 h-5"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              >
                Guardar preferencias
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg text-sm font-medium transition-colors hover:bg-muted"
              >
                Cancelar
              </button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Lee nuestra{" "}
              <a href="/privacidad" className="text-accent hover:underline">
                política de privacidad
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
