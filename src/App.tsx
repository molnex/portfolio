import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Work from './components/Work';
import Contact from './components/Contact';
import Controls from './components/Controls';

export default function App() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-background overflow-x-hidden relative">
      <Controls /> 
      
      <Hero />
      <About />
      <Stack />
      <Work />
      <Contact />
    </main>
  );
}