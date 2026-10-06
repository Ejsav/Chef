import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bodoni, instrument } from "./fonts";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { RevealObserver } from "@/components/motion/RevealObserver";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Chef Ray Gennaro — Private Chef, Connecticut",
    template: "%s — Chef Ray Gennaro",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Chef Ray Gennaro — Private tables, by arrangement",
    description:
      "Italian-American private chef with New Haven roots. Private dining in Connecticut and beyond, destination and private-island dinners, and cooking lessons.",
    url: "/",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#110c09",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        {/* Opt into reveal states before first paint; without JS everything stays visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <SmoothScroll />
        <RevealObserver />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
