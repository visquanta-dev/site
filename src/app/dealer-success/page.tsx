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

export const metadata = {
    title: 'Dealer Success | Automotive AI with a Human Touch | VisQuanta',
    description: 'VisQuanta delivers a white-glove service with human-in-the-loop AI monitoring. Built by car people for car people to ensure every lead is maximized.',
    alternates: {
        canonical: 'https://visquanta.com/dealer-success',
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
                <TeamExpertise />
                <TrainingSection />
                <SuccessStories />
                <DealerFAQ />

                {/* Custom CTA Text Override */}
                <div className="bg-[#030303]">
                    <FinalCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
