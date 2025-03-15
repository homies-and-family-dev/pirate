import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Spectral_SC } from "next/font/google";
import ClarityScript from "@/components/analytics/ClarityScript";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import Script from "next/script";
import Image from "next/image";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spectralSC = Spectral_SC({
  variable: "--font-spectral-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pirate Paradise - Inversiones en Prado, Tolima",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Descubre oportunidades de inversión en cabañas, restaurantes y club náutico en la hermosa Represa del Río Prado, Tolima.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: [
    "Inversiones",
    "Inversiones Prado Tolima",
    "Inversion MonteAzul Group",
    "Mejores inversiones Prado"
  ],
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Analytics - Implementación oficial de Next.js */}
        <GoogleAnalytics />

        {/* Facebook Pixel */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '470327726160529');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt="No Script"
            src="https://www.facebook.com/tr?id=1389137175102137&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${montserrat.variable} ${spectralSC.variable} antialiased overflow-x-hidden`}
      >
        <ClarityScript />
        <main className="flex flex-col min-h-screen">{children}</main>
      </body>
    </html>
  );
}
