import { useState, useEffect } from 'react';

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  primary: string;   // HSL values e.g. "43 89% 46%"
  accent: string;
  background: string;
  card: string;
  cardBorder: string;
  ring: string;
  accentForeground: string;
  primaryForeground: string;
  bannerFrom: string;
  bannerTo: string;
}

export const THEMES: Theme[] = [
  { id: 'gold-dark',       name: 'Gold Dark',       emoji: '👑', primary: '43 89% 46%',  accent: '25 100% 50%', background: '0 0% 4%',    card: '0 0% 7%',     cardBorder: '43 89% 46% / 0.15',   ring: '43 89% 46%',  accentForeground: '0 0% 98%', primaryForeground: '0 0% 9%',  bannerFrom: '#D4A017', bannerTo: '#FF6B00' },
  { id: 'midnight-blue',   name: 'Midnight Blue',   emoji: '🌊', primary: '210 100% 56%', accent: '195 100% 50%',background: '220 30% 5%', card: '218 30% 8%',  cardBorder: '210 100% 56% / 0.15', ring: '210 100% 56%',accentForeground: '0 0% 98%', primaryForeground: '220 30% 5%',bannerFrom: '#1a6fbf', bannerTo: '#00c8e0' },
  { id: 'cyber-purple',    name: 'Cyber Purple',    emoji: '💜', primary: '270 80% 65%',  accent: '290 100% 60%',background: '260 20% 5%', card: '260 20% 8%',  cardBorder: '270 80% 65% / 0.15',  ring: '270 80% 65%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#8b5cf6', bannerTo: '#d946ef' },
  { id: 'matrix-green',    name: 'Matrix Green',    emoji: '🟢', primary: '120 100% 40%', accent: '140 100% 50%',background: '0 0% 2%',   card: '0 0% 5%',     cardBorder: '120 100% 40% / 0.15', ring: '120 100% 40%',accentForeground: '0 0% 98%', primaryForeground: '0 0% 5%',  bannerFrom: '#00a830', bannerTo: '#00ff88' },
  { id: 'ruby-red',        name: 'Ruby Red',        emoji: '❤️', primary: '0 85% 58%',   accent: '15 100% 55%', background: '0 20% 4%',  card: '0 20% 7%',    cardBorder: '0 85% 58% / 0.15',    ring: '0 85% 58%',   accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#e63b2f', bannerTo: '#ff7043' },
  { id: 'ocean-teal',      name: 'Ocean Teal',      emoji: '🌊', primary: '175 100% 40%', accent: '155 100% 45%',background: '185 30% 5%', card: '185 25% 8%',  cardBorder: '175 100% 40% / 0.15', ring: '175 100% 40%',accentForeground: '0 0% 98%', primaryForeground: '185 30% 5%',bannerFrom: '#00897b', bannerTo: '#26a69a' },
  { id: 'sunset-orange',   name: 'Sunset Orange',   emoji: '🌅', primary: '24 100% 55%',  accent: '40 100% 60%', background: '20 20% 4%', card: '20 20% 7%',   cardBorder: '24 100% 55% / 0.15',  ring: '24 100% 55%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 5%',  bannerFrom: '#f57c00', bannerTo: '#ffca28' },
  { id: 'rose-pink',       name: 'Rose Pink',       emoji: '🌸', primary: '330 80% 60%',  accent: '350 90% 65%', background: '340 15% 5%', card: '340 15% 8%',  cardBorder: '330 80% 60% / 0.15',  ring: '330 80% 60%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#e91e8c', bannerTo: '#ff80ab' },
  { id: 'neon-lime',       name: 'Neon Lime',       emoji: '💚', primary: '82 100% 45%',  accent: '65 100% 50%', background: '90 10% 4%', card: '90 10% 7%',   cardBorder: '82 100% 45% / 0.15',  ring: '82 100% 45%', accentForeground: '0 0% 5%',  primaryForeground: '0 0% 5%',  bannerFrom: '#76b900', bannerTo: '#c6e600' },
  { id: 'arctic-ice',      name: 'Arctic Ice',      emoji: '🧊', primary: '200 90% 60%',  accent: '185 80% 65%', background: '205 25% 5%', card: '205 20% 8%',  cardBorder: '200 90% 60% / 0.15',  ring: '200 90% 60%', accentForeground: '0 0% 98%', primaryForeground: '205 25% 5%',bannerFrom: '#0288d1', bannerTo: '#4fc3f7' },
  { id: 'cosmic-violet',   name: 'Cosmic Violet',   emoji: '🔮', primary: '255 75% 62%',  accent: '230 85% 68%', background: '250 30% 4%', card: '250 28% 7%',  cardBorder: '255 75% 62% / 0.15',  ring: '255 75% 62%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#5c35cc', bannerTo: '#7b68ee' },
  { id: 'bronze-copper',   name: 'Bronze Copper',   emoji: '🥉', primary: '30 70% 48%',   accent: '20 80% 55%',  background: '25 15% 5%', card: '25 15% 8%',   cardBorder: '30 70% 48% / 0.15',   ring: '30 70% 48%',  accentForeground: '0 0% 98%', primaryForeground: '0 0% 5%',  bannerFrom: '#b05a1e', bannerTo: '#e08040' },
  { id: 'cherry-blossom',  name: 'Cherry Blossom',  emoji: '🌺', primary: '350 85% 62%',  accent: '15 90% 60%',  background: '350 15% 5%', card: '350 12% 8%',  cardBorder: '350 85% 62% / 0.15',  ring: '350 85% 62%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#d81b60', bannerTo: '#f06292' },
  { id: 'emerald',         name: 'Emerald Elite',   emoji: '💎', primary: '145 65% 45%',  accent: '165 70% 50%', background: '150 20% 4%', card: '150 18% 7%',  cardBorder: '145 65% 45% / 0.15',  ring: '145 65% 45%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 5%',  bannerFrom: '#2e7d32', bannerTo: '#43a047' },
  { id: 'amber-fire',      name: 'Amber Fire',      emoji: '🔥', primary: '38 100% 52%',  accent: '14 100% 58%', background: '30 15% 4%', card: '30 12% 7%',   cardBorder: '38 100% 52% / 0.15',  ring: '38 100% 52%', accentForeground: '0 0% 5%',  primaryForeground: '0 0% 5%',  bannerFrom: '#ff8f00', bannerTo: '#ff5722' },
  { id: 'sapphire',        name: 'Sapphire',        emoji: '💠', primary: '220 90% 58%',  accent: '240 80% 65%', background: '225 30% 5%', card: '225 28% 8%',  cardBorder: '220 90% 58% / 0.15',  ring: '220 90% 58%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#1565c0', bannerTo: '#5c6bc0' },
  { id: 'crimson',         name: 'Crimson Night',   emoji: '🩸', primary: '348 90% 48%',  accent: '0 100% 55%',  background: '345 25% 4%', card: '345 22% 7%',  cardBorder: '348 90% 48% / 0.15',  ring: '348 90% 48%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#b71c1c', bannerTo: '#e53935' },
  { id: 'toxic',           name: 'Toxic Yellow',    emoji: '☢️', primary: '66 100% 52%',  accent: '75 100% 45%', background: '0 0% 2%',   card: '0 0% 5%',     cardBorder: '66 100% 52% / 0.15',  ring: '66 100% 52%', accentForeground: '0 0% 5%',  primaryForeground: '0 0% 5%',  bannerFrom: '#d4e157', bannerTo: '#aeea00' },
  { id: 'galaxy',          name: 'Galaxy Magic',    emoji: '🌌', primary: '290 90% 62%',  accent: '310 100% 68%',background: '270 30% 4%', card: '270 28% 7%',  cardBorder: '290 90% 62% / 0.15',  ring: '290 90% 62%', accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#7b1fa2', bannerTo: '#e91e63' },
  { id: 'silver-steel',    name: 'Silver Steel',    emoji: '⚪', primary: '210 15% 72%',  accent: '220 20% 80%', background: '210 15% 6%', card: '210 12% 9%',  cardBorder: '210 15% 72% / 0.15',  ring: '210 15% 72%', accentForeground: '0 0% 5%',  primaryForeground: '0 0% 5%',  bannerFrom: '#607d8b', bannerTo: '#90a4ae' },
  { id: 'coral-reef',      name: 'Coral Reef',      emoji: '🪸', primary: '16 90% 60%',   accent: '340 80% 62%', background: '10 15% 5%', card: '10 12% 8%',   cardBorder: '16 90% 60% / 0.15',   ring: '16 90% 60%',  accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#ff5722', bannerTo: '#e91e63' },
  { id: 'deep-ocean',      name: 'Deep Ocean',      emoji: '🌀', primary: '198 100% 38%', accent: '178 100% 42%',background: '210 40% 4%', card: '212 35% 7%',  cardBorder: '198 100% 38% / 0.15', ring: '198 100% 38%',accentForeground: '0 0% 98%', primaryForeground: '0 0% 98%', bannerFrom: '#006064', bannerTo: '#00838f' },
];

export function useTheme() {
  const [themeId, setThemeId] = useState<string>(() => {
    return localStorage.getItem('pw_theme') || 'gold-dark';
  });

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.style.setProperty('--primary',          theme.primary);
    root.style.setProperty('--accent',           theme.accent);
    root.style.setProperty('--background',       theme.background);
    root.style.setProperty('--card',             theme.card);
    root.style.setProperty('--card-border',      theme.cardBorder);
    root.style.setProperty('--ring',             theme.ring);
    root.style.setProperty('--accent-foreground',theme.accentForeground);
    root.style.setProperty('--primary-foreground',theme.primaryForeground);
    root.style.setProperty('--popover',          theme.card);
    root.style.setProperty('--popover-border',   theme.cardBorder);
    root.style.setProperty('--pw-banner-from',   theme.bannerFrom);
    root.style.setProperty('--pw-banner-to',     theme.bannerTo);
    document.documentElement.setAttribute('data-theme', theme.id);
  };

  useEffect(() => {
    const theme = THEMES.find(t => t.id === themeId) ?? THEMES[0];
    applyTheme(theme);
  }, [themeId]);

  const setTheme = (id: string) => {
    setThemeId(id);
    localStorage.setItem('pw_theme', id);
  };

  const currentTheme = THEMES.find(t => t.id === themeId) ?? THEMES[0];

  return { themeId, setTheme, currentTheme };
}
