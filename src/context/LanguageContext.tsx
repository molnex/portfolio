import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { copy, type Language } from '../content/copy';

type LanguageContextValue = { lang: Language; setLanguage: (language: Language) => void; t: (typeof copy)[Language] };
const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try { return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'uk'; }
  catch { return 'uk'; }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'uk' ? 'Василь Липка — Frontend Engineer' : 'Vasyl Lypka — Frontend Engineer';
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy[lang].metaDescription);
    try { window.localStorage.setItem('portfolio-language', lang); }
    catch { /* Storage can be disabled by browser settings. */ }
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLanguage, t: copy[lang] }}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
