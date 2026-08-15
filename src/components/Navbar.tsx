import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
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
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <img src="/images/brand/ds-logo.png" alt="DS Clinic Logo" className="h-[48px] md:h-[56px] lg:h-[64px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-1 py-1 text-[15px] font-medium transition-colors duration-300 group ${location.pathname === link.path
                    ? 'text-[#0B3B82] font-semibold'
                    : 'text-slate-600 hover:text-[#0B3B82]'
                  }`}
              >
                {link.name}
                {/* Active Indicator & Hover Effect */}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-[#0F8B8D] transition-all duration-300 ${
                  location.pathname === link.path ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-40'
                }`}></span>
              </Link>
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
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                      ? 'bg-primary-50 text-primary-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-primary-900'
                    }`}
                >
                  {link.name}
                </Link>
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
