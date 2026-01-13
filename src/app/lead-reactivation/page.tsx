'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculatorModal from '@/components/ROICalculatorModal';
import MinimalQuote from '@/components/ui/MinimalQuote';

// Managed Revenue Recovery Sections
import HeroSection from '@/components/lead-reactivation/HeroSection';
import ReverseAdsComparison from '@/components/lead-reactivation/ReverseAdsComparison';
import SystemOutcomes from '@/components/lead-reactivation/SystemOutcomes';
import ProcessMap from '@/components/lead-reactivation/ProcessMap';
import RevenueLeakage from '@/components/lead-reactivation/RevenueLeakage';
import FAQSection from '@/components/lead-reactivation/FAQSection';
import RelatedResources from '@/components/lead-reactivation/RelatedResources';
import CallToAction from '@/components/lead-reactivation/CallToAction';

export default function LeadReactivationPage() {
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

    const openCalculator = () => setIsCalculatorOpen(true);
    const closeCalculator = () => setIsCalculatorOpen(false);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">

            <Navigation />

            {/* JSON-LD for AEO (Service Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Automotive Lead Reactivation",
                        "name": "VisQuanta Lead Reactivation",
                        "description": "Turn 'dead' CRM leads into fresh appointments with AI-driven database reactivation and conversational SMS engagement.",
                        "provider": {
                            "@type": "Organization",
                            "name": "VisQuanta",
                            "url": "https://visquanta.com"
                        },
                        "areaServed": "US",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "AI Revenue Solutions",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Conversational SMS Reactivation"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "CRM Database Mining"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* 1. HERO: Recovered Revenue & Authority */}
            <HeroSection onOpenCalculator={openCalculator} />

            {/* 2. LOGIC: Why Conversational SMS Works */}
            <ReverseAdsComparison />

            {/* 3 & 6: MANAGED SERVICE & RISK REDUCTION (What it is NOT) */}
            <SystemOutcomes />

            {/* 4. WORKFLOW: The Step-by-Step Recovery Process */}
            <ProcessMap onOpenCalculator={openCalculator} />

            {/* 5. OPPORTUNITY: Revenue Leakage & Calculator */}
            <RevenueLeakage onOpenCalculator={openCalculator} />

            <div className="container-wide py-12">
                <MinimalQuote
                    quote="23 extra sales from the CRM reactivation alone."
                    author="Sarah Chen"
                    role="Sales Director, Westside Honda"
                    className="max-w-2xl mx-auto"
                />
            </div>

            {/* 6. FAQs: Common Questions Answered */}
            <FAQSection />

            {/* 7. RESOURCES: Blog & Case Studies */}
            <RelatedResources />

            {/* 8. CTA: Final Decision Point */}
            <CallToAction onOpenCalculator={openCalculator} />

            <Footer />

            {/* ROI Calculator Modal */}
            <ROICalculatorModal isOpen={isCalculatorOpen} onClose={closeCalculator} />

        </main>
    );
}
