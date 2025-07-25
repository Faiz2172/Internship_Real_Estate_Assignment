// src/components/common/LoadingSkeleton.jsx
import { useTheme } from '../../context/ThemeContext';

const LoadingSkeleton = () => {
    const { darkMode } = useTheme();
    return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden animate-pulse ${darkMode ? 'dark' : ''}`}>
      <div className="h-64 bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
        )
}

export default LoadingSkeleton