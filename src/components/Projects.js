import React from 'react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "IT Learning Platform API",
      description: "A comprehensive backend API for an educational platform with JWT authentication, documentation, and health monitoring.",
      technologies: ["Python", "FastAPI", "MongoDB", "Docker"],
      links: [
        { type: "live", url: "https://it-learn-backend.onrender.com" },
        { type: "docs", url: "https://it-learn-backend.onrender.com/docs" },
        { type: "code", url: "https://github.com/BadrRibzat/project_api" }
      ],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Chatbot Assistant",
      description: "AI-powered chatbot with natural language processing capabilities for educational purposes.",
      technologies: ["Python", "NLTK", "Flask", "JavaScript"],
      links: [
        { type: "code", url: "https://github.com/BadrRibzat/Chatbot-Assistant" }
      ],
      icon: "fas fa-robot"
    }
  ];

  const learningProjects = [
    {
      title: "System Engineering & DevOps",
      description: "Collection of scripts and projects covering Linux administration, shell scripting, and DevOps practices.",
      technologies: ["Bash", "Python", "Linux", "CI/CD"],
      links: [
        { type: "code", url: "https://github.com/BadrRibzat/alx-system_engineering-devops" }
      ],
      icon: "fas fa-server"
    },
    {
      title: "Tech Learning Hub",
      description: "Consolidated repository of my learning journey across multiple technologies.",
      technologies: ["Python", "JavaScript", "SQL", "HTML/CSS"],
      links: [
        { type: "code", url: "https://github.com/BadrRibzat/Tech-Learn" }
      ],
      icon: "fas fa-book-open"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <i className="fas fa-project-diagram mr-2 text-indigo-600"></i>
          My Projects
        </h2>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300 border-b pb-2">
            <i className="fas fa-star mr-2 text-yellow-500"></i>
            Featured Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i className={`${project.icon} text-2xl mr-3 text-indigo-600 dark:text-indigo-400`}></i>
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-md ${
                          link.type === 'live' 
                            ? 'bg-green-600 hover:bg-green-700 text-white'
                            : link.type === 'docs'
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                        }`}
                      >
                        <i className={`mr-2 ${
                          link.type === 'live' ? 'fas fa-external-link-alt' :
                          link.type === 'docs' ? 'fas fa-book' : 'fab fa-github'
                        }`}></i>
                        {link.type === 'live' ? 'Live Demo' : 
                         link.type === 'docs' ? 'API Docs' : 'View Code'}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-300 border-b pb-2">
            <i className="fas fa-graduation-cap mr-2 text-blue-500"></i>
            Learning & Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <i className={`${project.icon} text-xl mr-3 text-blue-600 dark:text-blue-400`}></i>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.links[0].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center"
                >
                  <i className="fab fa-github mr-1"></i> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
