import React from 'react';
import { Send, Instagram, MessageCircle } from 'lucide-react';
import logoUrl from '@assets/file_00000000a3cc71fbb352504f800fc8d2_1784246786895.png';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[150px] rounded-t-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex items-center gap-4">
            <img src={logoUrl} alt="Logo" className="w-12 h-12 rounded-full border border-primary/30" />
            <div>
              <h2 className="font-heading font-bold text-xl tracking-wide">
                PW STUDY <span className="text-primary">NETWORK</span>
              </h2>
              <p className="text-muted-foreground text-sm">The Premium Educational Vault</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://t.me/+SvWSdC034SVkN2U1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors border border-transparent hover:border-primary/30"
              aria-label="Telegram"
            >
              <Send size={18} />
            </a>
            <a 
              href="https://www.instagram.com/pw_study_network?utm_source=qr&igsh=MTkxMjAzOXVzMmtmeA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent/20 hover:text-accent transition-colors border border-transparent hover:border-accent/30"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://whatsapp.com/channel/0029VbCbDOt0VycLRqoBz82x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors border border-transparent hover:border-[#25D366]/30"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} PW Study Network. All rights reserved. <br className="md:hidden" />
            <span className="text-xs opacity-70">Not affiliated with official Physics Wallah.</span>
          </p>
          
          <div className="px-4 py-2 rounded-full bg-secondary/50 border border-white/5 text-sm font-medium">
            Development by <span className="text-primary tracking-wider ml-1">🌺⃞⃪꯭𝓐𝓷𝓴𝓲𝓽 𝓒𝓱𝓪𝓾𝓭𝓱𝓪𝓻𝔂</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
