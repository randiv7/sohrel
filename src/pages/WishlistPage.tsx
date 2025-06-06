import React, { useState } from 'react';
import { Heart, ShoppingBag, X } from 'lucide-react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import SearchModal from '@/components/SearchModal';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';

const WishlistPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (product: any) => {
    addItem(product, product.sizes[0], product.colors[0]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onSearchToggle={() => setIsSearchOpen(true)}
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="heading-xl mb-4">WISHLIST</h1>
              <p className="body-lg text-gray-600">
                {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
              </p>
            </div>
            {items.length > 0 && (
              <button
                onClick={clearWishlist}
                className="btn-ghost text-red-600 hover:bg-red-50"
              >
                CLEAR ALL
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <Heart size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="heading-md text-gray-600 mb-4">Your wishlist is empty</h2>
              <p className="body-lg text-gray-500 mb-8">
                Save items you love to your wishlist
              </p>
              <a href="/men" className="btn-primary">
                CONTINUE SHOPPING
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(product.id)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    aria-label="Remove from wishlist"
                  >
                    <X size={16} className="text-gray-600" />
                  </button>

                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                    {/* Add to Cart Button */}
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <ShoppingBag size={16} />
                        <span>ADD TO CART</span>
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="heading-sm mb-2 line-clamp-2">{product.name}</h3>
                    
                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="heading-sm">
                        ${product.salePrice || product.price}
                      </span>
                      {product.salePrice && (
                        <span className="body-sm text-gray-500 line-through">
                          ${product.price}
                        </span>
                      )}
                    </div>

                    {/* Category */}
                    <p className="caption text-gray-500">{product.subcategory}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default WishlistPage;