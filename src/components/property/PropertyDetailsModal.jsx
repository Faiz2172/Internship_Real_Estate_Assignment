// src/components/property/PropertyDetailsModal.jsx
import { MapPin, X } from 'lucide-react'
import Modal from '../common/Modal'

const PropertyDetailsModal = ({ property, isOpen, onClose }) => {
  if (!property) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {property.name}
              </h2>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPin size={18} className="mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-2xl">
              <div className="text-2xl font-bold">${property.price}</div>
              <div className="text-sm opacity-90">per month</div>
            </div>
          </div>
          
          {property.bedrooms && (
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{property.bedrooms}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Bedrooms</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{property.bathrooms}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Bathrooms</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{property.sqft}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Sq Ft</div>
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {property.fullDescription}
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Location</h3>
            <div className="bg-gray-200 dark:bg-gray-600 h-48 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <MapPin size={32} className="mx-auto mb-2" />
                <p>Map integration would go here</p>
                <p className="text-sm">Lat: {property.coordinates.lat}, Lng: {property.coordinates.lng}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PropertyDetailsModal