import React, { useState, useEffect } from 'react';
import { X, Send, Instagram, MessageCircle } from 'lucide-react';
import logoUrl from '@assets/file_00000000a3cc71fbb352504f800fc8d2_1784246786895.png';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem('pw_popup_shown');
    if (!hasSeen) {
      // Small delay to make it feel deliberate
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('pw_popup_shown', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-md bg-card border border-card-border rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden animate-in fade-in zoom-in duration-300"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
        
        <div className="p-8 flex flex-col items-center text-center relative z-10">
          <div className="w-24 h-24 mb-6 rounded-full p-1 bg-gradient-to-tr from-accent to-primary shadow-[0_0_30px_rgba(212,160,23,0.3)]">
            <img 
              src={logoUrl} 
              alt="PW Study Network Logo" 
              className="w-full h-full object-cover rounded-full bg-background"
            />
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-foreground mb-3 tracking-wide drop-shadow-md">
            WELCOME TO <span className="text-primary">PW STUDY NETWORK</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Join our community for the latest unlocked study resources, premium materials, and exclusive access to top-tier content.
          </p>

          <div className="flex justify-center gap-4 mb-8 w-full">
            <a 
              href="https://t.me/+SvWSdC034SVkN2U1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-muted border border-border text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all shadow-sm"
              aria-label="Telegram"
            >
              <Send size={20} />
            </a>
            <a 
              href="https://www.instagram.com/pw_study_network?utm_source=qr&igsh=MTkxMjAzOXVzMmtmeA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-muted border border-border text-foreground hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all shadow-sm"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://whatsapp.com/channel/0029VbCbDOt0VycLRqoBz82x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-muted border border-border text-foreground hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all shadow-sm"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          <button
            onClick={handleClose}
            className="w-full py-3 px-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(212,160,23,0.3)] hover:shadow-[0_0_25px_rgba(212,160,23,0.5)] transform hover:-translate-y-0.5"
          >
            Close & Explore
          </button>
        </div>
      </div>
    </div>
  );
}
