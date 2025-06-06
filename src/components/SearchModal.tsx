
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useFilters } from '@/hooks/useFilters';
import ProductCard from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { searchQuery, setSearchQuery, filteredProducts } = useFilters();
  const [localQuery, setLocalQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setSearchQuery(localQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [localQuery, setSearchQuery]);

  const handleClose = () => {
    setLocalQuery('');
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-6">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Search size={24} className="text-gray-400" />
          <input
            type="text"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 text-2xl font-light focus:outline-none"
            autoFocus
          />
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto p-6">
        {localQuery && (
          <div className="mb-6">
            <p className="caption text-gray-600">
              {filteredProducts.length} RESULTS FOR "{localQuery.toUpperCase()}"
            </p>
          </div>
        )}

        {localQuery && filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="heading-md text-gray-600 mb-4">No results found</p>
            <p className="body-lg text-gray-500">
              Try searching for something else or browse our collections
            </p>
          </div>
        )}

        {localQuery && filteredProducts.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 12).map((product, index) => (
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

        {!localQuery && (
          <div className="text-center py-16">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="heading-md text-gray-600 mb-4">Start typing to search</p>
            <p className="body-lg text-gray-500">
              Search for products, categories, or styles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
