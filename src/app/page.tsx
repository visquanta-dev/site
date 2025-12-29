import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import PainPointSection from '@/components/PainPointSection';
import PlatformSection from '@/components/PlatformSection';
import WhyVisquantaSection from '@/components/WhyVisquantaSection';
import SeeItInAction from '@/components/SeeItInAction';
import WhoItsForSection from '@/components/WhoItsForSection';
import DealerServicesSection from '@/components/DealerServicesSection';
import ResultsProof from '@/components/ResultsProof';
import FeaturedCaseStudySection from '@/components/FeaturedCaseStudySection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CostOfWaitingSection from '@/components/CostOfWaitingSection';

import AboutStorySection from '@/components/AboutStorySection';
import IntegrationsSection from '@/components/IntegrationsSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Social Proof Bar */}
      <SocialProofBar />

      {/* 3. The Problem (Copy-Rich) */}
      <PainPointSection />

      {/* 4. Platform Capabilities */}
      <PlatformSection />

      {/* 5. The Differentiator (Copy-Rich) */}
      <WhyVisquantaSection />

      {/* 6. Interactive Demo */}
      <SeeItInAction />

      {/* 7. Audience Clarity (Copy-Rich) */}
      <WhoItsForSection />

      {/* 8. Dealer Services (Tabbed Interface) */}
      <DealerServicesSection />



      {/* 9. Results & Proof (Data Grid) */}
      <ResultsProof />

      {/* 10. Featured Case Study (Copy-Rich) */}
      <FeaturedCaseStudySection />

      {/* 11. How it Works (Process Steps) */}
      <HowItWorksSection />


      {/* 12. The Urgency (Copy-Rich) */}
      <CostOfWaitingSection />



      {/* 14. Our Story (Copy-Rich) */}
      <AboutStorySection />

      {/* 15. Integrations (Logo Marquee) */}
      <IntegrationsSection />

      {/* 16. FAQ (Accordion) */}
      <FAQSection />

      {/* 17. Final CTA */}
      <FinalCTA />

      {/* 18. Footer */}
      <Footer />
    </main>
  );
}
