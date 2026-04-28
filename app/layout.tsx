import type { Metadata, Viewport } from "next";
import { Assistant, Frank_Ruhl_Libre } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-assistant",
  display: "swap",
});

const frank = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-frank",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | הנדסת מים מוסמכת — תכנון תוך 48 שעות`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "מהנדסת מים",
    "תכנון מערכות מים",
    "נספח סניטרי",
    "ניקוז",
    "כיבוי אש",
    "פיקוח עליון",
    "האלה דראושה",
    "Hala Drausha",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — הנדסת מים`,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#002B49",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${frank.variable}`}>
      <body className="min-h-dvh bg-brand-canvas antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-full focus:bg-brand-deep focus:px-5 focus:py-2 focus:text-white"
        >
          דלג לתוכן הראשי
        </a>
        {children}
      </body>
    </html>
  );
}
