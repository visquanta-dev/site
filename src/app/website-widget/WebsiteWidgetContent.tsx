'use client';

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/website-widget/HeroSection'
import OpportunityCheck from '@/components/website-widget/OpportunityCheck'
import ProblemSection from '@/components/website-widget/ProblemSection'
import HowItWorksSection from '@/components/website-widget/HowItWorksSection'
import ComparisonSection from '@/components/website-widget/ComparisonSection'
import FeaturesSection from '@/components/website-widget/FeaturesSection'
import WidgetFAQ from '@/components/website-widget/WidgetFAQ'
import WidgetCTA from '@/components/website-widget/WidgetCTA'
import SocialProofSection from '@/components/website-widget/SocialProofSection'
import RelatedSolutions from '@/components/shared/RelatedSolutions';

// ============================================================================
// SMS FIRST WIDGET PAGE - CLIENT COMPONENT
// ============================================================================

export default function WebsiteWidgetContent() {
    return (
        <main className="bg-[#050505] min-h-screen selection:bg-orange-500 selection:text-white">
{/* JSON-LD SoftwareApplication with isRelatedTo */}            <script                type="application/ld+json"                dangerouslySetInnerHTML={{ __html: JSON.stringify({                    "@context": "https://schema.org",                    "@type": "SoftwareApplication",                    "name": "VisQuanta Website Widget",                    "applicationCategory": "BusinessApplication",                    "operatingSystem": "Web",                    "url": "https://www.visquanta.com/website-widget",                    "provider": {                        "@type": "Organization",                        "name": "VisQuanta",                        "url": "https://www.visquanta.com"                    },                    "isRelatedTo": [                        {                            "@type": "SoftwareApplication",                            "name": "VisQuanta Speed to Lead",                            "url": "https://www.visquanta.com/speed-to-lead"                        }                    ]                }) }}            />
            <Navigation />
            <HeroSection />
            <OpportunityCheck />
            <ProblemSection />
            <HowItWorksSection />
            <ComparisonSection />
            <SocialProofSection />
            <FeaturesSection />
            <WidgetFAQ />

            <RelatedSolutions
                title="Better Lead Capture"
                solutions={[
                    { title: "Speed to Lead", href: "/speed-to-lead", description: "Respond to leads instantly with AI-powered engagement.", icon: "zap" },
                    { title: "Independent Dealers", href: "/dealers/independent", description: "Affordable AI tools for independent dealers.", icon: "store" }
                ]}
            />

            <WidgetCTA />
            <Footer />
        </main>
    )
}
