import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const translations = {
  uk: {
    nav: [
      { id: 'about', label: 'Про мене' },
      { id: 'stack', label: 'Стек' },
      { id: 'work', label: 'Проєкти' },
      { id: 'contact', label: 'Контакти' }
    ],
    hero: {
      subtitle: 'Василь Липка — Креативний розробник',
      title1: 'ФРОНТЕНД',
      title2: 'ІНЖЕНЕР',
      available1: 'ВІДКРИТИЙ',
      available2: 'ДО ПРОПОЗИЦІЙ',
      scroll: 'Гортайте вниз'
    },
    about: {
      heading1: 'Мене звати Василь, мені 21 рік. Я створюю цифрові продукти. ',
      heading2: 'Мій шлях почався з комерційної розробки на WordPress, але зараз мій абсолютний фокус — це створення складних інтерфейсів у сучасній екосистемі React.',
      features: [
        {
          subtitle: '01 / Освіта',
          title: 'Інженерія ПЗ',
          desc: 'Здобув профільну освіту в Чернівецькому національному університеті ім. Ю. Федьковича. Розумію, як працює код під капотом, а не лише на рівні візуальних компонентів.'
        },
        {
          subtitle: '02 / Підхід',
          title: 'Підтримка ШІ',
          desc: 'Синхронізую власні знання з можливостями штучного інтелекту. Використовую ШІ для архітектурних рішень, рефакторингу та безперервного навчання.'
        },
        {
          subtitle: '03 / Мислення',
          title: 'Адаптивність',
          desc: 'Англійська на рівні B1-B2. Здатен швидко засвоювати новий стек технологій. Готовий інтегруватися в команду та освоїти будь-який інструмент, необхідний для проєкту.'
        }
      ]
    },
    stack: {
      titleLine1: 'Стек &',
      titleLine2: 'Інструменти.',
      desc: 'Від створення архітектури до мікроанімацій. Я комбіную надійні базові технології з сучасним інструментарієм React екосистеми для досягнення максимальної продуктивності.',
      categories: {
        ecosystem: 'Екосистема',
        language: 'Мова',
        styling: 'Стилізація',
        animation: 'Анімація',
        commercial: 'Комерція'
      }
    },
    work: {
      title: 'Вибрані проєкти.',
      desc: 'Моя практика та розробка. Від архітектури сучасних React-додатків до вирішення реальних бізнес-завдань у комерційному середовищі.',
      projects: [
        {
          title: 'Персональне портфоліо',
          role: 'Фронтенд-інженер / Дизайнер',
          desc: 'Розробка цього преміального портфоліо. Фокус на високопродуктивні анімації, кінематичний скрол та сувору типізацію. Демонстрація глибокого розуміння сучасної екосистеми React та компонентного підходу.'
        },
        {
          title: 'Комерційна розробка (CMS)',
          role: 'WordPress-розробник',
          desc: '5 місяців практичного комерційного досвіду. Створення, налаштування та підтримка вебсайтів. Глибоке розуміння структури вебсторінок, роботи з плагінами та впровадження кастомних рішень на базі HTML/CSS/JS.'
        }
      ]
    },
    contact: {
      next: 'Що далі?',
      titleLine1: 'Створимо',
      titleLine2: 'майбутнє.',
      btn: 'Написати мені',
      copyright: 'Василь Липка. Всі права захищено.'
    }
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'stack', label: 'Stack' },
      { id: 'work', label: 'Work' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      subtitle: 'Vasyl Lypka — Creative Developer',
      title1: 'FRONTEND',
      title2: 'ENGINEER',
      available1: 'AVAILABLE',
      available2: 'FOR WORK',
      scroll: 'Scroll to explore'
    },
    about: {
      heading1: "My name is Vasyl, I'm 21. I build digital products. ",
      heading2: 'My journey began with commercial WordPress development, but now my absolute focus is building complex interfaces in the modern React ecosystem.',
      features: [
        {
          subtitle: '01 / Background',
          title: 'Software Engineering',
          desc: 'Earned a degree at Yuriy Fedkovych Chernivtsi National University. I understand how code works under the hood, not just at the level of visual components.'
        },
        {
          subtitle: '02 / Approach',
          title: 'AI-Assisted',
          desc: 'I synchronize my knowledge with the capabilities of artificial intelligence. I use AI for architectural decisions, refactoring, and continuous learning.'
        },
        {
          subtitle: '03 / Mindset',
          title: 'Adaptability',
          desc: 'English level B1-B2. Able to quickly grasp new technology stacks. Ready to integrate into a team and master any tool required for the project.'
        }
      ]
    },
    stack: {
      titleLine1: 'Stack &',
      titleLine2: 'Tools.',
      desc: 'From architecture to micro-animations. I combine reliable core technologies with modern React ecosystem tools to achieve maximum performance.',
      categories: {
        ecosystem: 'Ecosystem',
        language: 'Language',
        styling: 'Styling',
        animation: 'Animation',
        commercial: 'Commercial'
      }
    },
    work: {
      title: 'Featured Work.',
      desc: 'My practice and development. From the architecture of modern React applications to solving real business problems in a commercial environment.',
      projects: [
        {
          title: 'Editorial Portfolio',
          role: 'Frontend Engineer / Designer',
          desc: 'Development of this premium portfolio. Focus on high-performance animations, cinematic scrolling, and strict typing. Demonstrates a deep understanding of the modern React ecosystem and component-driven approach.'
        },
        {
          title: 'Commercial CMS Development',
          role: 'WordPress Developer',
          desc: '5 months of practical commercial experience. Creation, setup, and maintenance of websites. Deep understanding of web page structure, plugin management, and implementing custom solutions using HTML/CSS/JS.'
        }
      ]
    },
    contact: {
      next: "What's Next?",
      titleLine1: "Let's build",
      titleLine2: 'the future.',
      btn: 'Get in touch',
      copyright: 'Vasyl Lypka. All rights reserved.'
    }
  }
};

type Language = 'uk' | 'en';
type LanguageContextType = {
  lang: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.uk;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getStoredLanguage = (): Language => {
  const storedLanguage = localStorage.getItem('portfolio-language');
  return storedLanguage === 'en' ? 'en' : 'uk';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLanguage] = useState<Language>(getStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('portfolio-language', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
