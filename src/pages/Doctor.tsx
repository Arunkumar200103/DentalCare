import React from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../components/DoctorCard';
import { headDoctor } from '../data/doctor';
import { ArrowRight } from 'lucide-react';

const Doctor = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="text-sky-600">Head Doctor</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our clinic is led by an experienced and dedicated dental professional 
            committed to providing exceptional patient care and leading our team 
            of specialists.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="mb-16">
          <DoctorCard doctor={headDoctor} />
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Leadership Philosophy
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6749827/pexels-photo-6749827.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Team Leadership"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  Every decision we make is guided by what's best for our patients. We believe in 
                  treating each person with compassion, respect, and the highest standard of care.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Team Excellence</h3>
                <p className="text-gray-600">
                  Our success depends on our team. We foster a collaborative environment where 
                  every team member can contribute their expertise and continue growing professionally.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We stay at the forefront of dental technology and techniques, constantly 
                  improving our methods to provide better outcomes for our patients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Experience Expert Care
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. Johnson and our experienced team to discuss 
            your dental health goals and create a personalized treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/nurses"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-sky-600 transition-all duration-200"
            >
              Meet Our Staff
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;