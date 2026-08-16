import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#082554]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2 lg:pr-12">
            <Link to="/" className="flex items-center space-x-3 mb-8 group w-max">
              <div className="relative flex items-center justify-center bg-white rounded-xl transition-colors duration-300 overflow-hidden">
                <img src="/images/brand/ds-logo.png" alt="DS Clinic Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-blue-100/80 mb-8 text-base leading-relaxed font-medium max-w-md">
              Providing exceptional, confidential care in Neurology, Psychiatry, Diabetology, and General Medicine in Avadi, Chennai.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="text-sm font-bold text-white uppercase tracking-widest">Clinic Timings</div>
              <div className="text-blue-100 font-medium bg-white/5 w-max px-4 py-2 rounded-xl border border-white/10 text-sm">
                Mon-Sat: 6:00 PM - 9:30 PM <span className="mx-2 text-white/20">|</span> Sun: Closed
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-blue-100/80 hover:text-white transition-colors font-medium text-sm">Home</Link></li>
              <li><Link to="/services" className="text-blue-100/80 hover:text-white transition-colors font-medium text-sm">Services</Link></li>
              <li><Link to="/our-team" className="text-blue-100/80 hover:text-white transition-colors font-medium text-sm">Specialists</Link></li>
              <li><Link to="/book-appointment" className="text-blue-100/80 hover:text-white transition-colors font-medium text-sm">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-blue-100/80 hover:text-white transition-colors font-medium text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Contact Info</h3>
            <div className="space-y-5">
              <div className="flex items-start space-x-3 text-blue-100/80">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <MapPin size={16} className="text-blue-200" />
                </div>
                <span className="text-sm font-medium leading-relaxed">No. 27, Moses Street,<br />West Gandhi Nagar,<br />Avadi, Chennai - 600054</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100/80">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <Phone size={16} className="text-blue-200" />
                </div>
                <span className="text-sm font-bold text-white">+91 98846 56834</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100/80">
                <div className="p-2 bg-white/5 rounded-lg shrink-0">
                  <Mail size={16} className="text-blue-200" />
                </div>
                <span className="text-sm font-medium">info@dsclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-200/60 text-sm font-medium">
            &copy; {new Date().getFullYear()} DS Clinic. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="https://wa.me/919884656834" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-200 hover:bg-green-500 hover:text-white transition-all duration-300" title="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-200 hover:bg-blue-600 hover:text-white transition-all duration-300" title="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-200 hover:bg-pink-600 hover:text-white transition-all duration-300" title="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-200 hover:bg-blue-400 hover:text-white transition-all duration-300" title="Twitter">
              <Twitter size={16} />
            </a>
          </div>

          <div className="flex space-x-6">
            <Link to="#" className="text-blue-200/60 hover:text-white text-sm transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link to="#" className="text-blue-200/60 hover:text-white text-sm transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;