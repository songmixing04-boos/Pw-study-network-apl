import React from 'react';
import { Crown, Sparkles, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 shadow-[0_0_15px_rgba(212,160,23,0.15)] backdrop-blur-sm">
          <Crown size={16} />
          <span>The Ultimate Study Resource Vault</span>
        </div>
        
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-[1.1] tracking-tight drop-shadow-lg mb-6">
          UNLOCK YOUR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-accent">
            FULL POTENTIAL
          </span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Exclusive access to premium educational platforms, direct study materials, and the most comprehensive network for top-tier students.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md mx-auto">
          <a 
            href="#directory"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] transition-all transform hover:-translate-y-1"
          >
            Access Vault
            <ChevronRight size={20} />
          </a>
          <a 
            href="#premium"
            className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground font-bold rounded-xl border border-border flex items-center justify-center gap-2 hover:bg-muted hover:border-primary/50 transition-all"
          >
            <Sparkles size={20} className="text-primary" />
            Premium Membership
          </a>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />
    </section>
  );
}
