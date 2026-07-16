import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="w-full border-t border-primary/10 bg-surface px-5 py-28 sm:px-8 md:py-36 lg:px-12">
      <div className="mx-auto max-w-[76rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(11rem,0.56fr)_minmax(0,1.44fr)] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.62, ease: easeOutExpo }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {t.nav[0].label}
            </span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-90px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.76, delay: reduceMotion ? 0 : 0.08, ease: easeOutExpo }}
          >
            <h2 className="max-w-4xl font-display text-[clamp(2.1rem,4.1vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-primary">
              {t.about.heading1}
              <span className="text-primary/58">{t.about.heading2}</span>
            </h2>
          </motion.div>
        </div>

        <div className="mt-18 divide-y divide-primary/10 border-y border-primary/10 md:mt-28">
          {t.about.features.map((feature, index) => (
            <motion.article
              key={feature.subtitle}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: reduceMotion ? 0.01 : 0.58, delay: reduceMotion ? 0 : index * 0.08, ease: easeOutExpo }}
              className="grid gap-5 py-7 sm:py-9 md:grid-cols-[minmax(9rem,0.6fr)_minmax(12rem,0.8fr)_minmax(0,1.35fr)] md:gap-8"
            >
              <span className="text-xs font-semibold text-muted">{feature.subtitle}</span>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.045em] text-primary sm:text-3xl">{feature.title}</h3>
              <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">{feature.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
