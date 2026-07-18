import React, { useState } from 'react';
import { Site, SiteCategory, SITES, PLATFORM_META, PLATFORM_ORDER, PlatformGroup } from '../data/sites';
import { SiteCard } from './SiteCard';
import { Database, Globe } from 'lucide-react';

export function SiteList() {
  const [activeTab, setActiveTab] = useState<SiteCategory | 'ALL'>('ALL');

  const tabs: { id: SiteCategory | 'ALL'; label: string }[] = [
    { id: 'ALL',       label: 'All Resources' },
    { id: 'DIRECT',    label: 'Direct Access' },
    { id: 'KEY-BASED', label: 'Key Based' },
    { id: 'LOGIN',     label: 'Login Required' },
  ];

  const filteredSites = SITES.filter(
    (s) => activeTab === 'ALL' || s.category === activeTab,
  );

  const getSiteCount = (id: string) =>
    id === 'ALL' ? SITES.length : SITES.filter((s) => s.category === id).length;

  // Group filtered sites by platform
  const grouped: Partial<Record<PlatformGroup, Site[]>> = {};
  for (const site of filteredSites) {
    if (!grouped[site.platformGroup]) grouped[site.platformGroup] = [];
    grouped[site.platformGroup]!.push(site);
  }

  const activePlatforms = PLATFORM_ORDER.filter(
    (p) => grouped[p] && grouped[p]!.length > 0,
  );

  return (
    <section id="directory" className="py-20 relative">
      <div className="container mx-auto px-4">

        {/* Section heading + filter tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="font-heading text-4xl font-bold flex items-center gap-3">
              <Database className="text-primary" size={32} />
              THE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                DIRECTORY
              </span>
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Platforms grouped by brand — filter by access type.
            </p>
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
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                      isActive
                        ? 'bg-black/20 text-white'
                        : 'bg-background text-muted-foreground'
                    }`}
                  >
                    {getSiteCount(tab.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Platform sections */}
        {activePlatforms.length === 0 && (
          <div className="text-center py-20 border border-dashed border-border rounded-xl bg-secondary/20">
            <p className="text-muted-foreground">No platforms found for this category.</p>
          </div>
        )}

        <div className="space-y-14">
          {activePlatforms.map((platformKey) => {
            const meta   = PLATFORM_META[platformKey];
            const sites  = grouped[platformKey]!;

            return (
              <div key={platformKey}>
                {/* Platform header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                  {/* Logo */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border flex-shrink-0 shadow-lg overflow-hidden"
                    style={{
                      background: `${meta.color}18`,
                      borderColor: `${meta.color}40`,
                      boxShadow: `0 0 20px ${meta.color}25`,
                    }}
                  >
                    <PlatformLogo src={meta.logo} alt={meta.label} color={meta.color} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-heading font-extrabold text-xl sm:text-2xl leading-none"
                      style={{ color: meta.color }}
                    >
                      {meta.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 font-medium">
                      {meta.sublabel} &nbsp;·&nbsp;{' '}
                      <span className="text-primary">{sites.length} platform{sites.length !== 1 ? 's' : ''}</span>
                    </p>
                  </div>

                  {/* Divider line */}
                  <div
                    className="hidden sm:block h-px flex-1 rounded-full opacity-30"
                    style={{ background: meta.color }}
                  />
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {sites.map((site, i) => (
                    <SiteCard key={`${site.name}-${i}`} site={site} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Inner component to handle logo error
function PlatformLogo({ src, alt, color }: { src: string; alt: string; color: string }) {
  const [err, setErr] = useState(false);
  if (err) return <Globe size={24} style={{ color }} />;
  return (
    <img
      src={src}
      alt={alt}
      className="w-10 h-10 object-contain"
      onError={() => setErr(true)}
    />
  );
}
