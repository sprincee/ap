import React from 'react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPrimary = false 
}) => {
  return (
    <div className="relative flex flex-col p-12 bg-[#0a0a0f] rounded-lg border border-gray-800 h-[800px] overflow-hidden">
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

const Pricing = () => {
  const pricingData = [
    {
      title: 'Lite',
      price: '1,495',
      description: 'Quickly receive a high-quality brand logo, representing your business vision.',
      features: [
        'Primary logo',
        'Brand colours',
        '72hr delivery',
        'Max 1 revision',
        'Figma files'
      ]
    },
    {
      title: 'Standard',
      price: '2,225',
      description: 'Full scale brand identity promoting and connecting with your target audience.',
      features: [
        'Primary and secondary logos',
        'Full brand guidebook',
        '2 weeks delivery',
        'Max 3 revisions',
        'Figma files'
      ]
    },
    {
      title: 'Monthly',
      price: '2,495',
      description: 'Monthly design support, perfect for companies who require ongoing design work.',
      features: [
        'Unlimited banners',
        'Unlimited revisions',
        'Updates every 24 hours',
        'Max 1 revision',
        'Pause or cancel anytime'
      ]
    }
  ];

  return (
    <section className="py-8 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;