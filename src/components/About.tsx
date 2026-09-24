import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { fadeUp, sectionViewport, stagger } from '../lib/motion';

export default function About() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  return <section id="about" className="section about-section">
    <div className="site-width">
      <div className="section-label mono"><span>{t.about.label}</span><span className="label-rule" /></div>
      <motion.div className="about-lead" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <motion.h2 tabIndex={-1} className="section-title about-title" variants={reduced ? undefined : fadeUp}>{t.about.title}</motion.h2>
        <div className="about-copy">
          <motion.p className="about-statement" variants={reduced ? undefined : fadeUp}>{t.about.lead}</motion.p>
          <motion.p className="body-copy" variants={reduced ? undefined : fadeUp}>{t.about.detail}</motion.p>
        </div>
      </motion.div>
      <div className="about-facts">
        {t.about.facts.map((fact) => <motion.article key={fact.label} className="fact-row" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={fadeUp}>
          <span className="mono fact-index">{fact.label}</span>
          <h3>{fact.title}</h3>
          <p>{fact.body}</p>
        </motion.article>)}
      </div>
    </div>
  </section>;
}
