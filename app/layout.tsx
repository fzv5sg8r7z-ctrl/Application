import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description:
    "AWESOME Visuel — Studio créatif spécialisé en vidéo, photo, aftermovie, clip, contenu réseaux et direction artistique. Des images cinématiques pour marques, artistes & événements.",
  keywords: [
    "vidéo",
    "photo",
    "aftermovie",
    "clip",
    "direction artistique",
    "production visuelle",
    "réseaux sociaux",
    "AWESOME Visuel",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description:
      "Studio créatif premium. Vidéo, photo et direction artistique pour marques, artistes et événements.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="bg-ink text-bone font-sans antialiased">{children}</body>
    </html>
  );
}
