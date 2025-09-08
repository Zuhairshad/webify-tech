// HeroSection.jsx
import React from "react";

const AwardSec = ({
  topText,
  heading,
  subHeading ,
  description,
}) => {
  return (
    <section className="w-full bg-[#070d13] font-Inter text-[#f2f5f7] px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center space-y-6">
          {topText && (
            <p className="md:text-lg font-semibold text-white text-sm">
              {topText}
            </p>
          )}

          <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            {heading}{" "}
            <span className="block text-[#f2f5f7]/90">{subHeading}</span>
          </h5>

          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-[1px] bg-white/20"></div>

        {/* Awards Section (static) */}
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.awwwards.com/brandvision/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db67d58ced2f661103_Awwwards%20Logo.svg"
              alt="Awwwards Logo"
              className="h-10 object-contain"
            />
          </a>
          <a
            href="https://clutch.co/profile/brand-vision-1#reviews"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dcfa8d01daa6b85a7a_Clutch%20Logo.svg"
              alt="Clutch Logo"
              className="h-10 object-contain"
            />
          </a>
          <a href="https://g.co/kgs/qXiLS2M" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dc8bd93e0c3ceb94df_Generic%20Award.svg"
              alt="Generic Award Logo"
              className="h-10 object-contain"
            />
          </a>
          <a href="https://g.co/kgs/qXiLS2M" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db1a93a19ceda6299b_Google%20Reviews%20Logo.svg"
              alt="Google Reviews Logo"
              className="h-10 object-contain"
            />
          </a>
          <a
            href="https://upcity.com/profiles/brand-vision-marketing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db73a1d5d1c49ab6c5_Upcity%20Logo.svg"
              alt="Upcity Logo"
              className="h-10 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AwardSec;
