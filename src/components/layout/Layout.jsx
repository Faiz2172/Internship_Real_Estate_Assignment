// src/components/layout/Layout.jsx
import Header from '../common/Header'
import PropertyList from '../property/PropertyList'
import PropertyDetailsModal from '../property/PropertyDetailsModal'
import { useState } from 'react'
import { useProperty } from '../../hooks/useProperty'

const Layout = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const { darkMode } = useProperty()

  const handleViewDetails = (property) => {
    setSelectedProperty(property)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyList onViewDetails={handleViewDetails} />
      </main>
      
      {/* Subtle footer */}
      <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="text-sm">© 2025 PropertyHub. Find your perfect home.</p>
          </div>
        </div>
      </footer>
      
      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false)
          setSelectedProperty(null)
        }}
      />
    </div>
  )
}

export default Layout