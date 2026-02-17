// src/app/ca/page.tsx
// Canadian English homepage with localized metadata

import type { Metadata } from 'next';
import Script from "next/script";
import { Suspense } from 'react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import PainPointSection from '@/components/PainPointSection';
import WhatIsAIDealerships from '@/components/home/WhatIsAIDealerships';
import PlatformSection from '@/components/PlatformSection';
import WhyVisquantaSection from '@/components/WhyVisquantaSection';
import SeeItInAction from '@/components/SeeItInAction';
import DealerServicesSection from '@/components/DealerServicesSection';
import ResultsProof from '@/components/ResultsProof';
import HowItWorksSection from '@/components/HowItWorksSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import HomeBlogSection from '@/components/home/HomeBlogSection';
import FinalCTA from '@/components/FinalCTA';
import LocalizedFooter from '@/components/LocalizedFooter';
import { homepageSchema } from "@/lib/schema/homepage";

// =============================================================================
// CANADIAN HOMEPAGE METADATA
// Localized for en-CA with proper hreflang and canonical
// =============================================================================
export const metadata: Metadata = {
    title: 'AI for Canadian Car Dealerships',
    description: 'The #1 AI platform for Canadian dealerships. Stop losing leads, win speed-to-lead, and turn CRM data into measurable revenue across Canada.',
    keywords: [
        "AI for car dealerships Canada",
        "dealership AI Canada",
        "automotive AI Canada",
        "lead reactivation",
        "speed to lead",
        "Voice AI for dealerships",
        "Canadian dealership lead reactivation",
        "car dealer AI",
        "BDC automation",
        "automotive sales AI",
        "dealership CRM AI",
        "service department AI",
    ],

    // Canonical URL
    alternates: {
        canonical: "https://www.visquanta.com/ca/",
        languages: {
            'en-US': 'https://www.visquanta.com/',
            'en-CA': 'https://www.visquanta.com/ca/',
            'x-default': 'https://www.visquanta.com/',
        },
    },

    // Open Graph - Canadian specific
    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://www.visquanta.com/ca/",
        siteName: "VisQuanta",
        title: "AI for Car Dealerships in Canada | Lead Reactivation & Speed to Lead",
        description:
            "Reactivate dormant CRM leads. Respond to inbound leads in under 60 seconds. Never miss a service call. VisQuanta's AI platform drives dealership revenue 24/7.",
        images: [
            {
                url: "https://www.visquanta.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "VisQuanta - AI for Car Dealerships in Canada - Lead Reactivation and Speed to Lead Platform",
                type: "image/png",
            },
        ],
    },

    // Twitter Card - Canadian specific
    twitter: {
        card: "summary_large_image",
        site: "@VisQuanta",
        creator: "@VisQuanta",
        title: "AI for Car Dealerships in Canada | Lead Reactivation & Speed to Lead",
        description:
            "Reactivate dormant leads. Respond in under 60 seconds. Never miss a service call. VisQuanta's AI platform drives dealership revenue 24/7.",
        images: ["https://www.visquanta.com/images/og-image.png"],
    },

    // Robots - ensure page is fully indexed
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
};

// Canadian LocalBusiness Schema
const canadianLocalBusiness = {
    "@type": "LocalBusiness",
    "name": "VisQuanta Canada",
    "description": "AI service provider for Canadian car dealerships — lead reactivation, speed to lead, reputation management.",
    "url": "https://www.visquanta.com/ca/",
    "telephone": "+1-786-686-6554", // Using same placeholder/number as requested
    "email": "info@visquanta.com",
    "areaServed": {
        "@type": "Country",
        "name": "Canada"
    },
    "serviceType": [
        "Lead Reactivation",
        "Speed to Lead",
        "Reputation Management",
        "Service Drive AI",
        "Website Widget"
    ],
    "inLanguage": "en-CA"
};

// Canadian-specific schema
const canadianHomepageSchema = {
    ...homepageSchema,
    "@graph": [
        ...(homepageSchema["@graph"]?.map((item: any) => {
            if (item["@type"] === "WebPage") {
                return {
                    ...item,
                    "@id": "https://www.visquanta.com/ca/#webpage",
                    "url": "https://www.visquanta.com/ca/",
                    "inLanguage": "en-CA",
                };
            }
            if (item["@type"] === "Organization") {
                return {
                    ...item,
                    "areaServed": [
                        { "@type": "Country", "name": "United States" },
                        { "@type": "Country", "name": "Canada" }
                    ],
                };
            }
            return item;
        }) || []),
        canadianLocalBusiness
    ],
};

export default function CanadianHomePage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Page-Specific Schema: WebPage + SoftwareApplication + FAQPage */}
            <Script
                id="canadian-homepage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(canadianHomepageSchema),
                }}
                strategy="afterInteractive"
            />

            {/* hreflang tags handled by metadata export */}

            <Navigation />

            {/* 1. Hero - Value Proposition & Interactive Product Cards */}
            <Hero />

            {/* 2. Social Proof Bar - Trust Indicators */}
            <SocialProofBar />

            {/* 3. The Problem - Dealer Pain Points */}
            <PainPointSection />

            {/* 3b. What is AI for Car Dealerships? - Category Definition */}
            <WhatIsAIDealerships />

            {/* 4. Platform Capabilities - Detailed Product Breakdown */}
            <PlatformSection />

            {/* 5. The Differentiator - Why VisQuanta + Comparison Table */}
            <WhyVisquantaSection />

            {/* 5. Interactive Demo - See It In Action */}
            <SeeItInAction />

            {/* 6. Dealer Services - Tabbed Interface by Dealer Type */}
            <DealerServicesSection />

            {/* 7. Results & Proof - Stats + Video Testimonials */}
            <ResultsProof />

            {/* 8. How it Works - Onboarding Process */}
            <HowItWorksSection />

            {/* 10. Integrations - Logo Marquee */}
            <IntegrationsSection />

            {/* 11. FAQ - Common Questions */}
            <FAQSection />

            {/* 12. Latest Insights - Blog Articles */}
            <Suspense fallback={null}>
                <HomeBlogSection />
            </Suspense>

            {/* 13. Final CTA */}
            <FinalCTA />

            {/* Canadian Footer - Uses LocalizedFooter with t() */}
            <LocalizedFooter />
        </main>
    );
}
