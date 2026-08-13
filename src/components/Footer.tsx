import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-indigo-500 animate-pulse" />
              <span className="text-2xl font-bold tracking-tight">DS Clinic</span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Providing exceptional, confidential neuropsychiatric, de-addiction, and psychosexual care in Avadi, Chennai. 
              Our focus is to empower your mental wellbeing and overall health.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock size={16} className="text-indigo-400" />
              <span className="text-sm">Mon-Sat: 6:00 PM - 9:30 PM | Sun: Closed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</Link></li>
              <li><Link to="/doctor" className="text-gray-300 hover:text-indigo-400 transition-colors">Our Doctor</Link></li>
              <li><Link to="/nurses" className="text-gray-300 hover:text-indigo-400 transition-colors">Counselors</Link></li>
              <li><Link to="/book-appointment" className="text-gray-300 hover:text-indigo-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="text-indigo-500 mt-1 flex-shrink-0" />
                <span className="text-sm">No. 27, Moses Street,<br />West Gandhi Nagar,<br />Avadi, Chennai - 600054</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-indigo-500" />
                <span className="text-sm">+91 94441 62657</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-indigo-500" />
                <span className="text-sm">info@dsclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 DS Clinic. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;