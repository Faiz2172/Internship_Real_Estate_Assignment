import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockProperties } from '../data/mockProperties';
export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
  
    // Simulate API fetch
    useEffect(() => {
      const fetchProperties = async () => {
        setLoading(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProperties(mockProperties);
        setLoading(false);
      };
  
      fetchProperties();
    }, []);
  
    const addProperty = (newProperty) => {
      const property = {
        ...newProperty,
        id: Date.now(),
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        fullDescription: newProperty.description
      };
      setProperties(prev => [property, ...prev]);
    };
  
    const filteredProperties = properties.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || property.type === selectedType;
      return matchesSearch && matchesType;
    });

    // Add or remove the 'dark' class on the <html> element
    useEffect(() => {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }, [darkMode]);

    return (
      <PropertyContext.Provider value={{
        properties: filteredProperties,
        loading,
        darkMode,
        setDarkMode,
        searchTerm,
        setSearchTerm,
        selectedType,
        setSelectedType,
        addProperty
      }}>
        {children}
      </PropertyContext.Provider>
    );
  };

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within PropertyProvider');
  }
  return context;
};