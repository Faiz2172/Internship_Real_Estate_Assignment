import React, { useState } from 'react';
import { PropertyProvider } from './context/PropertyContext';
import AppHeader from './components/common/AppHeader';
import AppHero from './components/common/AppHero';
import AppMain from './components/common/AppMain';
import AppFooter from './components/common/AppFooter';
import AppPropertyDetailsModal from './components/common/AppPropertyDetailsModal';

const App = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setShowDetailsModal(true);
  };

  return (
    <PropertyProvider>
      <div 
        className="min-h-screen transition-all duration-300"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        <AppHeader />
        <AppHero />
        <AppMain onViewDetails={handleViewDetails} />
        <AppFooter />
        <AppPropertyDetailsModal
          property={selectedProperty}
          isOpen={showDetailsModal}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedProperty(null);
          }}
        />
      </div>
    </PropertyProvider>
  );
};

export default App;