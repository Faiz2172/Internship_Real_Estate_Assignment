// src/components/property/PropertyCard.jsx
import { MapPin, Home, Building, TreePine, Eye } from 'lucide-react'

const PropertyCard = ({ property, onViewDetails }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'apartment': return <Building size={16} />
      case 'house': return <Home size={16} />
      case 'villa': return <TreePine size={16} />
      default: return <Home size={16} />
    }
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
          {getTypeIcon(property.type)}
          <span className="capitalize">{property.type}</span>
        </div>
        <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          ${property.price}/mo
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {property.name}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        
        {property.bedrooms && (
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>{property.bedrooms} bed</span>
            <span>{property.bathrooms} bath</span>
            <span>{property.sqft} sqft</span>
          </div>
        )}
        
        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <Eye size={16} />
          View Details
        </button>
      </div>
    </div>
  )
}

export default PropertyCard