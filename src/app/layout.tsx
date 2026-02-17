// src/app/layout.tsx
// UPDATED: Enterprise-grade SEO structure
// Base schema (Organization + WebSite) lives here
// Page-specific schema is injected per-page

import type { Metadata } from "next";
import { Inter } from "next/font/google";
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



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    url: "https://www.visquanta.com",
    siteName: "VisQuanta",
    title: "#1 AI Platform for Car Dealerships | VisQuanta",
    description: "The #1 AI platform for serious dealerships. Stop losing leads, win speed-to-lead, and turn CRM data into measurable revenue.",
    images: [
      {
        url: "https://www.visquanta.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VisQuanta - AI for Car Dealerships",
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

        {/* Snitcher Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(e){"use strict";var t=e&&e.namespace;if(t&&e.profileId&&e.cdn){var i=window[t];if(i&&Array.isArray(i)||(i=window[t]=[]),!i.initialized&&!i._loaded)if(i._loaded)console&&console.warn("[Radar] Duplicate initialization attempted");else{i._loaded=!0;["track","page","identify","group","alias","ready","debug","on","off","once","trackClick","trackSubmit","trackLink","trackForm","pageview","screen","reset","register","setAnonymousId","addSourceMiddleware","addIntegrationMiddleware","addDestinationMiddleware","giveCookieConsent"].forEach((function(e){var a;i[e]=(a=e,function(){var e=window[t];if(e.initialized)return e[a].apply(e,arguments);var i=[].slice.call(arguments);return i.unshift(a),e.push(i),e})})),-1===e.apiEndpoint.indexOf("http")&&(e.apiEndpoint="https://"+e.apiEndpoint),i.bootstrap=function(){var t,i=document.createElement("script");i.async=!0,i.type="text/javascript",i.id="__radar__",i.setAttribute("data-settings",JSON.stringify(e)),i.src=[-1!==(t=e.cdn).indexOf("http")?"":"https://",t,"/releases/latest/radar.min.js"].join("");var a=document.scripts[0];a.parentNode.insertBefore(i,a)},i.bootstrap()}}else"undefined"!=typeof console&&console.error("[Radar] Configuration incomplete")}({
  "apiEndpoint": "radar.snitcher.com",
  "cdn": "cdn.snitcher.com",
  "namespace": "Snitcher",
  "profileId": "8435754"
});`
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EN5JZB2DW9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EN5JZB2DW9');
            `
          }}
        />

        {/* Ahrefs Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="Wu9ybf2aliQUBBh9UHxyGQ" async></script>
      </head>
      <body className={inter.variable} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }} suppressHydrationWarning>
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
      </body>
    </html>
  );
}