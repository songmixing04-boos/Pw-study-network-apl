import React from 'react';
import { X, Palette, Check } from 'lucide-react';
import { THEMES, useTheme } from '@/hooks/useTheme';

interface ThemeMenuProps {
  open: boolean;
  onClose: () => void;
}

export function ThemeMenu({ open, onClose }: ThemeMenuProps) {
  const { themeId, setTheme } = useTheme();

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-[80] h-full w-full max-w-xs bg-card border-l border-card-border shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <Palette size={18} className="text-primary" />
            <span className="font-heading font-bold text-lg text-foreground">Themes</span>
            <span className="text-[10px] bg-primary/15 text-primary px-2 py-0.5 rounded-full border border-primary/20 font-semibold">
              {THEMES.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-muted hover:bg-muted/70 flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Themes grid — scrollable */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-2.5">
            {THEMES.map((theme) => {
              const isActive = themeId === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => { setTheme(theme.id); }}
                  className={`relative flex flex-col items-start p-3 rounded-xl border transition-all duration-200 text-left group ${
                    isActive
                      ? 'border-primary bg-primary/10 shadow-[0_0_12px_rgba(var(--tw-shadow-color),0.3)]'
                      : 'border-white/8 bg-muted/30 hover:border-white/20 hover:bg-muted/60'
                  }`}
                >
                  {/* Swatch preview */}
                  <div className="flex gap-1 mb-2 w-full">
                    <div
                      className="flex-1 h-5 rounded-md"
                      style={{ background: `hsl(${theme.background})` }}
                    />
                    <div
                      className="flex-1 h-5 rounded-md"
                      style={{ background: `hsl(${theme.primary})` }}
                    />
                    <div
                      className="flex-1 h-5 rounded-md"
                      style={{ background: `hsl(${theme.accent})` }}
                    />
                  </div>

                  {/* Name */}
                  <span className="text-[11px] font-bold text-foreground leading-tight">
                    {theme.emoji} {theme.name}
                  </span>

                  {/* Active check */}
                  {isActive && (
                    <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                      <Check size={10} className="text-primary-foreground" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/5">
          <p className="text-[10px] text-muted-foreground text-center">
            Theme is saved automatically 💾
          </p>
        </div>
      </div>
    </>
  );
}
