import React from 'react';

const HeroSection = ({
  backgroundImage,
  subtitle,
  title,
  description,
  marqueeText,
  showScrollIndicator = true,
  customStyles = {}
}) => {
  return (
    <section className="relative z-10 text-[#f2f5f7] h-screen pb-16 overflow-hidden w-full px-4 md:px-12 py-28">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover object-center sm:object-top md:object-center transform-gpu"
        />
        {/* Mobile: Strong black gradient from bottom to transparent top */}
        {/* Desktop: Light gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-3/4 sm:h-40 
          bg-gradient-to-t from-black via-black/80 to-transparent 
          sm:from-black/70 sm:via-transparent sm:to-transparent"></div>
      </div>

      {/* Content Wrapper - Hidden on mobile, visible on desktop */}
      <div className="relative z-20 max-w-6xl mx-auto h-full hidden md:flex flex-col justify-center md:flex-row md:items-center">
        {/* Left Side Content - Text Block */}
        <div className="flex-1 mt-40 md:mt-2 md:max-w-xl">
          <h2 className="text-lg sm:text-base md:text-xl font-bold">{subtitle}</h2>
          <div className="h-0.5 w-1/2 bg-gray-200 my-4"></div>
          <div>
            <h1 className="text-base sm:text-lg font-semibold">{title}</h1>
          </div>
          <div className="mt-4">
            <p className="text-sm sm:text-base md:text-md leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side Content - Scroll Div - Hidden on mobile */}
        {showScrollIndicator && (
          <div className="flex-1 flex justify-end items-end p-8 mt-8 md:mt-0">
            <div className="text-xs tracking-widest origin-right border rounded-2xl p-1">
              Scroll to explore
            </div>
          </div>
        )}
      </div>

      {/* Mobile Content - Positioned at bottom over black gradient */}
      <div className="relative z-20 max-w-6xl mx-auto h-full flex md:hidden flex-col justify-end pb-32">
        <div className="px-2">
          <h2 className="text-sm font-bold mb-2">{subtitle}</h2>
          <div className="h-0.5 w-full bg-gray-500 my-3"></div>
          <div>
            <h1 className="text-lg font-semibold mb-3">{title}</h1>
          </div>
          <div>
            <p className="text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Background Text Animation */}
      <style>
        {`
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
            -webkit-text-stroke: 1px #ffffff;
            text-stroke: 1px #ffffff;
        }

        @media (min-width: 640px) {
            .text-hollow {
                -webkit-text-stroke: 2px #ffffff;
                text-stroke: 2px #ffffff;
            }
            .marquee-item {
                padding-right: 6rem;
            }
        }

        @media (min-width: 768px) {
            .marquee-item {
                padding-right: 8rem;
            }
        }
        `}
      </style>
      
      {/* Marquee text - hidden on mobile, visible on desktop */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-18 left-0 right-0 overflow-hidden text-6xl md:text-8xl lg:text-8xl font-extrabold">
        <div className="marquee-container">
          <div className="marquee-item">
            <span className="text-hollow">{marqueeText}</span>
          </div>
          <div className="marquee-item">
            <span className="text-hollow">{marqueeText}</span>
          </div>
          <div className="marquee-item">
            <span className="text-hollow">{marqueeText}</span>
          </div>
          <div className="marquee-item">
            <span className="text-hollow">{marqueeText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};



    

export default HeroSection;