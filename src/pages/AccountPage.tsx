import React, { useState } from 'react';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import SearchModal from '@/components/SearchModal';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';

const AccountPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

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
          <div className="max-w-6xl mx-auto">
            <h1 className="heading-xl mb-8">MY ACCOUNT</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User size={32} className="text-gray-600" />
                    </div>
                    <h3 className="heading-sm">John Doe</h3>
                    <p className="body-sm text-gray-600">john.doe@email.com</p>
                  </div>
                  
                  <nav className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveTab(item.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors ${
                            activeTab === item.id
                              ? 'bg-black text-white'
                              : 'hover:bg-gray-200'
                          }`}
                        >
                          <Icon size={20} />
                          <span className="body-sm">{item.label}</span>
                        </button>
                      );
                    })}
                    
                    <button className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 text-red-600 transition-colors">
                      <LogOut size={20} />
                      <span className="body-sm">Sign Out</span>
                    </button>
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                {activeTab === 'profile' && (
                  <div className="bg-white border border-gray-200 p-8">
                    <h2 className="heading-md mb-6">Profile Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block caption mb-2">FIRST NAME</label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                        />
                      </div>
                      
                      <div>
                        <label className="block caption mb-2">LAST NAME</label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block caption mb-2">EMAIL</label>
                        <input
                          type="email"
                          defaultValue="john.doe@email.com"
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block caption mb-2">PHONE</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <button className="btn-primary">UPDATE PROFILE</button>
                    </div>
                  </div>
                )}

                {activeTab === 'orders' && (
                  <div className="bg-white border border-gray-200 p-8">
                    <h2 className="heading-md mb-6">Order History</h2>
                    
                    <div className="text-center py-16">
                      <Package size={64} className="mx-auto text-gray-300 mb-6" />
                      <h3 className="heading-sm text-gray-600 mb-4">No orders yet</h3>
                      <p className="body-lg text-gray-500 mb-8">
                        When you place your first order, it will appear here
                      </p>
                      <a href="/men" className="btn-primary">
                        START SHOPPING
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === 'wishlist' && (
                  <div className="bg-white border border-gray-200 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="heading-md">Wishlist</h2>
                      <a href="/wishlist" className="btn-ghost">
                        VIEW ALL
                      </a>
                    </div>
                    
                    <div className="text-center py-16">
                      <Heart size={64} className="mx-auto text-gray-300 mb-6" />
                      <h3 className="heading-sm text-gray-600 mb-4">Your wishlist is empty</h3>
                      <p className="body-lg text-gray-500 mb-8">
                        Save items you love to your wishlist
                      </p>
                      <a href="/men" className="btn-primary">
                        CONTINUE SHOPPING
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="bg-white border border-gray-200 p-8">
                    <h2 className="heading-md mb-6">Account Settings</h2>
                    
                    <div className="space-y-6">
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="heading-sm mb-4">Notifications</h3>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="body-sm">Email notifications for new arrivals</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="body-sm">Email notifications for sales</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="body-sm">SMS notifications</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="heading-sm mb-4">Privacy</h3>
                        <div className="space-y-4">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                            <span className="body-sm">Allow personalized recommendations</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="w-4 h-4" />
                            <span className="body-sm">Share data with partners</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="heading-sm mb-4">Danger Zone</h3>
                        <button className="btn-secondary border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                          DELETE ACCOUNT
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
};

export default AccountPage;