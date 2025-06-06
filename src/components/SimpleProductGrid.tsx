
import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

const SimpleProductGrid: React.FC = () => {
  // Show featured products on homepage (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4 animate-fade-in-up">FEATURED COLLECTION</h2>
          <p className="body-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Curated pieces for the modern individual
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="/men" className="btn-primary">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimpleProductGrid;
