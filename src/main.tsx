import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/oswald/latin-700.css'
import '@fontsource/oswald/cyrillic-700.css'
import '@fontsource/oswald/cyrillic-ext-700.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/manrope/cyrillic-400.css'
import '@fontsource/manrope/cyrillic-600.css'
import '@fontsource/manrope/cyrillic-ext-400.css'
import '@fontsource/manrope/cyrillic-ext-600.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/cyrillic-500.css'
import '@fontsource/ibm-plex-mono/cyrillic-ext-500.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
