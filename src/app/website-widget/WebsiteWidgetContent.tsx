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
            <WidgetCTA />
            <Footer />
        </main>
    )
}
