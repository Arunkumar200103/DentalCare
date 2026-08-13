import React from 'react';
import { Link } from 'react-router-dom';
import NurseCard from '../components/NurseCard';
import { nurses } from '../data/nurses';
import { ArrowRight } from 'lucide-react';

const Nurses = () => {
  const totalPatients = nurses.reduce((total, nurse) => total + nurse.assignedPatients, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Counselors & <span className="text-indigo-600">Support Staff</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our dedicated team of clinical psychologists, rehabilitation counselors, and psychiatric nurses 
            who provide compassionate care and therapeutic support.
          </p>
        </div>

        {/* Staff Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{nurses.length}</div>
            <div className="text-gray-600 font-medium">Licensed Practitioners</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">{totalPatients}</div>
            <div className="text-gray-600 font-medium">Active Recovery Cases</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Combined Experience Years</div>
          </div>
        </div>

        {/* Nurses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {nurses.map((nurse) => (
            <NurseCard key={nurse.id} nurse={nurse} />
          ))}
        </div>

        {/* Team Approach */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Collaborative Care Model
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our counselors and clinical staff work in absolute coordination with our Chief Psychiatrist 
                to deliver structured therapy. This collaborative model ensures a smooth transition from medical 
                stabilization to psychotherapy and long-term relapse prevention.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Personalized individual psychotherapy (CBT, DBT)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Family counseling and support group facilitation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Care-coordination with our chief psychiatrist</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Confidential, structured post-treatment follow-ups</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Therapy Team Collaboration"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Connect With A Therapist
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Book an appointment today and meet our clinical counselors to establish a supportive, custom recovery path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5 text-indigo-600" />
            </Link>
            <Link
              to="/patients"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-200"
            >
              View Cases Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nurses;