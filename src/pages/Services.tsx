import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our Psychiatric <span className="text-indigo-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of neuropsychiatric, counseling, and de-addiction services. 
            From stress management to clinical psychiatric stabilization, our team provides evidence-based care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Our Clinical Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Strictly confidential assessments and documentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Board-certified psychiatric medical consultations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Customized rehabilitation plans for de-addiction recovery</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Supportive, calm and judgment-free clinical environment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Flexible evening slots and virtual follow-ups available</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Psychiatric Counseling"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Insurance and Payment */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Consultation & Payment Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on accessible care. We provide clear pricing structures, receipts for medical insurance claims, and digital payment methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Claim Support</h3>
              <p className="text-gray-600 text-sm">Detailed consultation receipts provided for insurance claims</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Digital Payments</h3>
              <p className="text-gray-600 text-sm">UPI, card payments, and online transfers accepted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Confidentiality</h3>
              <p className="text-gray-600 text-sm">Your payment records and personal data are strictly secured</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;