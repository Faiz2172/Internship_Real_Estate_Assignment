import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockProperties } from '../data/mockProperties';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  
  // Dark mode with manual CSS application
  const [darkMode, setDarkModeState] = useState(() => {
    try {
      const saved = localStorage.getItem('propertyHub-theme');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Load properties
  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProperties(mockProperties);
      setLoading(false);
    };
    loadProperties();
  }, []);

  // Apply theme manually with CSS variables
  useEffect(() => {
    const root = document.documentElement;
    
    localStorage.setItem('propertyHub-theme', JSON.stringify(darkMode));
    
    if (darkMode) {
      // Dark mode CSS variables
      root.style.setProperty('--bg-primary', '#111827');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--bg-card', '#374151');
      root.style.setProperty('--text-primary', '#f9fafb');
      root.style.setProperty('--text-secondary', '#d1d5db');
      root.style.setProperty('--border-color', '#4b5563');
      root.classList.add('dark');
      document.body.style.backgroundColor = '#111827';
      document.body.style.color = '#f9fafb';
    } else {
      // Light mode CSS variables
      root.style.setProperty('--bg-primary', '#f9fafb');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-card', '#ffffff');
      root.style.setProperty('--text-primary', '#111827');
      root.style.setProperty('--text-secondary', '#6b7280');
      root.style.setProperty('--border-color', '#e5e7eb');
      root.classList.remove('dark');
      document.body.style.backgroundColor = '#f9fafb';
      document.body.style.color = '#111827';
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkModeState(prev => !prev);
  };

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

  return (
    <PropertyContext.Provider value={{
      properties: filteredProperties,
      loading,
      darkMode,
      setDarkMode: toggleDarkMode,
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