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
            Meet Our <span className="text-indigo-600">Chief Psychiatrist</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our clinic is led by an experienced and compassionate medical professional 
            committed to delivering advanced, personalized mental health treatments and leading 
            our multidisciplinary clinical team.
          </p>
        </div>

        {/* Doctor Card */}
        <div className="mb-16">
          <DoctorCard doctor={headDoctor} />
        </div>

        {/* Leadership Philosophy */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Clinical Philosophy
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6749827/pexels-photo-6749827.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Therapy Leadership"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Empathetic & Non-judgmental Support</h3>
                <p className="text-gray-600">
                  Every individual's struggle is unique. We provide a safe, respectful environment where patients feel fully heard, validated, and supported throughout their mental wellness journey.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrated Biopsychosocial Approach</h3>
                <p className="text-gray-600">
                  We look at the complete picture. Our treatments integrate pharmacological therapy, cognitive behavioral techniques, and lifestyle adjustments to target root causes rather than just symptoms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Evidence-Based Treatment Plans</h3>
                <p className="text-gray-600">
                  We stay at the leading edge of psychiatric science, offering clinically proven therapies for mood stabilization, neurodevelopmental concerns, sexual dysfunction, and de-addiction recovery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Schedule a Confidential Consultation
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Get in touch with Dr. Nirmal Kumar Seenan to discuss your concerns and establish a supportive, tailored mental wellbeing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 text-indigo-600" />
            </Link>
            <Link
              to="/nurses"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-200"
            >
              Meet Our Counselors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;