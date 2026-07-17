import React from 'react';
import logoUrl from '@assets/file_00000000a3cc71fbb352504f800fc8d2_1784246786895.png';
import { Menu, Sparkles } from 'lucide-react';
import { SessionTimer } from '@/components/SessionTimer';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/30 group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(212,160,23,0.15)]">
            <img 
              src={logoUrl} 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-heading font-bold text-2xl tracking-wide text-foreground leading-none">
              PW STUDY <span className="text-primary">NETWORK</span>
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-accent font-semibold mt-1">
              Premium Vault
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <SessionTimer />
          <a href="#directory" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Directory</a>
          <a href="#premium" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Premium</a>
          <a href="#community" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Community</a>
          <button
            onClick={() => navigate('/ai')}
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Sparkles size={14} />
            AI Assistant
          </button>
          <button className="px-5 py-2 text-sm font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all shadow-[0_0_10px_rgba(212,160,23,0.1)]">
            Join Club
          </button>
        </nav>
        
        <button className="md:hidden text-foreground hover:text-primary transition-colors">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}
