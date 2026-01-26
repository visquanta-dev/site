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
import RelatedCaseStudies from '@/components/shared/RelatedCaseStudies';

// ============================================================================
// SMS FIRST WIDGET PAGE - CLIENT COMPONENT
// ============================================================================

export default function WebsiteWidgetContent() {
    return (
        <main className="bg-[#050505] min-h-screen selection:bg-orange-500 selection:text-white">
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
                    { title: "Speed to Lead", href: "/speed-to-lead", description: "Combine high-intent capture with instant response.", icon: "zap" },
                    { title: "Lead Reactivation", href: "/lead-reactivation", description: "Use the widget to capture missed reactivation leads.", icon: "refresh" },
                    { title: "Reputation Management", href: "/reputation-management", description: "The front-door for customer-first relationships.", icon: "star" },
                    { title: "Service Drive", href: "/service-drive", description: "Capture service intent and book directly into your DMS.", icon: "wrench" }
                ]}
            />

            <RelatedCaseStudies
                caseStudySlugs={['bayside-honda', 'seth-wadley']}
            />

            <WidgetCTA />
            <Footer />
        </main>
    )
}
