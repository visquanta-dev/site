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
    title: 'Service Drive AI | Automate After-Hours Calls & Book More Appointments | VisQuanta',
    description: 'VisQuanta Service Drive solutions use AI to boost fixed-ops revenue with automated service bookings, inbound call handling, and CSI improvements. Turn missed calls into booked service jobs 24/7.',
    alternates: {
        canonical: 'https://visquanta.com/service-drive',
    },
};

export default function ServiceDrivePage() {
    return (
        <div className="min-h-screen bg-[#030303]">
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
