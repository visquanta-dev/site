import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/service-drive/HeroSection';
import CallExamples from '@/components/service-drive/CallExamples';
import StatisticsSection from '@/components/service-drive/StatisticsSection';
import ServiceCalculator from '@/components/service-drive/ServiceCalculator';
import VoiceAgent from '@/components/service-drive/VoiceAgent';
import WorkflowSection from '@/components/service-drive/WorkflowSection';
import ServiceFAQ from '@/components/service-drive/ServiceFAQ';
import VoicePrompts from '@/components/service-drive/VoicePrompts';
import MinimalQuote from '@/components/ui/MinimalQuote';

export const metadata = {
    title: 'Service Drive AI | 24/7 Appointment Automation | VisQuanta',
    description: 'Boost fixed-ops revenue with AI-driven service bookings and 24/7 inbound call handling. Turn missed calls into booked service jobs and improve CSI scores.',
    alternates: {
        canonical: 'https://www.visquanta.com/service-drive',
    },
    openGraph: {
        url: 'https://www.visquanta.com/service-drive',
    },
};

export default function ServiceDrivePage() {
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
                'name': 'Service Drive',
                'item': 'https://www.visquanta.com/service-drive'
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#030303]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navigation />
            <main>
                <HeroSection />
                <CallExamples />
                <StatisticsSection />
                <ServiceCalculator />
                <WorkflowSection />

                <div className="container-wide py-16">
                    <MinimalQuote
                        quote="The perfect 24/7 receptionist for our service drive. No more missed calls."
                        author="David Thompson"
                        role="Service Manager, Thompson Chevrolet"
                        className="max-w-2xl mx-auto"
                    />
                </div>

                <ServiceFAQ />
                <VoiceAgent />

                {/* SEO Strengthening: Link to Orphan Pages */}
                <div className="py-20 bg-black/40 border-t border-white/5">
                    <div className="container-wide text-center">
                        <h4 className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] mb-8">Service Operations Insights</h4>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
                            <a
                                href="/blog/whats-killing-retention-in-your-service-department-missed-calls"
                                className="text-sm font-semibold text-white/40 hover:text-[#FF7404] transition-colors group"
                            >
                                <span className="underline decoration-white/10 underline-offset-8">What's Killing Your Retention?</span>
                                <span className="block text-[10px] text-white/10 mt-2 uppercase tracking-widest font-bold">Deep Dive into Missed Calls</span>
                            </a>
                            <a
                                href="/blog/why-your-service-department-needs-24-7-call-answering-not-just-voicemail"
                                className="text-sm font-semibold text-white/40 hover:text-[#FF7404] transition-colors group"
                            >
                                <span className="underline decoration-white/10 underline-offset-8">24/7 Answering vs Voicemail</span>
                                <span className="block text-[10px] text-white/10 mt-2 uppercase tracking-widest font-bold">The ROI Guide</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
