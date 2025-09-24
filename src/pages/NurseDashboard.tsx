import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReportForm from '../components/ReportForm';
import PatientCard from '../components/PatientCard';
import { patients } from '../data/patients';
import { reports } from '../data/reports';
import { 
  Users, 
  FileText, 
  Activity, 
  Plus,
  Calendar,
  Clock,
  AlertTriangle 
} from 'lucide-react';

const NurseDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock nurse data - would come from authentication
  const currentNurse = {
    id: 1,
    name: "Emily Rodriguez",
    title: "Senior Dental Assistant"
  };

  const assignedPatients = patients.filter(p => p.nurseId === currentNurse.id);
  const nurseReports = reports.filter(r => r.nurseId === currentNurse.id);
  
  const getPatientsPriorityCount = () => {
    const high = assignedPatients.filter(p => 
      p.currentCondition.toLowerCase().includes('emergency') || 
      p.currentCondition.toLowerCase().includes('severe') ||
      p.currentCondition.toLowerCase().includes('urgent')
    ).length;
    
    const medium = assignedPatients.filter(p => 
      p.currentCondition.toLowerCase().includes('treatment') || 
      p.currentCondition.toLowerCase().includes('requires')
    ).length;
    
    return { high, medium, low: assignedPatients.length - high - medium };
  };

  const priorityCounts = getPatientsPriorityCount();

  const todaysSchedule = [
    { time: '9:00 AM', patient: 'John Smith', procedure: 'General Checkup', status: 'upcoming' },
    { time: '10:30 AM', patient: 'Robert Davis', procedure: 'Gum Treatment', status: 'upcoming' },
    { time: '2:00 PM', patient: 'Maria Garcia', procedure: 'Follow-up', status: 'completed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome, <span className="text-sky-600">{currentNurse.name}</span>
          </h1>
          <p className="text-xl text-gray-600">{currentNurse.title} Dashboard</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800">{assignedPatients.length}</div>
                <div className="text-sm text-gray-600">Assigned Patients</div>
              </div>
              <div className="p-3 bg-sky-100 rounded-full">
                <Users className="h-6 w-6 text-sky-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-emerald-600">{nurseReports.length}</div>
                <div className="text-sm text-gray-600">Reports Submitted</div>
              </div>
              <div className="p-3 bg-emerald-100 rounded-full">
                <FileText className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">{priorityCounts.high}</div>
                <div className="text-sm text-gray-600">High Priority Cases</div>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Today's Appointments</div>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'patients'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                My Patients
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Submit Report
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Today's Schedule</h2>
              <div className="space-y-4">
                {todaysSchedule.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-sky-600" />
                        <span className="font-medium text-gray-800">{appointment.time}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{appointment.patient}</div>
                        <div className="text-sm text-gray-600">{appointment.procedure}</div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      appointment.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Priority Patients */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Priority Patients</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">High Priority</h3>
                  <div className="text-2xl font-bold text-red-600 mb-2">{priorityCounts.high}</div>
                  <p className="text-sm text-red-700">Require immediate attention</p>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">Medium Priority</h3>
                  <div className="text-2xl font-bold text-amber-600 mb-2">{priorityCounts.medium}</div>
                  <p className="text-sm text-amber-700">Treatment in progress</p>
                </div>
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <h3 className="font-semibold text-emerald-800 mb-2">Low Priority</h3>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">{priorityCounts.low}</div>
                  <p className="text-sm text-emerald-700">Routine care</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">My Assigned Patients</h2>
              <Link
                to="/patients"
                className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                View All Patients
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {assignedPatients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">Submit Patient Report</h2>
            <ReportForm />
            
            {/* Recent Reports */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Reports</h3>
              <div className="space-y-4">
                {nurseReports.slice(0, 3).map((report) => (
                  <div key={report.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-800">{report.patientName}</h4>
                        <p className="text-sm text-gray-600">
                          {new Date(report.date).toLocaleDateString()} at {report.time}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        report.status === 'Approved' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {report.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 line-clamp-2">{report.findings}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NurseDashboard;