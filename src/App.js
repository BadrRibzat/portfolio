import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Resume />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
