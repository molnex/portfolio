import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function initialTheme(): boolean {
  try {
    const saved = window.localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch { return false; }
}

export default function Controls() {
  const { lang, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#15191b' : '#f4f2ed');
    try { window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light'); }
    catch { /* Storage can be disabled by browser settings. */ }
  }, [isDark]);

  return (
    <div className="header-controls">
      <div className="language-switch" role="group" aria-label={lang === 'uk' ? 'Мова сайту' : 'Site language'}>
        <button type="button" onClick={() => setLanguage('uk')} aria-pressed={lang === 'uk'}>UK</button>
        <span aria-hidden="true">/</span>
        <button type="button" onClick={() => setLanguage('en')} aria-pressed={lang === 'en'}>EN</button>
      </div>
      <span className="control-divider" aria-hidden="true" />
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setIsDark((value) => !value)}
        aria-label={isDark ? t.themeLight : t.themeDark}
        aria-pressed={isDark}
      >
        {isDark ? <Sun size={20} strokeWidth={1.7} aria-hidden="true" /> : <Moon size={20} strokeWidth={1.7} aria-hidden="true" />}
      </button>
    </div>
  );
}
