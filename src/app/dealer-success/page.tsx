import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/custom-campaigns/FinalCTA';
import HeroSection from '@/components/dealer-success/HeroSection';
import UnifiedDashboard from '@/components/dealer-success/UnifiedDashboard';
import HumanInLoop from '@/components/dealer-success/HumanInLoop';
import TeamExpertise from '@/components/dealer-success/TeamExpertise';
import TrainingSection from '@/components/dealer-success/TrainingSection';
import SuccessStories from '@/components/dealer-success/SuccessStories';
import DealerFAQ from '@/components/dealer-success/DealerFAQ';
import MidPageCTA from '@/components/MidPageCTA';
import SeeAlso from '@/components/shared/SeeAlso';
import type { Metadata } from 'next';
import { openGraphTwitterPack } from '@/lib/metadata';

export const metadata: Metadata = {
    title: 'Dealer Success — AI with a Human Touch',
    description:
        'White-glove AI service with human-in-the-loop monitoring. Built by car people, for car people, to ensure every lead is maximized.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealer-success',
        languages: {
            'en-US': 'https://www.visquanta.com/dealer-success',
            'en-CA': 'https://www.visquanta.com/ca/dealer-success',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealer-success',
        title: 'Dealer Success — AI with a Human Touch | VisQuanta',
        description:
            'White-glove AI service with human-in-the-loop monitoring. Built by car people, for car people, to ensure every lead is maximized.',
    }),
};

export default function DealerSuccessPage() {
    return (
        <div className="min-h-screen bg-[#030303] selection:bg-[#FF7404] selection:text-white">
            <Navigation />
            <main>
                <HeroSection />
                <UnifiedDashboard />
                <HumanInLoop />

                <MidPageCTA
                    title="Experience White-Glove AI."
                    subtitle="We don't just hand you software. We manage the outcomes with 24/7 human oversight."
                    buttonText="Meet the Success Team"
                />
                <TeamExpertise />
                <TrainingSection />
                <SuccessStories />
                <DealerFAQ />

                {/* SEO Strengthening: Link to Orphan Page */}
                <div className="py-12 bg-black border-y border-white/5">
                    <div className="container-wide text-center">
                        <a
                            href="/reputation-management"
                            className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] hover:text-[#FF7404] transition-colors duration-300 inline-block group"
                        >
                            Read our guide: <span className="underline decoration-white/10 underline-offset-4 group-hover:decoration-[#FF7404]/50">How AI Improves CSI Scores</span>
                        </a>
                    </div>
                </div>

                {/* Custom CTA Text Override */}
                <div className="bg-[#030303]">
                    <FinalCTA />
                </div>
            </main>
            <SeeAlso links={[
                { title: 'Auto Master Suite', href: '/auto-master-suite', description: 'Our complete AI platform for dealerships' },
                { title: 'Case Studies', href: '/case-studies', description: 'See real dealer results and success stories' },
                { title: 'Dealers', href: '/dealers', description: 'Solutions by dealership type' },
                { title: 'Resources', href: '/resources', description: 'Guides, articles, and knowledge base' },
            ]} />
            <Footer />
        </div>
    );
}
