import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*New Contact Form Message*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:* ${formData.message}`;

    const whatsappNumber = '919444162657'; // Clinic phone number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');

    console.log('Contact form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background-main pt-32 pb-16 flex items-center justify-center px-4">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(11,59,130,0.08)] border border-[#EAF4FF] p-10 max-w-md mx-auto text-center"
        >
          <div className="w-20 h-20 bg-[#F0FAF9] rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="h-10 w-10 text-[#0F8B8D]" />
          </div>
          <h3 className="text-[28px] font-bold text-[#0F172A] mb-3">Message Sent!</h3>
          <p className="text-[#475569] mb-8 text-[15px] leading-relaxed">
            Thank you for reaching out in confidence. Our dedicated care team will get back to you shortly.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="bg-[#0B3B82] text-white px-8 py-3.5 rounded-[12px] font-semibold hover:bg-[#1565C0] hover:-translate-y-0.5 transition-all shadow-sm w-full"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-main pt-28 pb-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center text-[#0B3B82] font-bold tracking-[1.5px] uppercase text-[11px] mb-4 bg-white px-4 py-1.5 rounded-full border border-[#0B3B82]/10 shadow-sm">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#0F172A] mb-6 leading-[1.1] tracking-tight">
            We're Here to <span className="text-[#0F8B8D]">Listen & Help</span>
          </h1>
          <p className="text-[16px] lg:text-[18px] text-[#475569] leading-relaxed font-medium">
            Whether you have questions about psychiatric counseling, diabetology, or need to schedule an appointment—reach out to us in absolute confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(11,59,130,0.06)] border border-[#EAF4FF] p-8 lg:p-10">
              <h2 className="text-[24px] font-bold text-[#0F172A] mb-8">Clinic Details</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-[#F4F9FF] rounded-[14px] flex-shrink-0 group-hover:bg-[#0B3B82] transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-[#0B3B82] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F172A] mb-1.5">Visit Our Clinic</h3>
                    <p className="text-[#475569] text-[15px] leading-[1.6] font-medium">
                      No. 27, Moses Street,<br />
                      West Gandhi Nagar, Avadi,<br />
                      Chennai, Tamil Nadu - 600054
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-[#F0FAF9] rounded-[14px] flex-shrink-0 group-hover:bg-[#0F8B8D] transition-colors duration-300">
                    <Phone className="h-6 w-6 text-[#0F8B8D] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F172A] mb-1.5">Call Us</h3>
                    <p className="text-[#475569] text-[15px] leading-[1.6] font-medium">
                      Appointments: <span className="font-bold text-[#0F172A]">+91 94441 62657</span><br />
                      Helpline: <span className="font-bold text-[#0F172A]">+91 94441 62657</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-[#F4F9FF] rounded-[14px] flex-shrink-0 group-hover:bg-[#0B3B82] transition-colors duration-300">
                    <Mail className="h-6 w-6 text-[#0B3B82] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0F172A] mb-1.5">Email Us</h3>
                    <p className="text-[#475569] text-[15px] leading-[1.6] font-medium">
                      info@dsclinic.com<br />
                      dr.nirmal@dsclinic.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 group">
                  <div className="p-3.5 bg-[#FFF8EB] rounded-[14px] flex-shrink-0 group-hover:bg-[#D97706] transition-colors duration-300">
                    <Clock className="h-6 w-6 text-[#D97706] group-hover:text-white transition-colors" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-[16px] font-bold text-[#0F172A] mb-2.5">Clinical Hours</h3>
                    <div className="text-[#475569] text-[14px] font-medium space-y-2 w-full pr-4">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span>Mon - Sat</span>
                        <span className="font-bold text-[#0F172A]">6:00 PM - 9:30 PM</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span>Sunday</span>
                        <span className="font-bold text-[#DC2626] bg-red-50 px-2 py-0.5 rounded-md">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crisis Hotline Information */}
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-[24px] p-8 lg:p-10 shadow-[0_4px_20px_rgba(220,38,38,0.05)]">
              <div className="flex items-center space-x-3 mb-4">
                <ShieldAlert className="h-6 w-6 text-[#DC2626]" />
                <h3 className="text-[20px] font-bold text-[#991B1B] tracking-tight">Mental Health Crisis?</h3>
              </div>
              <p className="text-[#991B1B] text-[15px] leading-[1.6] font-medium mb-5">
                For severe psychiatric distress, panic concerns, or acute substance withdrawal symptoms outside clinical hours, please call our support coordination line or visit the nearest hospital emergency room.
              </p>
              <a href="tel:+919444162657" className="inline-flex items-center space-x-2 text-[#991B1B] font-bold bg-white/60 px-4 py-2 rounded-[10px] hover:bg-white transition-colors border border-[#FECACA]">
                <Phone className="h-4 w-4" />
                <span>Urgent Support: +91 94441 62657</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } } }}
            className="lg:col-span-7 bg-white rounded-[24px] shadow-[0_12px_40px_rgba(11,59,130,0.06)] border border-[#EAF4FF] p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F4F9FF] to-transparent rounded-bl-full z-0 opacity-50 pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-[28px] lg:text-[32px] font-bold text-[#0F172A] mb-2 tracking-tight">Send a Confidential Message</h2>
              <p className="text-[#475569] text-[15px] mb-8 font-medium">We ensure 100% privacy for all psychiatric and medical queries.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] focus:ring-4 focus:ring-[#0B3B82]/10 focus:border-[#0B3B82] outline-none transition-all text-[#0F172A] font-medium"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] focus:ring-4 focus:ring-[#0B3B82]/10 focus:border-[#0B3B82] outline-none transition-all text-[#0F172A] font-medium"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">
                    How can we help? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[14px] focus:ring-4 focus:ring-[#0B3B82]/10 focus:border-[#0B3B82] outline-none transition-all text-[#0F172A] font-medium resize-none"
                    placeholder="Describe your query in confidence..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0B3B82] text-white py-4 px-6 rounded-[14px] font-bold hover:bg-[#1565C0] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_8px_20px_rgba(11,59,130,0.15)] hover:shadow-[0_12px_25px_rgba(11,59,130,0.25)] flex items-center justify-center group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Secure Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="mt-12 lg:mt-16 bg-white rounded-[24px] shadow-[0_12px_40px_rgba(11,59,130,0.06)] border border-[#EAF4FF] p-8 lg:p-10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
            <div>
              <h2 className="text-[24px] lg:text-[28px] font-bold text-[#0F172A] mb-2 tracking-tight">Find Our Clinic in Avadi</h2>
              <p className="text-[#475569] font-medium">Easily accessible by public transit with ample parking.</p>
            </div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-6 lg:aspect-h-5 rounded-[16px] overflow-hidden border border-[#E2E8F0] shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=DS%20Clinic,%20Moses%20Street,%20Avadi,%20Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DS Clinic Location"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <div className="p-6 bg-[#F8FAFC] rounded-[16px] border border-[#F1F5F9] hover:border-[#E2E8F0] transition-colors">
              <h4 className="font-bold text-[#0F172A] mb-2 text-[16px]">Parking</h4>
              <p className="text-[14px] text-[#475569] font-medium leading-[1.6]">Free client parking is available along Moses Street directly outside the clinic.</p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-[16px] border border-[#F1F5F9] hover:border-[#E2E8F0] transition-colors">
              <h4 className="font-bold text-[#0F172A] mb-2 text-[16px]">Public Transit</h4>
              <p className="text-[14px] text-[#475569] font-medium leading-[1.6]">Conveniently located close to the Avadi Bus Terminus & Railway Station.</p>
            </div>
            <div className="p-6 bg-[#F8FAFC] rounded-[16px] border border-[#F1F5F9] hover:border-[#E2E8F0] transition-colors">
              <h4 className="font-bold text-[#0F172A] mb-2 text-[16px]">Accessibility</h4>
              <p className="text-[14px] text-[#475569] font-medium leading-[1.6]">Ground floor clinical consultation rooms with full wheelchair access.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;