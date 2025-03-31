import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8 md:p-12 bg-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"><i className="fas fa-project-diagram mr-2"></i>Projects</h2>
      
      <h3 className="text-3xl font-semibold text-gray-700 mb-4"><i className="fas fa-globe mr-2"></i>Deployed Projects</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <li className="bg-white p-4 rounded-lg shadow-md text-lg">
          <i className="fas fa-server mr-2"></i>Project API - <a href="https://badrribzat.github.io/project_api/" className="text-blue-600 hover:underline">Live</a> | <a href="https://github.com/BadrRibzat/project_api" className="text-blue-600 hover:underline">GitHub</a>
        </li>
        <li className="bg-white p-4 rounded-lg shadow-md text-lg">
          <i className="fas fa-server mr-2"></i>IT Learn Backend - <a href="https://it-learn-backend.onrender.com" className="text-blue-600 hover:underline">Live</a> | <a href="https://it-learn-backend.onrender.com/docs" className="text-blue-600 hover:underline">Docs</a> | <a href="https://it-learn-backend.onrender.com/healthcheck" className="text-blue-600 hover:underline">Healthcheck</a>
        </li>
      </ul>

      <h3 className="text-3xl font-semibold text-gray-700 mb-4"><i className="fas fa-book mr-2"></i>Learning Projects</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <li className="bg-white p-4 rounded-lg shadow-md text-lg"><i className="fas fa-clone mr-2"></i>AirBnB Clone (Full Stack) - <a href="https://github.com/BadrRibzat/AirBnB_clone_v2" className="text-blue-600 hover:underline">GitHub</a></li>
        <li className="bg-white p-4 rounded-lg shadow-md text-lg"><i className="fas fa-tools mr-2"></i>System Engineering & DevOps - <a href="https://github.com/BadrRibzat/alx-system_engineering-devops" className="text-blue-600 hover:underline">GitHub</a></li>
      </ul>

      <h3 className="text-3xl font-semibold text-gray-700 mb-4"><i className="fas fa-user mr-2"></i>Personal Projects</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="bg-white p-4 rounded-lg shadow-md text-lg"><i className="fas fa-language mr-2"></i>English Learning Platform - <a href="https://github.com/BadrRibzat/English-Learning-App" className="text-blue-600 hover:underline">GitHub</a></li>
        <li className="bg-white p-4 rounded-lg shadow-md text-lg"><i className="fas fa-book-open mr-2"></i>Tech Learning Repository - <a href="https://github.com/BadrRibzat/Tech-Learn" className="text-blue-600 hover:underline">GitHub</a></li>
      </ul>
    </section>
  );
};

export default Projects;
