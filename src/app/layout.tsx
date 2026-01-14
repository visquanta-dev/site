import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CalendlyModalProvider } from "@/components/CalendlyModal";
import SmoothScroll from "@/components/ui/SmoothScroll";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visquanta.com"),
  title: "VisQuanta | The Dealer's Unfair Advantage",
  description: "BUILT FOR MODERN DEALERSHIPS - The unfair advantage elite dealerships use",
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow some zoom for accessibility while keeping initial scale clean
};

// Calendly URL for demo scheduling
const CALENDLY_URL = "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo";

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
        <meta name="theme-color" content="#FF7404" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VisQuanta",
              "url": "https://visquanta.com",
              "logo": "https://visquanta.com/images/visquanta-logo-white.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-786-686-6554",
                "contactType": "sales",
                "areaServed": "US",
                "availableLanguage": "en"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2222 Ponce de Leon Blvd, 3rd Floor",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33134",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.linkedin.com/company/visquanta",
                "https://www.youtube.com/@visquanta",
                "https://www.facebook.com/people/VisQuanta/61567841541110/",
                "https://x.com/VisQuanta",
                "https://www.instagram.com/visquanta/",
                "https://www.tiktok.com/@visquanta"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "VisQuanta",
              "url": "https://visquanta.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://visquanta.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
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
        {/* Google tag (gtag.js) */}
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
        <SmoothScroll>
          <CalendlyModalProvider calendlyUrl={CALENDLY_URL}>
            {children}

            <Toaster />
          </CalendlyModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
