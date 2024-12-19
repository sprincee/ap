import React from 'react';

const ViewfinderOverlay = () => {
  return (
    <div className="absolute inset-24 pointer-events-none select-none">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Corner frame lines - inward facing */}
        <g stroke="rgba(255,255,255,0.5)" strokeWidth="2">
          {/* Top left */}
          <line x1="0" y1="0" x2="220" y2="0" />
          <line x1="0" y1="0" x2="0" y2="220" />
          
          {/* Top right */}
          <line x1="calc(100% - 220px)" y1="0" x2="100%" y2="0" />
          <line x1="100%" y1="0" x2="100%" y2="220" />
          
          {/* Bottom left */}
          <line x1="0" y1="calc(100% - 220px)" x2="0" y2="100%" />
          <line x1="0" y1="100%" x2="220" y2="100%" />
          
          {/* Bottom right */}
          <line x1="100%" y1="calc(100% - 220px)" x2="100%" y2="100%" />
          <line x1="calc(100% - 220px)" y1="100%" x2="100%" y2="100%" />
        </g>
      </svg>

      {/* Text Overlays */}
      <div className="absolute inset-0 font-mono text-lg text-white/50">
        {/* Resolution - bottom left */}
        <div className="absolute bottom-[1%] left-[1%] font-light">1920 x 1080</div>

        {/* Camera settings - bottom right */}
        <div className="absolute bottom-[1%] right-[1%] text-right font-light">
          <div>ISO 1000</div>
          <div>ƒ/2.8</div>
        </div>

        {/* Timer - centered slightly above bottom */}

      </div>
    </div>
  );
};

export default ViewfinderOverlay;