import React from 'react';
import resumePDF from '../assets/my-documents/Badr_Ribzat_Resume.pdf';

const Contact = () => {
  return (
    <section id="contact" className="p-8 md:p-12 bg-gray-900 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8"><i className="fas fa-envelope mr-2"></i>Contact Me</h2>
      <p className="text-xl md:text-2xl mb-4"><i className="fas fa-at mr-2"></i>Email: <a href="mailto:badrribzat@gmail.com" className="hover:text-blue-400">badrribzat@gmail.com</a></p>
      <p className="text-xl md:text-2xl mb-4"><i className="fab fa-github mr-2"></i>GitHub: <a href="https://github.com/BadrRibzat" className="hover:text-blue-400">github.com/BadrRibzat</a></p>
      <p className="text-xl md:text-2xl mb-4"><i className="fab fa-linkedin mr-2"></i>LinkedIn: <a href="https://www.linkedin.com/in/badr-ribzat14121990/" className="hover:text-blue-400">linkedin.com/in/badr-ribzat14121990</a></p>
      <p className="text-xl md:text-2xl"><a href={resumePDF} download className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"><i className="fas fa-download mr-2"></i>Download Resume</a></p>
    </section>
  );
};

export default Contact;
