// src/components/property/PropertyList.jsx
import { useProperty } from '../../hooks/useProperty'
import PropertyCard from './PropertyCard'
import LoadingSkeleton from '../common/LoadingSkeleton'
import { Search } from 'lucide-react'

const PropertyList = ({ onViewDetails }) => {
  const { properties, loading } = useProperty()

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <Search size={32} className="text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No properties found</h3>
        <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Available Properties
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </>
  )
}

export default PropertyList