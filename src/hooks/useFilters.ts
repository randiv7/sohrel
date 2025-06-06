
import { useState, useMemo } from 'react';
import { Product, FilterState } from '@/types';
import { products, filterOptions } from '@/data/products';

const initialFilters: FilterState = {
  category: [],
  priceRange: filterOptions.priceRange,
  sizes: [],
  colors: [],
  styles: [],
  materials: [],
  availability: []
};

export const useFilters = () => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Price range filter
    filtered = filtered.filter(product => {
      const price = product.salePrice || product.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Style filter
    if (filters.styles.length > 0) {
      filtered = filtered.filter(product =>
        filters.styles.includes(product.style)
      );
    }

    // Material filter
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product =>
        filters.materials.includes(product.material)
      );
    }

    // Availability filter
    if (filters.availability.length > 0) {
      filtered = filtered.filter(product => {
        if (filters.availability.includes('In Stock') && !product.inStock) return false;
        if (filters.availability.includes('Sale') && !product.isSale) return false;
        return true;
      });
    }

    return filtered;
  }, [filters, searchQuery]);

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleArrayFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => {
      const currentArray = prev[key] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      return {
        ...prev,
        [key]: newArray
      };
    });
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    setSearchQuery('');
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.category.length > 0) count++;
    if (filters.sizes.length > 0) count++;
    if (filters.colors.length > 0) count++;
    if (filters.styles.length > 0) count++;
    if (filters.materials.length > 0) count++;
    if (filters.availability.length > 0) count++;
    if (filters.priceRange[0] !== filterOptions.priceRange[0] || filters.priceRange[1] !== filterOptions.priceRange[1]) count++;
    if (searchQuery) count++;
    return count;
  };

  return {
    filters,
    searchQuery,
    filteredProducts,
    updateFilter,
    toggleArrayFilter,
    setSearchQuery,
    clearFilters,
    getActiveFilterCount
  };
};
