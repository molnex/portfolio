import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: "01",
      title: t.work.projects[0].title,
      role: t.work.projects[0].role,
      description: t.work.projects[0].desc,
      stack: ["React", "TypeScript", "Tailwind", "Framer Motion", "Lenis"]
    },
    {
      id: "02",
      title: t.work.projects[1].title,
      role: t.work.projects[1].role,
      description: t.work.projects[1].desc,
      stack: ["WordPress", "HTML/CSS", "JavaScript", "CMS"]
    }
  ];

  return (
    <section id="work" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background flex justify-center">
      <div className="max-w-7xl w-full flex flex-col">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-primary">
            {t.work.title}
          </h2>
          <p className="text-muted mt-4 max-w-2xl text-lg">
            {t.work.desc}
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              className="group border-t border-white/10 py-10 md:py-16 flex flex-col md:flex-row justify-between gap-8 md:gap-16 relative"
            >
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-xs font-mono text-muted/50 tracking-widest">{project.id}</span>
                <h3 className="text-3xl md:text-4xl font-display font-medium text-primary group-hover:text-accent transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              <div className="md:w-2/3 flex flex-col gap-6">
                <p className="text-muted text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-primary/80 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
            </motion.div>
          ))}
          <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
}