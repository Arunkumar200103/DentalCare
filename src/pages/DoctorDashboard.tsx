import React, { useState } from 'react';
import { reports } from '../data/reports';
import { patients } from '../data/patients';
import { nurses } from '../data/nurses';
import { 
  FileText, 
  Users, 
  Activity, 
  CheckCircle, 
  Clock,
  AlertTriangle,
  Eye,
  MessageSquare,
  Calendar 
} from 'lucide-react';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('reports');
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [feedback, setFeedback] = useState('');

  const pendingReports = reports.filter(r => r.status === 'Pending Review');
  const approvedReports = reports.filter(r => r.status === 'Approved');
  const highPriorityReports = reports.filter(r => r.priority === 'High');

  const handleApproveReport = (reportId: number) => {
    // In a real app, this would make an API call
    console.log(`Approving report ${reportId} with feedback:`, feedback);
    setSelectedReport(null);
    setFeedback('');
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-amber-100 text-amber-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-100 text-emerald-800';
      case 'Pending Review':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Doctor <span className="text-sky-600">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600">Review reports and manage patient care</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-amber-600">{pendingReports.length}</div>
                <div className="text-sm text-gray-600">Pending Reports</div>
              </div>
              <div className="p-3 bg-amber-100 rounded-full">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-emerald-600">{approvedReports.length}</div>
                <div className="text-sm text-gray-600">Approved Reports</div>
              </div>
              <div className="p-3 bg-emerald-100 rounded-full">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-600">{highPriorityReports.length}</div>
                <div className="text-sm text-gray-600">High Priority</div>
              </div>
              <div className="p-3 bg-red-100 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-sky-600">{patients.length}</div>
                <div className="text-sm text-gray-600">Total Patients</div>
              </div>
              <div className="p-3 bg-sky-100 rounded-full">
                <Users className="h-6 w-6 text-sky-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('reports')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'reports'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Reports Review
              </button>
              <button
                onClick={() => setActiveTab('patients')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'patients'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Patient Overview
              </button>
              <button
                onClick={() => setActiveTab('staff')}
                className={`py-4 px-6 border-b-2 font-medium text-sm ${
                  activeTab === 'staff'
                    ? 'border-sky-500 text-sky-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Staff Performance
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'reports' && (
          <div className="space-y-8">
            {/* Pending Reports */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports Pending Review</h2>
              {pendingReports.length > 0 ? (
                <div className="space-y-4">
                  {pendingReports.map((report) => (
                    <div key={report.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{report.patientName}</h3>
                          <p className="text-gray-600">Submitted by {report.nurseName}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(report.date).toLocaleDateString()} at {report.time}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(report.priority)}`}>
                            {report.priority} Priority
                          </span>
                          <button
                            onClick={() => setSelectedReport(report)}
                            className="inline-flex items-center px-3 py-1 bg-sky-600 text-white text-sm rounded-md hover:bg-sky-700 transition-colors"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Review
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Observations</h4>
                          <p className="text-gray-600 text-sm line-clamp-3">{report.observations}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 mb-2">Findings</h4>
                          <p className="text-gray-600 text-sm line-clamp-3">{report.findings}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-medium text-gray-800 mb-2">Recommendations</h4>
                        <p className="text-gray-600 text-sm">{report.recommendations}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">All Reports Reviewed</h3>
                  <p className="text-gray-600">No reports are pending review at this time</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Status Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patients.map((patient) => (
                  <div key={patient.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800">{patient.name}</h3>
                        <p className="text-sm text-gray-600">Age: {patient.age}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        patient.status === 'Active' 
                          ? 'bg-green-100 text-green-800'
                          : patient.status === 'Treatment in Progress'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {patient.status}
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-600">
                        <strong>Condition:</strong> {patient.currentCondition}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Nurse:</strong> {patient.assignedNurse}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      Next: {new Date(patient.nextAppointment).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'staff' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Staff Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nurses.map((nurse) => {
                  const nurseReports = reports.filter(r => r.nurseId === nurse.id);
                  const nursePatients = patients.filter(p => p.nurseId === nurse.id);
                  
                  return (
                    <div key={nurse.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <img
                          src={nurse.image}
                          alt={nurse.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800">{nurse.name}</h3>
                          <p className="text-sm text-gray-600">{nurse.title}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-sky-600">{nursePatients.length}</div>
                          <div className="text-sm text-gray-600">Assigned Patients</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-emerald-600">{nurseReports.length}</div>
                          <div className="text-sm text-gray-600">Reports Submitted</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Report Detail Modal */}
        {selectedReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-screen overflow-y-auto p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedReport.patientName}</h2>
                  <p className="text-gray-600">Report by {selectedReport.nurseName}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(selectedReport.date).toLocaleDateString()} at {selectedReport.time}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Patient Observations</h3>
                  <p className="text-gray-600">{selectedReport.observations}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Blood Pressure</h4>
                    <p className="text-gray-600">{selectedReport.vitals.bloodPressure}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Temperature</h4>
                    <p className="text-gray-600">{selectedReport.vitals.temperature}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Pulse</h4>
                    <p className="text-gray-600">{selectedReport.vitals.pulse}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Procedures Performed</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedReport.procedures.map((procedure: string, index: number) => (
                      <li key={index}>{procedure}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Clinical Findings</h3>
                  <p className="text-gray-600">{selectedReport.findings}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Treatment Recommendations</h3>
                  <p className="text-gray-600">{selectedReport.recommendations}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-2" />
                    Doctor Feedback
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
                    placeholder="Add your feedback and instructions..."
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleApproveReport(selectedReport.id)}
                    className="flex-1 bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    Approve Report
                  </button>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDashboard;