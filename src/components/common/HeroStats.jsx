import React from 'react';

const HeroStats = ({ stats }) => (
  <div 
    className="py-16 border-t border-b"
    style={{ 
      backgroundColor: 'var(--bg-secondary)',
      borderColor: 'var(--border-color)'
    }}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div 
              className="inline-flex p-4 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <stat.icon 
                size={32} 
                className="text-blue-600"
              />
            </div>
            <div 
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {stat.value}
            </div>
            <div 
              className="text-sm md:text-base font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroStats; 