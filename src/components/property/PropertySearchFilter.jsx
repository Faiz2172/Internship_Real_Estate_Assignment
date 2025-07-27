import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useProperty } from '../../hooks/useProperty';

const PropertySearchFilter = () => {
  const { setSearchTerm, selectedType, setSelectedType } = useProperty();

  return (
    <>
      <div className="relative flex-1">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" 
          size={20}
          style={{ color: 'var(--text-secondary)' }}
        />
        <input
          type="text"
          placeholder="Search properties by name or location..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: `1px solid var(--border-color)`
          }}
        />
      </div>
      <div className="relative">
        <Filter 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300" 
          size={20}
          style={{ color: 'var(--text-secondary)' }}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="pl-10 pr-8 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all duration-300"
          style={{ 
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: `1px solid var(--border-color)`
          }}
        >
          <option value="all">All Types</option>
          <option value="apartment">Apartments</option>
          <option value="house">Houses</option>
          <option value="villa">Villas</option>
        </select>
      </div>
    </>
  );
};

export default PropertySearchFilter; 