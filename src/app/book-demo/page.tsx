import type { Metadata } from "next";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookingWizard from '@/components/book-demo/BookingWizard';
import SocialProofSection from '@/components/book-demo/SocialProofSection';
import FAQSection from '@/components/book-demo/FAQSection';

export const metadata: Metadata = {
    title: "Chat with VisQuanta | AI for Dealerships",
    description: "Schedule a personalized demo of the AutoMaster Suite. See how AI can increase your dealership's revenue by 30%.",
    alternates: {
        canonical: "https://www.visquanta.com/book-demo",
    },
};

export default function BookDemoPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FF7404]/[0.06] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80" />
            </div>

            <div className="relative z-10 pt-32 pb-20">
                <BookingWizard />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32 space-y-32 border-t border-white/5 pt-20">
                    <SocialProofSection />
                    <FAQSection />
                </div>
            </div>

            <Footer />
        </div>
    );
}
