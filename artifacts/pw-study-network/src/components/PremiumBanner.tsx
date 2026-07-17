import React from 'react';
import { Crown, Star, Shield, Zap } from 'lucide-react';

export function PremiumBanner() {
  return (
    <section id="premium" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-card border border-primary/30 p-8 md:p-12">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                <Crown size={14} />
                Exclusive Membership
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                UPGRADE TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">PREMIUM VIP</span>
              </h2>
              
              <p className="text-muted-foreground text-lg mb-8">
                Get priority access to highly restricted resources, faster direct links with zero ads, and early access to newly cracked platforms before they go public.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap size={20} />
                  </div>
                  <span className="font-medium">Ad-free Direct Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Shield size={20} />
                  </div>
                  <span className="font-medium">Private Telegram Group</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Key size={20} />
                  </div>
                  <span className="font-medium">Auto-renewing Access Keys</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Star size={20} />
                  </div>
                  <span className="font-medium">Priority Support</span>
                </div>
              </div>
              
            </div>
            
            <div className="w-full lg:w-auto flex flex-col items-center">
              <div className="p-8 rounded-2xl bg-black/40 border border-primary/20 backdrop-blur-xl w-full max-w-sm text-center shadow-[0_0_40px_rgba(212,160,23,0.15)]">
                <Crown className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,160,23,0.5)]" />
                <h3 className="text-2xl font-bold mb-2 text-foreground">VIP Access</h3>
                <div className="flex items-center justify-center gap-1 mb-6">
                  <span className="text-4xl font-heading font-bold text-primary">₹149</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <a
                  href="https://t.me/Chaudharybabu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(212,160,23,0.4)] hover:shadow-[0_0_30px_rgba(212,160,23,0.6)] transform hover:-translate-y-1 text-center"
                >
                  Claim VIP Status
                </a>
                <p className="text-xs text-muted-foreground mt-4">Secure payment via UPI/Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Ensure Key is imported
import { Key } from 'lucide-react';
