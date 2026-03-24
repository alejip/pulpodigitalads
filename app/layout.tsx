import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { CookieBanner } from "@/components/cookie-banner";
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
  title: "Pulpo Digital | Agencia de Paid Media para Abogados de Accidentes",
  description:
    "Captamos casos para abogados de accidentes mediante Google Ads y Meta Ads. Agencia de Paid Media especializada en leads cualificados, consultas reales y crecimiento predecible para el sector legal.",
  openGraph: {
    title: "Pulpo Digital | Captación de Casos con Paid Media para Abogados",
    description:
      "Agencia de Paid Media especializada en captación de clientes para abogados de accidentes. Google Ads, Meta Ads, leads cualificados y consultas agendadas.",
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
      <head>
        {/* GTM Consent Mode v2 — debe ejecutarse antes que GTM */}
        <Script id="consent-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            // Denegar todo por defecto (RGPD)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 2000
            });

            // Si ya existe consentimiento guardado, aplicarlo inmediatamente
            try {
              var stored = localStorage.getItem('pulpo_cookie_consent');
              if (stored) {
                var c = JSON.parse(stored);
                gtag('consent', 'update', {
                  'analytics_storage': c.analytics ? 'granted' : 'denied',
                  'ad_storage': c.advertising ? 'granted' : 'denied',
                  'ad_user_data': c.advertising ? 'granted' : 'denied',
                  'ad_personalization': c.advertising ? 'granted' : 'denied'
                });
              }
            } catch(e) {}
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGJH4JN4');`}
        </Script>
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGJH4JN4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
