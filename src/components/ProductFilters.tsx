
import React from 'react';
import { X } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import { filterOptions, categories } from '@/data/products';

interface ProductFiltersProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ isOpen, onClose }) => {
  const { 
    filters, 
    toggleArrayFilter, 
    updateFilter, 
    clearFilters, 
    getActiveFilterCount 
  } = useFilters();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:relative lg:bg-transparent">
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-lg lg:relative lg:shadow-none">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="heading-md">FILTERS</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-6 overflow-y-auto h-full pb-24">
          {/* Active Filters Count */}
          {getActiveFilterCount() > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="caption text-gray-600">
                  {getActiveFilterCount()} ACTIVE FILTERS
                </span>
                <button
                  onClick={clearFilters}
                  className="caption text-black hover:text-gray-600 transition-colors"
                >
                  CLEAR ALL
                </button>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">CATEGORY</h3>
            <div className="space-y-2">
              {Object.entries(categories).map(([key, category]) => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(key)}
                    onChange={() => toggleArrayFilter('category', key)}
                    className="filter-checkbox"
                  />
                  <span className="body-sm">{category.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">PRICE RANGE</h3>
            <div className="space-y-4">
              <input
                type="range"
                min={filterOptions.priceRange[0]}
                max={filterOptions.priceRange[1]}
                value={filters.priceRange[1]}
                onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-black"
              />
              <div className="flex justify-between">
                <span className="body-sm">${filters.priceRange[0]}</span>
                <span className="body-sm">${filters.priceRange[1]}</span>
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">SIZE</h3>
            <div className="grid grid-cols-3 gap-2">
              {filterOptions.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => toggleArrayFilter('sizes', size)}
                  className={`caption py-2 border transition-colors ${
                    filters.sizes.includes(size)
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">COLOR</h3>
            <div className="space-y-2">
              {filterOptions.colors.map(color => (
                <label key={color} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(color)}
                    onChange={() => toggleArrayFilter('colors', color)}
                    className="filter-checkbox"
                  />
                  <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 border border-gray-300 ${
                      color === 'Black' ? 'bg-black' : 
                      color === 'White' ? 'bg-white' : 
                      'bg-gray-500'
                    }`} />
                    <span className="body-sm">{color}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Style Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">STYLE</h3>
            <div className="space-y-2">
              {filterOptions.styles.map(style => (
                <label key={style} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.styles.includes(style)}
                    onChange={() => toggleArrayFilter('styles', style)}
                    className="filter-checkbox"
                  />
                  <span className="body-sm">{style}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Material Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">MATERIAL</h3>
            <div className="space-y-2">
              {filterOptions.materials.map(material => (
                <label key={material} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.materials.includes(material)}
                    onChange={() => toggleArrayFilter('materials', material)}
                    className="filter-checkbox"
                  />
                  <span className="body-sm">{material}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="filter-section">
            <h3 className="caption mb-3">AVAILABILITY</h3>
            <div className="space-y-2">
              {['In Stock', 'Sale'].map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(option)}
                    onChange={() => toggleArrayFilter('availability', option)}
                    className="filter-checkbox"
                  />
                  <span className="body-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
