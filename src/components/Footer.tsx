import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-sky-500" />
              <span className="text-2xl font-bold">DentalCare</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing exceptional dental care with a focus on patient comfort and advanced treatment techniques. 
              Your oral health is our priority.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock size={16} />
              <span className="text-sm">Mon-Fri: 8AM-6PM | Sat: 9AM-3PM | Sun: Closed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">Services</Link></li>
              <li><Link to="/doctor" className="text-gray-300 hover:text-sky-400 transition-colors">Our Staff</Link></li>
              <li><Link to="/book-appointment" className="text-gray-300 hover:text-sky-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} className="text-sky-500" />
                <span className="text-sm">123 Medical Center Dr<br />Healthcare City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-sky-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-sky-500" />
                <span className="text-sm">info@dentalcare.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 DentalCare Clinic. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
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