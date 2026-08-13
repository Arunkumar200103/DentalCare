import React, { useState } from 'react';
import { FileText, User, Calendar, AlertTriangle } from 'lucide-react';
import { patients } from '../data/patients';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    observations: '',
    bloodPressure: '',
    temperature: '',
    pulse: '',
    procedures: '',
    findings: '',
    recommendations: '',
    priority: 'Medium'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Report submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      patientId: '',
      observations: '',
      bloodPressure: '',
      temperature: '',
      pulse: '',
      procedures: '',
      findings: '',
      recommendations: '',
      priority: 'Medium'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectedPatient = patients.find(p => p.id.toString() === formData.patientId);

  if (showSuccess) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Report Submitted!</h3>
          <p className="text-gray-600 mb-6">
            The clinical patient report has been successfully submitted for Doctor review.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Clinical Case Report</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Patient Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="h-4 w-4 inline mr-2 text-indigo-600" />
            Select Patient *
          </label>
          <select
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="">Choose a patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id.toString()}>
                {patient.name} (Age: {patient.age})
              </option>
            ))}
          </select>
        </div>

        {selectedPatient && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h3 className="font-semibold text-indigo-800 mb-2">Patient Case Summary</h3>
            <div className="text-sm text-indigo-700 space-y-1">
              <p><strong>Current Specialization Category:</strong> {selectedPatient.currentCondition}</p>
              <p><strong>Known Allergies/Sensitivities:</strong> {selectedPatient.allergies}</p>
              <p><strong>Last Session Date:</strong> {new Date(selectedPatient.lastVisit).toLocaleDateString()}</p>
            </div>
          </div>
        )}

        {/* Observations */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Patient Observations & Mental State Checklist *
          </label>
          <textarea
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Describe behavioral observations, speech pattern, mood affect, and current complaints..."
          />
        </div>

        {/* Vital Signs */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Vital Signs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Pressure
              </label>
              <input
                type="text"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="120/80"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Temperature
              </label>
              <input
                type="text"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="98.6°F"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pulse (BPM)
              </label>
              <input
                type="text"
                name="pulse"
                value={formData.pulse}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="72"
              />
            </div>
          </div>
        </div>

        {/* Procedures Performed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interventions / Assessments Performed
          </label>
          <textarea
            name="procedures"
            value={formData.procedures}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="List any psychometric scales, cognitive therapy protocols, or counseling exercises conducted..."
          />
        </div>

        {/* Findings */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Clinical Findings / Assessment *
          </label>
          <textarea
            name="findings"
            value={formData.findings}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Describe therapist findings, cognitive trends, or behavioral milestones..."
          />
        </div>

        {/* Recommendations */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Treatment & Relapse Prevention Recommendations *
          </label>
          <textarea
            name="recommendations"
            value={formData.recommendations}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Recommend follow-up tasks, home relaxation exercises, coping strategies..."
          />
        </div>

        {/* Priority Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <AlertTriangle className="h-4 w-4 inline mr-2 text-indigo-600" />
            Priority Level *
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          >
            <option value="Low">Low - Routine follow-up</option>
            <option value="Medium">Medium - Standard care tracking</option>
            <option value="High">High - Urgent clinical/crisis check needed</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Submit Case Report
          </button>
          <button
            type="button"
            onClick={() => setFormData({
              patientId: '',
              observations: '',
              bloodPressure: '',
              temperature: '',
              pulse: '',
              procedures: '',
              findings: '',
              recommendations: '',
              priority: 'Medium'
            })}
            className="px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportForm;