import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  Activity, 
  PlusCircle, 
  AlignCenter, 
  Zap 
} from 'lucide-react';

const iconMap = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  activity: Activity,
  'plus-circle': PlusCircle,
  'align-center': AlignCenter,
  zap: Zap
};

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    price: string;
    description: string;
    duration: string;
    icon: keyof typeof iconMap;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Stethoscope;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-sky-100 rounded-lg">
          <IconComponent className="h-8 w-8 text-sky-600" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-sky-600">{service.price}</div>
          <div className="text-sm text-gray-500">{service.duration}</div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.name}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
      
      <button className="w-full mt-6 bg-sky-600 text-white py-3 px-4 rounded-lg hover:bg-sky-700 transition-colors duration-200 font-medium">
        Book This Service
      </button>
    </div>
  );
};

export default ServiceCard;