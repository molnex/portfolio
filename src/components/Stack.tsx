import { motion, useReducedMotion } from 'framer-motion';
import { SiFramer, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiWordpress } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Stack() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const technologies = [
    { name: 'React', category: t.stack.categories.ecosystem, icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', category: t.stack.categories.language, icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', category: t.stack.categories.styling, icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'JavaScript', category: t.stack.categories.language, icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Framer Motion', category: t.stack.categories.animation, icon: SiFramer, color: 'currentColor' },
    { name: 'WordPress', category: t.stack.categories.commercial, icon: SiWordpress, color: '#21759B' },
  ];

  return (
    <section id="stack" className="w-full border-t border-primary/10 bg-background px-5 py-28 sm:px-8 md:py-36 lg:px-12">
      <div className="mx-auto grid max-w-[76rem] gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.68, ease: easeOutExpo }}
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium text-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {t.nav[1].label}
          </span>
          <h2 className="mt-7 font-display text-[clamp(2.6rem,4.7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-primary">
            {t.stack.titleLine1}
            <br />
            <span className="text-primary/58">{t.stack.titleLine2}</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base">{t.stack.desc}</p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-70px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } },
          }}
          className="border-y border-primary/10"
        >
          {technologies.map((technology, index) => {
            const Icon = technology.icon;
            return (
              <motion.li
                key={technology.name}
                variants={{
                  hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.01 : 0.46, ease: easeOutExpo } },
                }}
                className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-primary/10 py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-6"
              >
                <span className="text-xs font-medium text-muted/70">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex min-w-0 items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0" color={technology.color} aria-hidden="true" />
                  <span className="font-display text-xl font-semibold tracking-[-0.04em] text-primary transition-colors duration-200 group-hover:text-accent sm:text-2xl">
                    {technology.name}
                  </span>
                </span>
                <span className="text-right text-xs font-medium text-muted">{technology.category}</span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
