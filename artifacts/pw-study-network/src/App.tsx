import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { THEMES } from '@/hooks/useTheme';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SiteList } from '@/components/SiteList';
import { PremiumBanner } from '@/components/PremiumBanner';
import { Footer } from '@/components/Footer';
import { WelcomeModal } from '@/components/WelcomeModal';
import { AIAssistant } from '@/components/AIAssistant';
import { AIPage } from '@/components/AIPage';
import { FreeAlert } from '@/components/FreeAlert';

function ThemeInit() {
  useEffect(() => {
    const savedId = localStorage.getItem('pw_theme') || 'gold-dark';
    const theme = THEMES.find(t => t.id === savedId) ?? THEMES[0];
    const root = document.documentElement;
    root.style.setProperty('--primary',           theme.primary);
    root.style.setProperty('--accent',            theme.accent);
    root.style.setProperty('--background',        theme.background);
    root.style.setProperty('--card',              theme.card);
    root.style.setProperty('--card-border',       theme.cardBorder);
    root.style.setProperty('--ring',              theme.ring);
    root.style.setProperty('--accent-foreground', theme.accentForeground);
    root.style.setProperty('--primary-foreground',theme.primaryForeground);
    root.style.setProperty('--popover',           theme.card);
    root.style.setProperty('--popover-border',    theme.cardBorder);
    root.style.setProperty('--pw-banner-from',    theme.bannerFrom);
    root.style.setProperty('--pw-banner-to',      theme.bannerTo);
  }, []);
  return null;
}

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
      <FreeAlert />
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
      <ThemeInit />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai" element={<AILayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
