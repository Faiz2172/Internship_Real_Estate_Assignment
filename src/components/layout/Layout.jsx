// src/components/layout/Layout.jsx
import Header from '../common/Header'
import PropertyList from '../property/PropertyList'
import PropertyDetailsModal from '../property/PropertyDetailsModal'
import { useState } from 'react'
import { useProperty } from '../../context/PropertyContext'

const Layout = () => {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const { darkMode } = useProperty()

  const handleViewDetails = (property) => {
    setSelectedProperty(property)
    setShowDetailsModal(true)
  }

  return (
    <div className="min-h-screen transition-colors">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PropertyList onViewDetails={handleViewDetails} />
      </main>
      
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