import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/website-widget/HeroSection';
import KeyFeatures from '@/components/website-widget/KeyFeatures';
import HowItWorks from '@/components/website-widget/HowItWorks';
import LiveDemo from '@/components/website-widget/LiveDemo';
import FAQ from '@/components/website-widget/FAQ';
import CTA from '@/components/website-widget/CTA';

export const metadata: Metadata = {
    title: 'AI Website Widget | 24/7 Lead Capture | VisQuanta',
    description: 'Turn website visitors into qualified leads instantly. Our AI website widget engages, qualifies, and books appointments 24/7 without human intervention.',
    alternates: {
        canonical: '/website-widget',
    },
};

export default function WebsiteWidgetPage() {
    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            <HeroSection />
            {/* <div className="pt-32 pb-20 text-center">
                <h1 className="text-white text-4xl font-bold">Building Page...</h1>
            </div> */}

            <LiveDemo />
            <KeyFeatures />
            <HowItWorks />
            <FAQ />
            <CTA />

            <Footer />
        </main>
    );
}
