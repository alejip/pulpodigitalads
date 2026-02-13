"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6">
        <nav
          className={`flex w-full max-w-3xl items-center justify-between rounded-full px-3 py-2 transition-all duration-500 ${
            scrolled || isOpen
              ? "bg-background/70 shadow-lg shadow-foreground/5 backdrop-blur-xl border border-border/60"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 pl-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
              <span className="text-sm font-bold text-accent-foreground font-mono">
                P
              </span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Pulpo Digital
            </span>
          </a>

          {/* Center links - desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - desktop */}
          <div className="hidden items-center md:flex">
            <a
              href="#contacto"
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Hablemos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mr-1 flex h-9 w-9 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted md:hidden"
            aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <div className="relative h-5 w-5">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                }`}
              >
                <X size={20} />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu size={20} />
              </span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed left-4 right-4 top-[72px] z-50 overflow-hidden rounded-2xl border border-border/60 bg-background/80 shadow-xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-col p-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between border-b border-border/40 py-4 text-lg font-medium text-foreground transition-colors hover:text-accent first:pt-0 last:border-b-0"
              style={{
                animationDelay: `${i * 50}ms`,
              }}
            >
              {link.label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-muted-foreground"
              >
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-4 rounded-full bg-accent px-6 py-3.5 text-center text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Hablemos
          </a>
        </div>
      </div>
    </>
  );
}
