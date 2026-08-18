import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Best Psychiatrist In Chennai', path: '/service/best-psychiatrist-in-chennai' },
        { name: 'Online Psychiatrist In Chennai', path: '/service/online-psychiatrist-in-chennai' },
        { name: 'Child Psychiatrist In Chennai', path: '/service/child-psychiatrist-in-chennai' },
        { name: 'Psychiatric Counseling In Chennai', path: '/service/psychiatric-counseling-in-chennai' },
        { name: 'Psychiatrist Near Me In Chennai', path: '/service/psychiatrist-near-me-in-chennai' },
        { name: 'Hypnotherapist In Chennai', path: '/service/hypnotherapist-in-chennai' },
        { name: 'Psychiatric Clinic In Chennai', path: '/service/psychiatric-clinic-in-chennai' },
        { name: 'Mental Health Clinic In Chennai', path: '/service/mental-health-clinic-in-chennai' },
        { name: 'Treatment For ADHD In Chennai', path: '/service/treatment-for-adhd-in-chennai' },
        { name: 'Treatment For OCD In Chennai', path: '/service/treatment-for-ocd-in-chennai' },
        { name: 'Treatment For Depression In Chennai', path: '/service/treatment-for-depression-in-chennai' },
        { name: 'Treatment For Anxiety In Chennai', path: '/service/treatment-for-anxiety-in-chennai' },
        { name: 'Treatment For Sleep Disorder In Chennai', path: '/service/treatment-for-sleep-disorder-in-chennai' },
        { name: 'Treatment For Schizophrenia In Chennai', path: '/service/treatment-for-schizophrenia-in-chennai' },
        { name: 'Treatments For Addiction Disorders', path: '/service/treatments-for-addiction-disorders' },
        { name: 'Psychiatrist For Marriage Counseling And Relationship Counseling', path: '/service/psychiatrist-for-marriage-counseling' },
        { name: 'Electroconvulsive Therapy In Chennai / ECT In Chennai', path: '/service/electroconvulsive-therapy-in-chennai' },
        { name: 'Suicide Prevention Clinic In Chennai', path: '/service/suicide-prevention-clinic-in-chennai' },
        { name: 'Admission Psychiatric Hospital Chennai', path: '/service/admission-psychiatric-hospital-chennai' },
        { name: 'Best Diabetologist In Chennai', path: '/service/best-diabetologist-in-chennai' },
        { name: 'Diabetes Clinic In Chennai', path: '/service/diabetes-clinic-in-chennai' },
        { name: 'Thyroid Doctor In Chennai', path: '/service/thyroid-doctor-in-chennai' },
        { name: 'PCOS Treatment In Chennai', path: '/service/pcos-treatment-in-chennai' },
        { name: 'General Physician Near Me In Chennai', path: '/service/general-physician-near-me-in-chennai' },
        { name: 'Metabolic Disorders Treatment In Chennai', path: '/service/metabolic-disorders-treatment-in-chennai' }
      ]
    },
    { name: 'Specialists', path: '/our-team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(11,59,130,0.08)] border-b border-white/40 py-3'
          : 'bg-white border-b border-slate-100 py-5'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center group relative h-[48px] md:h-[56px] lg:h-[64px] w-[160px] md:w-[200px] lg:w-[240px]" onClick={closeMenu}>
            <img src="/images/brand/ds-logo.png" alt="DS Clinic Logo" className="absolute -left-2 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 h-[90px] sm:h-[110px] md:h-[140px] lg:h-[160px] w-auto max-w-none object-contain drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`relative flex items-center px-1 py-1 text-[15px] font-medium transition-colors duration-300 group-hover:text-[#0B3B82] ${
                    location.pathname === link.path
                      ? 'text-[#0B3B82] font-semibold'
                      : 'text-slate-600'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-300" />}
                  {/* Active Indicator & Hover Effect */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-[#0F8B8D] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-40'
                  }`}></span>
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[320px]">
                    <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-slate-100 py-2 flex flex-col max-h-[60vh] overflow-y-auto">
                      {link.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          to={dropItem.path}
                          className="px-5 py-3 text-[14px] text-slate-600 hover:text-primary-900 hover:bg-primary-50 transition-colors border-b border-slate-50 last:border-0 font-medium"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/book-appointment"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-[#0B3B82] to-[#1565C0] text-white text-[15px] font-bold rounded-full hover:shadow-[0_8px_20px_rgba(11,59,130,0.25)] hover:-translate-y-0.5 transition-all duration-300 border border-transparent hover:border-blue-400/30"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                isOpen ? 'bg-primary-50 text-primary-900 rotate-90' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                          ? 'bg-primary-50 text-primary-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                        }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-primary-600' : 'text-slate-400'}`} />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                          ? 'bg-primary-50 text-primary-900'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {/* Mobile Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/80 rounded-lg mt-1 border border-slate-100/50">
                          {link.dropdown.map((dropItem, idx) => (
                            <Link
                              key={idx}
                              to={dropItem.path}
                              onClick={closeMenu}
                              className={`block px-4 py-2.5 rounded-lg text-[14px] transition-colors ${
                                location.pathname === dropItem.path
                                  ? 'bg-white text-primary-700 font-bold shadow-sm'
                                  : 'text-slate-600 hover:text-primary-900 hover:bg-white'
                              }`}
                            >
                              {dropItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link
                  to="/book-appointment"
                  onClick={closeMenu}
                  className="block w-full text-center px-[22px] py-[12px] bg-primary-900 text-white font-semibold rounded-xl hover:bg-primary-600 shadow-md transition-colors"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
