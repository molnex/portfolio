import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Work from './components/Work';
import Contact from './components/Contact';
import Controls from './components/Controls';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <main>
          <Controls />
          <Hero />
          <About />
          <Stack />
          <Work />
          <Contact />
        </main>
      </LanguageProvider>
    </MotionConfig>
  );
}
