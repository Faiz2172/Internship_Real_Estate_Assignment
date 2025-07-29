import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div 
      className="rounded-2xl shadow-lg overflow-hidden animate-pulse"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: `1px solid var(--border-color)`
      }}
    >
      <div 
        className="h-64"
        style={{ backgroundColor: 'var(--border-color)' }}
      ></div>
      <div className="p-6 space-y-4">
        <div 
          className="h-6 rounded-lg w-3/4"
          style={{ backgroundColor: 'var(--border-color)' }}
        ></div>
        <div 
          className="h-4 rounded w-1/2"
          style={{ backgroundColor: 'var(--border-color)' }}
        ></div>
        <div 
          className="h-4 rounded w-full"
          style={{ backgroundColor: 'var(--border-color)' }}
        ></div>
        <div 
          className="h-12 rounded-xl w-full"
          style={{ backgroundColor: 'var(--border-color)' }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;