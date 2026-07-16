import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type SectionLinkProps = {
  id: string;
  label: string;
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
};

function SectionLink({ id, label, onNavigate }: SectionLinkProps) {
  return (
    <a
      href={`#${id}`}
      onClick={(event) => onNavigate(event, id)}
      className="relative text-sm font-medium text-primary/70 transition-colors duration-200 hover:text-primary focus-visible:text-primary"
    >
      {label}
    </a>
  );
}

export default function Hero() {
  const { lang, setLanguage, t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0.01 : 0.72, delay, ease: easeOutExpo },
  });

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[min(52rem,100svh)] w-full overflow-hidden bg-background px-5 sm:px-8 lg:px-12"
    >
      <div className="hero-backdrop pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-backdrop-line pointer-events-none absolute inset-x-0 top-[7.4rem] -z-10" aria-hidden="true" />

      <header className="absolute left-0 top-0 z-20 w-full px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
        <div className="mx-auto flex max-w-[76rem] items-center justify-between gap-4">
          <a
            href="#hero"
            onClick={(event) => scrollToSection(event, 'hero')}
            className="font-display text-xl font-bold tracking-[-0.07em] text-primary transition-opacity hover:opacity-65"
            aria-label="Vasyl Lypka — home"
          >
            VL<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {t.nav.map((item) => (
              <SectionLink key={item.id} {...item} onNavigate={scrollToSection} />
            ))}
          </nav>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: 0.12, ease: easeOutExpo }}
            className="inline-flex shrink-0 items-center rounded-full border border-primary/12 bg-surface/85 p-1 shadow-[0_10px_30px_rgb(15_23_42_/_0.06)] backdrop-blur-sm"
            role="group"
            aria-label="Language selector"
          >
            <button
              type="button"
              onClick={() => setLanguage('uk')}
              aria-pressed={lang === 'uk'}
              className={`min-h-9 rounded-full px-3 text-[11px] font-semibold transition-colors duration-200 ${
                lang === 'uk' ? 'bg-primary text-background' : 'text-primary/60 hover:text-primary'
              }`}
            >
              UK
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={lang === 'en'}
              className={`min-h-9 rounded-full px-3 text-[11px] font-semibold transition-colors duration-200 ${
                lang === 'en' ? 'bg-primary text-background' : 'text-primary/60 hover:text-primary'
              }`}
            >
              EN
            </button>
          </motion.div>
        </div>

        <nav className="mx-auto mt-5 grid max-w-[76rem] grid-cols-2 gap-x-5 gap-y-2 border-t border-primary/10 pt-4 lg:hidden" aria-label="Primary navigation">
          {t.nav.map((item) => (
            <SectionLink key={item.id} {...item} onNavigate={scrollToSection} />
          ))}
        </nav>
      </header>

      <div className="relative z-10 mx-auto grid w-full max-w-[76rem] grid-cols-1 items-end gap-10 pb-16 pt-48 sm:gap-12 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_15.5rem] lg:gap-16 lg:pb-24 lg:pt-32">
        <div className="min-w-0">
          <motion.p
            {...reveal(0.16)}
            className="mb-7 max-w-xl text-sm leading-relaxed text-muted sm:mb-9 sm:text-base"
          >
            {t.hero.subtitle}
          </motion.p>

          <h1 className="max-w-[9.5ch] font-display text-[clamp(3rem,8.4vw,7.5rem)] font-bold leading-[0.84] tracking-[-0.075em] text-primary">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={`${lang}-title`} className="block" {...reveal(0.24)}>
                <span className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    initial={reduceMotion ? false : { y: '102%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.85, delay: 0.24, ease: easeOutExpo }}
                    className="block"
                  >
                    {t.hero.title1}
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.08em] text-primary/62">
                  <motion.span
                    initial={reduceMotion ? false : { y: '102%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.85, delay: 0.34, ease: easeOutExpo }}
                    className="block"
                  >
                    {t.hero.title2}
                  </motion.span>
                </span>
              </motion.span>
            </AnimatePresence>
          </h1>

          <motion.div {...reveal(0.56)} className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11 sm:gap-4">
            <a
              href="#work"
              onClick={(event) => scrollToSection(event, 'work')}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            >
              {t.nav[2].label}
              <ArrowDown size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, 'contact')}
              className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-primary/18 px-5 text-sm font-semibold text-primary transition-colors duration-200 hover:border-primary/45 hover:bg-primary/[0.035]"
            >
              {t.contact.btn}
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#contact"
          onClick={(event) => scrollToSection(event, 'contact')}
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.78, delay: 0.55, ease: easeOutExpo }}
          whileHover={reduceMotion ? undefined : { y: -5 }}
          className="hero-availability group relative block overflow-hidden rounded-2xl border border-primary/12 p-6 text-left transition-[border-color,box-shadow] duration-300 hover:border-accent/55 focus-visible:border-accent sm:max-w-sm lg:mb-2 lg:max-w-none"
          aria-label={`${t.hero.available1} ${t.hero.available2}. Go to contact section.`}
        >
          <motion.span
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.82, delay: 0.92, ease: easeOutExpo }}
            className="absolute left-0 top-0 h-0.5 w-full origin-left bg-accent"
            aria-hidden="true"
          />
          <span className="mb-7 flex items-center gap-2 text-xs font-semibold text-muted">
            <span className="hero-availability-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.available1}
          </span>
          <span className="block font-display text-3xl font-semibold leading-[0.95] tracking-[-0.06em] text-primary">
            {t.hero.available2}
          </span>
          <span className="mt-8 block border-t border-primary/10 pt-4 text-xs leading-relaxed text-muted">
            React&nbsp;&nbsp;·&nbsp;&nbsp;TypeScript&nbsp;&nbsp;·&nbsp;&nbsp;Motion
          </span>
        </motion.a>
      </div>

      <motion.a
        href="#about"
        onClick={(event) => scrollToSection(event, 'about')}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: 1.05 }}
        className="absolute bottom-7 left-5 z-10 inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-primary sm:bottom-9 sm:left-8 lg:left-12"
      >
        {t.hero.scroll}
        <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
