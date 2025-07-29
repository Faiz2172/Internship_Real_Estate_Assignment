import React from 'react';
import { Search } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import PropertyCard from './PropertyCard';
import LoadingSkeleton from '../common/LoadingSkeleton';
import PropertySearchFilter from './PropertySearchFilter';

const PropertyList = ({ onViewDetails }) => {
  const { properties, loading } = useProperty();

  if (loading) {
    return (
      <div id="properties-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div id="properties-section" className="text-center py-16">
        <div 
          className="rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg"
          style={{ backgroundColor: 'var(--bg-card)' }}
        >
          <Search size={32} style={{ color: 'var(--text-secondary)' }} />
        </div>
        <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          No properties found
        </h3>
        <p style={{ color: 'var(--text-secondary)' }}>
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div id="properties-section">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Featured Properties
        </h2>
        <p 
          className="text-lg mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {properties.length} {properties.length === 1 ? 'property' : 'properties'} available
        </p>
        <div 
          className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
        ></div>
      </div>
        {/* Search and Filter UI below the heading and subtitle */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <PropertySearchFilter />
          </div>
      
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;