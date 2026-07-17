import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

const STORAGE_KEY = 'pw_ai_chat_history';
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

const WELCOME: Message = {
  role: 'assistant',
  content: 'Namaste! Main hoon PW Study Network AI — Ankit Chaudhary ke PW Study Network ka official assistant! 🎓\n\nPhysics, Chemistry, Maths, Biology ya kisi bhi competitive exam (JEE, NEET, Board) ka sawaal pucho — main help karunga!',
  timestamp: Date.now(),
};

function loadHistory(): Message[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Message[];
  } catch {}
  return [WELCOME];
}

function saveHistory(msgs: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {}
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

export function AIPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>(loadHistory);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: 'user', content: text, timestamp: Date.now() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    saveHistory(updated);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${BASE}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: messages.slice(-10) }),
      });
      if (!res.ok) throw new Error('Server error');
      const data = await res.json();
      const aiMsg: Message = { role: 'assistant', content: data.reply, timestamp: Date.now() };
      const final = [...updated, aiMsg];
      setMessages(final);
      saveHistory(final);
    } catch {
      const errMsg: Message = {
        role: 'assistant',
        content: 'Kuch technical problem aayi. Thodi der baad dobara try karo.',
        timestamp: Date.now(),
      };
      const final = [...updated, errMsg];
      setMessages(final);
      saveHistory(final);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    const fresh = [WELCOME];
    setMessages(fresh);
    saveHistory(fresh);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const userQCount = messages.filter((m) => m.role === 'user').length;

  return (
    <div className="min-h-screen bg-background text-foreground dark flex flex-col" style={{ paddingTop: '80px' }}>
      {/* Page header */}
      <div
        className="sticky top-[80px] z-30 px-4 py-3 border-b border-white/5 flex items-center justify-between gap-4"
        style={{ background: 'linear-gradient(135deg, #1a1400ee, #1a0a00ee)', backdropFilter: 'blur(16px)' }}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <ArrowLeft size={16} className="text-muted-foreground" />
          </button>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,160,23,0.4)]"
            style={{ background: 'linear-gradient(135deg, #D4A017, #FF6B00)' }}
          >
            <Sparkles size={18} className="text-black" />
          </div>
          <div>
            <h2 className="font-bold text-foreground text-base leading-none">PW Study Network AI</h2>
            <p className="text-[11px] text-green-400 flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              Online &nbsp;·&nbsp; {userQCount} sawaal save hain
            </p>
          </div>
        </div>
        <button
          onClick={clearHistory}
          title="Chat clear karo"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-muted-foreground text-xs transition-colors border border-white/5"
        >
          <Trash2 size={13} />
          Clear
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto space-y-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Avatar */}
            <div
              className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs shadow-md ${
                msg.role === 'assistant'
                  ? 'bg-primary/20 text-primary border border-primary/20'
                  : 'bg-white/10 text-foreground border border-white/10'
              }`}
            >
              {msg.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
            </div>

            {/* Bubble */}
            <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'assistant'
                    ? 'bg-white/5 text-foreground rounded-tl-none border border-white/5'
                    : 'text-black rounded-tr-none font-medium'
                }`}
                style={msg.role === 'user' ? { background: 'linear-gradient(135deg, #D4A017, #FF6B00)' } : {}}
              >
                {msg.content}
              </div>
              <span className="text-[10px] text-muted-foreground px-1">{formatTime(msg.timestamp)}</span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center">
              <Bot size={16} className="text-primary" />
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-5 py-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div
        className="sticky bottom-0 border-t border-white/5 px-4 py-4"
        style={{ background: 'linear-gradient(to top, #0a0a0a, #0f0f0fdd)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-3xl mx-auto flex gap-3 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Apna sawaal type karo... (Enter = Send, Shift+Enter = New line)"
            rows={2}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/8 transition-all resize-none"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-12 h-12 rounded-2xl flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 flex-shrink-0 shadow-[0_0_15px_rgba(212,160,23,0.3)]"
            style={{ background: 'linear-gradient(135deg, #D4A017, #FF6B00)' }}
          >
            {loading ? <Loader2 size={18} className="text-black animate-spin" /> : <Send size={18} className="text-black" />}
          </button>
        </div>
        <p className="text-center text-[10px] text-muted-foreground mt-2">
          Sabhi sawaal automatically save hote hain · PW Study Network AI
        </p>
      </div>
    </div>
  );
}
