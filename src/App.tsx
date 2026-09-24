import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Work from './components/Work';
import Contact from './components/Contact';
import Header from './components/Header';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Header />
        <main id="main">
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
