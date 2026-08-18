import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import {
  ArrowRight, 
  Brain, 
  Heart, 
  Activity,
  Calendar,
  Shield,
  ShieldCheck,
  Stethoscope,
  UserRound,
  HeartHandshake,
  ClipboardCheck,
  Plus,
  Minus,
  Quote,
  Star
} from 'lucide-react';
import AppointmentBanner from '../components/banners/AppointmentBanner';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const AnimatedCounter = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (val) => setDisplayValue(Math.floor(val))
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{displayValue}{suffix}</span>;
};


const Home = () => {
  useSEO({
    title: 'DS Clinic | Best Psychiatrist & Diabetologist in Avadi, Chennai',
    description: 'Expert neuropsychiatry, diabetology, and general medical care in Avadi, Chennai. Dr. Nirmal Kumar Seenan & Dr. Shylaja Nirmal provide comprehensive treatments.',
    keywords: 'DS Clinic, DS Clinic Avadi, ds clinic, ds clinic chennai, ds clinic google, Psychiatrist Avadi, Diabetologist Avadi, Neuropsychiatrist Chennai, Dr. Nirmal Kumar Seenan, Dr. Shylaja Nirmal, Schizophrenia, Bipolar Disorder, counseling, diabetes care, mental wellness, clinic in avadi'
  });

  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      category: "General",
      q: "How can I book an appointment?",
      a: "You can book an appointment easily through our online booking system, by calling our emergency line at +91 98846 56834, or by visiting our clinic during operating hours."
    },
    {
      id: 2,
      category: "Psychiatry",
      q: "Are consultations completely confidential?",
      a: "Absolutely. We adhere to strict patient confidentiality protocols. Your medical records, consultation notes, and personal information are securely protected and never shared without explicit consent."
    },
    {
      id: 3,
      category: "Psychiatry",
      q: "How does a psychiatric consultation work?",
      a: "Your first visit involves a comprehensive assessment where the specialist listens to your concerns, reviews your medical history, and collaboratively develops a tailored treatment plan."
    },
    {
      id: 4,
      category: "Diabetes",
      q: "What should I bring for my diabetes consultation?",
      a: "Please bring any recent blood test reports, your current medication list, past medical records, and your daily blood glucose monitoring log if you maintain one."
    },
    {
      id: 5,
      category: "Diabetes",
      q: "How frequently should diabetes follow-ups happen?",
      a: "Depending on your control levels, follow-ups are typically scheduled every 3 to 6 months. We will provide a customized monitoring schedule during your visit."
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background-main overflow-hidden pt-20">
      
      {/* 1. Enhanced Hero Section */}
      <section className="relative w-full min-h-auto pt-8 sm:pt-12 pb-10 lg:min-h-[760px] lg:py-0 flex items-center overflow-hidden">
        
        {/* Desktop Background Layer */}
        <div 
          className="hidden lg:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat lg:bg-[center_right] opacity-100"
          style={{ backgroundImage: "url('/images/hero/hero-background.png')" }}
        ></div>

        {/* Mobile Background Layer */}
        <div 
          className="block lg:hidden absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero/hero-background-mobile.png')" }}
        ></div>
        
        {/* Desktop Gradient Overlay (Hidden on Mobile) */}
        <div className="hidden lg:block absolute inset-0 z-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent w-[70%]"></div>

        {/* Mobile Gradient Overlay (Very soft, just to ensure contrast) */}
        <div className="block lg:hidden absolute inset-0 z-0 bg-white/40"></div>

        <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch h-full">
          
          {/* Text Content (LEFT on Desktop, TOP on Mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[55%] flex flex-col justify-center space-y-5 lg:space-y-8 pt-4 lg:pt-0"
          >
            <div className="inline-flex items-center text-[#0B3B82] lg:text-blue-300 font-bold tracking-[1.5px] uppercase text-[10px] sm:text-[11px]">
              <span>SPECIALIZED CARE FOR MIND & BODY</span>
            </div>
            
            {/* Responsive Typography */}
            <h1 className="text-[32px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] font-[800] text-[#0F172A] lg:text-white leading-[1.1] tracking-tight pr-4 sm:pr-0">
              Better <span className="text-[#0B3B82] lg:text-blue-400">Mental Health.</span><br />
              Better <span className="text-[#0F8B8D] lg:text-teal-400">Everyday Living.</span>
            </h1>
            
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] text-[#475569] lg:text-slate-300 leading-[1.6] lg:leading-[1.7] font-medium w-full max-w-[100%] lg:max-w-[480px]">
              Personalized psychiatric and diabetology care tailored<br className="hidden lg:block" />
              to your unique needs.<br className="hidden lg:block" />
              Your well-being is our priority.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link to="/book-appointment" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border border-transparent text-[14px] sm:text-[15px] font-bold rounded-[14px] text-white bg-[#0B3B82] hover:bg-[#092c63] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-300 group">
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 border-2 border-[#0B3B82] lg:border-white/30 text-[14px] sm:text-[15px] font-bold rounded-[14px] text-[#0B3B82] lg:text-white hover:bg-[#0B3B82] hover:border-[#0B3B82] lg:hover:bg-white lg:hover:text-[#0B3B82] transition-colors duration-300">
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators (2 Columns on Mobile, Row on Desktop) */}
            <div className="pt-6 lg:pt-8 grid grid-cols-2 md:flex md:flex-row md:flex-wrap gap-y-3 gap-x-2 md:gap-4 lg:gap-8 w-full">
              {[
                { icon: ShieldCheck, text: "Confidential Care" },
                { icon: UserRound, text: "Expert Consultation" },
                { icon: HeartHandshake, text: "Personalized Care" },
                { icon: ClipboardCheck, text: "Evidence-Based" }
              ].map((item, i) => (
                <div key={i} className="flex flex-row items-center space-x-2 group">
                  <item.icon className="w-4 h-4 lg:w-[18px] lg:h-[18px] text-[#0B3B82] shrink-0" strokeWidth={2} />
                  <span className="text-[#475569] text-[12px] md:text-[13px] font-semibold leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Visual Content (Mobile Image BELOW text, Desktop uses Background) */}
          <div className="w-full lg:w-[45%] flex justify-center items-end mt-10 lg:mt-0 lg:hidden">
            <motion.img 
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              src="/images/hero/hero-background-mobile.png"
              alt="Medical Care Visualization"
              className="w-full max-w-[420px] object-contain mx-auto"
            />
          </div>
          
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-primary-900 font-bold tracking-widest uppercase text-xs mb-3">
              Why Choose Us
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.15]">
              Excellence in healthcare delivery.
            </motion.h3>
          </motion.div>

          {/* Mobile Swipe Hint */}
          <div className="flex md:hidden items-center justify-end text-slate-400 text-xs font-semibold mb-3 pr-4">
            <span className="animate-pulse flex items-center">Swipe <ArrowRight className="w-3 h-3 ml-1" /></span>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 lg:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 hide-scrollbar snap-x snap-mandatory">
            {[
              { icon: UserRound, title: "Personalized Care", desc: "Every patient receives a unique, thoroughly researched treatment plan tailored specifically to their medical history." },
              { icon: Stethoscope, title: "Experienced Specialists", desc: "Consult directly with dual-specialty doctors holding over a decade of intensive clinical experience." },
              { icon: Shield, title: "Confidential Consultation", desc: "We enforce rigorous privacy standards ensuring your mental and physical health records remain strictly confidential." },
              { icon: Brain, title: "Evidence-Based Treatment", desc: "We utilize modern, clinically proven pharmacological and therapeutic interventions for superior outcomes." },
              { icon: Activity, title: "Modern Healthcare", desc: "Access the latest diagnostic technologies and continuous metabolic monitoring for preventative care." },
              { icon: HeartHandshake, title: "Long-Term Support", desc: "Health is a journey. We provide dedicated follow-up protocols to adapt your treatment as you heal." }
            ].map((feature, i) => (
              <motion.div 
                variants={fadeInUp} 
                key={i} 
                className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-primary-50 p-8 rounded-[28px] border border-slate-100 hover:border-primary-200 transition-all duration-500 group shadow-sm hover:shadow-[0_20px_40px_rgba(11,59,130,0.08)] hover:-translate-y-1 cursor-pointer w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center relative overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-100 rounded-full blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-16 h-16 bg-background-main rounded-[20px] shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-[#0B3B82] group-hover:shadow-md transition-all duration-500 relative z-10 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-[#0B3B82] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-[#0B3B82] transition-colors">{feature.title}</h4>
                <p className="text-[15px] text-slate-600 font-medium leading-[1.6] relative z-10 group-hover:text-slate-700">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Patient Journey Timeline */}
      <section className="py-24 bg-background-main relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-50/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-secondary-600 font-bold tracking-widest uppercase text-xs mb-3">
              Our Approach
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.15]">
              Your journey to better health.
            </motion.h3>
          </motion.div>

          <div className="relative">
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>
            
            {/* Mobile Swipe Hint */}
            <div className="flex lg:hidden items-center justify-end text-slate-400 text-xs font-semibold mb-3 pr-4">
              <span className="animate-pulse flex items-center">Swipe <ArrowRight className="w-3 h-3 ml-1" /></span>
            </div>
            
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 lg:gap-8 relative z-10 snap-x snap-mandatory pb-8 lg:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 hide-scrollbar">
              {[
                { step: "01", title: "Consultation", desc: "Book an appointment and share your medical history.", icon: Calendar },
                { step: "02", title: "Assessment", desc: "Comprehensive evaluation by our specialists.", icon: ClipboardCheck },
                { step: "03", title: "Treatment", desc: "A personalized, evidence-based care plan is created.", icon: Heart },
                { step: "04", title: "Support", desc: "Continuous monitoring and follow-up adjustments.", icon: HeartHandshake }
              ].map((item, i) => (
                <motion.div 
                  variants={fadeInUp} 
                  key={i} 
                  className="relative flex flex-col items-center text-center group w-[85vw] sm:w-[320px] lg:w-auto shrink-0 snap-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-background-main shadow-md mb-6 relative z-10 group-hover:border-primary-100 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-primary-900" strokeWidth={1.5} />
                  </div>
                  <div className="text-primary-300 font-bold text-4xl opacity-50 mb-2">{item.step}</div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[14px] text-slate-600 font-medium leading-[1.6] max-w-[200px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Medical Statistics (Counters) */}
      <section className="py-20 lg:py-28 bg-[#0B1120] relative overflow-hidden">
        {/* Modern Glowing Background Effects */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#0B3B82]/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] lg:w-[400px] h-[250px] lg:h-[400px] bg-[#0F8B8D]/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[32px] p-10 lg:p-16 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle inner top glare */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-12 text-center relative z-10">
              {[
                { value: 15, suffix: "+", label: "Years Experience", icon: Calendar },
                { value: 10, suffix: "k+", label: "Patients Supported", icon: UserRound },
                { value: 8, suffix: "+", label: "Specialized Services", icon: Stethoscope },
                { value: 100, suffix: "%", label: "Confidentiality", icon: ShieldCheck }
              ].map((stat, i) => (
                <motion.div variants={fadeInUp} key={i} className="flex flex-col items-center justify-center relative group">
                  {/* Decorative divider for desktop */}
                  {i !== 3 && <div className="hidden lg:block absolute -right-6 top-1/4 bottom-1/4 w-[1px] bg-white/10"></div>}
                  
                  {/* Decorative divider for mobile grid (between rows) */}
                  {(i === 0 || i === 1) && <div className="block lg:hidden absolute -bottom-6 left-1/4 right-1/4 h-[1px] bg-white/10"></div>}
                  
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-[18px] bg-white/5 flex items-center justify-center mb-6 lg:mb-8 group-hover:bg-white/10 transition-colors duration-300 border border-white/5 shadow-inner">
                    <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-[#0F8B8D]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-white mb-2 lg:mb-3 tracking-tight leading-none flex items-center justify-center">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-[11px] sm:text-[13px] lg:text-[14px] font-semibold text-slate-300 uppercase tracking-widest max-w-[120px] sm:max-w-none mx-auto leading-tight sm:leading-normal">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4.5 Meet the Expert */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B3B82] rounded-[40px] overflow-hidden flex flex-col lg:flex-row relative shadow-[0_20px_60px_rgba(11,59,130,0.15)]">
            {/* Image Side */}
            <div className="w-full lg:w-[45%] h-[350px] lg:h-auto relative bg-[#0F8B8D]">
              <img 
                src="/images/doctor2.png" 
                alt="Dr. Nirmal Kumar Seenan" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B82] to-transparent opacity-60 lg:opacity-30"></div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-[55%] p-10 lg:p-20 relative z-10 flex flex-col justify-center">
              <div className="self-start mb-6">
                <span className="inline-block text-[#0F8B8D] font-bold text-[12px] tracking-widest uppercase bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-sm">
                  Lead Consultant
                </span>
              </div>
              <h3 className="text-3xl md:text-[40px] font-bold text-white mb-4 leading-tight">
                Dr. Nirmal Kumar Seenan
              </h3>
              <p className="text-blue-200 font-semibold text-lg mb-6">MBBS, M.D. Psychiatry, Fellowship in Diabetology</p>
              
              <p className="text-white/80 text-[15px] lg:text-[16px] leading-[1.8] mb-10 max-w-[500px]">
                With more than 12 years of clinical experience in Mind and Medicine, Dr. Nirmal combines advanced psychiatric care with metabolic health management. His holistic approach ensures that both your mind and body receive the expert, compassionate care they deserve.
              </p>
              
              <div className="self-start">
                <Link
                  to="/our-team"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B3B82] font-bold rounded-[14px] hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-xl text-[15px]"
                >
                  Read Full Profile <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Patient Testimonials */}
      <section className="py-24 bg-background-main relative overflow-hidden">
        {/* Subtle background blob */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0F8B8D]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-[#0F8B8D] font-bold tracking-widest uppercase text-xs mb-3">
              Patient Stories
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.15]">
              Real care, real results.
            </motion.h3>
          </motion.div>

          <div className="flex overflow-hidden relative w-full group py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Left and Right fade gradients for smooth entering/exiting */}
            <div className="absolute top-0 bottom-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-background-main to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-background-main to-transparent z-20 pointer-events-none"></div>

            <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] w-max">
              {[
                { text: "Dr. Nirmal is incredibly patient and understanding. His dual expertise helped me manage both my anxiety and my metabolic issues seamlessly.", name: "S. Rao", role: "Patient" },
                { text: "The clinic environment is so calm and professional. I felt completely safe discussing my mental health, and the treatment plan has changed my life.", name: "M. Kumar", role: "Patient" },
                { text: "I highly recommend DS Clinic. The comprehensive approach to my diabetes management, including lifestyle counseling, has been exceptional.", name: "A. Patel", role: "Patient" },
                // Duplicate for infinite scroll loop
                { text: "Dr. Nirmal is incredibly patient and understanding. His dual expertise helped me manage both my anxiety and my metabolic issues seamlessly.", name: "S. Rao", role: "Patient" },
                { text: "The clinic environment is so calm and professional. I felt completely safe discussing my mental health, and the treatment plan has changed my life.", name: "M. Kumar", role: "Patient" },
                { text: "I highly recommend DS Clinic. The comprehensive approach to my diabetes management, including lifestyle counseling, has been exceptional.", name: "A. Patel", role: "Patient" }
              ].map((review, i) => (
                <div 
                  key={i}
                  className="bg-white p-8 lg:p-10 rounded-[32px] border border-[#EAF4FF] shadow-[0_12px_40px_rgba(11,59,130,0.04)] hover:-translate-y-2 transition-transform duration-500 relative flex flex-col w-[320px] md:w-[380px] lg:w-[400px] shrink-0"
                >
                  <Quote className="w-10 h-10 text-[#0F8B8D]/10 absolute top-8 right-8" fill="currentColor" />
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-[#F59E0B]" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-[15px] lg:text-[16px] leading-[1.7] font-medium mb-8 relative z-10 flex-grow whitespace-normal">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-[#EAF4FF] rounded-full flex items-center justify-center text-[#0B3B82] font-bold text-lg shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-[14px]">{review.name}</h5>
                      <span className="text-slate-500 text-[13px] font-medium">{review.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 bg-background-soft">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-primary-900 font-bold tracking-widest uppercase text-xs mb-3">
              FAQ
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="text-3xl lg:text-[40px] font-bold text-slate-900 leading-[1.15]">
              Frequently asked questions.
            </motion.h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {faqs.map((faq) => (
              <motion.div 
                variants={fadeInUp} 
                key={faq.id} 
                className={`bg-white rounded-[16px] border transition-all duration-300 overflow-hidden ${openFaq === faq.id ? 'border-primary-200 shadow-sm' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-[16px] font-bold text-slate-900 pr-8">{faq.q}</span>
                  <span className="text-primary-600 shrink-0 bg-primary-50 p-1.5 rounded-lg">
                    {openFaq === faq.id ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-[15px] text-slate-600 font-medium leading-[1.6]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <AppointmentBanner />

    </div>
  );
};

export default Home;