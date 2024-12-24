'use client';

import React from 'react';
import { Aperture } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();

  // Keep scrolling function for other sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Aperture size={24} className="text-white/80" />
            </Link>
          </div>
          
          {/* Navigation Links - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-16">
              <Link 
                href="/Features"
                className="text-white/80 hover:text-purple-200 transition-colors text-sm cursor-pointer"
              >
                Features
              </Link>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-white/80 hover:text-purple-200 transition-colors text-sm cursor-pointer"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white/80 hover:text-purple-200 transition-colors text-sm cursor-pointer"
              >
                About
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => router.push('/get-started')}
              className="bg-transparent border-2 border-purple-500 text-white/90 px-6 py-2 text-sm rounded-xl hover:bg-purple-900/10 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;