import React, { useState } from 'react';
import PatientCard from '../components/PatientCard';
import { patients } from '../data/patients';
import { Search, Filter, Users, Activity } from 'lucide-react';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [nurseFilter, setNurseFilter] = useState('All');

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.currentCondition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || patient.status === statusFilter;
    const matchesNurse = nurseFilter === 'All' || patient.assignedNurse === nurseFilter;
    
    return matchesSearch && matchesStatus && matchesNurse;
  });

  const uniqueStatuses = [...new Set(patients.map(p => p.status))];
  const uniqueNurses = [...new Set(patients.map(p => p.assignedNurse))];

  const getStatusStats = () => {
    const stats = {
      total: patients.length,
      active: patients.filter(p => p.status === 'Active').length,
      treatment: patients.filter(p => p.status === 'Treatment in Progress').length,
      scheduled: patients.filter(p => p.status === 'Scheduled').length,
      monitoring: patients.filter(p => p.status === 'Monitoring').length
    };
    return stats;
  };

  const stats = getStatusStats();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Patient <span className="text-sky-600">Management</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive overview of all patients under our care, with detailed 
            information about their treatment status and assigned healthcare providers.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Patients</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">{stats.active}</div>
            <div className="text-sm text-gray-600">Active</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-amber-600">{stats.treatment}</div>
            <div className="text-sm text-gray-600">In Treatment</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
            <div className="text-sm text-gray-600">Scheduled</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-2xl font-bold text-purple-600">{stats.monitoring}</div>
            <div className="text-sm text-gray-600">Monitoring</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="h-4 w-4 inline mr-2" />
                Search Patients
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name or condition..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              />
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Activity className="h-4 w-4 inline mr-2" />
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              >
                <option value="All">All Statuses</option>
                {uniqueStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Nurse Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="h-4 w-4 inline mr-2" />
                Assigned Nurse
              </label>
              <select
                value={nurseFilter}
                onChange={(e) => setNurseFilter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors"
              >
                <option value="All">All Nurses</option>
                {uniqueNurses.map(nurse => (
                  <option key={nurse} value={nurse}>{nurse}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPatients.length} of {patients.length} patients
          </p>
        </div>

        {/* Patients Grid */}
        {filteredPatients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPatients.map((patient) => (
              <PatientCard key={patient.id} patient={patient} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Patients Found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more patients.
            </p>
          </div>
        )}

        {/* Patient Care Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Comprehensive Patient Care
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our patient management system ensures that every individual receives 
                personalized attention and coordinated care from our healthcare team.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Dedicated nurse assignment for continuity of care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Regular health monitoring and status updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Comprehensive medical history tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Emergency care and urgent treatment protocols</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Patient Care"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;