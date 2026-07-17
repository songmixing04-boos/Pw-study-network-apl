import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AIAssistant() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/ai')}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(212,160,23,0.5)] transition-all hover:scale-110 active:scale-95"
      style={{ background: 'linear-gradient(135deg, #D4A017, #FF6B00)' }}
      aria-label="AI Doubt Assistant"
    >
      <MessageCircle size={22} className="text-black" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-background animate-pulse" />
    </button>
  );
}
