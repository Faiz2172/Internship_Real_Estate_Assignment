import React from 'react';
import PropertyList from '../property/PropertyList';

const AppMain = ({ onViewDetails }) => (
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <PropertyList onViewDetails={onViewDetails} />
  </main>
);

export default AppMain; 