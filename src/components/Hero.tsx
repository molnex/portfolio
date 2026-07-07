import { motion } from "framer-motion";

export default function Hero() {
  const easeOutExpo = [0.16, 1, 0.3, 1] as const;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-black/[0.03] dark:bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Left Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: easeOutExpo,
        }}
        className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 hidden lg:flex flex-col gap-8 z-20"
      >
        {["About", "Stack", "Work", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => scrollToSection(e, item.toLowerCase())}
            className="group relative w-fit text-sm font-semibold uppercase tracking-[0.22em] text-primary/60 hover:text-primary transition-colors duration-300"
          >
            {item}

            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start uppercase w-full max-w-7xl mx-auto pl-0 lg:pl-25">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: easeOutExpo,
            delay: 0.2,
          }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-16 h-[1px] bg-muted/50"></div>

          <span className="text-muted tracking-[0.3em] text-xs md:text-sm font-medium">
            Vasyl Lypka — Creative Developer
          </span>
        </motion.div>

        <div className="overflow-hidden py-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: easeOutExpo,
              delay: 0.3,
            }}
            className="text-[14vw] md:text-[11vw] leading-[0.85] font-display font-bold tracking-tighter text-primary"
          >
            FRONTEND
          </motion.h1>
        </div>

        <div className="overflow-hidden py-2 flex items-center gap-6 md:gap-12 w-full">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              ease: easeOutExpo,
              delay: 0.4,
            }}
            className="text-[14vw] md:text-[11vw] leading-[0.85] font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-muted to-primary"
          >
            ENGINEER
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -45,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.5,
              ease: easeOutExpo,
              delay: 0.8,
            }}
            className="hidden md:flex shrink-0 w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-black/10 dark:border-white/10 items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full animate-pulse blur-md"></div>

            <span className="text-[9px] lg:text-[10px] text-muted text-center leading-tight tracking-widest relative z-10">
              AVAILABLE
              <br />
              FOR WORK
            </span>
          </motion.div>
        </div>
      </div>
            {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.2,
        }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex flex-col items-start gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
          Scroll to explore
        </span>

        <div className="w-[1px] h-16 bg-black/10 dark:bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-full h-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}