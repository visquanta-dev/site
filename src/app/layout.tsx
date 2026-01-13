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
