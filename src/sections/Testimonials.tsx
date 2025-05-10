'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Client A',
    role: 'Law Student',
    project: 'Multilingual Translator Portfolio',
    quote: 'Badr delivered an exceptional multilingual portfolio that perfectly showcased my translation services. His attention to detail and ability to implement internationalization across four languages was impressive.',
  },
  {
    name: 'Client B',
    role: 'Tech Startup Founder',
    project: 'Chatbot Assistant',
    quote: 'Working with Badr on our AI chatbot was a game-changer. His expertise in NLP and full-stack development resulted in a user-friendly, efficient solution that exceeded our expectations.',
  },
  {
    name: 'Mentor C',
    role: 'ALX Program Instructor',
    project: 'ALX Software Engineering Program',
    quote: 'Badr’s dedication to mastering full-stack development and AI technologies during the ALX program was outstanding. His projects demonstrated creativity and technical excellence.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground dark:text-gray-100 mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
            Feedback from clients and collaborators who have worked with me on various projects worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card dark:bg-gray-800 border dark:border-gray-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Quote className="h-6 w-6 text-primary dark:text-primary-dark" />
                    <div>
                      <h4 className="text-lg font-semibold text-foreground dark:text-gray-100">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-gray-300 mb-4">{testimonial.quote}</p>
                  <p className="text-sm font-medium text-foreground dark:text-gray-100">
                    Project: {testimonial.project}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
