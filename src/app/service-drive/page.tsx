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
        canonical: 'https://visquanta.com/service-drive',
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
                'item': 'https://visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Service Drive',
                'item': 'https://visquanta.com/service-drive'
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
                <VoicePrompts />
                <VoiceAgent />
            </main>
            <Footer />
        </div>
    );
}
