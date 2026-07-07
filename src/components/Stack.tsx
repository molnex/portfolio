import { motion, type Variants } from 'framer-motion';
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiFramer, SiWordpress } from 'react-icons/si';

const technologies = [
  { name: "React", category: "Ecosystem", icon: <SiReact className="w-6 h-6 text-[#61DAFB]" /> },
  { name: "TypeScript", category: "Language", icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
  { name: "Tailwind CSS", category: "Styling", icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" /> },
  { name: "JavaScript", category: "Language", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
  { name: "Framer Motion", category: "Animation", icon: <SiFramer className="w-6 h-6 text-primary" /> },
  { name: "WordPress", category: "Commercial", icon: <SiWordpress className="w-6 h-6 text-[#21759B]" /> },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Stack() {
  return (
    <section id="stack" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-surface border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/3 flex flex-col">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight text-primary mb-6"
          >
            Стек &<br/>Інструменти.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary/70 leading-relaxed"
          >
            Від створення архітектури до мікроанімацій. Я комбіную надійні базові технології з сучасним інструментарієм React екосистеми для досягнення максимальної продуктивності.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              // Прибрали bg-black/5 та border, додали hover background
              className="group flex flex-col p-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                {tech.icon}
                <span className="text-xs font-mono tracking-wider uppercase text-muted">{tech.category}</span>
              </div>
              <h3 className="text-xl font-bold text-primary">{tech.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}