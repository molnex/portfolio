import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { copy } from '../content/copy';
import { projects, type Project } from '../data/projects';
import { fadeUp, maskLine, sectionViewport, stagger } from '../lib/motion';

function ProjectVisual({ project, language, visualY }: { project: Project; language: 'uk' | 'en'; visualY: number | MotionValue<number> }) {
  const previewCopy = copy[language];
  if (project.kind === 'cms') return <motion.figure className="project-visual cms-visual" style={{ y: visualY }} aria-label={previewCopy.work.cms.ariaLabel}>
    <div className="cms-art" aria-hidden="true">
      <div className="cms-topline mono"><span>{previewCopy.work.cms.eyebrow}</span><span>02 / 02</span></div>
      <div className="cms-middle">
        <div className="cms-duration"><strong>08</strong><span className="mono">{previewCopy.work.cms.months}</span></div>
        <ol className="cms-stages">{previewCopy.work.cms.stages.map((stage, index) => <li key={stage}><span className="mono">0{index + 1}</span><strong>{stage}</strong></li>)}</ol>
      </div>
      <div className="cms-bottomline mono"><span>WORDPRESS / CMS</span><span>HTML · CSS · JS</span></div>
    </div>
  </motion.figure>;

  return <motion.figure className="project-visual portfolio-visual" style={{ y: visualY }} aria-label={language === 'uk' ? 'Стилізований preview цього портфоліо' : 'Stylized preview of this portfolio'}>
    <div className="preview-window">
      <div className="preview-header"><span>VL.</span><span>{previewCopy.nav.map(({ label }) => label).join('  ·  ')}</span><span>UK / EN</span></div>
      <div className="preview-body"><span className="preview-overline">{previewCopy.hero.intro}</span><strong>{previewCopy.hero.line1}<br />{previewCopy.hero.line2}</strong><span className="preview-blue">{previewCopy.hero.viewWork} ↗</span></div>
      <div className="preview-footer">{previewCopy.hero.craft} <span>01 / 04</span></div>
    </div>
    <figcaption className="mono visual-caption">PORTFOLIO / REACT / TYPESCRIPT</figcaption>
  </motion.figure>;
}

function ProjectCard({ project, language, t }: { project: Project; language: 'uk' | 'en'; t: (typeof copy)['uk' | 'en'] }) {
  const reduced = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return <motion.article ref={cardRef} className={`project project-${project.kind}`} initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={fadeUp}>
    <ProjectVisual project={project} language={language} visualY={reduced ? 0 : visualY} />
    <div className="project-content">
      <div className="project-kicker mono"><span>{project.number} / 02</span><span>{project.role[language]}</span></div>
      <h3>{project.title[language]}</h3>
      <p>{project.description[language]}</p>
      <ul className="project-tech mono" aria-label={language === 'uk' ? 'Технології' : 'Technologies'}>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      {project.links && <div className="project-links">
        <a href={project.links.live} target="_blank" rel="noopener noreferrer">{t.work.live}<ArrowUpRight size={17} aria-hidden="true" /></a>
        <a href={project.links.source} target="_blank" rel="noopener noreferrer">{t.work.source}<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>}
    </div>
  </motion.article>;
}

export default function Work() {
  const { lang, t } = useLanguage();
  const reduced = useReducedMotion();
  return <section id="work" className="section work-section">
    <div className="site-width">
      <div className="section-label mono"><span>{t.work.label}</span><span className="label-rule" /></div>
      <motion.div className="work-heading" initial={reduced ? false : 'hidden'} whileInView="visible" viewport={sectionViewport} variants={stagger}>
        <motion.h2 tabIndex={-1} className="section-title" variants={stagger}><span className="title-mask"><motion.span variants={reduced ? undefined : maskLine}>{t.work.title}</motion.span></span></motion.h2>
        <motion.p className="body-copy" variants={reduced ? undefined : fadeUp}>{t.work.intro}</motion.p>
      </motion.div>
      <div className="projects">
        {projects.map((project) => <ProjectCard key={project.id} project={project} language={lang} t={t} />)}
      </div>
    </div>
  </section>;
}
