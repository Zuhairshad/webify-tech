import React from 'react';

const HeroSection = ({
  backgroundImage,
  subtitle,
  title,
  description,
  marqueeText,
  showScrollIndicator = true,
  textColor = "white", // default = white for Web & UI/UX
  customStyles = {}
}) => {
  return (
    <section
      className={`relative z-10 h-screen pb-16 overflow-hidden w-full px-4 md:px-12 py-28 text-${textColor}`}
      style={customStyles}
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center sm:object-top md:object-center transform-gpu"
        />
        {/* Overlay stays same (gradient depends on background images) */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 sm:h-40 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      </div>

      
      {/* Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          display: flex;
          animation: marquee 10s linear infinite;
          white-space: nowrap;
        }
        .marquee-item {
          flex-shrink: 0;
          padding-right: 4rem;
        }
        .text-hollow {
          font-family: 'Prata', serif;
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px ${textColor};
          text-stroke: 1px ${textColor};
        }
        @media (min-width: 640px) {
          .text-hollow {
            -webkit-text-stroke: 2px ${textColor};
            text-stroke: 2px ${textColor};
          }
          .marquee-item { padding-right: 6rem; }
        }
        @media (min-width: 768px) {
          .marquee-item { padding-right: 8rem; }
        }
      `}</style>

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-18 left-0 right-0 overflow-hidden text-6xl md:text-8xl lg:text-8xl font-extrabold">
        <div className="marquee-container">
          <div className="marquee-item"><span className="text-hollow">{marqueeText}</span></div>
          <div className="marquee-item"><span className="text-hollow">{marqueeText}</span></div>
          <div className="marquee-item"><span className="text-hollow">{marqueeText}</span></div>
          <div className="marquee-item"><span className="text-hollow">{marqueeText}</span></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
