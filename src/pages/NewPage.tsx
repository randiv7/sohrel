
import React, { useState } from 'react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import SearchModal from '@/components/SearchModal';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

const NewPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
          <div className="text-center mb-8">
            <h1 className="heading-xl mb-4">NEW ARRIVALS</h1>
            <p className="body-lg text-gray-600">Fresh minimalist pieces just for you</p>
          </div>
        </div>
        
        <ProductGrid />
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default NewPage;
