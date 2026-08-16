import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Heart, Activity, Stethoscope, Shield, ArrowRight, Salad } from 'lucide-react';
import MentalWellnessBanner from '../components/banners/MentalWellnessBanner';
import DiabetesCareBanner from '../components/banners/DiabetesCareBanner';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};



const Services = () => {
  useSEO({
    title: 'Our Services | Psychiatry, Diabetology & General Medicine | DS Clinic',
    description: 'Explore our specialized medical services including cognitive therapy, de-addiction, diabetes management, and metabolic health at DS Clinic Avadi.'
  });

  const psychServices = [
    {
      id: "01",
      title: "De-addiction Therapy",
      description: "Comprehensive recovery programs for substance, alcohol, and digital dependencies, using medically assisted treatments and continuous therapeutic support. Reclaim control and step out of the shadows.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "02",
      title: "Anxiety & Depression",
      description: "Evidence-based management of mood disorders. We utilize pharmacological interventions and personalized cognitive behavioral therapy to guide you from emotional stress toward enduring mental wellness.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "03",
      title: "Sexual Health Concerns",
      description: "Strictly confidential consulting and therapeutic assistance for erectile difficulties, loss of libido, and psychosexual anxiety. Professional, supportive care in a private environment.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "04",
      title: "Neuropsychiatry",
      description: "Advanced diagnostic and therapeutic care for neurocognitive disorders, dementia, adult ADHD, and chronic headaches. Combining modern psychiatric care with deep neurological expertise.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "05",
      title: "Schizophrenia & Bipolar Disorder",
      description: "Specialized, compassionate care for severe mood and psychotic disorders. We focus on long-term stability, medication management, and family support to help patients regain a functional, fulfilling life.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "06",
      title: "Counselling & Psychotherapy",
      description: "Professional therapeutic interventions providing a safe space to explore emotional challenges, build resilience, and develop effective coping strategies.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "07",
      title: "Insomnia & Sleep Disorders",
      description: "Comprehensive evaluation and treatment for sleep-related issues, helping you achieve restorative sleep through behavioral therapies and medical management.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "08",
      title: "Headache & Migraine",
      description: "Targeted diagnosis and multifaceted treatment approaches to manage chronic headaches and migraines, improving your daily quality of life.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "09",
      title: "Other Psychiatry Consultation",
      description: "Expert evaluation and holistic care plans for various other psychiatric and psychological conditions not covered under specific programs.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const diabetologyServices = [
    {
      id: "10",
      title: "Type 1 & 2 Diabetes",
      description: "Personalized care plans including insulin regulation, continuous glucose monitoring, and tailored diet charts. Effective management strategies to prevent long-term complications.",
      icon: Activity,
      image: "/images/diabetes-care-service.png"
    },
    {
      id: "11",
      title: "Metabolic & Thyroid Care",
      description: "Comprehensive testing and management of hypothyroidism, hyperthyroidism, PCOS, and other endocrine disorders. Advanced medical support for your metabolic system.",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "12",
      title: "General Consultations",
      description: "Routine check-ups, treatment of infectious diseases, blood pressure management, and comprehensive family health planning. Your primary destination for complete healthcare.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "13",
      title: "Lifestyle Counseling",
      description: "Expert guidance on weight management, heart-healthy diets, and preventative strategies to mitigate health risks before they develop. Build a sustainable foundation for wellness.",
      icon: Salad,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background-main font-sans pt-24 pb-12 overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-50/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-50/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>

      {/* 1. Page Header */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary-50 text-primary-900 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase mb-6 border border-primary-100 shadow-sm">
              <Activity className="w-4 h-4" />
              <span>Specialized Care</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-[44px] md:text-[56px] font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Expert Medical <span className="text-primary-900">Specialties.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[18px] text-slate-600 font-medium leading-[1.7]">
              Discover our comprehensive range of specialized healthcare services, combining the best of psychiatric care, metabolic health, and general medicine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <MentalWellnessBanner />

      {/* 2. Psychiatry Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          {/* Category Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 pb-8 border-b border-slate-200/60"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary-900 text-white rounded-xl shadow-md">
                <Brain className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-primary-700 font-bold tracking-widest uppercase text-xs mb-1">Dr. Nirmal Kumar Seenan</h2>
                <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight">Psychiatry & Mental Wellness</h3>
              </div>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-[17px] text-slate-600 font-medium max-w-3xl leading-relaxed mt-4">
              Personalized care for your mind, emotions and overall wellbeing. We utilize modern pharmacological and therapeutic interventions to ensure lasting mental health.
            </motion.p>
          </motion.div>

          {/* Alternating Service Cards */}
          <div className="space-y-16 lg:space-y-24">
            {psychServices.map((service, index) => {
              const isImageRight = index % 2 === 0;
              return (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  key={service.id} 
                  className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                >
                  {/* Image Block */}
                  <motion.div variants={fadeInUp} className="w-full lg:w-[45%] h-[350px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>

                  {/* Text Block */}
                  <motion.div variants={fadeInUp} className="w-full lg:w-[55%] flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-4xl font-black text-slate-200 leading-none">{service.id}</span>
                      <div className="h-10 w-px bg-slate-200"></div>
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center relative">
                        <service.icon className="w-6 h-6 text-primary-900" strokeWidth={1.5} />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      </div>
                    </div>
                    <h4 className="text-[32px] lg:text-[40px] font-bold text-slate-900 mb-6 leading-[1.1]">{service.title}</h4>
                    <p className="text-[17px] text-slate-600 leading-[1.7] mb-8 font-medium max-w-xl">
                      {service.description}
                    </p>
                    <div>
                      <Link to="/book-appointment" className="inline-flex items-center text-primary-900 font-bold hover:text-primary-600 transition-colors text-[15px] group bg-primary-50 px-5 py-2.5 rounded-xl border border-primary-100">
                        Consult a Specialist <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <DiabetesCareBanner />

      {/* 3. Diabetology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-4 bg-white relative z-10 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto">
          {/* Category Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 pb-8 border-b border-slate-200/60"
          >
            <motion.div variants={fadeInUp} className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-secondary-600 text-white rounded-xl shadow-md">
                <Activity className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-secondary-600 font-bold tracking-widest uppercase text-xs mb-1">Dr. Shylaja Nirmal</h2>
                <h3 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight">Diabetology & Metabolic Care</h3>
              </div>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-[17px] text-slate-600 font-medium max-w-3xl leading-relaxed mt-4">
              Comprehensive care for diabetes, endocrine health, and long-term wellness. A proactive, holistic approach to managing metabolic conditions.
            </motion.p>
          </motion.div>

          {/* Alternating Service Cards */}
          <div className="space-y-16 lg:space-y-24">
            {diabetologyServices.map((service, index) => {
              const isImageRight = index % 2 === 0;
              return (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  key={service.id} 
                  className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
                >
                  {/* Image Block */}
                  <motion.div variants={fadeInUp} className="w-full lg:w-[45%] h-[350px] lg:h-[450px] rounded-[24px] overflow-hidden shadow-lg border border-slate-100 relative group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>

                  {/* Text Block */}
                  <motion.div variants={fadeInUp} className="w-full lg:w-[55%] flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-4xl font-black text-slate-200 leading-none">{service.id}</span>
                      <div className="h-10 w-px bg-slate-200"></div>
                      <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center relative">
                        <service.icon className="w-6 h-6 text-secondary-600" strokeWidth={1.5} />
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      </div>
                    </div>
                    <h4 className="text-[32px] lg:text-[40px] font-bold text-slate-900 mb-6 leading-[1.1]">{service.title}</h4>
                    <p className="text-[17px] text-slate-600 leading-[1.7] mb-8 font-medium max-w-xl">
                      {service.description}
                    </p>
                    <div>
                      <Link to="/book-appointment" className="inline-flex items-center text-secondary-700 font-bold hover:text-secondary-500 transition-colors text-[15px] group bg-secondary-50 px-5 py-2.5 rounded-xl border border-secondary-100">
                        Consult a Specialist <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;