import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Phone, Clock, Info } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const BookAppointment = () => {
  useSEO({
    title: 'Book an Appointment | DS Clinic Avadi',
    description: 'Schedule your consultation at DS Clinic. Easy online booking for psychiatry, diabetology, and general medicine appointments in Avadi, Chennai.'
  });

  return (
    <div className="min-h-screen bg-background-main pt-24 pb-20 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none -z-10"></div>
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary-50 text-primary-900 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase mb-6 border border-primary-100 shadow-sm">
            <Calendar className="w-4 h-4" />
            <span>Scheduling</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[52px] font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Book Your <span className="text-primary-900">Appointment.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-[17px] text-slate-600 max-w-2xl mx-auto font-medium leading-[1.6]">
            Schedule a confidential consultation with our specialists. 
            We offer flexible evening hours to accommodate your schedule.
          </motion.p>
        </motion.div>

        {/* Appointment Process */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-white rounded-[24px] shadow-sm p-8 lg:p-12 mb-16 border border-slate-200 relative overflow-hidden"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-slate-900 mb-10 text-center">
            How It Works
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-16 h-16 bg-primary-50 rounded-[16px] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <Calendar className="h-7 w-7 text-primary-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">1. Date & Time</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Choose your preferred date and evening time slot</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-16 h-16 bg-primary-50 rounded-[16px] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <CheckCircle2 className="h-7 w-7 text-primary-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">2. Select Service</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Choose the specific neuropsychiatric or therapy service</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-16 h-16 bg-primary-50 rounded-[16px] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <Phone className="h-7 w-7 text-primary-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">3. Confirmation</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Receive immediate booking confirmation via email</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center group">
              <div className="w-16 h-16 bg-primary-50 rounded-[16px] flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-100 transition-colors duration-300">
                <Clock className="h-7 w-7 text-primary-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">4. Attend Session</h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Connect in-person at our Avadi clinic location</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Appointment Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <AppointmentForm />
        </motion.div>

        {/* Office Hours & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[24px] shadow-sm p-8 lg:p-10 border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Clinical Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-600 font-medium text-[15px]">Monday - Saturday</span>
                <span className="font-bold text-slate-900 text-[15px] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">6:00 PM - 9:30 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600 font-medium text-[15px]">Sunday</span>
                <span className="font-bold text-accent-500 text-[15px] bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">Closed</span>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-4">
              <div className="p-2.5 bg-red-500 text-white rounded-xl shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-red-900 mb-1">Clinical Crisis Helpline</h4>
                <p className="text-[13px] text-red-700 leading-relaxed font-medium">
                  For psychiatric emergencies, acute distress, or immediate de-addiction assistance: 
                  <span className="font-bold block mt-1 text-[15px]">+91 98846 56834</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[24px] shadow-sm p-8 lg:p-10 border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h3>
            <div className="space-y-5">
              {[
                "Arrive 10 minutes prior to complete any intake case details.",
                "Strict patient confidentiality is maintained for all consultation files.",
                "Bring any past neuropsychiatric prescriptions or medical reports.",
                "Discuss all symptoms openly with our specialists."
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-primary-50 rounded-lg flex items-center justify-center mt-0.5">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  </div>
                  <p className="text-slate-600 font-medium leading-[1.6] text-[15px]">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start space-x-4">
              <div className="p-2.5 bg-slate-400 text-white rounded-xl shrink-0">
                <Info className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1">Cancellation Policy</h4>
                <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                  Please notify us at least 12 hours in advance to reschedule your session to accommodate other patients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;