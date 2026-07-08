import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, ArrowUp } from 'lucide-react';

export default function Controls() {
  const [isDark, setIsDark] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById('hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-24 md:bottom-8 right-6 md:right-12 z-50 flex items-center gap-1.5 p-1.5 bg-surface/80 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full shadow-2xl"
    >
      <button 
        onClick={() => setIsDark(!isDark)}
        className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary"
        aria-label="Toggle Theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <AnimatePresence>
        {showScrollTop && (
          <>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-[1px] h-6 bg-black/10 dark:bg-white/10"
            />
            <motion.button 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={scrollToTop}
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-primary"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}