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
  title: "VisQuanta | AI for Car Dealerships – Sell More Cars",
  description: "Best automotive AI for car dealerships. VisQuanta's AutoMaster Suite automates lead reactivation, speed-to-lead, reputation management & service operations. Purpose-built for auto dealers.",
  keywords: [
    "automotive AI",
    "AI for car dealerships",
    "car dealership AI",
    "dealership lead reactivation",
    "speed to lead automotive",
    "dealership AI",
    "automotive BDC automation",
    "dealership reputation management",
    "service department AI",
    "automotive sales automation"
  ],
  authors: [{ name: "VisQuanta" }],
  creator: "VisQuanta",
  publisher: "VisQuanta",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://visquanta.com",
    siteName: "VisQuanta",
    title: "VisQuanta | AI for Car Dealerships – Sell More Cars",
    description: "Best automotive AI for car dealerships. Automate lead reactivation, speed-to-lead, reputation management & service operations.",
    images: [
      {
        url: "https://visquanta.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "VisQuanta - AI for Car Dealerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisQuanta | AI for Car Dealerships – Sell More Cars",
    description: "Best automotive AI for car dealerships. Automate lead reactivation, speed-to-lead, reputation management & service operations.",
    images: ["https://visquanta.com/images/og-image.png"],
    creator: "@VisQuanta",
  },
  alternates: {
    canonical: "https://visquanta.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Calendly URL for demo scheduling
const CALENDLY_URL = "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo";

// Schema markup data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VisQuanta",
  "url": "https://visquanta.com",
  "logo": "https://visquanta.com/images/visquanta-logo-white.png",
  "description": "VisQuanta is the leading automotive AI platform for car dealerships in the United States, providing AI-powered solutions for lead reactivation, speed-to-lead, reputation management, and service department automation.",
  "foundingDate": "2023",
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
  ],
  "knowsAbout": [
    "Automotive AI",
    "AI for car dealerships",
    "Car dealership AI solutions",
    "Dealership lead reactivation",
    "Speed to lead automotive",
    "BDC automation",
    "Automotive BDC software",
    "CRM lead management",
    "Dealership reputation management",
    "Service department AI",
    "Automotive sales automation",
    "Car dealer technology",
    "Dealership operations software",
    "Voice AI for dealerships",
    "Automotive chatbot",
    "Lead response automation"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VisQuanta",
  "url": "https://visquanta.com",
  "description": "AI for car dealerships - automate lead reactivation, speed-to-lead, reputation management, and service operations.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://visquanta.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AutoMaster Suite",
  "alternateName": "VisQuanta AutoMaster Suite",
  "description": "The complete AI platform for automotive dealerships. AutoMaster Suite automates lead reactivation, speed-to-lead response, reputation management, and service department operations for car dealerships.",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Automotive Dealership Software",
  "operatingSystem": "Web-based",
  "url": "https://visquanta.com",
  "author": {
    "@type": "Organization",
    "name": "VisQuanta"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact for pricing - custom solutions for car dealerships"
  },
  "featureList": [
    "Lead Reactivation AI",
    "Speed to Lead Automation",
    "Reputation Management",
    "Service Department AI",
    "Website Widget",
    "Voice AI",
    "CRM Integration",
    "24/7 Automated Response"
  ],
  "screenshot": "https://visquanta.com/images/dashboard-preview.png",
  "softwareVersion": "2.0",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "keywords": [
    "automotive AI",
    "car dealership AI",
    "AI for dealerships",
    "dealership lead reactivation",
    "speed to lead",
    "automotive BDC automation",
    "dealership software"
  ]
};

// FAQ Schema targeting "People Also Ask" keywords
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is automotive AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automotive AI refers to artificial intelligence technology specifically designed for car dealerships and the automotive retail industry. It includes AI-powered tools for lead management, customer communication, appointment scheduling, reputation management, and service department automation. VisQuanta's AutoMaster Suite is a leading automotive AI platform that helps dealerships automate these processes to sell more cars and improve customer experience."
      }
    },
    {
      "@type": "Question",
      "name": "How do car dealerships use AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car dealerships use AI in several key areas: 1) Lead Reactivation - AI automatically contacts and re-engages old leads in the CRM that would otherwise be forgotten. 2) Speed to Lead - AI responds to new inquiries within seconds, 24/7. 3) Reputation Management - AI monitors and responds to customer reviews across all platforms. 4) Service Department - AI handles appointment scheduling, service reminders, and customer inquiries. 5) Website Chat - AI engages website visitors in real-time to capture leads."
      }
    },
    {
      "@type": "Question",
      "name": "What is lead reactivation for dealerships?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lead reactivation is the process of re-engaging prospects in your dealership's CRM who showed interest but never purchased. Studies show 84% of CRM leads are never re-engaged after 30 days. AI-powered lead reactivation automatically reaches out to these dormant leads with personalized messages, restarting conversations and converting them into appointments. VisQuanta's lead reactivation typically achieves 30% re-engagement rates and 11% sales uplift."
      }
    },
    {
      "@type": "Question",
      "name": "What is speed to lead in automotive sales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Speed to lead measures how quickly a dealership responds to a new sales inquiry. Research shows that responding within 5 minutes makes you 21x more likely to qualify the lead compared to responding after 30 minutes. AI-powered speed to lead solutions like VisQuanta respond to every inquiry in under 60 seconds, 24/7, ensuring no lead goes cold regardless of when they submit or whether your BDC team is available."
      }
    },
    {
      "@type": "Question",
      "name": "What is BDC in a car dealership?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BDC stands for Business Development Center - the team at a car dealership responsible for handling inbound leads, making outbound calls, setting appointments, and following up with prospects. BDC teams are critical for dealership sales but often struggle with high turnover, inconsistent follow-up, and limited hours. AI-powered BDC automation tools help dealerships scale their lead handling capacity without adding staff, ensuring consistent 24/7 coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to implement dealership AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VisQuanta's AutoMaster Suite can be fully implemented in as little as 2 weeks. The process includes CRM integration, AI training on your dealership's inventory and processes, voice AI customization, and team onboarding. Most dealerships see measurable results within the first 30 days of going live."
      }
    },
    {
      "@type": "Question",
      "name": "Does dealership AI integrate with my CRM?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, modern dealership AI platforms integrate with all major automotive CRMs including VinSolutions, DealerSocket, Elead, CDK, and others. VisQuanta's AutoMaster Suite connects directly to your existing CRM, syncing lead data in real-time without requiring you to change your current systems or workflows."
      }
    },
    {
      "@type": "Question",
      "name": "What ROI can dealerships expect from AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dealerships using AI typically see significant ROI improvements: 21x higher lead conversion from faster response times, 30% re-engagement of dormant CRM leads, 11% sales uplift from lead reactivation, and reduced BDC staffing costs. VisQuanta customers report recovering thousands in previously lost revenue from leads that would have otherwise been forgotten in their CRM."
      }
    }
  ]
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
        <meta name="theme-color" content="#FF7404" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        
        {/* SoftwareApplication Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema)
          }}
        />
        
        {/* FAQ Schema - Targeting "People Also Ask" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
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