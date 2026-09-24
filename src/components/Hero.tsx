import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useRef, type PointerEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ease, maskLine, stagger } from '../lib/motion';

export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -42]);
  const asideY = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const symbolX = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const symbolY = useSpring(pointerY, { stiffness: 120, damping: 22 });

  function moveSymbol(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 18);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 18);
  }

  return <section id="hero" ref={heroRef} className="hero-section">
    <div className="site-width hero-layout">
      <motion.div className="hero-main" style={{ y: reduceMotion ? 0 : mainY }}>
        <motion.p className="hero-intro mono" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>{t.hero.intro}</motion.p>
        <motion.h1 className="hero-title" variants={stagger} initial={reduceMotion ? false : 'hidden'} animate="visible">
          {[t.hero.line1, t.hero.line2].map((line) => <span className="title-mask" key={line}><motion.span variants={reduceMotion ? undefined : maskLine}>{line}</motion.span></span>)}
        </motion.h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }}>{t.hero.body}</motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55, ease }}>
          <a className="button button-primary" href="#work">{t.hero.viewWork}<ArrowUpRight size={19} aria-hidden="true" /></a>
          <a className="button button-outline" href="#contact">{t.hero.contact}<ArrowUpRight size={19} aria-hidden="true" /></a>
        </motion.div>
      </motion.div>
      <motion.aside className="hero-aside" style={{ y: reduceMotion ? 0 : asideY }} initial={reduceMotion ? false : { opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.55, ease }} aria-label={t.hero.craft} onPointerMove={moveSymbol} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
        <div className="aside-top mono"><span>01 / 04</span><span>{t.hero.craft}</span></div>
        <motion.div className="hero-symbol" style={{ x: symbolX, y: symbolY }} aria-hidden="true"><span className="symbol-angle">&lt;</span><span className="symbol-v">V</span><span className="symbol-l">L</span><span className="symbol-slash">/</span><span className="symbol-dot" /><span className="symbol-angle right">&gt;</span></motion.div>
        <div className="aside-bottom mono"><span>React<br />TypeScript<br />Motion</span><span>{t.hero.availability}</span></div>
      </motion.aside>
      <a className="hero-scroll mono" href="#about"><ArrowDown size={19} aria-hidden="true" />{t.hero.scroll}</a>
    </div>
    <div className="hero-next" aria-hidden="true"><div className="site-width"><span>01</span><span>{t.nav[0].label}</span><ArrowDown size={20} /></div></div>
  </section>;
}
