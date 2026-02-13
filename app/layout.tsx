import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Pulpo Digital | Agencia de Paid Media para Cl\u00ednicas y Centros M\u00e9dicos",
  description:
    "Captamos pacientes para cl\u00ednicas mediante Google Ads y Meta Ads. Agencia de Paid Media especializada en leads cualificados, citas reales y crecimiento predecible para el sector salud.",
  openGraph: {
    title: "Pulpo Digital | Captaci\u00f3n de Pacientes con Paid Media",
    description:
      "Agencia de Paid Media especializada en captaci\u00f3n de pacientes para cl\u00ednicas. Google Ads, Meta Ads, leads cualificados y citas agendadas.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
