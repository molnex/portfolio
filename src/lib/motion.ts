import type { Variants } from 'framer-motion';

export const ease = [0.22, 1, 0.36, 1] as const;
export const sectionViewport = { once: true, amount: 0.12 } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75, ease } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

export const maskLine: Variants = {
  hidden: { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.95, ease } },
};
