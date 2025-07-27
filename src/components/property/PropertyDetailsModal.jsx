import React from 'react';
import { MapPin, X } from 'lucide-react';
import Modal from '../common/Modal';

const PropertyDetailsModal = ({ property, isOpen, onClose }) => {
  if (!property) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:scale-110"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#374151'
          }}
        >
          <X size={20} />
        </button>
        
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-80 object-cover rounded-t-2xl"
        />
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {property.name}
              </h2>
              <div className="flex items-center mb-2">
                <MapPin 
                  size={18} 
                  className="mr-2" 
                  style={{ color: 'var(--text-secondary)' }}
                />
                <span style={{ color: 'var(--text-secondary)' }}>
                  {property.location}
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">${property.price}</div>
              <div className="text-sm opacity-90">per month</div>
            </div>
          </div>
          
          {property.bedrooms && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div 
                className="p-4 rounded-xl text-center transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {property.bedrooms}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Bedrooms
                </div>
              </div>
              <div 
                className="p-4 rounded-xl text-center transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {property.bathrooms}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Bathrooms
                </div>
              </div>
              <div 
                className="p-4 rounded-xl text-center transition-colors duration-300"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                <div 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {property.sqft}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Sq Ft
                </div>
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h3 
              className="text-xl font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Description
            </h3>
            <p 
              className="leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {property.fullDescription || property.description}
            </p>
          </div>
          
          <div 
            className="p-6 rounded-xl transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <h3 
              className="text-lg font-semibold mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              Location
            </h3>
            <div 
              className="h-48 rounded-lg flex items-center justify-center transition-colors duration-300"
              style={{ backgroundColor: 'var(--border-color)' }}
            >
              <div className="text-center">
                <MapPin 
                  size={32} 
                  className="mx-auto mb-2" 
                  style={{ color: 'var(--text-secondary)' }}
                />
                <p style={{ color: 'var(--text-secondary)' }}>
                  Map integration would go here
                </p>
                <p 
                  className="text-sm mt-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Lat: {property.coordinates?.lat || 'N/A'}, Lng: {property.coordinates?.lng || 'N/A'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact/Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95">
              Contact Agent
            </button>
            <button className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PropertyDetailsModal;