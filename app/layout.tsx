import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maçonnerie 70 Père & Fils | Expert Maçonnerie & Terrassement - Champagney",
  description:
    "Maçonnerie 70 Père & Fils, entreprise familiale depuis 2010. Construction de maisons, rénovation, béton banché, enduits et terrassement en Haute-Saône (70, 25, 90, 68, 88). Devis gratuit.",
  keywords: "maçonnerie, terrassement, construction, rénovation, béton banché, enduits, Champagney, Haute-Saône, Belfort, Montbéliard",
  openGraph: {
    title: "Maçonnerie 70 Père & Fils",
    description: "Expert en maçonnerie et terrassement depuis 2010 — Champagney, Haute-Saône",
    url: "https://www.maconnerie70.fr",
    siteName: "Maçonnerie 70",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
