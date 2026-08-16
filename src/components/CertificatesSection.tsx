import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Award } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'First Prize in Oral Paper Presentation',
    image: '/images/certificates/conference1.jpeg',
    doctor: 'International Conference Award'
  },
  {
    id: 2,
    title: 'First Prize in Oral Paper Presentation',
    image: '/images/certificates/conference2.jpeg',
    doctor: 'International Conference Award'
  },
  {
    id: 3,
    title: 'Certificate of Tamilnadu clinical establishment',
    image: '/images/certificates/awards.jpeg',
    doctor: 'Clinical Establishment'
  },
  {
    id: 4,
    title: 'Certificate of F.Diab (UK)',
    image: '/images/certificates/certificate.jpeg',
    doctor: 'Specialized Certification'
  },
  {
    id: 5,
    title: 'Certificate of diabetes - Dr Shylaja',
    image: '/images/certificates/Certificate_of_diabetes_Dr_Shylaja.jpeg',
    doctor: 'Specialized Certification'
  },
  {
    id: 6,
    title: 'Masterclass in Diabetes - Dr Shylaja',
    image: '/images/certificates/Masterclass_in_Diabetes_Dr_Shylaja.jpeg',
    doctor: 'Specialized Certification'
  },
  {
    id: 7,
    title: 'Best Post Graduate Award',
    image: '/images/certificates/postgraduate.jpeg',
    doctor: 'Academic Excellence'
  },
  {
    id: 8,
    title: 'Course in Psychiatry Research',
    image: '/images/certificates/psychiatry.jpeg',
    doctor: 'Dr. Nirmal Kumar Seenan'
  },
  {
    id: 9,
    title: 'Workshop in rTMS',
    image: '/images/certificates/Workshop.jpeg',
    doctor: 'Dr. Nirmal Kumar Seenan'
  },
  {
    id: 10,
    title: 'Diabetes Course Certificate',
    image: '/images/certificates/Diabetes.jpeg',
    doctor: 'Dr. Nirmal Kumar Seenan'
  }
];

const CertificatesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
      <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] bg-secondary-100/40 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm text-primary-900 px-5 py-2.5 rounded-full text-[13px] font-bold tracking-widest uppercase mb-6 border border-slate-200 shadow-sm"
          >
            <Award className="w-4 h-4 text-accent-500" />
            <span>Recognized Excellence</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[36px] md:text-[48px] font-extrabold text-slate-900 mb-5 tracking-tight leading-[1.1]"
          >
            Certificates & <span className="text-primary-900 bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-secondary-600">Awards</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[17px] text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A testament to our unwavering commitment to medical excellence, continuous learning, and providing world-class healthcare.
          </motion.p>
        </div>

        {/* Premium Mobile Carousel / Desktop Grid */}
        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 gap-6 sm:gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {certificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative min-w-[85vw] sm:min-w-0 h-[400px] sm:h-[380px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-pointer group snap-center flex-shrink-0 border border-white/80 bg-white"
              onClick={() => setSelectedImage(cert.image)}
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80';
                }}
              />
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              {/* Premium Floating Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-secondary-300 font-bold text-[11px] uppercase tracking-[0.2em] mb-2">{cert.doctor}</p>
                  <h3 className="text-[20px] font-bold text-white leading-[1.3] mb-3">{cert.title}</h3>
                  <div className="flex items-center text-white/90 text-[13px] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <ZoomIn className="w-4 h-4 mr-2" /> View Certificate
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WhatsApp-like Lightbox Modal (Premium Version) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 sm:p-8"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white p-3 bg-white/10 rounded-full backdrop-blur-md transition-all z-10 hover:scale-110 hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged Certificate" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl relative z-0 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
