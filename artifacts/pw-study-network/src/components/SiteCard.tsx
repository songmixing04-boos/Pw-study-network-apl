import React, { useState } from 'react';
import { Loader, ExternalLink, Key, Lock, Zap, Globe } from 'lucide-react';
import { Site } from '../data/sites';

export function SiteCard({ site }: { site: Site }) {
  const [logoError, setLogoError] = useState(false);

  const getCategoryIcon = () => {
    switch (site.category) {
      case 'DIRECT':   return <Zap size={13} className="text-green-400" />;
      case 'KEY-BASED': return <Key size={13} className="text-primary" />;
      case 'LOGIN':    return <Lock size={13} className="text-accent" />;
      default:         return null;
    }
  };

  const getCategoryColor = () => {
    switch (site.category) {
      case 'DIRECT':   return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'KEY-BASED': return 'bg-primary/10 text-primary border-primary/20';
      case 'LOGIN':    return 'bg-accent/10 text-accent border-accent/20';
      default:         return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="group relative bg-card border border-card-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,160,23,0.15)] hover:-translate-y-1">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-5 flex flex-col h-full relative z-10">

        {/* ── Top row: logo + status ── */}
        <div className="flex items-start justify-between mb-3">
          {/* Brand logo */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
            {!logoError ? (
              <img
                src={site.logo}
                alt={site.name}
                className="w-10 h-10 object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Globe size={20} className="text-muted-foreground" />
            )}
          </div>

          {/* Status badge */}
          {site.status === 'Active' ? (
            <span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Active
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
              <Loader size={10} className="animate-spin" />
              Checking
            </span>
          )}
        </div>

        {/* ── Brand banner ── */}
        <div
          className="mb-3 px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wide text-black text-center"
          style={{ background: 'linear-gradient(135deg, #D4A017, #FF6B00)' }}
        >
          {site.brand}
        </div>

        {/* ── Site name ── */}
        <h3 className="text-base font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
          {site.name}
        </h3>

        {/* ── Category chip ── */}
        <div className={`self-start px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border mb-5 ${getCategoryColor()}`}>
          {getCategoryIcon()}
          {site.category}
        </div>

        {/* ── Visit button ── */}
        <div className="mt-auto">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-lg bg-secondary text-foreground text-sm font-semibold border border-border flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
          >
            Visit Platform
            <ExternalLink size={15} className="opacity-70 group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
}
