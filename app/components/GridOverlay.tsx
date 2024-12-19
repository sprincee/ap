import React from 'react';

const GridOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Main SVG Grid */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Rule of thirds - thicker lines */}
        <g stroke="rgba(255,255,255,0.15)" strokeWidth="1">
          {/* Vertical lines */}
          <line x1="33.33%" y1="0" x2="33.33%" y2="100%" />
          <line x1="66.66%" y1="0" x2="66.66%" y2="100%" />
          
          {/* Horizontal lines */}
          <line x1="0" y1="33.33%" x2="100%" y2="33.33%" />
          <line x1="0" y1="66.66%" x2="100%" y2="66.66%" />
        </g>
        
        {/* Finer grid lines */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5">
          {[...Array(20)].map((_, i) => (
            <React.Fragment key={i}>
              <line 
                x1={`${(i + 1) * 5}%`} 
                y1="0" 
                x2={`${(i + 1) * 5}%`} 
                y2="100%" 
              />
              <line 
                x1="0" 
                y1={`${(i + 1) * 5}%`} 
                x2="100%" 
                y2={`${(i + 1) * 5}%`} 
              />
            </React.Fragment>
          ))}
        </g>
      </svg>

      {/* Camera Settings */}
      <div className="absolute inset-0 font-mono text-2xl text-white/20">
      <div className="absolute bottom-[6.3%] right-[5.4%] z-50">ISO 1000</div>
      <div className="absolute bottom-[6.3%] left-[26.2%] z-50">ƒ/2.8</div>
      <div className="absolute bottom-[6.3%] left-[5.88%] z-50">1/125s</div>
      <div className="absolute bottom-[6.3%] right-[26.9%] z-50">RAW</div>
    </div>
    </div>
  );
};

export default GridOverlay;