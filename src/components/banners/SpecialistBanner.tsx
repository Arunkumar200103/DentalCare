import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, HeartHandshake, Heart, ShieldCheck } from 'lucide-react';

const SpecialistBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1280px] mx-auto bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row border border-[#EAF4FF] shadow-[0_12px_40px_rgba(11,59,130,0.08)] relative min-h-[320px]"
      >
        {/* Background Image (Artwork) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/banners/specialist-consultation-bg.png"
            alt="Specialist Consultation"
            className="w-full h-full object-cover md:object-[center_right] opacity-100"
          />
          {/* Mobile Blur Overlay for Readability */}
          <div className="absolute inset-0 bg-[#0B3B82]/20 backdrop-blur-[6px] md:backdrop-blur-none md:bg-transparent"></div>
        </div>



        {/* LEFT CONTENT (Text) */}
        <div className="w-full md:w-[45%] p-6 md:p-12 lg:p-14 relative z-10 flex flex-col justify-center h-full md:min-h-[300px]">
          <div className="mb-3">
            <span className="inline-block text-blue-100 font-bold text-[12px] tracking-widest uppercase bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              Specialist Care
            </span>
          </div>

          <h2 className="text-[24px] md:text-[34px] lg:text-[40px] font-bold text-white leading-[1.1] tracking-tight mb-3 md:mb-4 max-w-[400px] drop-shadow-md">
            Expert Care Starts With <span className="text-blue-300">the Right Consultation</span>
          </h2>

          <p className="text-white/90 text-[14px] md:text-[15px] lg:text-[17px] max-w-sm font-medium leading-[1.6] mb-6 md:mb-8 drop-shadow">
            Meet our specialist and take the first step toward better health.
          </p>

          <div className="mt-auto md:mt-0 flex justify-center md:justify-start w-full">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-[#0B3B82] text-white font-semibold rounded-[10px] hover:bg-[#1565C0] hover:-translate-y-0.5 transition-all duration-300 shadow-sm text-[14px] md:text-[15px] group"
            >
              Meet Our Specialist <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="w-full md:w-[55%] relative hidden md:flex flex-col justify-end p-6 pt-0 md:p-10 lg:p-14 z-10 mt-4 md:mt-0">
          <div className="flex flex-col gap-2 md:gap-3 items-start md:items-start self-start md:self-auto">
            {[
              { icon: UserCheck, text: "Experienced Specialist" },
              { icon: HeartHandshake, text: "Personalized Treatment" },
              { icon: Heart, text: "Compassionate Approach" },
              { icon: ShieldCheck, text: "Your Health, Our Priority" }
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                key={i}
                className="flex items-center space-x-3 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white/50 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0B3B82] transition-colors">
                  <item.icon className="w-4 h-4 text-[#0B3B82] group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <span className="text-[#0F172A] text-[13px] font-semibold">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default SpecialistBanner;
