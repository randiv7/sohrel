
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

const ProductGrid: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { filteredProducts, getActiveFilterCount } = useFilters();

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4 animate-fade-in-up">COLLECTION</h2>
          <p className="body-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Curated pieces for the modern individual
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 btn-ghost lg:hidden"
            >
              <Search size={16} />
              <span>FILTERS</span>
              {getActiveFilterCount() > 0 && (
                <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getActiveFilterCount()}
                </span>
              )}
            </button>
            
            <div className="hidden lg:block">
              <p className="caption text-gray-600">
                {filteredProducts.length} PRODUCTS
              </p>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div className="hidden lg:block">
            <select className="caption border border-gray-300 px-4 py-2 focus:outline-none focus:border-black">
              <option>SORT BY: FEATURED</option>
              <option>PRICE: LOW TO HIGH</option>
              <option>PRICE: HIGH TO LOW</option>
              <option>NEWEST FIRST</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters 
              isOpen={true} 
              onClose={() => {}} 
            />
          </div>

          {/* Mobile Filters */}
          <ProductFilters 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)} 
          />

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="heading-md text-gray-600 mb-4">No products found</p>
                <p className="body-lg text-gray-500">
                  Try adjusting your filters or browse all products
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
