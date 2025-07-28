import React from 'react';
import PropertySearchFilter from '../property/PropertySearchFilter';

const HeroIntro = () => (
  <div 
    className="py-20"
    style={{ backgroundColor: 'var(--bg-primary)' }}
  >
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 
        className="text-3xl md:text-5xl font-bold mb-8"
        style={{ color: 'var(--text-primary)' }}
      >
        Find Your Perfect Home
      </h2>
      <p 
        className="text-lg md:text-xl mb-12 leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        From modern apartments in bustling city centers to luxury villas with stunning views, 
        we offer a curated selection of premium properties to suit every lifestyle and budget. 
        Our expert team is here to guide you through every step of your property journey.
      </p>
      {/* Search and Filter UI below the heading and subtitle
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <PropertySearchFilter />
      </div> */}
      {/* Scroll indicator */}
      <div className="animate-bounce">
        <div 
          className="w-6 h-10 border-2 rounded-full mx-auto flex justify-center"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{ backgroundColor: 'var(--text-secondary)' }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroIntro; 