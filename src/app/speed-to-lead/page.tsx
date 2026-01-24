'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Speed to Lead Sections
import HeroSection from '@/components/speed-to-lead/HeroSection';
import WhatIsSection from '@/components/speed-to-lead/WhatIsSection';
import LeadLossMoment from '@/components/speed-to-lead/LeadLossMoment';
import WhereLeadsGetLost from '@/components/speed-to-lead/WhereLeadsGetLost';
import InterceptionLayer from '@/components/speed-to-lead/InterceptionLayer';
import MidPageCTA from '@/components/MidPageCTA';


import WhoItIsFor from '@/components/speed-to-lead/WhoItIsFor';
import FinalCTA from '@/components/speed-to-lead/FinalCTA';
import FAQSection from '@/components/speed-to-lead/FAQSection';
import RelatedResources from '@/components/speed-to-lead/RelatedResources';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import RelatedCaseStudies from '@/components/shared/RelatedCaseStudies';

import OpportunityCheck from '@/components/speed-to-lead/OpportunityCheck';
import ROICalculatorModal from '@/components/ROICalculatorModal';
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
                        "description": "Engage every inbound dealership inquiry in under 60 seconds. 24/7/365 coverage for your digital lot with AI-driven conversion.",
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
            <HeroSection onOpenCalculator={openCalculator} />

            {/* NEW: OPPORTUNITY CHECK (Diagnosis First) */}
            <OpportunityCheck onOpenCalculator={openCalculator} />

            {/* 1.5 WHAT IS: Definition Block for SEO/AEO */}
            <WhatIsSection />

            {/* 2. THE LEAD LOSS MOMENT: Split Timeline */}
            <LeadLossMoment />

            <MidPageCTA
                title="Stop losing revenue to slow responses."
                subtitle="Most dealers lose 40% of their digital leads in the first 10 minutes. We change that."
            />



            {/* 3. WHERE LEADS GET LOST: Operational Gaps */}
            <WhereLeadsGetLost />

            {/* 4. INTERCEPTION LAYER: System Flow Map */}
            <InterceptionLayer />

            <MidPageCTA
                title="A better way to BDC."
                subtitle="Eliminate hold times and missed callbacks. Our AI handles the heavy lifting 24/7."
                buttonText="See the Intervention Map"
            />





            {/* 7. WHO IT IS FOR: Fit Assessment */}
            <WhoItIsFor />

            {/* 8. FAQs: Common Questions */}
            <FAQSection />

            {/* 8.5 CROSS-LINKING: Related Solutions */}
            <RelatedSolutions
                title="Instant Response Ecosystem"
                solutions={[
                    { title: "Lead Reactivation", href: "/lead-reactivation", description: "Convert missed leads that was never contacted.", icon: "refresh" },
                    { title: "Website Widget", href: "/website-widget", description: "The front-door for your Speed to Lead engine.", icon: "message" },
                    { title: "Reputation Management", description: "Follow up great experiences with review requests.", href: "/reputation-management", icon: "star" }
                ]}
            />

            {/* 8.7 PROOF: Related Case Studies */}
            <RelatedCaseStudies
                caseStudySlugs={['bayside-honda', 'seth-wadley']}
            />

            {/* 9. RESOURCES: Relevant Articles */}
            <RelatedResources />

            {/* 10. FINAL CTA: Close with Urgency */}
            <FinalCTA />

            <Footer />

            <ROICalculatorModal isOpen={isCalculatorOpen} onClose={closeCalculator} initialMode="speedToLead" />

        </main>
    );
}
