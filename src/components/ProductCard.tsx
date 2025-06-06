import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, selectedSize, selectedColor);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const price = product.salePrice || product.price;
  const originalPrice = product.salePrice ? product.price : null;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div 
        className="relative overflow-hidden bg-gray-50"
        onMouseEnter={() => product.images.length > 1 && setImageIndex(1)}
        onMouseLeave={() => setImageIndex(0)}
      >
        <img
          src={product.images[imageIndex] || product.images[0]}
          alt={product.name}
          className="product-image"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.isNew && (
            <span className="caption bg-black text-white px-3 py-1">NEW</span>
          )}
          {product.isSale && (
            <span className="caption bg-red-600 text-white px-3 py-1">SALE</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Add to wishlist"
        >
          <Heart 
            size={16} 
            className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
          />
        </button>

        {/* Hover Overlay */}
        <div className="product-overlay" />

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary flex items-center justify-center space-x-2"
          >
            <ShoppingBag size={16} />
            <span>QUICK ADD</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="heading-sm mb-2 line-clamp-2">{product.name}</h3>
        
        {/* Size Selection */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.sizes.slice(0, 4).map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`caption px-2 py-1 border transition-colors ${
                  selectedSize === size 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {size}
              </button>
            ))}
            {product.sizes.length > 4 && (
              <span className="caption text-gray-500 px-2 py-1">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-3">
          <div className="flex space-x-2">
            {product.colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 border-2 transition-all ${
                  selectedColor === color ? 'border-gray-400' : 'border-gray-200'
                } ${
                  color === 'Black' ? 'bg-black' : 
                  color === 'White' ? 'bg-white' : 
                  'bg-gray-500'
                }`}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-2">
          <span className="heading-sm">${price}</span>
          {originalPrice && (
            <span className="body-sm text-gray-500 line-through">${originalPrice}</span>
          )}
        </div>

        {/* Category */}
        <p className="caption text-gray-500 mt-1">{product.subcategory}</p>
      </div>
    </div>
  );
};

export default ProductCard;