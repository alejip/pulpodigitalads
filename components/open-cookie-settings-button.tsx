"use client";

export function OpenCookieSettingsButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event("openCookieSettings"))}
      className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      Gestionar preferencias de cookies
    </button>
  );
}
