import { Badge } from 'lucide-react';
import { Service } from '@/types';

export default function ServiceTier({ service }: { service: Service }) {
  return (
    <div className={`relative h-full ${service.popular ? 'border-2 border-indigo-500' : 'border border-gray-200'} rounded-xl bg-white overflow-hidden`}>
      {service.popular && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="mb-6">
          <span className="text-3xl font-bold text-gray-900">{service.price}</span>
          {service.price.includes('/hr') && (
            <span className="text-gray-500"> or project-based</span>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {service.features.map((feature: string) => (
            <li key={feature} className="flex items-start">
              <Badge className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full py-3 px-4 rounded-lg font-medium ${service.popular ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} transition-colors`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
