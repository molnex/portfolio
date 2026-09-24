import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, sectionViewport, stagger } from '../lib/motion';

const technologies = [
  { name: 'React', category: 'ecosystem' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'Framer Motion', category: 'animation' },
  { name: 'WordPress', category: 'commercial' },
] as const;

export default function Stack() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  return <section id="stack" className="section stack-section">
    <div className="site-width stack-layout">
      <motion.div className="stack-intro" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <div className="section-label mono"><span>{t.stack.label}</span><span className="label-rule" /></div>
        <motion.h2 tabIndex={-1} className="section-title" variants={reduced ? undefined : fadeUp}>{t.stack.title}</motion.h2>
        <motion.p className="body-copy" variants={reduced ? undefined : fadeUp}>{t.stack.intro}</motion.p>
      </motion.div>
      <motion.ol className="technology-list" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={stagger}>
        {technologies.map((item, index) => <motion.li key={item.name} variants={reduced ? undefined : fadeUp}>
          <span className="mono tech-number">{String(index + 1).padStart(2, '0')}</span>
          <span className="tech-name">{item.name}</span>
          <span className="mono tech-category">{t.stack.categories[item.category]}</span>
        </motion.li>)}
      </motion.ol>
    </div>
  </section>;
}
