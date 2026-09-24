# Vasyl Lypka — Frontend Portfolio

Персональне портфоліо Василя Липки на React 19, TypeScript і Vite. Інтерфейс має українську та англійську мови, світлу й темну теми, адаптивну навігацію та анімації з підтримкою `prefers-reduced-motion`.

## Локальний запуск

Потрібен Node.js, сумісний з Vite 8 (Node.js 20.19+ або 22.12+).

```powershell
cd D:\portfolio\portfolio-editorial
npm ci
npm run dev
```

Відкрийте адресу, яку покаже Vite (зазвичай `http://localhost:5173/`).

## Перевірки

```powershell
npm run lint
npm run build
npm audit
```

`npm run build` виконує перевірку TypeScript і збирає сайт у `dist/`. Для локальної перевірки production-збірки: `npm run preview`.

## Структура

- `src/content/copy.ts` — тексти UK/EN.
- `src/data/projects.ts` — типізовані дані робіт і їхні посилання.
- `src/data/site.ts` — підтверджені контакти та URL портфоліо.
- `src/lib/motion.ts` — спільні параметри анімації.
- `src/components/` — секції, навігація та перемикачі.
- `src/index.css` — токени тем, типографіка та адаптивна дизайн-система.
- `public/social-preview.png` — зображення для Open Graph.

## Оновлення контенту

WordPress-практика представлена типографічною композицією без фото реальних клієнтських сайтів. Публічних посилань на ці проєкти в початковому репозиторії не було, тому вони не додані. Особисті факти та контакти змінюйте у `src/content/copy.ts` і `src/data/site.ts`.

Сайт використовує локально встановлені open-source шрифти Oswald, Manrope й IBM Plex Mono. URL наявного розгортання Vercel вказано в метаданих Open Graph та `src/data/site.ts`.
