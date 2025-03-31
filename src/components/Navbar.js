import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 text-white fixed w-full top-0 z-10 shadow-lg">
      <ul className="flex justify-center space-x-6 md:space-x-12">
        <li><a href="#home" className="text-xl md:text-2xl hover:text-blue-400 transition duration-300"><i className="fas fa-home mr-2"></i>Home</a></li>
        <li><a href="#skills" className="text-xl md:text-2xl hover:text-blue-400 transition duration-300"><i className="fas fa-code mr-2"></i>Skills</a></li>
        <li><a href="#projects" className="text-xl md:text-2xl hover:text-blue-400 transition duration-300"><i className="fas fa-project-diagram mr-2"></i>Projects</a></li>
        <li><a href="#certifications" className="text-xl md:text-2xl hover:text-blue-400 transition duration-300"><i className="fas fa-certificate mr-2"></i>Certifications</a></li>
        <li><a href="#contact" className="text-xl md:text-2xl hover:text-blue-400 transition duration-300"><i className="fas fa-envelope mr-2"></i>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
