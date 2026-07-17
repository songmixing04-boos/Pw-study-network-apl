import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SiteList } from '@/components/SiteList';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Footer } from '@/components/Footer';
import { WelcomeModal } from '@/components/WelcomeModal';
import { AIAssistant } from '@/components/AIAssistant';
import { AIPage } from '@/components/AIPage';

function HomePage() {
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

function AILayout() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <AIPage />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<AILayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
