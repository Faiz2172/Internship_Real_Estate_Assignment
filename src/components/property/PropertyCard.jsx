import React from 'react';
import { MapPin, Home, Building, TreePine, Eye } from 'lucide-react';

const PropertyCard = ({ property, onViewDetails }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'apartment': return <Building size={16} />
      case 'house': return <Home size={16} />
      case 'villa': return <TreePine size={16} />
      default: return <Home size={16} />
    }
  };
  
  return (
    <div 
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] hover:-translate-y-1"
      style={{ 
        backgroundColor: 'var(--bg-card)',
        border: `1px solid var(--border-color)`
      }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        <div 
          className="absolute top-4 left-4 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow-sm"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#374151'
          }}
        >
          <span className="text-blue-600">{getTypeIcon(property.type)}</span>
          <span className="capitalize">{property.type}</span>
        </div>
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ${property.price}/mo
        </div>
      </div>
      
      <div className="p-6">
        <h3 
          className="text-xl font-bold mb-2 transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {property.name}
        </h3>
        
        <div className="flex items-center mb-3 transition-colors duration-300">
          <MapPin size={16} className="mr-1" style={{ color: 'var(--text-secondary)' }} />
          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {property.location}
          </span>
        </div>
        
        <p 
          className="text-sm mb-4 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {property.description}
        </p>
        
        {property.bedrooms && (
          <div className="flex items-center gap-4 text-sm mb-4 transition-colors duration-300">
            <span className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
              {property.bedrooms} bed
            </span>
            <span className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-1"></span>
              {property.bathrooms} bath
            </span>
            <span className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
              {property.sqft} sqft
            </span>
          </div>
        )}
        
        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg active:scale-95"
        >
          <Eye size={16} />
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;