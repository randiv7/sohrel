import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';

interface HeaderProps {
  onSearchToggle: () => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearchToggle, onMenuToggle, isMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems, openCart } = useCart();
  const { getTotalItems: getWishlistTotal } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm py-4' : 'bg-white bg-opacity-95 py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuToggle}
            className="md:hidden p-2 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link to="/">
              <h1 className="heading-md font-thin tracking-[0.2em] animate-fade-in-up">
                SOHREL
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link 
              to="/men" 
              className={`caption hover:text-gray-600 transition-colors ${
                location.pathname === '/men' ? 'text-black' : ''
              }`}
            >
              MEN
            </Link>
            <Link 
              to="/women" 
              className={`caption hover:text-gray-600 transition-colors ${
                location.pathname === '/women' ? 'text-black' : ''
              }`}
            >
              WOMEN
            </Link>
            <Link 
              to="/kids" 
              className={`caption hover:text-gray-600 transition-colors ${
                location.pathname === '/kids' ? 'text-black' : ''
              }`}
            >
              KIDS
            </Link>
            <Link 
              to="/new" 
              className={`caption hover:text-gray-600 transition-colors ${
                location.pathname === '/new' ? 'text-black' : ''
              }`}
            >
              NEW
            </Link>
            <Link 
              to="/sale" 
              className={`caption hover:text-gray-600 transition-colors ${
                location.pathname === '/sale' ? 'text-black' : ''
              }`}
            >
              SALE
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchToggle}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            <Link 
              to="/account"
              className="hidden md:block p-2 hover:bg-gray-100 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            
            <Link 
              to="/wishlist"
              className="hidden md:block relative p-2 hover:bg-gray-100 transition-colors"
              aria-label="Wishlist"
            >
              <Heart size={20} />
              {getWishlistTotal() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {getWishlistTotal()}
                </span>
              )}
            </Link>
            
            <button
              onClick={openCart}
              className="relative p-2 hover:bg-gray-100 transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
                  {getTotalItems()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;