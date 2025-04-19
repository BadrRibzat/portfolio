import React from 'react';
import profileImage from '../assets/my-documents/me.jpg';

const Home = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 to-indigo-800 py-32 px-4 sm:px-8 text-center min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <img 
          src={profileImage} 
          alt="Badr Ribzat" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-white shadow-lg mx-auto object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Badr Ribzat
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-100 mb-6">
          Full Stack Developer | API Specialist | DevOps Enthusiast
        </h2>
        
        <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          I build scalable web applications and robust APIs with clean, maintainable code. 
          Passionate about solving complex problems through technology and continuous learning.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center"
          >
            <i className="fas fa-project-diagram mr-2"></i> View My Work
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-300 flex items-center"
          >
            <i className="fas fa-paper-plane mr-2"></i> Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#skills" 
          className="text-white animate-bounce flex flex-col items-center"
        >
          <span className="text-sm mb-2">Explore More</span>
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
