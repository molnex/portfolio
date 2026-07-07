import { motion, type Variants } from 'framer-motion';


export default function Stack() {
  const technologies = [
    { name: "React", category: "Ecosystem" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "JavaScript", category: "Language" },
    { name: "Framer Motion", category: "Animation" },
    { name: "HTML & CSS", category: "Foundation" },
    { name: "Vite", category: "Build Tool" },
    { name: "WordPress", category: "Commercial Exp" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  };

  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-background flex justify-center border-t border-white/5">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/3 flex flex-col items-start relative">
          <div className="md:sticky md:top-32">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tighter text-primary mb-6"
            >
              Стек & Інструменти.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-muted leading-relaxed"
            >
              Від створення архітектури до мікроанімацій. Я комбіную надійні базові технології з сучасним інструментарієм React екосистеми для досягнення максимальної продуктивності.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="p-6 rounded-2xl border border-white/5 bg-surface/50 flex flex-col gap-2 transition-colors cursor-default"
            >
              <span className="text-[10px] md:text-xs font-mono text-muted/60 uppercase tracking-widest">{tech.category}</span>
              <span className="text-base md:text-lg font-medium text-primary">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}