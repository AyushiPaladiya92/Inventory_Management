import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-950 text-white py-10">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-wrap justify-between items-center text-center md:text-left gap-y-8">
          
          {/* Brand Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-extrabold text-indigo-300 mb-2">Inventra</h3>
            <p className="text-sm text-gray-300">Simplifying inventory management</p>
          </div>
          
          {/* Contact Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="flex items-center space-x-4 text-gray-300">
              <PhoneIcon className="w-5 h-5" />
              <span className="text-sm">+1 (234) 567-890</span>
            </div>
            <div className="flex items-center space-x-4 mt-2 text-gray-300">
              <EnvelopeIcon className="w-5 h-5" />
              <span className="text-sm">support@Inventra.com</span>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-sm text-gray-300 flex items-center hover:text-indigo-400 transition-transform transform hover:scale-105">
              <ShieldCheckIcon className="w-5 h-5 mr-1" />
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-300 flex items-center hover:text-indigo-400 transition-transform transform hover:scale-105">
              <DocumentTextIcon className="w-5 h-5 mr-1" />
              Terms of Service
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-gray-400 text-xs border-t border-gray-700 pt-4">
          &copy; 2024 Inventra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
