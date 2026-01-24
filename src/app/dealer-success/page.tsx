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

export const metadata = {
    title: 'Dealer Success | Automotive AI with a Human Touch | VisQuanta',
    description: 'VisQuanta delivers a white-glove service with human-in-the-loop AI monitoring. Built by car people for car people to ensure every lead is maximized.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealer-success',
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealer-success',
    },
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
            <Footer />
        </div>
    );
}
