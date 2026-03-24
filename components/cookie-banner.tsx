"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

type ConsentState = {
  analytics: boolean;
  advertising: boolean;
};

type BannerView = "hidden" | "banner" | "customize";

const CONSENT_KEY = "pulpo_cookie_consent";

function pushGTMConsent(consent: ConsentState) {
  if (typeof window === "undefined") return;
  const dl = (window as any).dataLayer;
  if (!dl) return;
  dl.push({
    event: "consent_update",
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.advertising ? "granted" : "denied",
    ad_user_data: consent.advertising ? "granted" : "denied",
    ad_personalization: consent.advertising ? "granted" : "denied",
  });
  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.advertising ? "granted" : "denied",
      ad_user_data: consent.advertising ? "granted" : "denied",
      ad_personalization: consent.advertising ? "granted" : "denied",
    });
  }
}

export function CookieBanner() {
  const [view, setView] = useState<BannerView>("hidden");
  const [prefs, setPrefs] = useState<ConsentState>({ analytics: false, advertising: false });
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        pushGTMConsent(parsed);
        setPrefs({ analytics: parsed.analytics, advertising: parsed.advertising });
        setHasConsented(true);
      } catch {
        setView("banner");
      }
    } else {
      setView("banner");
    }

    const handler = () => {
      const latest = localStorage.getItem(CONSENT_KEY);
      if (latest) {
        try {
          const parsed = JSON.parse(latest);
          setPrefs({ analytics: parsed.analytics, advertising: parsed.advertising });
        } catch { /* noop */ }
      }
      setView("customize");
    };
    window.addEventListener("openCookieSettings", handler);
    return () => window.removeEventListener("openCookieSettings", handler);
  }, []);

  const saveConsent = (consent: ConsentState) => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ ...consent, timestamp: new Date().toISOString(), version: "1.0" })
    );
    pushGTMConsent(consent);
    setPrefs(consent);
    setHasConsented(true);
    setView("hidden");
  };

  const acceptAll = () => saveConsent({ analytics: true, advertising: true });
  const rejectAll = () => saveConsent({ analytics: false, advertising: false });
  const saveCustom = () => saveConsent(prefs);

  return (
    <>
      {/* Floating toggle — visible after first consent */}
      {hasConsented && view === "hidden" && (
        <button
          onClick={() => setView("customize")}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-xs text-muted-foreground shadow-md backdrop-blur-sm transition-colors hover:text-foreground"
          aria-label="Gestionar preferencias de cookies"
        >
          <Cookie size={14} />
          <span>Cookies</span>
        </button>
      )}

      {/* Panel */}
      {(view === "banner" || view === "customize") && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-end sm:justify-start sm:p-6">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={hasConsented ? () => setView("hidden") : undefined}
          />

          <div className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 shadow-2xl">

            {/* ── Banner view ── */}
            {view === "banner" && (
              <>
                <div className="mb-5 flex items-start gap-3">
                  <Cookie size={20} className="mt-0.5 shrink-0 text-accent" />
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">
                      Usamos cookies
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Utilizamos cookies propias y de terceros para garantizar el funcionamiento del sitio, analizar el tráfico y mostrarte publicidad relevante. Puedes aceptar todas, rechazar las no esenciales o personalizar tu elección.{" "}
                      <a
                        href="/politica-de-cookies"
                        className="text-accent underline underline-offset-2"
                      >
                        Más información
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setView("customize")}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Personalizar
                  </button>
                  <button
                    onClick={rejectAll}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Solo esenciales
                  </button>
                  <button
                    onClick={acceptAll}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Aceptar todas
                  </button>
                </div>
              </>
            )}

            {/* ── Customize view ── */}
            {view === "customize" && (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-foreground">
                    Preferencias de cookies
                  </h2>
                  {hasConsented && (
                    <button
                      onClick={() => setView("hidden")}
                      className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      aria-label="Cerrar"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="mb-6 space-y-3">
                  {/* Technical — always on */}
                  <div className="rounded-xl border border-border bg-muted/40 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Cookies técnicas
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Necesarias para el funcionamiento del sitio
                        </p>
                      </div>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        Siempre activas
                      </span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Cookies analíticas
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Estadísticas de uso del sitio (Google Analytics)
                        </p>
                      </div>
                      <Toggle
                        checked={prefs.analytics}
                        onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                      />
                    </div>
                  </div>

                  {/* Advertising */}
                  <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Cookies publicitarias
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          Publicidad personalizada (Google Ads, Meta)
                        </p>
                      </div>
                      <Toggle
                        checked={prefs.advertising}
                        onChange={(v) => setPrefs((p) => ({ ...p, advertising: v }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                  <button
                    onClick={rejectAll}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Solo esenciales
                  </button>
                  <button
                    onClick={saveCustom}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Guardar selección
                  </button>
                  <button
                    onClick={acceptAll}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Aceptar todas
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 transition-colors duration-200 ${
        checked ? "border-accent bg-accent" : "border-border bg-border/60"
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          checked ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}
