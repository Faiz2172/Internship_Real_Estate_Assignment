import React from 'react';
import PropertyDetailsModal from '../property/PropertyDetailsModal';

const AppPropertyDetailsModal = ({ property, isOpen, onClose }) => (
  <PropertyDetailsModal
    property={property}
    isOpen={isOpen}
    onClose={onClose}
  />
);

export default AppPropertyDetailsModal; 