
import React from 'react';
import { User, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'MEN', href: '/men' },
    { label: 'WOMEN', href: '/women' },
    { label: 'KIDS', href: '/kids' },
    { label: 'NEW', href: '/new' },
    { label: 'SALE', href: '/sale' }
  ];

  return (
    <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="pt-24 px-6">
        {/* Navigation Links */}
        <nav className="space-y-8">
          {menuItems.map((item, index) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={onClose}
              className={`block heading-lg font-light tracking-wider hover:text-gray-600 transition-colors animate-fade-in-left`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Account Actions */}
        <div className="mt-16 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center space-x-4 text-gray-600">
            <User size={20} />
            <span className="body-lg">Account</span>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <Heart size={20} />
            <span className="body-lg">Wishlist</span>
          </div>
          
          <div className="flex items-center space-x-4 text-gray-600">
            <ShoppingBag size={20} />
            <span className="body-lg">Shopping Bag</span>
          </div>
        </div>

        {/* Brand Info */}
        <div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="body-sm text-gray-600 leading-relaxed">
            MINIMALISM REDEFINED
          </p>
          <p className="body-sm text-gray-500 mt-2">
            Curated fashion for the modern individual
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
