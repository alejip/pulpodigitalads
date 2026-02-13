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
  title: "Pulpo Digital | Agencia de Ads & Performance",
  description:
    "Impulsamos tu negocio con publicidad digital basada en datos y estrategia. Google Ads, Meta Ads, TikTok Ads y Performance Marketing.",
  openGraph: {
    title: "Pulpo Digital | Agencia de Ads & Performance",
    description:
      "Impulsamos tu negocio con publicidad digital basada en datos y estrategia.",
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
