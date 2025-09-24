import React from 'react';
import { Mail, Phone, Users, Award } from 'lucide-react';

interface NurseCardProps {
  nurse: {
    id: number;
    name: string;
    title: string;
    specialization: string;
    experience: string;
    image: string;
    assignedPatients: number;
    email: string;
    phone: string;
    certifications: string[];
  };
}

const NurseCard: React.FC<NurseCardProps> = ({ nurse }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={nurse.image} 
          alt={nurse.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-emerald-600">{nurse.experience}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{nurse.name}</h3>
        <p className="text-sky-600 font-medium mb-1">{nurse.title}</p>
        <p className="text-gray-600 text-sm mb-4">{nurse.specialization}</p>

        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-sky-600 mr-2" />
            <span className="text-sm text-gray-600">Assigned Patients</span>
          </div>
          <span className="font-semibold text-sky-600">{nurse.assignedPatients}</span>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Award className="h-4 w-4 text-sky-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Certifications</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {nurse.certifications.map((cert, index) => (
              <span key={index} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <a 
            href={`mailto:${nurse.email}`} 
            className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
            {nurse.email}
          </a>
          <a 
            href={`tel:${nurse.phone}`} 
            className="flex items-center text-gray-600 hover:text-sky-600 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            {nurse.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NurseCard;