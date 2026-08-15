import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Activity, Salad, Heart } from 'lucide-react';

const DiabetesCareBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1280px] mx-auto bg-gradient-to-r from-[#F0FAF9] via-[#F4FCFB] to-[#E0F4F2] rounded-[24px] overflow-hidden flex flex-col lg:flex-row border border-[#CDEBE7] shadow-[0_12px_40px_rgba(15,139,141,0.06)] relative min-h-[300px]"
      >
        {/* Background Image (Artwork) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/banners/diabetes-care-bg.png"
            alt="Diabetes Care"
            className="w-full h-full object-cover lg:object-[center_right] opacity-100"
          />
        </div>



        {/* LEFT CONTENT (Text) */}
        <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-14 relative z-10 flex flex-col justify-center h-full md:min-h-[300px]">

          <div className="mb-3">
            <span className="inline-block text-teal-100 font-bold text-[12px] tracking-widest uppercase bg-black/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
              Diabetology
            </span>
          </div>

          <h2 className="text-[32px] md:text-[34px] lg:text-[40px] font-bold text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md">
            Take Control of<br className="hidden md:block" />
            <span className="text-teal-300">Your Diabetes</span>
          </h2>

          <p className="text-white/90 text-[15px] lg:text-[17px] max-w-lg font-medium leading-[1.6] mb-8 drop-shadow">
            Personalized diabetes and metabolic care<br className="hidden sm:block" />
            for healthier living.
          </p>

          <div className="mt-auto md:mt-0 flex justify-center md:justify-start w-full">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center px-6 py-3 md:px-7 md:py-3.5 bg-[#0F8B8D] text-white font-semibold rounded-[10px] hover:bg-[#0B7A7C] hover:-translate-y-0.5 transition-all duration-300 shadow-sm text-[14px] md:text-[15px] group"
            >
              Book a Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>



      </motion.div>
    </section>
  );
};

export default DiabetesCareBanner;
