'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/custom-campaigns/Hero';
import CampaignTypes from '@/components/custom-campaigns/CampaignTypes';
import Bottlenecks from '@/components/custom-campaigns/Bottlenecks';
import SystemMap from '@/components/custom-campaigns/SystemMap';
import ConversationDemo from '@/components/custom-campaigns/ConversationDemo';
import AssetStack from '@/components/custom-campaigns/AssetStack';
import KPIs from '@/components/custom-campaigns/KPIs';
import FAQ from '@/components/custom-campaigns/FAQ';
import FinalCTA from '@/components/custom-campaigns/FinalCTA';

export default function CustomCampaignsPage() {
    return (
        <main className="bg-[#020202] min-h-screen relative overflow-hidden selection:bg-[#FF7404]/30">
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
                <CampaignTypes />
                <Bottlenecks />
                <SystemMap />
                <ConversationDemo />
                <AssetStack />
                <KPIs />
                <FAQ />
                <FinalCTA />

                <Footer />
            </div>
        </main>
    );
}
