"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [consent, setConsent] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("cookie_consent_v1");
    if (!stored) {
      setIsVisible(true);
    } else {
      try {
        setConsent(JSON.parse(stored));
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  if (!isMounted) return null;

  const handleAcceptAll = () => {
    const newConsent = {
      necessary: true,
      analytics: true,
      advertising: true,
    };
    localStorage.setItem("cookie_consent_v1", JSON.stringify(newConsent));
    setConsent(newConsent);
    setIsVisible(false);
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
  };

  const toggleConsent = (key: keyof typeof consent) => {
    if (key === "necessary") return;
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  🍪 Personaliza tus cookies: Analítica (Google) | Publicidad (Meta/Google Ads)
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={handleRejectNonEssential}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Rechazar no esenciales
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Configurar
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="max-w-lg rounded-lg bg-background p-8 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Preferencias de Cookies</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <h3 className="font-semibold text-foreground">Necesarias</h3>
                  <p className="text-sm text-muted-foreground">
                    Esenciales para el funcionamiento del sitio
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.necessary}
                  disabled
                  className="h-5 w-5"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <h3 className="font-semibold text-foreground">Analítica (GA4)</h3>
                  <p className="text-sm text-muted-foreground">
                    Para entender cómo usas nuestro sitio
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={() => toggleConsent("analytics")}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div>
                  <h3 className="font-semibold text-foreground">Publicidad (Meta/Google)</h3>
                  <p className="text-sm text-muted-foreground">
                    Para personalizar anuncios y seguimiento
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.advertising}
                  onChange={() => toggleConsent("advertising")}
                  className="h-5 w-5 cursor-pointer"
                />
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 rounded-lg border border-border px-4 py-2 font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancelar
              </button>
              <button
                onClick={handleSavePreferences}
                className="flex-1 rounded-lg bg-accent px-4 py-2 font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
