import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { contact } from '../data/site';
import { fadeUp, maskLine, sectionViewport, stagger } from '../lib/motion';

export default function Contact() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  return <section id="contact" className="section contact-section">
    <div className="site-width">
      <div className="section-label mono"><span>{t.contact.label}</span><span className="label-rule" /></div>
      <motion.div className="contact-main" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <motion.h2 tabIndex={-1} className="contact-title" variants={stagger}>
          {[t.contact.title1, t.contact.title2].map((line) => <span className="contact-line-mask" key={line}><motion.span variants={reduced ? undefined : maskLine}>{line}</motion.span></span>)}
        </motion.h2>
        <motion.div className="contact-side" variants={reduced ? undefined : fadeUp}>
          <p>{t.contact.intro}</p>
          <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight size={21} aria-hidden="true" /></a>
          <a className="button button-primary" href={`mailto:${contact.email}`}>{t.contact.emailAction}<ArrowUpRight size={19} aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {t.contact.copyright}</p>
        <nav aria-label={t.contact.socialLabel}><a href={contact.telegram} target="_blank" rel="noopener noreferrer">Telegram <ArrowUpRight size={14} aria-hidden="true" /></a><a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a></nav>
        <a className="back-top" href="#hero">{t.contact.backTop}<ArrowUp size={16} aria-hidden="true" /></a>
      </footer>
    </div>
  </section>;
}
