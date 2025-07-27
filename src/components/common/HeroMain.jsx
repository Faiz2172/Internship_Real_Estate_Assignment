import React from 'react';
import { Home, Users, Award, MapPin } from 'lucide-react';

const HeroMain = ({ children }) => (
  <div 
    className="relative py-20 lg:py-32"
    style={{ backgroundColor: 'var(--bg-primary)' }}
  >
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
        <span style={{ color: 'var(--text-primary)' }}>Welcome to</span>
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
          PropertyHub
        </span>
      </h1>
      {/* Subtitle */}
      <p 
        className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
        style={{ color: 'var(--text-secondary)' }}
      >
        Your trusted partner in finding the perfect property. We connect dreams with reality 
        through premium real estate solutions in prime locations.
      </p>
      {children}
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
        <button 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
          onClick={() => {
            document.querySelector('#properties-section')?.scrollIntoView({ 
              behavior: 'smooth' 
            });
          }}
        >
          View Properties
        </button>
        <button 
          className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          style={{ 
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-primary)',
            border: `2px solid var(--border-color)`
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default HeroMain; 