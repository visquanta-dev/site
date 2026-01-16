'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Speed to Lead Sections
import HeroSection from '@/components/speed-to-lead/HeroSection';
import LeadLossMoment from '@/components/speed-to-lead/LeadLossMoment';
import WhereLeadsGetLost from '@/components/speed-to-lead/WhereLeadsGetLost';
import InterceptionLayer from '@/components/speed-to-lead/InterceptionLayer';
import Coverage24x7 from '@/components/speed-to-lead/Coverage24x7';
import OutcomesThatMatter from '@/components/speed-to-lead/OutcomesThatMatter';
import WhoItIsFor from '@/components/speed-to-lead/WhoItIsFor';
import FinalCTA from '@/components/speed-to-lead/FinalCTA';
import FAQSection from '@/components/speed-to-lead/FAQSection';
import RelatedResources from '@/components/speed-to-lead/RelatedResources';

import SpeedLossCalculator from '@/components/speed-to-lead/SpeedLossCalculator';
import ROICalculatorModal from '@/components/ROICalculatorModal';
import MinimalQuote from '@/components/ui/MinimalQuote';
import { useState } from 'react';

export default function SpeedToLeadPage() {
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
                        "serviceType": "Lead Response Automation",
                        "name": "VisQuanta Speed to Lead",
                        "description": "Engage every inbound dealership inquiry in under 90 seconds. 24/7/365 coverage for your digital lot with AI-driven conversion.",
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
                                        "name": "Instant Lead Engagement"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "24/7 BDC Automation"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />

            {/* 1. HERO: Urgency & Frame */}
            <HeroSection />

            {/* 2. THE LEAD LOSS MOMENT: Split Timeline */}
            <LeadLossMoment />

            {/* NEW: CALCULATOR SECTION */}
            <SpeedLossCalculator onOpenCalculator={openCalculator} />

            {/* 3. WHERE LEADS GET LOST: Operational Gaps */}
            <WhereLeadsGetLost />

            {/* 4. INTERCEPTION LAYER: System Flow Map */}
            <InterceptionLayer />

            {/* 5. 24/7 COVERAGE: Always-On Follow-Up */}
            <Coverage24x7 />

            {/* 6. OUTCOMES: Sales Realities */}
            <OutcomesThatMatter />

            {/* 7. WHO IT IS FOR: Fit Assessment */}
            <WhoItIsFor />

            {/* 8. FAQs: Common Questions */}
            <FAQSection />

            <div className="container-wide py-12 text-center">
                <MinimalQuote
                    quote="Speed to lead is why we win the deal every time."
                    author="Amanda Foster"
                    role="BDC Manager, Foster Nissan"
                    className="max-w-2xl mx-auto"
                />
            </div>

            {/* 9. RESOURCES: Relevant Articles */}
            <RelatedResources />

            {/* 10. FINAL CTA: Close with Urgency */}
            <FinalCTA />

            <Footer />

            <ROICalculatorModal isOpen={isCalculatorOpen} onClose={closeCalculator} initialMode="speedToLead" />

        </main>
    );
}
