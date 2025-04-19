import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: "fas fa-code",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Bash", level: 75 }
      ]
    },
    {
      name: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Flask", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Microservices", level: 75 }
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: "fas fa-cloud",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 }
      ]
    },
    {
      name: "Databases",
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Redis", level: 70 }
      ]
    },
    {
      name: "Frontend",
      icon: "fas fa-paint-brush",
      skills: [
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      name: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <i className="fas fa-code mr-2 text-indigo-600"></i>
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-2xl mr-3 text-indigo-600 dark:text-indigo-400`}></i>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{category.name}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
