import React from 'react';
import { User, Calendar, Phone, MapPin, AlertCircle } from 'lucide-react';

interface PatientCardProps {
  patient: {
    id: number;
    name: string;
    age: number;
    assignedNurse: string;
    nurseId: number;
    currentCondition: string;
    status: string;
    lastVisit: string;
    nextAppointment: string;
    phone: string;
    email: string;
    address: string;
    medicalHistory: string[];
    allergies: string;
  };
}

const PatientCard: React.FC<PatientCardProps> = ({ patient }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800';
      case 'treatment in progress':
        return 'bg-amber-100 text-amber-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'monitoring':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (condition: string) => {
    if (condition.toLowerCase().includes('emergency') || condition.toLowerCase().includes('severe')) {
      return 'text-red-600';
    } else if (condition.toLowerCase().includes('treatment') || condition.toLowerCase().includes('requires')) {
      return 'text-amber-600';
    }
    return 'text-emerald-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-sky-100 rounded-full">
            <User className="h-6 w-6 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{patient.name}</h3>
            <p className="text-gray-600">Age: {patient.age}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(patient.status)}`}>
          {patient.status}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <User className="h-4 w-4 mr-2 text-sky-600" />
          <span>Assigned to: <span className="font-medium">{patient.assignedNurse}</span></span>
        </div>
        
        <div className="flex items-start text-sm">
          <AlertCircle className={`h-4 w-4 mr-2 mt-0.5 ${getPriorityColor(patient.currentCondition)}`} />
          <span className="text-gray-700">{patient.currentCondition}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-sky-600" />
          <span>Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
          <span>Next: {new Date(patient.nextAppointment).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-sky-600" />
            <span>{patient.phone}</span>
          </div>
          <button className="text-sky-600 hover:text-sky-700 font-medium">
            View Details
          </button>
        </div>
      </div>

      {patient.allergies !== 'None known' && (
        <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
          <span className="text-xs text-red-800 font-medium">
            ⚠️ Allergies: {patient.allergies}
          </span>
        </div>
      )}
    </div>
  );
};

export default PatientCard;