// src/app/page.tsx
import Hero from '@/sections/Hero';
import Projects from '@/sections/Projects';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Certifications from '@/sections/Certifications';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <About />
      <Certifications />
      <Contact />
    </>
  );
}
