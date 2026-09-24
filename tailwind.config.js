/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        surface: 'var(--surface)',
        primary: 'var(--ink)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Manrope', 'Arial', 'sans-serif'],
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tighter: '-.04em',
        tight: '-.02em',
      }
    },
  },
  plugins: [],
}
