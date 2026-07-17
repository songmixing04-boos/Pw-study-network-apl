import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function SessionTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
      <Clock size={13} className="text-primary animate-pulse" />
      <span className="font-mono text-xs font-semibold text-primary tracking-widest">
        {hrs > 0 && `${pad(hrs)}:`}{pad(mins)}:{pad(secs)}
      </span>
      <span className="text-[10px] text-muted-foreground hidden sm:inline">on site</span>
    </div>
  );
}
