import React from 'react';
import { Aperture } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Aperture size={24} className="text-white/80" />
          </div>
          
          {/* Navigation Links - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-x-15">
            <div className="flex items-center space-x-16">
              <a href="#features" className="text-white/80 hover:text-purple-200 transition-colors text-sm">
                Features
              </a>
              <a href="#pricing" className="text-white/80 hover:text-purple-200 transition-colors text-sm">
                Pricing
              </a>
              <a href="#about" className="text-white/80 hover:text-purple-200 transition-colors text-sm">
                About
              </a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button className="bg-transparent border-2 border-[#8B5CF6] text-white/90 px-6 py-2 text-sm rounded-xl hover:bg-[#2a1854]/10 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;