import type { Language } from '../content/copy';
import { portfolioLinks } from './site';

export type Project = {
  id: string;
  number: string;
  kind: 'portfolio' | 'cms';
  title: Record<Language, string>;
  role: Record<Language, string>;
  description: Record<Language, string>;
  technologies: string[];
  links?: { live: string; source: string };
};

export const projects: Project[] = [
  {
    id: 'portfolio', number: '01', kind: 'portfolio',
    title: { uk: 'Персональне портфоліо', en: 'Personal portfolio' },
    role: { uk: 'Frontend-розробка / дизайн', en: 'Frontend development / design' },
    description: {
      uk: 'Цей сайт — простір для експериментів із типографікою, адаптивною композицією та продуманим рухом. Побудований на React і TypeScript.',
      en: 'This site is a space to explore typography, responsive composition and thoughtful motion. Built with React and TypeScript.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    links: portfolioLinks,
  },
  {
    id: 'cms', number: '02', kind: 'cms',
    title: { uk: 'Комерційна CMS-розробка', en: 'Commercial CMS development' },
    role: { uk: 'WordPress-розробник', en: 'WordPress developer' },
    description: {
      uk: 'Вісім місяців комерційної практики: створення, налаштування й підтримка сайтів на WordPress, робота з HTML, CSS та JavaScript.',
      en: 'Eight months of commercial practice: building, configuring and maintaining WordPress sites, working with HTML, CSS and JavaScript.',
    },
    technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript'],
  },
];
