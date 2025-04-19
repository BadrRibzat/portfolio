import React from 'react';
import resumePDF from '../assets/my-documents/BadrRibzat.pdf';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-8 bg-gray-900 dark:bg-gray-950 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          <i className="fas fa-envelope mr-2 text-indigo-400"></i>
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
          <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
              <i className="fas fa-phone-alt mr-2"></i>
              Phone
            </h3>
            <p className="text-lg">
              <a href="tel:+212627764176" className="hover:text-indigo-300 transition-colors">
                +212 627-764176 (WhatsApp)
              </a>
            </p>
            <p className="text-lg mt-2">
              <a href="tel:+212622200190" className="hover:text-indigo-300 transition-colors">
                +212 622-200190
              </a>
            </p>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
              <i className="fas fa-at mr-2"></i>
              Email
            </h3>
            <p className="text-lg">
              <a href="mailto:badrribzat@gmail.com" className="hover:text-indigo-300 transition-colors">
                badrribzat@gmail.com
              </a>
            </p>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
              <i className="fas fa-globe mr-2"></i>
              Online
            </h3>
            <p className="text-lg mb-2">
              <i className="fab fa-github mr-2"></i>
              <a href="https://github.com/BadrRibzat" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                github.com/BadrRibzat
              </a>
            </p>
            <p className="text-lg">
              <i className="fab fa-linkedin mr-2"></i>
              <a href="https://www.linkedin.com/in/badr-ribzat14121990/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                linkedin.com/in/badr-ribzat14121990
              </a>
            </p>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
              <i className="fas fa-briefcase mr-2"></i>
              Portfolio
            </h3>
            <p className="text-lg">
              <a href="https://badrribzat.github.io/portfolio/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
                badrribzat.github.io/portfolio
              </a>
            </p>
          </div>
        </div>
        
        <a 
          href={resumePDF} 
          download="BadrRibzat.pdf"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium py-3 px-8 rounded-lg transition-colors duration-300"
        >
          <i className="fas fa-download mr-2"></i>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
