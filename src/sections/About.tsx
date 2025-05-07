'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Briefcase, Globe, Code } from 'lucide-react';

const timeline = [
  {
    date: "2023 - Present",
    title: "Freelance Full-Stack Developer",
    description: "Building web applications and AI solutions for clients worldwide while traveling as a digital nomad.",
    icon: <Briefcase className="h-5 w-5 text-indigo-600" />
  },
  {
    date: "2022 - 2023",
    title: "ALX Software Engineering Program",
    description: "Completed intensive full-stack development training with focus on low-level programming and system engineering.",
    icon: <GraduationCap className="h-5 w-5 text-indigo-600" />
  },
  {
    date: "2021 - 2022",
    title: "Self-Taught Development Journey",
    description: "Learned web development fundamentals through online courses and personal projects.",
    icon: <Code className="h-5 w-5 text-indigo-600" />
  },
  {
    date: "Future Goals",
    title: "Worldwide Digital Nomad",
    description: "Continue building innovative solutions while exploring new cultures and environments.",
    icon: <Globe className="h-5 w-5 text-indigo-600" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-indigo text-gray-600 mb-8">
              <p>
                I'm a full-stack developer with a passion for creating innovative solutions and exploring the world as a digital nomad. 
                My journey in tech began with self-study and was accelerated through the ALX Software Engineering program.
              </p>
              <p>
                What sets me apart is my combination of technical expertise and global perspective. I've worked with clients across 
                different timezones and cultures, developing adaptability and communication skills alongside my coding abilities.
              </p>
              <p>
                When I'm not coding, you can find me exploring new cities, learning about local tech scenes, or hiking in nature 
                to recharge my creativity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flow-root"
          >
            <ul className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.title}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center ring-8 ring-white">
                          {event.icon}
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.date}
                          </p>
                          <p className="text-lg font-medium text-gray-900">
                            {event.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
