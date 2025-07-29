import React, { useState } from 'react';
import { Home, Plus, Moon, Sun, Search, Filter } from 'lucide-react';
import { useProperty } from '../../context/PropertyContext';
import Modal from './Modal';
import AddPropertyModal from '../property/AddPropertyModal';

const Header = () => {
  const { darkMode, setDarkMode, setSearchTerm, selectedType, setSelectedType } = useProperty();
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <header 
        className="backdrop-blur-xl sticky top-0 z-40 transition-all duration-300"
        style={{ 
          backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          borderBottom: `1px solid var(--border-color)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                <Home className="text-white" size={24} />
              </div>
              <div>
                <h1 
                  className="text-2xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  PropertyHub
                </h1>
                <p 
                  className="text-sm transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Find your perfect home
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: darkMode ? '#1f2937' : '#f3f4f6',
                  color: 'var(--text-primary)'
                }}
              >
                {darkMode ? 'Dark Mode' : 'Light Mode'}
              </div>
              
              <button
                onClick={setDarkMode}
                className="group relative p-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ 
                  backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                }}
              >
                <div className="relative w-5 h-5">
                  <Sun 
                    size={20} 
                    className={`absolute inset-0 text-amber-500 transition-all duration-300 ${
                      darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                    }`} 
                  />
                  <Moon 
                    size={20} 
                    className={`absolute inset-0 text-blue-400 transition-all duration-300 ${
                      darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                    }`} 
                  />
                </div>
              </button>
              
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <Plus size={16} />
                Add Property
              </button>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            
          </div>
        </div>
      </header>
      
      <AddPropertyModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
    </>
  );
};

export default Header;