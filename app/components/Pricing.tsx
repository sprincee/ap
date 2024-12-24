'use client';
import React, { useEffect, useRef } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
  delay?: number;
}

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features, 
  isPrimary = false,
  delay = 0
}) => {
  return (
    <div 
      className="relative flex flex-col p-12 bg-[#0a0a0f] rounded-lg border border-gray-800 h-[800px] overflow-hidden opacity-0 translate-y-4 transition-all duration-700 ease-out"
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
      data-animate="true"
    >
      {/* Gradient background for primary card */}
      {isPrimary && (
        <div className="absolute inset-0">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(
                  100% 80% at 50% 100%,
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
      )}
      
      {/* Content container with relative positioning */}
      <div className="relative flex flex-col h-full z-10">
        {/* Title section */}
        <h3 className="text-[#8B5CF6] mb-12">{title}</h3>
        
        {/* Price section */}
        <div className="text-5xl font-bold text-white mb-8">
          ${price}{title === 'Monthly' && '/m'}
        </div>
        
        {/* Description section */}
        <p className="text-gray-400 mb-16 text-lg">
          {description}
        </p>
        
        {/* Features section - pushing it down with margin-top auto */}
        <ul className="space-y-6 mt-auto mb-24">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 flex items-center text-lg">
              <span className="mr-3">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Button section */}
        <button className={`w-full py-4 px-6 rounded-lg border ${
          isPrimary 
            ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] hover:bg-[#7C3AED]/90' 
            : 'border-gray-700 text-white hover:bg-gray-800'
        }`}>
          Get started
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 20% of the section is visible
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class to title
          const title = entry.target.querySelector('[data-animate="title"]');
          if (title) {
            title.classList.add('opacity-100', 'translate-y-0');
          }

          // Add animation class to all cards
          const cards = entry.target.querySelectorAll('[data-animate="true"]');
          cards.forEach(card => {
            card.classList.add('opacity-100', 'translate-y-0');
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingData: PricingPlan[] = [
    {
      title: 'Basic',
      price: '0',
      description: 'Start your photography journey with powerful editing suggestions.',
      features: [
        'Tutorial',
        '100 photos per month',
        'Core Editing Suggestions',
        '1 Custom Preset',
        'Before/After Comparisons'
      ]
    },
    {
      title: 'Standard',
      price: '5',
      description: 'Revolutionize your photos with our advanced editing tools.',
      features: [
        'Basic Features',
        '200 photos per month',
        'Advanced Editing Suggestions',
        '3 Custom Presets',
        '"Why This Works" Explainations'
      ]
    },
    {
      title: 'Premium',
      price: '10',
      description: 'Unleash your full creative potential.',
      features: [
        'Standard Features',
        '1000 photos per month',
        'Unlimited Custom Presets',
        'Style Match',
        '. . . and more!'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-8 pb-4 px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div 
          className="text-center mb-24 opacity-0 translate-y-4 transition-all duration-700 ease-out"
          data-animate="title"
        >
          <h2 className="text-6xl font-bold text-white mb-4">Our services.</h2>
          <p className="text-gray-400 text-lg">
            Fixed-cost plans to avoid negotiations and start creating.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              isPrimary={index === 1}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;