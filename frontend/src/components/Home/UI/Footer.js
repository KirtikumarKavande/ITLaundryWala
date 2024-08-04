import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              Services
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0 md:order-1 text-center">
            <p className="text-sm">&copy; 2024 ItLaundrywala. All rights reserved.</p>
          </div>
          <div className="flex justify-center md:order-3">
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200 px-3 py-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <a href="https://kirtikumarkavande.life" className="text-gray-400 flex justify-center hover:text-gray-200 pt-2 " target='_blank' rel="noreferrer" >
             Developed by Kirtikumarkavande.life
            </a>
    </footer>
  );
};

export default Footer;
