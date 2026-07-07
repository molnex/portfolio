import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full pt-32 pb-12 md:pt-48 md:pb-12 px-6 md:px-12 lg:px-24 bg-surface flex flex-col items-center justify-center border-t border-white/5">
      <div className="max-w-7xl w-full flex flex-col items-center text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-muted tracking-[0.3em] uppercase text-xs font-mono mb-8"
        >
          What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter text-primary mb-12"
        >
          Let's build <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted to-primary">the future.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="mailto:44piemonte@gmail.com" 
            className="group relative flex items-center justify-center px-10 h-14 md:h-16 bg-primary text-background rounded-full font-medium text-base md:text-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="relative z-10 leading-none mt-[2px]">Написати мені</span>
            
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/10 dark:border-white/10 pt-12"
        >
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Vasyl Lypka. Всі права захищено.
          </p>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="https://t.me/odysseyyocker" target="_blank" rel="noreferrer" className="text-muted hover:text-primary transition-colors">Telegram</a>
            <a href="https://github.com/molnex" className="text-muted hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C-%D0%BB%D0%B8%D0%BF%D0%BA%D0%B0-17175b301/" className="text-muted hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}