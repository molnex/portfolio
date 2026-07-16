import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="w-full border-t border-primary/10 bg-surface px-5 py-28 sm:px-8 md:py-36 lg:px-12">
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-12 border-b border-primary/10 pb-16 md:grid-cols-[minmax(0,1.1fr)_minmax(15rem,0.9fr)] md:items-end md:gap-12 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: easeOutExpo }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {t.contact.next}
            </span>
            <h2 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-primary sm:text-6xl lg:text-8xl">
              {t.contact.titleLine1}
              <br />
              <span className="text-primary/58">{t.contact.titleLine2}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.68, delay: reduceMotion ? 0 : 0.1, ease: easeOutExpo }}
            className="border-t border-primary/10 pt-6 md:pb-1"
          >
            <a
              href="mailto:44piemonte@gmail.com"
              className="group block break-words text-2xl font-medium tracking-[-0.045em] text-primary transition-colors hover:text-accent sm:text-3xl"
            >
              44piemonte@gmail.com
              <ArrowUpRight className="ml-2 inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={20} aria-hidden="true" />
            </a>
            <a
              href="mailto:44piemonte@gmail.com"
              aria-label={`${t.contact.btn}: 44piemonte@gmail.com`}
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-primary px-5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            >
              {t.contact.btn}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <footer className="flex flex-col gap-7 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted">© {new Date().getFullYear()} {t.contact.copyright}</p>
          <nav className="flex flex-wrap items-center text-sm font-medium text-muted" aria-label="Social links">
            <a href="https://t.me/odysseyyocker" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">Telegram</a>
            <span className="px-3 text-primary/35" aria-hidden="true">·</span>
            <a href="https://github.com/molnex" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a>
            <span className="px-3 text-primary/35" aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C-%D0%BB%D0%B8%D0%BF%D0%BA%D0%B0-17175b301/" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a>
          </nav>
        </footer>
      </div>
    </section>
  );
}
