// Create src/components/Resume.js for embedded viewing:
import React from 'react';
import resumePDF from '../assets/my-documents/BadrRibzat.pdf';

const Resume = () => (
  <section className="p-8">
    <iframe 
      src={resumePDF} 
      className="w-full h-screen border-2 border-gray-200"
      title="Badr Ribzat Resume"
    />
  </section>
);
export default Resume;
