import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SiteList } from '@/components/SiteList';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Footer } from '@/components/Footer';
import { WelcomeModal } from '@/components/WelcomeModal';
import { AIAssistant } from '@/components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <Hero />
        <SiteList />
        <PremiumBanner />
      </main>
      <Footer />
      <WelcomeModal />
      <AIAssistant />
    </div>
  );
}

export default App;
