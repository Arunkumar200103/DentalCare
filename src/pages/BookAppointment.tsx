import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import { Calendar, Clock, CheckCircle, Phone } from 'lucide-react';

const BookAppointment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Book Your <span className="text-sky-600">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule your visit with our experienced dental team. We offer flexible 
            scheduling to accommodate your busy lifestyle and provide the best possible care.
          </p>
        </div>

        {/* Appointment Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Select Date & Time</h3>
              <p className="text-gray-600 text-sm">Choose your preferred appointment date and time slot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Choose Service</h3>
              <p className="text-gray-600 text-sm">Select the dental service you need</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Get Confirmation</h3>
              <p className="text-gray-600 text-sm">Receive confirmation via email and phone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Visit Our Clinic</h3>
              <p className="text-gray-600 text-sm">Arrive 15 minutes early for your appointment</p>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="mb-12">
          <AppointmentForm />
        </div>

        {/* Office Hours & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium text-gray-800">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium text-gray-800">9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium text-red-600">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Emergency Care</h4>
              <p className="text-sm text-red-700">
                For dental emergencies outside office hours, call our emergency line: 
                <span className="font-medium"> +1 (555) 999-HELP</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Arrive 15 minutes early for paperwork and check-in</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Bring your insurance card and valid ID</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Complete health history forms if it's your first visit</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Discuss any concerns or questions with your provider</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
              <h4 className="font-medium text-sky-800 mb-2">Cancellation Policy</h4>
              <p className="text-sm text-sky-700">
                Please provide at least 24 hours notice for cancellations to avoid fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;