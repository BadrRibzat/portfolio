import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="p-8 md:p-12 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center"><i className="fas fa-code mr-2"></i>Technical Skills</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-terminal mr-2"></i>Programming: Python, JavaScript, SQL, HTML/CSS, C</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-layer-group mr-2"></i>Frameworks: Flask, Django</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-cogs mr-2"></i>Software Design: SOLID Principles, Microservices, REST APIs, TDD</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-database mr-2"></i>Databases: MySQL, MongoDB</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-cloud mr-2"></i>Cloud/DevOps: AWS, Docker, CI/CD Pipelines, Linux</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-tools mr-2"></i>Tools: Git, GitHub, Docker, Redis</li>
        <li className="bg-gray-100 p-4 rounded-lg shadow-md text-lg"><i className="fas fa-bullhorn mr-2"></i>Digital Marketing: SEO, Social Media Management</li>
      </ul>
    </section>
  );
};

export default Skills;
