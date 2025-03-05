import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import "./globals.css";
import { Montserrat, Pirata_One } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Pirate Paradise - Inversiones en Prado, Tolima",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Descubre oportunidades de inversión en cabañas, restaurantes y club náutico en la hermosa Represa del Río Prado, Tolima.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${pirataOne.variable} antialiased`}
      >
          <Header />
          <main>{children}</main>
      </body>
    </html>
  );
}
