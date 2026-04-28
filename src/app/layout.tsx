// src/app/layout.tsx
// UPDATED: Enterprise-grade SEO structure
// Base schema (Organization + WebSite) lives here
// Page-specific schema is injected per-page

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CalendlyModalProvider } from "@/components/CalendlyModal";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { Toaster } from "@/components/ui/sonner";
import { baseSchema } from "@/lib/schema/base";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import I18nWrapper from "@/components/i18n/I18nWrapper";
import GeoSuggestionBanner from "@/components/i18n/GeoSuggestionBanner";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";
function isGtmConfigured(): boolean {
  return Boolean(GTM_ID.trim() && /^GTM-[A-Z0-9]+$/i.test(GTM_ID.trim()));
}



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

// =============================================================================
// SITE-WIDE METADATA DEFAULTS
// These are inherited by all pages unless overridden
// =============================================================================
export const metadata: Metadata = {
  metadataBase: new URL("https://www.visquanta.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-CA": "/ca",
      "x-default": "/",
    }
  },

  // Default title template - pages override the %s
  title: {
    default: "#1 AI Platform for Car Dealerships | VisQuanta",
    template: "%s | VisQuanta"
  },

  // Default description (pages should override with specific copy)
  description: "The #1 AI platform for serious dealerships. Stop losing leads, win speed-to-lead, and turn CRM data into measurable revenue.",

  // Comprehensive keyword list
  keywords: [
    "AI for car dealerships",
    "automotive AI",
    "dealership AI",
    "car dealership AI",
    "lead reactivation",
    "speed to lead",
    "dealership lead reactivation",
    "speed to lead automotive",
    "Voice AI for dealerships",
    "dealership voice AI",
    "SMS chat dealership",
    "automotive BDC automation",
    "dealership reputation management",
    "service department AI",
    "automotive sales automation",
    "BDC automation",
    "car dealer AI",
    "dealership CRM integration"
  ],

  // Publisher info
  authors: [{ name: "VisQuanta", url: "https://www.visquanta.com" }],
  creator: "VisQuanta",
  publisher: "VisQuanta",

  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    // Omit url — child routes must set og:url via page/layout metadata or every share card points at /
    siteName: "VisQuanta",
    title: "#1 AI Platform for Car Dealerships | VisQuanta",
    description: "The #1 AI platform for serious dealerships. Stop losing leads, win speed-to-lead, and turn CRM data into measurable revenue.",
    images: [
      {
        url: "https://www.visquanta.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VisQuanta - AI for Dealerships",
        type: "image/png",
      },
    ],
  },

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image",
    site: "@VisQuanta",
    creator: "@VisQuanta",
    title: "#1 AI Platform for Car Dealerships | VisQuanta",
    description: "The #1 AI platform for serious dealerships. Stop losing leads, win speed-to-lead, and turn CRM data into measurable revenue.",
    images: ["https://www.visquanta.com/images/og-image.png"],
  },

  // Verification (add your codes here)
  verification: {
    google: "", // Add Google Search Console verification code
    // yandex: "",
    // yahoo: "",
  },

  // App metadata
  applicationName: "VisQuanta",
  category: "Business Software",

  // Additional metadata
  other: {
    "msapplication-TileColor": "#FF7404",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF7404",
};

// Calendly URL for demo scheduling
const CALENDLY_URL = "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo";
const CALENDLY_LOCALE_OVERRIDES: Record<string, string> = {
  'en-CA': 'https://calendly.com/droemer-visquanta/30min',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = GTM_ID.trim();
  const hasGtm = isGtmConfigured();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* =================================================================
            BASE SCHEMA (Site-Wide)
            Organization + WebSite only
            Page-specific schema is injected in each page.tsx
        ================================================================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(baseSchema)
          }}
        />

        {/* GA / Meta / Ahrefs / Mouseflow / Snitcher — load via GTM; set NEXT_PUBLIC_GTM_ID (see docs/gtm-tags.txt) */}
      </head>
      <body className={inter.variable} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }} suppressHydrationWarning>
        {hasGtm ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              title="Google Tag Manager"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <I18nWrapper>
          <GeoSuggestionBanner />
          <SmoothScroll>
            <CalendlyModalProvider calendlyUrl={CALENDLY_URL} localeOverrides={CALENDLY_LOCALE_OVERRIDES}>
              {children}
              <MobileStickyCTA />
              <Toaster />
              <SpeedInsights />
              <Analytics />
            </CalendlyModalProvider>
          </SmoothScroll>
        </I18nWrapper>
        {hasGtm ? (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
      </body>
    </html>
  );
}