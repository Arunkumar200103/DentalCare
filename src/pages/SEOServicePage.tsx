import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ChevronRight, Calendar, Clock, MapPin, Phone } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const seoData: Record<string, { title: string, heading: string, desc: string }> = {
  'best-psychiatrist-in-chennai': { title: 'Best Psychiatrist In Chennai', heading: 'Best Psychiatrist In Chennai', desc: 'Find the best psychiatrist in Chennai at DS Clinic. Our experienced specialists provide comprehensive mental health care, compassionate support, and evidence-based treatments.' },
  'online-psychiatrist-in-chennai': { title: 'Online Psychiatrist In Chennai', heading: 'Online Psychiatrist In Chennai', desc: 'Consult an online psychiatrist in Chennai from the comfort of your home. DS Clinic offers secure and confidential tele-psychiatry services.' },
  'child-psychiatrist-in-chennai': { title: 'Child Psychiatrist In Chennai', heading: 'Child Psychiatrist In Chennai', desc: 'Expert child psychiatrist in Chennai providing compassionate care for developmental and behavioral issues in children and adolescents.' },
  'psychiatric-counseling-in-chennai': { title: 'Psychiatric Counseling In Chennai', heading: 'Psychiatric Counseling In Chennai', desc: 'Professional psychiatric counseling in Chennai. We offer a safe space for therapy, helping you overcome emotional challenges and build resilience.' },
  'psychiatrist-near-me-in-chennai': { title: 'Psychiatrist Near Me In Chennai', heading: 'Psychiatrist Near Me In Chennai', desc: 'Looking for a psychiatrist near you in Chennai? Visit DS Clinic in Avadi for expert mental health consultations and personalized care plans.' },
  'hypnotherapist-in-chennai': { title: 'Hypnotherapist In Chennai', heading: 'Hypnotherapist In Chennai', desc: 'Discover effective hypnotherapy in Chennai. Our specialists use clinical hypnotherapy to treat anxiety, stress, and behavioral addictions.' },
  'psychiatric-clinic-in-chennai': { title: 'Psychiatric Clinic In Chennai', heading: 'Psychiatric Clinic In Chennai', desc: 'DS Clinic is a leading psychiatric clinic in Chennai offering holistic treatments for mental wellness and psychiatric disorders.' },
  'mental-health-clinic-in-chennai': { title: 'Mental Health Clinic In Chennai', heading: 'Mental Health Clinic In Chennai', desc: 'Visit our mental health clinic in Chennai for comprehensive psychological and psychiatric care tailored to your unique needs.' },
  'treatment-for-adhd-in-chennai': { title: 'Treatment For ADHD In Chennai', heading: 'Treatment For ADHD In Chennai', desc: 'Effective treatment for ADHD in Chennai. Our specialists offer thorough evaluations and customized management plans for Attention Deficit Hyperactivity Disorder.' },
  'treatment-for-ocd-in-chennai': { title: 'Treatment For OCD In Chennai', heading: 'Treatment For OCD In Chennai', desc: 'Evidence-based treatment for OCD in Chennai. We use cognitive-behavioral therapy and pharmacotherapy to help manage Obsessive-Compulsive Disorder.' },
  'treatment-for-depression-in-chennai': { title: 'Treatment For Depression In Chennai', heading: 'Treatment For Depression In Chennai', desc: 'Comprehensive treatment for depression in Chennai. Let our experts guide you out of depression towards a brighter, healthier future.' },
  'treatment-for-anxiety-in-chennai': { title: 'Treatment For Anxiety In Chennai', heading: 'Treatment For Anxiety In Chennai', desc: 'Advanced treatment for anxiety in Chennai. Overcome panic attacks, social anxiety, and generalized anxiety disorders with our expert help.' },
  'treatment-for-sleep-disorder-in-chennai': { title: 'Treatment For Sleep Disorder In Chennai', heading: 'Treatment For Sleep Disorder In Chennai', desc: 'Specialized treatment for sleep disorders in Chennai. We diagnose and manage insomnia, sleep apnea, and other sleep-related issues.' },
  'treatment-for-schizophrenia-in-chennai': { title: 'Treatment For Schizophrenia In Chennai', heading: 'Treatment For Schizophrenia In Chennai', desc: 'Compassionate treatment for schizophrenia in Chennai. We provide long-term care, medication management, and support for patients and families.' },
  'treatments-for-addiction-disorders': { title: 'Treatments For Addiction Disorders', heading: 'Treatments For Addiction Disorders', desc: 'Comprehensive treatments for addiction disorders in Chennai. De-addiction programs for alcohol, substance abuse, and digital dependencies.' },
  'psychiatrist-for-marriage-counseling': { title: 'Marriage & Relationship Counseling', heading: 'Psychiatrist For Marriage Counseling And Relationship Counseling', desc: 'Expert psychiatrist for marriage counseling and relationship counseling in Chennai. Build stronger bonds and resolve conflicts constructively.' },
  'electroconvulsive-therapy-in-chennai': { title: 'Electroconvulsive Therapy (ECT) In Chennai', heading: 'Electroconvulsive Therapy In Chennai / ECT In Chennai', desc: 'Safe and effective Electroconvulsive Therapy (ECT) in Chennai. Recommended for severe, treatment-resistant depression and mood disorders.' },
  'suicide-prevention-clinic-in-chennai': { title: 'Suicide Prevention Clinic In Chennai', heading: 'Suicide Prevention Clinic In Chennai', desc: 'Urgent care and support at our suicide prevention clinic in Chennai. Immediate psychiatric intervention for individuals in crisis.' },
  'admission-psychiatric-hospital-chennai': { title: 'Admission Psychiatric Hospital Chennai', heading: 'Admission Psychiatric Hospital Chennai', desc: 'Information and assistance for admission to a psychiatric hospital in Chennai. Get the inpatient care and observation needed for severe mental health conditions.' },
  'best-diabetologist-in-chennai': { title: 'Best Diabetologist In Chennai', heading: 'Best Diabetologist In Chennai', desc: 'Consult the best diabetologist in Chennai at DS Clinic. Dr. Shylaja Nirmal provides expert care for diabetes management and endocrine health.' },
  'diabetes-clinic-in-chennai': { title: 'Diabetes Clinic In Chennai', heading: 'Diabetes Clinic In Chennai', desc: 'DS Clinic is a premier diabetes clinic in Chennai offering comprehensive testing, continuous monitoring, and personalized diabetes care plans.' },
  'thyroid-doctor-in-chennai': { title: 'Thyroid Doctor In Chennai', heading: 'Thyroid Doctor In Chennai', desc: 'Looking for a thyroid doctor in Chennai? We specialize in the diagnosis and management of hypothyroidism, hyperthyroidism, and other thyroid disorders.' },
  'pcos-treatment-in-chennai': { title: 'PCOS Treatment In Chennai', heading: 'PCOS Treatment In Chennai', desc: 'Effective PCOS treatment in Chennai. Manage Polycystic Ovary Syndrome with our expert medical guidance, lifestyle counseling, and hormonal care.' },
  'general-physician-near-me-in-chennai': { title: 'General Physician Near Me In Chennai', heading: 'General Physician Near Me In Chennai', desc: 'Find a trusted general physician near you in Chennai at DS Clinic. We offer routine check-ups, infectious disease treatment, and comprehensive family health planning.' },
  'metabolic-disorders-treatment-in-chennai': { title: 'Metabolic Disorders Treatment In Chennai', heading: 'Metabolic Disorders Treatment In Chennai', desc: 'Advanced metabolic disorders treatment in Chennai. Proactive management for metabolic syndrome, cholesterol, and obesity-related complications.' }
};

