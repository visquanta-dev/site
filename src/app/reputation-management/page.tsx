'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/reputation-management/Hero';
import DecisionPattern from '@/components/reputation-management/DecisionPattern';
import TrustLadder from '@/components/reputation-management/TrustLadder';
import MetricsBand from '@/components/reputation-management/MetricsBand';
import UnifiedWorkbench from '@/components/reputation-management/UnifiedWorkbench';
import RequestTimeline from '@/components/reputation-management/RequestTimeline';
import RecoveryWorkflow from '@/components/reputation-management/RecoveryWorkflow';
import Benefits from '@/components/reputation-management/Benefits';
import FeaturesGrid from '@/components/reputation-management/FeaturesGrid';
import FAQ from '@/components/reputation-management/FAQ';
import FinalCTA from '@/components/reputation-management/FinalCTA';
import MinimalQuote from '@/components/ui/MinimalQuote';

export default function ReputationManagementPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Reputation Management',
                'item': 'https://www.visquanta.com/reputation-management'
            }
        ]
    };

    return (
        <main className="bg-[#020202] min-h-screen relative overflow-hidden selection:bg-[#FF7404]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {/* Global Premium Skin Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Grainy Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient Glows */}
                <div className="absolute top-0 -left-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10">
                <Navigation />

                <Hero />
                <DecisionPattern />
                <TrustLadder />
                <MetricsBand />
                <UnifiedWorkbench />
                <RequestTimeline />

                <div className="container-wide py-12">
                    <MinimalQuote
                        quote="Nobody understands the automotive business like this team does. The difference is night and day."
                        author="Jennifer Walsh"
                        role="Dealer Principal, Walsh Family Motors"
                        className="max-w-xl"
                    />
                </div>

                <RecoveryWorkflow />
                <Benefits />
                <FeaturesGrid />
                <FAQ />

                <div className="py-12 text-center">
                    <a
                        href="/blog/feedback-impacts-dealership-reputation"
                        className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] hover:text-[#FF7404] transition-colors duration-300"
                    >
                        Read our analysis on <span className="underline decoration-white/10 underline-offset-8">Why AI is Essential for Online Reviews</span>
                    </a>
                </div>

                <FinalCTA />

                <Footer />
            </div>
        </main>
    );
}
