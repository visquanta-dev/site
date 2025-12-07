import Hero from '@/components/Hero';
import TrustSection from '@/components/TrustSection';
import PlatformSection from '@/components/PlatformSection';
import AutoMasterSection from '@/components/AutoMasterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <PlatformSection />
      <AutoMasterSection />
      <Footer />
    </main>
  );
}
