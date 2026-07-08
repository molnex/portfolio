import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;
  const { t } = useLanguage();

  return (
    <section id="about" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-surface flex justify-center border-t border-white/5">
      <div className="max-w-7xl w-full flex flex-col">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] tracking-tight text-primary/90 max-w-5xl"
        >
          {t.about.heading1}<br className="hidden md:block" />
          <span className="text-primary">{t.about.heading2}</span>
        </motion.h2>

        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-16">
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 * (index + 1) }}
              className="flex flex-col gap-4"
            >
              <span className="text-xs font-mono text-muted uppercase tracking-widest">{feature.subtitle}</span>
              <h3 className="text-xl font-medium text-primary">{feature.title}</h3>
              <p className="text-primary/80 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}