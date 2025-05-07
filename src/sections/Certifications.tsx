// src/sections/Certifications.tsx
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const certifications = [
  { title: 'Python Beginner', file: '/certificates/Python-Beginner.pdf' },
  { title: 'JavaScript', file: '/certificates/JavaScript.pdf' },
  // Add more from public/certificates/
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground dark:text-gray-100 mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            My professional certifications in programming, AI, and more.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card dark:bg-gray-800">
                <CardHeader>
                  <h3 className="text-lg font-bold text-foreground dark:text-gray-100">{cert.title}</h3>
                </CardHeader>
                <CardContent>
                  <a
                    href={cert.file}
                    download
                    className="text-primary dark:text-primary-dark hover:underline"
                  >
                    Download Certificate
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
