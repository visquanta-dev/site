'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ROICalculatorModal from '@/components/ROICalculatorModal';
import MinimalQuote from '@/components/ui/MinimalQuote';

// Managed Revenue Recovery Sections
import HeroSection from '@/components/lead-reactivation/HeroSection';
import OpportunityCheck from '@/components/lead-reactivation/OpportunityCheck';
import WhatIsSection from '@/components/lead-reactivation/WhatIsSection';
import ReverseAdsComparison from '@/components/lead-reactivation/ReverseAdsComparison';
import SystemOutcomes from '@/components/lead-reactivation/SystemOutcomes';
import ProcessMap from '@/components/lead-reactivation/ProcessMap';
import FAQSection from '@/components/lead-reactivation/FAQSection';
import RelatedResources from '@/components/lead-reactivation/RelatedResources';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import RelatedCaseStudies from '@/components/shared/RelatedCaseStudies';
import CallToAction from '@/components/lead-reactivation/CallToAction';
import MidPageCTA from '@/components/MidPageCTA';

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
                            "url": "https://www.visquanta.com"
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

            {/* 1.2 DIAGNOSIS: The Opportunity Check (Diagnosis-First) */}
            <OpportunityCheck onOpenCalculator={openCalculator} />

            {/* 1.5 WHAT IS: Definition Block for SEO/AEO */}
            <WhatIsSection />

            {/* 2. LOGIC: Why Conversational SMS Works */}
            <ReverseAdsComparison />

            {/* 3 & 6: MANAGED SERVICE & RISK REDUCTION (What it is NOT) */}
            <SystemOutcomes />

            <MidPageCTA
                title="Your CRM is a gold mine. Stop ignored leads."
                subtitle="We reactivate leads that haven't spoken to you in 6 months using natural conversational SMS."
                buttonText="Schedule Your Walkthrough"
            />

            {/* 4. WORKFLOW: The Step-by-Step Recovery Process */}
            <ProcessMap onOpenCalculator={openCalculator} />

            <MidPageCTA
                title="Don't spend more on ads. Recover more leads."
                subtitle="The average dealership leaves $50k/mo in CRM dead leads. Let's get it back."
                buttonText="Recover Your Revenue"
            />



            {/* 6. FAQs: Common Questions Answered */}
            <FAQSection />

            {/* 6.5 CROSS-LINKING: Related Solutions */}
            <RelatedSolutions
                title="Smarter Lead Management"
                solutions={[
                    { title: "Speed to Lead", href: "/speed-to-lead", description: "Combine database reactivation with instant response.", icon: "zap" },
                    { title: "Custom Campaigns", href: "/custom-campaigns", description: "Targeted seasonal blitzes for your reactivated audience.", icon: "target" },
                    { title: "Service Drive Pro", href: "/service-drive", description: "Automate service appointments for reactivated service leads.", icon: "wrench" }
                ]}
            />

            {/* 6.7 PROOF: Related Case Studies */}
            <RelatedCaseStudies
                caseStudySlugs={['metro-motors', 'seth-wadley']}
            />

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
