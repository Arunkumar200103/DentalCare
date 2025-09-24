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
            Our <span className="text-sky-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of dental services to meet all your oral health needs. 
            From routine checkups to advanced procedures, our experienced team is here to help.
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
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">State-of-the-art equipment and modern techniques</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Experienced and certified dental professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Personalized treatment plans for every patient</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Comfortable and stress-free environment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  </span>
                  <p className="text-gray-600">Flexible scheduling and emergency care available</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Dental Services"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* Insurance and Payment */}
        <div className="mt-16 bg-sky-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Insurance & Payment Options
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make quality dental care accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Insurance Accepted</h3>
              <p className="text-gray-600 text-sm">Most major dental insurance plans accepted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Flexible Payment</h3>
              <p className="text-gray-600 text-sm">Payment plans and financing options available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Price Transparency</h3>
              <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;