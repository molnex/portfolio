import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { SectionId } from '../content/copy';
import Controls from './Controls';

export default function Header() {
  const { lang, t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id === 'hero' ? null : visible.target.id as SectionId);
    }, { rootMargin: '-25% 0px -50% 0px', threshold: [0, 0.2, 0.5] });
    const hero = document.getElementById('hero');
    if (hero) observer.observe(hero);
    t.nav.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, [t.nav]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuPanel.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  function closeMenu(restoreFocus = false) {
    setMenuOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButton.current?.focus());
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape') { event.preventDefault(); closeMenu(true); return; }
    if (event.key !== 'Tab') return;
    const items = menuPanel.current?.querySelectorAll<HTMLElement>('a, button');
    if (!items?.length) return;
    const first = items[0]; const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  function navigate(id: SectionId) {
    closeMenu();
    requestAnimationFrame(() => document.querySelector<HTMLElement>(`#${id} h2`)?.focus({ preventScroll: true }));
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <div className="header-inner site-width">
          <a className="brand" href="#hero" aria-label={lang === 'uk' ? 'Василь Липка — на початок' : 'Vasyl Lypka — home'} onClick={() => closeMenu()}>
            V<span>L</span><i>.</i>
          </a>
          <nav className="desktop-nav" aria-label={t.navLabel}>
            {t.nav.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
          </nav>
          <div className="header-right">
            <Controls />
            <button ref={menuButton} className="menu-toggle" type="button" aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? t.menuClose : t.menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.nav
          id="mobile-navigation"
          ref={menuPanel}
          className="mobile-navigation"
          aria-label={t.navLabel}
          onKeyDown={handleMenuKeyDown}
          initial={reduceMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: reduceMotion ? 0 : 0.32 }}
        >
          <div className="site-width mobile-navigation-inner">
            {t.nav.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => navigate(item.id)}>
              <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.label}</strong><ArrowUpRight size={23} aria-hidden="true" />
            </a>)}
            <p>{t.hero.craft}</p>
          </div>
        </motion.nav>}
      </AnimatePresence>
    </>
  );
}
