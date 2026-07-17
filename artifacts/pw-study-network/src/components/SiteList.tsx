import React, { useState } from 'react';
import { Site, SiteCategory, SITES } from '../data/sites';
import { SiteCard } from './SiteCard';
import { Database } from 'lucide-react';

export function SiteList() {
  const [activeTab, setActiveTab] = useState<SiteCategory | 'ALL'>('ALL');
  
  const tabs: { id: SiteCategory | 'ALL', label: string }[] = [
    { id: 'ALL', label: 'All Resources' },
    { id: 'DIRECT', label: 'Direct Access' },
    { id: 'KEY-BASED', label: 'Key Based' },
    { id: 'LOGIN', label: 'Login Required' },
  ];

  const filteredSites = SITES.filter(site => activeTab === 'ALL' || site.category === activeTab);

  const getSiteCount = (categoryId: string) => {
    if (categoryId === 'ALL') return SITES.length;
    return SITES.filter(s => s.category === categoryId).length;
  };

  return (
    <section id="directory" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="font-heading text-4xl font-bold flex items-center gap-3">
              <Database className="text-primary" size={32} />
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DIRECTORY</span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">Select a category to filter available study platforms.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center bg-secondary/50 p-1.5 rounded-xl border border-white/5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                    isActive 
                      ? 'text-primary-foreground shadow-[0_0_15px_rgba(212,160,23,0.3)]' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10" />
                  )}
                  {tab.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${isActive ? 'bg-black/20 text-white' : 'bg-background text-muted-foreground'}`}>
                    {getSiteCount(tab.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSites.map((site, index) => (
            <SiteCard key={`${site.name}-${index}`} site={site} />
          ))}
        </div>
        
        {filteredSites.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border rounded-xl bg-secondary/20">
            <p className="text-muted-foreground">No platforms found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
