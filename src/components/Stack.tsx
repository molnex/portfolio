import { motion, type Variants } from 'framer-motion';
import { Code2, Box, Sparkles, Layout, Terminal, Braces } from 'lucide-react';

const technologies = [
  { name: "React", category: "Ecosystem", icon: <Box size={20} /> },
  { name: "TypeScript", category: "Language", icon: <Code2 size={20} /> },
  { name: "Tailwind CSS", category: "Styling", icon: <Layout size={20} /> },
  { name: "JavaScript", category: "Language", icon: <Braces size={20} /> },
  { name: "Framer Motion", category: "Animation", icon: <Sparkles size={20} /> },
  { name: "WordPress", category: "Commercial", icon: <Terminal size={20} /> },
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
              className="group flex flex-col p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
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