import { motion } from 'framer-motion';

export default function About() {
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  return (
    <section id="about" className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-surface flex justify-center border-t border-white/5">
      <div className="max-w-7xl w-full flex flex-col">
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: easeOutExpo }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.15] tracking-tight text-primary/90 max-w-5xl"
        >
          Мене звати Василь, мені 21 рік. Я створюю цифрові продукти. <br className="hidden md:block" />
          <span className="text-primary">Мій шлях почався з комерційної розробки на WordPress, але зараз мій абсолютний фокус — це створення складних інтерфейсів у сучасній екосистемі React.</span>
        </motion.h2>

        <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-mono text-muted uppercase tracking-widest">01 / Бекграунд</span>
            <h3 className="text-xl font-medium text-primary">Інженерія ПЗ</h3>
            <p className="text-primary/80 leading-relaxed text-sm">
              Здобув профільну освіту в Чернівецькому національному університеті ім. Ю. Федьковича. Розумію, як працює код під капотом, а не лише на рівні візуальних компонентів.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-mono text-muted uppercase tracking-widest">02 / Підхід</span>
            <h3 className="text-xl font-medium text-primary">AI-Assisted</h3>
            <p className="text-primary/80 leading-relaxed text-sm">
              Синхронізую власні знання з можливостями штучного інтелекту. Використовую AI для архітектурних рішень, рефакторингу та безперервного навчання.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-mono text-muted uppercase tracking-widest">03 / Майндсет</span>
            <h3 className="text-xl font-medium text-primary">Адаптивність</h3>
            <p className="text-primary/80 leading-relaxed text-sm">
              Англійська на рівні B1-B2. Здатен швидко засвоювати новий стек технологій. Готовий інтегруватися в команду та освоїти будь-який інструмент, необхідний для проекту.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}