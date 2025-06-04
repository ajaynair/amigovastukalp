
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex-shrink-0 mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-slate-300 text-sm flex-grow">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
