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
            Book Your <span className="text-indigo-600">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule a confidential consultation with Dr. Nirmal Kumar Seenan or our clinical counseling team. 
            We offer flexible evening hours to accommodate your schedule.
          </p>
        </div>

        {/* Appointment Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Date & Time</h3>
              <p className="text-gray-600 text-sm">Choose your preferred date and evening time slot</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Choose Service</h3>
              <p className="text-gray-600 text-sm">Select the specific neuropsychiatric or therapy service</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Booking Confirmed</h3>
              <p className="text-gray-600 text-sm">Receive immediate booking confirmation via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Attend Session</h3>
              <p className="text-gray-600 text-sm">Connect in-person at Avadi clinic or online link</p>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="mb-12">
          <AppointmentForm />
        </div>

        {/* Office Hours & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Clinical Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Monday - Saturday</span>
                <span className="font-semibold text-gray-800">6:00 PM - 9:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Sunday</span>
                <span className="font-semibold text-red-600">Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Clinical Crisis Helpline</h4>
              <p className="text-sm text-red-700 leading-relaxed">
                For psychiatric emergencies, acute distress, or immediate de-addiction assistance: 
                <span className="font-bold"> +91 94441 62657</span>
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Arrive 10 minutes prior to complete any intake case details</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Strict patient confidentiality is maintained for all consultation files</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Bring any past neuropsychiatric prescriptions or medical reports</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                </span>
                <p className="text-gray-600">Discuss all symptoms openly with Dr. Nirmal Kumar Seenan</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">Cancellation Policy</h4>
              <p className="text-sm text-indigo-700">
                Please notify us at least 12 hours in advance to reschedule your session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;