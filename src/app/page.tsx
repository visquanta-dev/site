// src/app/page.tsx
// UPDATED: Homepage with keyword-optimized metadata and page-specific schema

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
import Footer from '@/components/Footer';
import { homepageSchema } from "@/lib/schema/homepage";

// =============================================================================
// HOMEPAGE METADATA
// Keyword-optimized for "AI for car dealerships" (primary target)
// =============================================================================
export const metadata: Metadata = {
  // Title & Description inherited from src/app/layout.tsx to ensure consistency (#1 AI Platform...)

  // Page-specific keywords
  keywords: [
    "AI for car dealerships",
    "dealership AI",
    "automotive AI",
    "lead reactivation",
    "speed to lead",
    "Voice AI for dealerships",
    "dealership lead reactivation",
    "car dealer AI",
    "BDC automation",
    "automotive sales AI",
    "dealership CRM AI",
    "service department AI",
  ],

  // Canonical URL (with www for consistency)
  alternates: {
    canonical: "https://www.visquanta.com/",
    languages: {
      'en-US': 'https://www.visquanta.com/',
      'en-CA': 'https://www.visquanta.com/ca',
      'x-default': 'https://www.visquanta.com/',
    },
  },
};

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Page-Specific Schema: WebPage + SoftwareApplication + FAQPage */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
        strategy="afterInteractive"
      />

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

      {/* Footer */}
      <Footer />
    </main>
  );
}
