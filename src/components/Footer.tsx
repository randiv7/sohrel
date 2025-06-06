
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="heading-lg mb-6">SOHREL</h3>
            <p className="body-lg text-gray-300 mb-6 max-w-md">
              Minimalism redefined. Curated fashion for the modern individual who values quality, simplicity, and timeless style.
            </p>
            <p className="caption text-gray-400">
              LESS IS EVERYTHING
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="heading-sm mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-3">
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Care Instructions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="heading-sm mb-4">COMPANY</h4>
            <ul className="space-y-3">
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="body-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="heading-sm mb-4">STAY UPDATED</h4>
            <p className="body-sm text-gray-300 mb-4">
              Be the first to know about new arrivals and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
              />
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-black px-6">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="caption text-gray-400">
            © 2024 SOHREL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="caption text-gray-400 hover:text-white transition-colors">TERMS</a>
            <a href="#" className="caption text-gray-400 hover:text-white transition-colors">PRIVACY</a>
            <a href="#" className="caption text-gray-400 hover:text-white transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
