import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import PainPointSection from '@/components/PainPointSection';
import PlatformSection from '@/components/PlatformSection';
import WhyVisquantaSection from '@/components/WhyVisquantaSection';
import SeeItInAction from '@/components/SeeItInAction';
import DealerServicesSection from '@/components/DealerServicesSection';
import ResultsProof from '@/components/ResultsProof';
import HowItWorksSection from '@/components/HowItWorksSection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import LatestInsights from '@/components/LatestInsights';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* 1. Hero - Value Proposition & Interactive Product Cards */}
      <Hero />

      {/* 2. Social Proof Bar - Trust Indicators */}
      <SocialProofBar />

      {/* 3. The Problem - Dealer Pain Points */}
      <PainPointSection />

      {/* 4. Platform Capabilities - Detailed Product Breakdown */}
      <PlatformSection />

      {/* 5. The Differentiator - Why VisQuanta + Comparison Table */}
      <WhyVisquantaSection />

      {/* 5. Interactive Demo - See It In Action */}
      <SeeItInAction />

      {/* 6. Dealer Services - Tabbed Interface by Dealer Type */}
      <DealerServicesSection />

      {/* 7. Results & Proof - Stats + Video Testimonials */}
      <ResultsProof />

      {/* 8. How it Works - Onboarding Process */}
      <HowItWorksSection />


      {/* 10. Integrations - Logo Marquee */}
      <IntegrationsSection />

      {/* 11. FAQ - Common Questions */}
      <FAQSection />

      {/* 12. Latest Insights - Blog Articles */}
      <LatestInsights />

      {/* 13. Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
