import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react';

const UserDashboard = () => {
  // Mock user data - would come from authentication/backend
  const user = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 111-1111",
    memberSince: "2023-01-15"
  };

  const appointments = [
    {
      id: 1,
      service: "General Checkup",
      date: "2024-02-15",
      time: "10:00 AM",
      provider: "Emily Rodriguez",
      status: "Confirmed",
      type: "upcoming"
    },
    {
      id: 2,
      service: "Teeth Whitening",
      date: "2024-01-20",
      time: "2:30 PM",
      provider: "Michael Chen",
      status: "Completed",
      type: "past"
    },
    {
      id: 3,
      service: "Root Canal",
      date: "2023-12-10",
      time: "9:00 AM",
      provider: "Dr. Sarah Johnson",
      status: "Completed",
      type: "past"
    }
  ];

  const upcomingAppointments = appointments.filter(apt => apt.type === 'upcoming');
  const pastAppointments = appointments.filter(apt => apt.type === 'past');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      case 'Pending':
        return <Clock className="h-5 w-5 text-amber-600" />;
      case 'Completed':
        return <CheckCircle className="h-5 w-5 text-emerald-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-emerald-100 text-emerald-800';
      case 'Pending':
        return 'bg-amber-100 text-amber-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
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
            Welcome back, <span className="text-sky-600">{user.name}</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your appointments and view your dental health information
          </p>
        </div>

        {/* User Profile Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👤</span>
              </div>
              <div className="font-medium text-gray-800">{user.name}</div>
              <div className="text-sm text-gray-600">Patient</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="font-medium text-gray-800">{upcomingAppointments.length}</div>
              <div className="text-sm text-gray-600">Upcoming Appointments</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <div className="font-medium text-gray-800">{pastAppointments.length}</div>
              <div className="text-sm text-gray-600">Completed Visits</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <div className="font-medium text-gray-800">
                {new Date(user.memberSince).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-600">Member Since</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button className="bg-sky-600 text-white p-6 rounded-xl shadow-lg hover:bg-sky-700 transition-colors duration-200 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2" />
            <div className="font-semibold">Book New Appointment</div>
          </button>
          <button className="bg-emerald-600 text-white p-6 rounded-xl shadow-lg hover:bg-emerald-700 transition-colors duration-200 text-center">
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <div className="font-semibold">Contact Clinic</div>
          </button>
          <button className="bg-purple-600 text-white p-6 rounded-xl shadow-lg hover:bg-purple-700 transition-colors duration-200 text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <div className="font-semibold">Get Directions</div>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Appointments */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{appointment.service}</h3>
                        <p className="text-gray-600">with {appointment.provider}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-sky-600" />
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-sky-600" />
                        {appointment.time}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-3">
                      <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">
                        Reschedule
                      </button>
                      <button className="text-sm text-red-600 hover:text-red-700 font-medium">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">No Upcoming Appointments</h3>
                <p className="text-gray-600 mb-4">Schedule your next visit to maintain your oral health</p>
                <button className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            )}
          </div>

          {/* Appointment History */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment History</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {pastAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{appointment.service}</h3>
                      <p className="text-sm text-gray-600">with {appointment.provider}</p>
                    </div>
                    <div className="flex items-center">
                      {getStatusIcon(appointment.status)}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(appointment.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {appointment.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Health Reminders */}
        <div className="mt-8 bg-sky-50 border border-sky-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Health Reminders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🦷</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Regular Cleaning Due</h3>
                <p className="text-sm text-gray-600">Your next cleaning is recommended by March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧴</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Daily Oral Care</h3>
                <p className="text-sm text-gray-600">Remember to brush twice daily and floss regularly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;