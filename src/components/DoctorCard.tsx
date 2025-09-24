import React from 'react';
import { Mail, Phone, Award, GraduationCap } from 'lucide-react';

interface DoctorCardProps {
  doctor: {
    id: number;
    name: string;
    title: string;
    specialization: string;
    experience: string;
    education: string;
    bio: string;
    image: string;
    achievements: string[];
    email: string;
    phone: string;
  };
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img 
            src={doctor.image} 
            alt={doctor.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="md:w-2/3 p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{doctor.name}</h2>
              <h3 className="text-xl text-sky-600 font-semibold mb-1">{doctor.title}</h3>
              <p className="text-gray-600">{doctor.specialization}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                {doctor.experience}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <GraduationCap className="h-5 w-5 text-sky-600 mr-2" />
              <span className="text-gray-700 font-medium">Education</span>
            </div>
            <p className="text-gray-600 ml-7">{doctor.education}</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{doctor.bio}</p>

          {/* Achievements */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-sky-600 mr-2" />
              <span className="text-gray-700 font-medium">Achievements</span>
            </div>
            <ul className="space-y-2 ml-7">
              {doctor.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-600 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-3"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`mailto:${doctor.email}`} 
              className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              {doctor.email}
            </a>
            <a 
              href={`tel:${doctor.phone}`} 
              className="flex items-center text-sky-600 hover:text-sky-700 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              {doctor.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;