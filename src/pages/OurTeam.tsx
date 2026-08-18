import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Activity, 
  HeartHandshake, 
  ShieldCheck, 
  ClipboardCheck,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import SpecialistBanner from '../components/banners/SpecialistBanner';
import CertificatesSection from '../components/CertificatesSection';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const trustIndicatorsReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
};

const photoAnimation = {
  hidden: { opacity: 0, x: -30, scale: 0.97 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const infoAnimation = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
};

const OurTeam = () => {
  useSEO({
    title: 'Our Specialists | Dr. Nirmal Kumar Seenan & Dr. Shylaja | DS Clinic',
    description: 'Meet our experienced specialists. Dr. Nirmal Kumar Seenan (Mind and Medicine) and Dr. Shylaja Nirmal (Occupational & Family Health, Diabetology).',
    keywords: 'Dr Nirmal Kumar Seenan, Dr Shylaja Nirmal, best psychiatrist in Avadi, top diabetologist in Chennai, DS clinic team, neuropsychiatrist Chennai, occupational health physician, family health physician'
  });

  return (
    <div className="min-h-screen font-sans overflow-hidden pt-20 pb-12">
      
      {/* 1. Page Header (Optional, kept minimal) */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 variants={fadeInUp} className="text-[36px] md:text-[44px] font-extrabold text-slate-900 mb-4 tracking-tight leading-[1.1]">
              Our <span className="text-primary-900">Specialists.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[16px] text-slate-600 font-medium leading-[1.6]">
              A multidisciplinary team combining deep expertise in neuropsychiatry and diabetology to provide holistic care for you and your family.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* DR. NIRMAL PREMIUM SECTION */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-[#F4F9FF]">
        {/* Soft Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.8)_0%,_transparent_60%)] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-60 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
          >
            {/* DOCTOR PHOTO (45%) */}
            <motion.div variants={photoAnimation} className="w-full lg:w-[45%] relative group">
              {/* Photo Decoration (Behind) */}
              <div className="absolute -inset-6 bg-primary-100/40 rounded-full blur-[40px] opacity-50 z-0"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-200/30 rounded-full blur-[30px] z-0"></div>
              
              {/* Floating Medical Elements */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 z-20 animate-float-medical" style={{ animationDelay: '0s' }}>
                <Brain className="w-6 h-6 text-primary-600" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-10 -left-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 z-20 animate-float-medical" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-5 h-5 text-accent-500" strokeWidth={1.5} />
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[28px] lg:rounded-[32px] overflow-hidden border-[4px] border-white shadow-[0_20px_40px_-15px_rgba(11,59,130,0.15)] h-[420px] lg:h-[550px] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="/images/team/doctor-profile.jpg" 
                  alt="Dr. Nirmal Kumar Seenan" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e410f624c427?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </motion.div>
            
            {/* INFORMATION AREA (55%) */}
            <motion.div variants={infoAnimation} className="w-full lg:w-[55%] flex flex-col justify-center">
              
              <h2 className="text-[13px] md:text-[14px] font-bold text-primary-900 uppercase tracking-[1.5px] mb-3">
                Meet Your Specialist
              </h2>
              
              <h3 className="text-[28px] sm:text-[32px] lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.1] mb-2 tracking-tight">
                Dr. Nirmal Kumar Seenan
              </h3>
              
              <h4 className="text-[18px] lg:text-[20px] font-semibold text-primary-700 mb-6">
                Consultant Neuropsychiatrist
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center bg-[#EAF4FF] text-[#0B3B82] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <Brain className="w-3.5 h-3.5 mr-1.5" /> Psychiatry
                </span>
                <span className="inline-flex items-center bg-[#EAF4FF] text-[#0B3B82] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <Brain className="w-3.5 h-3.5 mr-1.5" /> Mental Wellness
                </span>
                <span className="inline-flex items-center bg-[#EAF4FF] text-[#0B3B82] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <Activity className="w-3.5 h-3.5 mr-1.5" /> Neuropsychiatry
                </span>
              </div>

              {/* Professional Description */}
              <div className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.7] mb-8 font-medium space-y-4">
                <p>Dr. Nirmal Kumar Seenan, MBBS, MD (Psychiatry) is a Consultant Neuropsychiatrist based in Chennai with over a decade of experience in medical practice.</p>
                <p>He provides comprehensive, evidence-based care for a wide range of mental health conditions, with expertise in psychiatric assessment, medication management, psychotherapy, and the management of complex psychiatric disorders.</p>
                <p>Dr. Nirmal believes in a holistic approach to mental healthcare—caring for both the mind and the body. He considers physical health, emotional wellbeing, lifestyle, family, and social factors while developing an individualized treatment plan for each patient.</p>
                <p>His aim is to provide compassionate, confidential, and patient-centred care in a safe and supportive environment.</p>
              </div>

              {/* Trust Indicators */}
              <motion.div 
                variants={trustIndicatorsReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4 mb-10"
              >
                {[
                  { icon: HeartHandshake, text: "Personalized Care" },
                  { icon: ShieldCheck, text: "Confidential Consultation" },
                  { icon: ClipboardCheck, text: "Evidence-Based Treatment" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600" strokeWidth={1.5} />
                    </div>
                    <span className="text-[15px] font-semibold text-slate-800">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Area */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-900 text-white font-semibold rounded-[12px] hover:bg-primary-700 transition-all duration-300 shadow-[0_8px_16px_-4px_rgba(11,59,130,0.3)] hover:-translate-y-0.5 text-[15px]"
                >
                  Book an Appointment
                </Link>
                {/* Simulated view profile button since we don't have separate pages yet */}
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-primary-200 text-primary-900 font-semibold rounded-[12px] hover:bg-primary-50 transition-colors text-[15px]"
                >
                  View Profile
                </button>
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* DR. SHYLAJA PREMIUM SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(244,249,255,0.6)_0%,_transparent_50%)] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center"
          >
            {/* DOCTOR PHOTO (45%) */}
            <motion.div variants={photoAnimation} className="w-full lg:w-[45%] relative group">
              {/* Photo Decoration (Behind) */}
              <div className="absolute -inset-6 bg-secondary-100/40 rounded-full blur-[40px] opacity-50 z-0"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-200/30 rounded-full blur-[30px] z-0"></div>
              
              {/* Floating Medical Elements */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 z-20 animate-float-medical" style={{ animationDelay: '1s' }}>
                <Stethoscope className="w-6 h-6 text-secondary-600" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-slate-100 z-20 animate-float-medical" style={{ animationDelay: '3s' }}>
                <Activity className="w-5 h-5 text-accent-500" strokeWidth={1.5} />
              </div>

              {/* Main Image Container */}
              <div className="relative z-10 rounded-[28px] lg:rounded-[32px] overflow-hidden border-[4px] border-white shadow-[0_20px_40px_-15px_rgba(15,139,141,0.15)] h-[420px] lg:h-[550px] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/10 to-transparent z-10 pointer-events-none"></div>
                <img 
                  src="/images/team/shylaja.jpeg" 
                  alt="Dr. Shylaja Nirmal" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1594824436998-d7ee79f51c5a?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
            </motion.div>
            
            {/* INFORMATION AREA (55%) */}
            <motion.div variants={infoAnimation} className="w-full lg:w-[55%] flex flex-col justify-center">
              
              <h2 className="text-[13px] md:text-[14px] font-bold text-secondary-600 uppercase tracking-[1.5px] mb-3">
                Meet Your Specialist
              </h2>
              
              <h3 className="text-[28px] sm:text-[32px] lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.1] mb-2 tracking-tight">
                Dr. Shylaja Nirmal
              </h3>
              
              <p className="text-[15px] font-semibold text-slate-500 mb-2">
                MBBS, AFIH, F.Diab, CCEBDM
              </p>
              
              <h4 className="text-[18px] lg:text-[20px] font-semibold text-secondary-600 mb-6">
                Occupational Health Physician, Family Health Physician & Diabetologist
              </h4>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="inline-flex items-center bg-[#E8F8F7] text-[#0F8B8D] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <Activity className="w-3.5 h-3.5 mr-1.5" /> Diabetology
                </span>
                <span className="inline-flex items-center bg-[#E8F8F7] text-[#0F8B8D] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <Stethoscope className="w-3.5 h-3.5 mr-1.5" /> Family Health
                </span>
                <span className="inline-flex items-center bg-[#E8F8F7] text-[#0F8B8D] px-3.5 py-1.5 rounded-[10px] text-[13px] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5" /> Occupational Health
                </span>
              </div>

              {/* Professional Description */}
              <p className="text-[16px] text-slate-600 leading-[1.7] mb-8 font-medium">
                Passionate about reversing metabolic disorders through structured lifestyle interventions, proper pharmacological support, and patient education.
                <br className="mb-3" />
                Extensive practice in managing chronic metabolic conditions and lifestyle diseases. Dr. Shylaja believes in treating the patient as a whole rather than just managing symptoms.
              </p>

              {/* Trust Indicators */}
              <motion.div 
                variants={trustIndicatorsReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-4 mb-10"
              >
                {[
                  { icon: HeartHandshake, text: "Personalized Care" },
                  { icon: ShieldCheck, text: "Confidential Consultation" },
                  { icon: ClipboardCheck, text: "Evidence-Based Treatment" }
                ].map((item, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary-50 rounded-full flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary-600" strokeWidth={1.5} />
                    </div>
                    <span className="text-[15px] font-semibold text-slate-800">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Area */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-900 text-white font-semibold rounded-[12px] hover:bg-primary-700 transition-all duration-300 shadow-[0_8px_16px_-4px_rgba(11,59,130,0.3)] hover:-translate-y-0.5 text-[15px]"
                >
                  Book an Appointment
                </Link>
                {/* Simulated view profile button */}
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-primary-200 text-primary-900 font-semibold rounded-[12px] hover:bg-primary-50 transition-colors text-[15px]"
                >
                  View Profile
                </button>
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CertificatesSection />

      <SpecialistBanner />

    </div>
  );
};

export default OurTeam;
