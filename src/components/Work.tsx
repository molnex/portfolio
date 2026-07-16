import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Work() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const projects = [
    {
      id: '01',
      title: t.work.projects[0].title,
      role: t.work.projects[0].role,
      description: t.work.projects[0].desc,
      stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Lenis'],
    },
    {
      id: '02',
      title: t.work.projects[1].title,
      role: t.work.projects[1].role,
      description: t.work.projects[1].desc,
      stack: ['WordPress', 'HTML/CSS', 'JavaScript', 'CMS'],
    },
  ];

  return (
    <section id="work" className="w-full border-t border-primary/10 bg-surface px-5 py-28 sm:px-8 md:py-36 lg:px-12">
      <div className="mx-auto max-w-[76rem]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-90px' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.68, ease: easeOutExpo }}
          className="grid gap-8 border-b border-primary/10 pb-11 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] lg:items-end lg:gap-16"
        >
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-medium text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {t.nav[2].label}
            </span>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(2.8rem,5.4vw,5.65rem)] font-semibold leading-[0.91] tracking-[-0.075em] text-primary">
              {t.work.title}
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">{t.work.desc}</p>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: reduceMotion ? 0.01 : 0.66, delay: reduceMotion ? 0 : index * 0.09, ease: easeOutExpo }}
              className="group relative grid gap-6 border-b border-primary/10 py-10 sm:py-12 lg:grid-cols-[4rem_minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-8 lg:py-16"
            >
              <span className="text-sm font-medium text-muted">{project.id}</span>
              <div>
                <h3 className="max-w-md font-display text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-[0.96] tracking-[-0.065em] text-primary transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm font-medium text-muted">{project.role}</p>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">{project.description}</p>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 border-t border-primary/10 pt-4 text-xs font-medium text-primary/72">
                  {project.stack.map((technology) => (
                    <li key={technology} className="before:mr-2 before:text-accent before:content-['•']">
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
