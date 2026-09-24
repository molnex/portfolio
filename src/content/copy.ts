export type Language = 'uk' | 'en';
export type SectionId = 'about' | 'stack' | 'work' | 'contact';

type SiteCopy = {
  metaDescription: string;
  skip: string; navLabel: string; menuOpen: string; menuClose: string; themeLight: string; themeDark: string; scrollTop: string;
  nav: { id: SectionId; label: string }[];
  hero: { line1: string; line2: string; intro: string; body: string; viewWork: string; contact: string; scroll: string; availability: string; craft: string };
  about: { label: string; title: string; lead: string; detail: string; facts: { label: string; title: string; body: string }[] };
  stack: { label: string; title: string; intro: string; categories: Record<'ecosystem' | 'language' | 'styling' | 'animation' | 'commercial', string> };
  work: { label: string; title: string; intro: string; live: string; source: string; imageNeeded: string; imageNote: string };
  contact: { label: string; title1: string; title2: string; intro: string; emailAction: string; copyright: string; backTop: string; socialLabel: string };
};

export const copy: Record<Language, SiteCopy> = {
  uk: {
    metaDescription: 'Василь Липка — фронтенд-розробник. React, TypeScript, адаптивні інтерфейси й продумана анімація.',
    skip: 'Перейти до вмісту', navLabel: 'Основна навігація', menuOpen: 'Відкрити меню', menuClose: 'Закрити меню',
    themeLight: 'Увімкнути світлу тему', themeDark: 'Увімкнути темну тему', scrollTop: 'До початку сторінки',
    nav: [{ id: 'about', label: 'Про мене' }, { id: 'stack', label: 'Стек' }, { id: 'work', label: 'Проєкти' }, { id: 'contact', label: 'Контакти' }],
    hero: {
      line1: 'Фронтенд', line2: 'інженер.', intro: 'Василь Липка / frontend developer',
      body: 'Створюю виразні цифрові інтерфейси, де дизайн, код і рух працюють разом.',
      viewWork: 'Дивитися проєкти', contact: 'Написати мені', scroll: 'Гортайте далі',
      availability: 'Відкритий до пропозицій', craft: 'Дизайн × код × взаємодія',
    },
    about: {
      label: '01 / Про мене', title: 'Зміст має форму.',
      lead: 'Мене звати Василь, мені 21 рік. Створюю цифрові продукти та інтерфейси, якими зручно користуватися.',
      detail: 'Мій шлях почався з комерційної розробки на WordPress. Зараз зосереджуюся на складніших інтерфейсах у сучасній екосистемі React.',
      facts: [
        { label: '01 / Освіта', title: 'Інженерія ПЗ', body: 'Здобув профільну освіту в Чернівецькому національному університеті ім. Ю. Федьковича.' },
        { label: '02 / Підхід', title: 'Інструменти ШІ', body: 'Використовую ШІ для пошуку рішень, рефакторингу та безперервного навчання.' },
        { label: '03 / Комунікація', title: 'Адаптивність', body: 'Англійська на рівні B1–B2. Швидко освоюю нові інструменти та підходи.' },
      ],
    },
    stack: { label: '02 / Інструменти', title: 'Технології в роботі.', intro: 'Мій робочий набір для побудови адаптивних інтерфейсів — від структури до руху.', categories: { ecosystem: 'Екосистема', language: 'Мова', styling: 'Стилі', animation: 'Анімація', commercial: 'CMS' } },
    work: { label: '03 / Роботи', title: 'Вибрані проєкти.', intro: 'Особистий продукт і комерційна практика. Кожна робота — нагода поєднати увагу до деталей із чистою реалізацією.', live: 'Відкрити сайт', source: 'Переглянути код', imageNeeded: 'Зображення проєкту', imageNote: 'Додайте власний скриншот або дозволений до публікації кейс.' },
    contact: { label: '04 / Контакт', title1: 'Є ідея?', title2: 'Поговорімо.', intro: 'Відкритий до frontend-ролей і цікавих цифрових продуктів.', emailAction: 'Написати листа', copyright: 'Василь Липка. Всі права захищено.', backTop: 'На початок', socialLabel: 'Соціальні мережі' },
  },
  en: {
    metaDescription: 'Vasyl Lypka — frontend developer building responsive React and TypeScript interfaces with thoughtful motion.',
    skip: 'Skip to content', navLabel: 'Primary navigation', menuOpen: 'Open menu', menuClose: 'Close menu',
    themeLight: 'Switch to light theme', themeDark: 'Switch to dark theme', scrollTop: 'Back to top',
    nav: [{ id: 'about', label: 'About' }, { id: 'stack', label: 'Stack' }, { id: 'work', label: 'Work' }, { id: 'contact', label: 'Contact' }],
    hero: {
      line1: 'Frontend', line2: 'engineer.', intro: 'Vasyl Lypka / frontend developer',
      body: 'I build expressive digital interfaces where design, code and motion work together.',
      viewWork: 'Explore work', contact: 'Get in touch', scroll: 'Scroll to explore',
      availability: 'Open to opportunities', craft: 'Design × code × interaction',
    },
    about: {
      label: '01 / About', title: 'Form follows purpose.',
      lead: "I'm Vasyl, 21. I create digital products and interfaces that feel good to use.",
      detail: 'I started with commercial WordPress development. Today my focus is on more complex interfaces in the modern React ecosystem.',
      facts: [
        { label: '01 / Education', title: 'Software engineering', body: 'I earned a degree at Yuriy Fedkovych Chernivtsi National University.' },
        { label: '02 / Approach', title: 'AI tools', body: 'I use AI to explore solutions, refactor code and keep learning.' },
        { label: '03 / Communication', title: 'Adaptability', body: 'English level B1–B2. I learn new tools and approaches quickly.' },
      ],
    },
    stack: { label: '02 / Toolkit', title: 'Tools of the trade.', intro: 'The tools I use to build responsive interfaces, from structure to motion.', categories: { ecosystem: 'Ecosystem', language: 'Language', styling: 'Styling', animation: 'Motion', commercial: 'CMS' } },
    work: { label: '03 / Work', title: 'Selected work.', intro: 'A personal product and commercial practice. Each piece is a chance to pair careful details with clean implementation.', live: 'Visit website', source: 'View source', imageNeeded: 'Project imagery', imageNote: 'Add your own screenshot or a case study approved for publication.' },
    contact: { label: '04 / Contact', title1: 'Have an idea?', title2: "Let's talk.", intro: 'Open to frontend roles and thoughtful digital products.', emailAction: 'Send an email', copyright: 'Vasyl Lypka. All rights reserved.', backTop: 'Back to top', socialLabel: 'Social links' },
  },
};
