import React, { useState, useEffect } from 'react';
import { AlertTriangle, X, MessageCircle } from 'lucide-react';

export function FreeAlert() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show after welcome modal (2.5s delay)
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,50,50,0.3)] border border-red-500/40 animate-in fade-in zoom-in duration-300">

        {/* Red gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#0f0f0f] to-[#1a0500]" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent" />

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-white" />
        </button>

        <div className="relative z-10 p-8 flex flex-col items-center text-center">

          {/* Warning icon */}
          <div className="w-20 h-20 rounded-full bg-red-500/15 border-2 border-red-500/40 flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(255,50,50,0.3)]">
            <AlertTriangle size={40} className="text-red-400" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2 leading-tight">
            ⚠️ IMPORTANT NOTICE ⚠️
          </h2>

          <div className="w-16 h-1 rounded-full bg-red-500 mb-5" />

          {/* Main message */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4 mb-4 w-full">
            <p className="text-red-300 font-bold text-base sm:text-lg leading-relaxed">
              🚨 अगर किसी ने आपको यह App पैसे लेकर दी है —
            </p>
            <p className="text-white font-extrabold text-lg sm:text-xl mt-1">
              तो आपके साथ FRAUD हुआ है!
            </p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
            यह App बिल्कुल <span className="text-green-400 font-bold text-lg">FREE</span> है।
            इसके लिए कोई पैसा नहीं देना है।
          </p>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            अगर किसी ने पैसे लिए हैं तो तुरंत हमसे संपर्क करें —
            हम आपकी मदद करेंगे। 👇
          </p>

          {/* Contact button */}
          <a
            href="https://t.me/Chaudharybabu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,160,23,0.4)] mb-3"
            style={{ background: 'linear-gradient(135deg, #D4A017, #FF6B00)', color: '#000' }}
          >
            <MessageCircle size={20} />
            Owner से Telegram पर Contact करें
          </a>

          <button
            onClick={() => setOpen(false)}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-2"
          >
            मुझे पता है, बंद करें
          </button>
        </div>
      </div>
    </div>
  );
}
