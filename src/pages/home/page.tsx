import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import OurWaySection from './components/OurWaySection';
import WhatWeOfferSection from './components/WhatWeOfferSection';
import TrapezeDivider from './components/TrapezeDivider';
import AdvancingMedicineSection from './components/AdvancingMedicineSection';
import LeadershipCTA from './components/LeadershipCTA';
import GetInTouchSection from './components/GetInTouchSection';
import { HomeContentProvider } from './HomeContent';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Extrovis - Dedicated to Better';
  }, []);

  return (
    <div>
      <Navbar />
      <HomeContentProvider>
        <main className="home-page-content">
          <HeroSection />
          <OurWaySection />
          <WhatWeOfferSection />
          <TrapezeDivider />
          <AdvancingMedicineSection />
          <LeadershipCTA />
          <GetInTouchSection />
        </main>
      </HomeContentProvider>
      <Footer />
    </div>
  );
}
