'use client';
import { motion } from 'framer-motion';
import ServiceTier from '@/components/ServiceTier';


const services = [
  {
    title: "Custom Web Development",
    description: "Complete website development tailored to your business needs.",
    price: "$50-$150/hr",
    features: [
      "Responsive design",
      "CMS implementation",
      "E-commerce solutions",
      "SEO optimization",
      "Performance tuning"
    ],
    popular: false
  },
  {
    title: "AI Integration",
    description: "Cutting-edge AI solutions for your business challenges.",
    price: "$80-$200/hr",
    features: [
      "Chatbot development",
      "Machine learning models",
      "Natural language processing",
      "Predictive analytics",
      "API integration"
    ],
    popular: true
  },
  {
    title: "Full-Stack Applications",
    description: "Complete web applications from concept to deployment.",
    price: "$5,000-$50,000/project",
    features: [
      "Custom database design",
      "RESTful API development",
      "User authentication",
      "Cloud deployment",
      "Maintenance packages"
    ],
    popular: false
  }
];

const additionalServices = [
  {
    title: "Website Audit",
    price: "$150-$500",
    description: "Comprehensive review of your existing website with actionable improvements."
  },
  {
    title: "Technical Consulting",
    price: "$100-$300/hr",
    description: "Expert advice on architecture, scaling, and technology decisions."
  },
  {
    title: "Code Review",
    price: "$200-$800",
    description: "In-depth analysis of your codebase with quality and security recommendations."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs, delivered remotely with digital nomad flexibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceTier service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div key={service.title} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-300 transition-colors">
                <h4 className="font-medium text-gray-900 mb-2">{service.title}</h4>
                <p className="text-indigo-600 font-medium mb-3">{service.price}</p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
