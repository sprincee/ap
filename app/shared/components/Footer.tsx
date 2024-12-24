import React from 'react';
import Link from 'next/link';
import { Aperture } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-96">
      {/* Gradient overlay */}
      <div className="absolute inset-0 -top-[400px]">
        <div 
          className="w-full h-full"
          style={{
            background: `
              radial-gradient(
                100% 65% at 60% 100%,
                #2a1854 0%,
                rgba(26, 20, 54, 0.5) 65%,
                transparent 100%
              )
            `,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      {/* Footer content */}
      <footer className="relative w-full px-4 py-16 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center mb-8 md:mb-0">
            <div className="flex items-center">
              <Aperture className="w-8 h-8 text-white mr-3" />
              <span className="text-white text-xl font-semibold">Aperture.</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            href="https://www.linkedin.com/in/mahad-skhan/" 
            className="bg-[#8B5CF6] text-white px-6 py-3 rounded-lg hover:bg-[#7C3AED]/90 transition-colors"
          >
            Contact me!
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;