const SEOServicePage = () => {
  const { slug } = useParams();
  const data = slug && seoData[slug] ? seoData[slug] : {
    title: 'Expert Healthcare Services in Chennai',
    heading: 'Expert Healthcare Services in Chennai',
    desc: 'Comprehensive mental health and medical care in Chennai provided by experienced specialists at DS Clinic.'
  };

  useSEO({
    title: `${data.title} | DS Clinic`,
    description: data.desc,
    keywords: `${data.title.toLowerCase()}, psychiatrist chennai, diabetologist chennai, DS Clinic avadi`
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 font-sans selection:bg-primary-200 selection:text-primary-900">
      
      {/* Premium Hero Section */}
      <div className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-primary-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-10 object-cover"></div>
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-400/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-500/20 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center text-primary-100/80 text-[13px] uppercase tracking-widest font-semibold mb-8 gap-2"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white bg-white/10 px-3 py-1 rounded-full border border-white/10">{data.title}</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-[32px] sm:text-[48px] lg:text-[56px] font-black text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-sm">
              {data.heading}
            </h1>
            <p className="text-[16px] sm:text-[20px] lg:text-[22px] text-primary-50 font-medium leading-[1.6] sm:leading-relaxed max-w-3xl opacity-90 border-l-4 border-accent-500 pl-4 sm:pl-6">
              {data.desc}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          
          {/* Main Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100/60 mb-8 backdrop-blur-xl">
              <article className="prose prose-lg prose-slate max-w-none">
                
                <div className="flex items-center mb-5 sm:mb-6">
                  <div className="w-8 sm:w-12 h-1 bg-accent-500 rounded-full mr-3 sm:mr-4 shrink-0"></div>
                  <h2 className="text-[24px] sm:text-[32px] font-extrabold text-slate-900 m-0 leading-tight">
                    {data.title}: Expert Care at DS Clinic
                  </h2>
                </div>
                <p className="text-[15px] sm:text-[17px] text-slate-600 leading-[1.8] mb-8 sm:mb-10">
                  {data.desc} Are you seeking the highest standard of professional healthcare in Chennai? Look no further than DS Clinic, your dedicated source for specialized medical and wellness services. Our experienced team is committed to guiding you towards positive life changes, using the most effective, evidence-based treatments available.
                </p>

                <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-100 mb-8 sm:mb-10 group hover:shadow-md transition-all duration-300">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 mt-0 mb-3 sm:mb-4 flex items-center">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-3 text-sm shrink-0">1</span>
                    Discover the Benefits
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed m-0">
                    At DS Clinic, our specialists focus on harnessing the potential of your mind and body to address a wide range of concerns. Whether you're dealing with stress, anxiety, clinical disorders, or personal development hurdles, our expert intervention can help you tap into your inner resources and drive positive change.
                  </p>
                </div>

                <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-100 mb-8 sm:mb-10 group hover:shadow-md transition-all duration-300">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-slate-900 mt-0 mb-3 sm:mb-4 flex items-center">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mr-3 text-sm shrink-0">2</span>
                    Why Choose Us?
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed m-0">
                    Our dedicated team boasts a track record of success, helping countless individuals achieve their personal and professional goals. Through skilled guidance, compassionate care, and the application of modern medical techniques, we aim to bring about life-altering results for all our patients.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-primary-200 transition-colors">
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-2 sm:mb-3">Professional Care</h4>
                    <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
                      We provide a safe, confidential environment. Our doctors are highly trained in various modalities, ensuring tailored treatment.
                    </p>
                  </div>
                  <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-accent-200 transition-colors">
                    <h4 className="text-[17px] sm:text-[18px] font-bold text-slate-900 mb-2 sm:mb-3">What to Expect</h4>
                    <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
                      Expect a comprehensive assessment followed by a personalized care plan that fosters trust and positive medical outcomes.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-8 sm:pt-10">
                  <h3 className="text-[22px] sm:text-[26px] font-extrabold text-slate-900 mb-3 sm:mb-4">Ready to Begin Your Journey?</h3>
                  <p className="text-[15px] sm:text-[17px] text-slate-600 leading-relaxed mb-0">
                    If you're ready to experience the transformative potential of our care in Chennai, contact DS Clinic today. Our specialists are ready to help you overcome challenges, break free from limiting conditions, and embark on a path towards self-improvement and well-being.
                  </p>
                </div>
              </article>
            </div>
          </motion.div>

          {/* Sidebar Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            {/* Expert Doctors Widget */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100/60 sticky top-32">
              <h3 className="text-[20px] font-bold text-slate-900 mb-6 flex items-center uppercase tracking-wider text-sm">
                <span className="w-12 h-px bg-slate-200 mr-4"></span>
                Expert Team
                <span className="w-12 h-px bg-slate-200 ml-4"></span>
              </h3>
              
              <div className="space-y-6">
                <div className="group rounded-2xl p-5 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-primary-100 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                      <span className="font-bold text-primary-900 text-lg">NK</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[17px] text-slate-900 group-hover:text-primary-700 transition-colors">Dr. Nirmal Kumar Seenan</h4>
                      <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mt-1">MD (Psychiatry)</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-100">
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-primary-500 mt-0.5 mr-2 shrink-0" />
                      <div>
                        <p className="text-[13px] font-bold text-slate-700 mb-1">Direct Consultation</p>
                        <p className="text-[13px] text-slate-500">Mon-Sat: 5:00 PM - 9:00 PM</p>
                        <p className="text-[13px] text-slate-500">Sun: 10:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl p-5 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-secondary-100 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center shrink-0 border-2 border-white shadow-sm">
                      <span className="font-bold text-secondary-900 text-lg">SN</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[17px] text-slate-900 group-hover:text-secondary-700 transition-colors">Dr. Shylaja Nirmal</h4>
                      <p className="text-[12px] font-bold text-slate-500 uppercase tracking-widest mt-1">F.Diab, CCEBDM</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-100">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-secondary-500 mr-2 shrink-0" />
                      <p className="text-[13px] font-bold text-slate-700">Online Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                <a href="tel:+919884656834" className="flex items-center p-4 bg-primary-900 text-white rounded-2xl shadow-md hover:bg-primary-800 transition-all hover:-translate-y-0.5 group">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[12px] font-medium text-primary-200 uppercase tracking-wider mb-0.5">Call for Appointment</p>
                    <p className="font-bold text-[16px]">+91 98846 56834</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Appointment Form Section Below */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="bg-white rounded-[32px] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100/60 overflow-hidden relative">
           {/* Decorative bg for form */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-bl-full pointer-events-none opacity-50"></div>
           <div className="relative z-10">
             <AppointmentForm />
           </div>
        </div>
      </motion.div>

    </div>
  );
};

export default SEOServicePage;
