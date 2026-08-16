import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, ArrowRight } from 'lucide-react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Appointment Request*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Doctor:* ${formData.doctor || 'No preference'}
*Date:* ${formData.date}
*Time:* ${formData.time}`;

    const whatsappNumber = '919884656834'; // Clinic phone number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    console.log('Appointment booked:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', doctor: '', date: '', time: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const services = [
    "Neuropsychiatry Consultation",
    "De-addiction Therapy",
    "Anxiety & Depression Management",
    "Diabetology & Endocrinology",
    "General Medicine Check-up",
    "Lifestyle & Nutritional Counseling"
  ];

  const doctors = [
    "Dr. Nirmal Kumar Seenan (Neuropsychiatry)",
    "Dr. Shylaja Nirmal (Diabetology & Gen. Medicine)"
  ];

  if (showSuccess) {
    return (
      <div className="bg-white rounded-[24px] shadow-sm p-10 max-w-2xl mx-auto border border-slate-200 text-center relative overflow-hidden">
        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-100">
          <Calendar className="h-8 w-8 text-primary-900" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Appointment Booked!</h3>
        <p className="text-slate-600 mb-8 font-medium text-[15px] max-w-md mx-auto leading-relaxed">
          Your appointment has been successfully scheduled. We'll send you a confirmation email shortly.
        </p>
        <button 
          onClick={() => setShowSuccess(false)}
          className="bg-primary-900 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors font-semibold shadow-sm hover:-translate-y-0.5"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] shadow-sm p-8 lg:p-12 max-w-3xl mx-auto border border-slate-200 relative overflow-hidden">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Secure Your Appointment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              <User className="h-4 w-4 inline mr-1.5 text-primary-600 pb-0.5" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 placeholder:text-slate-400 outline-none"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              <Mail className="h-4 w-4 inline mr-1.5 text-primary-600 pb-0.5" />
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 placeholder:text-slate-400 outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
            <Phone className="h-4 w-4 inline mr-1.5 text-primary-600 pb-0.5" />
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 placeholder:text-slate-400 outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              Service Required *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 outline-none"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              Preferred Specialist
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 outline-none"
            >
              <option value="">No preference</option>
              {doctors.map((doc) => (
                <option key={doc} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              <Calendar className="h-4 w-4 inline mr-1.5 text-primary-600 pb-0.5" />
              Preferred Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 outline-none"
            />
          </div>
          
          <div>
            <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">
              <Clock className="h-4 w-4 inline mr-1.5 text-primary-600 pb-0.5" />
              Preferred Time *
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-[15px] font-medium text-slate-900 outline-none"
            >
              <option value="">Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-primary-900 text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-base flex items-center justify-center group"
          >
            Confirm Appointment
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;