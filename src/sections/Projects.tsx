'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

const projects = [
  {
    title: 'Chatbot Assistant',
    description: 'A ChatGPT-like conversational AI with authentication system, demonstrating NLP capabilities and full-stack implementation.',
    tags: ['AI/ML', 'React', 'Python', 'NLP'],
    links: {
      live: 'https://chatbot-assistant-frontend-ifu8ftreo-badr-ribzat-project.vercel.app/',
      backend: 'https://chatbot-backend-badr.fly.dev/',
      code: 'https://github.com/BadrRibzat/Chatbot-Assistant'
    },
    image: '/images/chatbot-preview.png'
  },
  {
    title: 'Biomedical Detection Platform',
    description: 'Health engineering solution for institutions with comprehensive API documentation and health check endpoints.',
    tags: ['React', 'Python', 'Healthcare', 'REST API'],
    links: {
      live: 'https://biomedical-frontend.vercel.app',
      backend: 'https://biomedical-detection.fly.dev/',
      code: 'https://github.com/BadrRibzat/biomediacl'
    },
    image: '/images/biomedical-preview.png'
  },
  {
    title: 'AirBnB Clone (v4)',
    description: 'Complete lodging platform clone with progressively complex implementations across versions.',
    tags: ['Full-Stack', 'Python', 'JavaScript', 'MySQL'],
    links: {
      code: 'https://github.com/BadrRibzat/AirBnB_clone_v4'
    },
    image: '/images/airbnb-preview.png'
  },
  {
    title: 'International Translator Portfolio',
    description: 'Multilingual portfolio implementation showcasing language service capabilities.',
    tags: ['React', 'i18n', 'Translation'],
    links: {
      live: 'https://badrribzat.github.io/ayman/',
      code: 'https://github.com/BadrRibzat/ayman'
    },
    image: '/images/translator-preview.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects showcasing my full-stack development and AI expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
