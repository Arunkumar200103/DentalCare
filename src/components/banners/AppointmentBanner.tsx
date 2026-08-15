import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, ShieldCheck, UserCheck, HeartHandshake, ClipboardCheck } from 'lucide-react';

const AppointmentBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1280px] mx-auto bg-gradient-to-br from-[#0B3B82] via-[#082250] to-[#0F172A] rounded-[32px] overflow-hidden flex flex-col border border-white/10 shadow-2xl relative p-8 md:p-14 lg:p-16"
      >
        {/* Modern glowing orbs */}
        <div className="absolute top-0 left-0 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-[#0F8B8D]/30 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[200px] lg:w-[300px] h-[200px] lg:h-[300px] bg-primary-500/20 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center text-center lg:text-left w-full gap-10 lg:gap-16">
          
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-teal-300 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
              <CalendarDays className="w-4 h-4" />
              <span>Next Steps</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-white mb-4 leading-tight tracking-tight">
              Ready to Take the<br className="hidden sm:block lg:hidden" /> Next Step?
            </h2>
            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              Personalized care for your mind and body starts with a conversation. Let's build your specialized treatment plan today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0 justify-center">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-[#0B3B82] font-bold rounded-[14px] hover:bg-[#F4F9FF] hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.15)] text-[16px] group"
            >
              Book Appointment <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-[14px] hover:bg-white/10 transition-all duration-300 text-[16px]"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AppointmentBanner;
