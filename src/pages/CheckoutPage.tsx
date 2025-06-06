import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import SearchModal from '@/components/SearchModal';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

const CheckoutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  const { items, getSubtotal, clearCart } = useCart();
  const deliveryFee = 10;
  const total = getSubtotal() + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate order placement
    toast({
      title: "Order Placed Successfully!",
      description: `Your order will be delivered in 3-5 business days. ${paymentMethod === 'cod' ? 'Payment will be collected on delivery.' : ''}`,
    });

    // Clear cart after successful order
    clearCart();
    
    // Redirect to success page or account page
    window.location.href = '/account';
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header
          onSearchToggle={() => setIsSearchOpen(true)}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMenuOpen={isMobileMenuOpen}
        />

        <main className="pt-24">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="heading-xl mb-4">Your cart is empty</h1>
            <p className="body-lg text-gray-600 mb-8">Add some items to proceed to checkout</p>
            <Link to="/men" className="btn-primary">
              CONTINUE SHOPPING
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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
            {/* Header */}
            <div className="flex items-center mb-8">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
                <ArrowLeft size={20} />
                <span className="body-sm">BACK TO SHOPPING</span>
              </Link>
            </div>

            <h1 className="heading-xl mb-8">CHECKOUT</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Checkout Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h2 className="heading-md mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block caption mb-2">FIRST NAME *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                          required
                        />
                      </div>
                      <div>
                        <label className="block caption mb-2">LAST NAME *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block caption mb-2">EMAIL *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block caption mb-2">PHONE *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="heading-md mb-6">Shipping Address</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block caption mb-2">ADDRESS *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block caption mb-2">CITY *</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                            required
                          />
                        </div>
                        <div>
                          <label className="block caption mb-2">STATE *</label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                            required
                          />
                        </div>
                        <div>
                          <label className="block caption mb-2">ZIP CODE *</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block caption mb-2">COUNTRY</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-black"
                        >
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h2 className="heading-md mb-6">Payment Method</h2>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4"
                        />
                        <Truck size={20} />
                        <div>
                          <span className="body-sm font-medium">Cash on Delivery</span>
                          <p className="caption text-gray-600">Pay when your order arrives</p>
                        </div>
                      </label>
                      
                      <label className="flex items-center space-x-3 p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors opacity-50">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          disabled
                          className="w-4 h-4"
                        />
                        <CreditCard size={20} />
                        <div>
                          <span className="body-sm font-medium">Credit Card</span>
                          <p className="caption text-gray-600">Coming soon</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    PLACE ORDER
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-gray-50 p-6 sticky top-24">
                  <h2 className="heading-md mb-6">Order Summary</h2>
                  
                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-20 object-cover bg-gray-100"
                        />
                        <div className="flex-1">
                          <h3 className="body-sm font-medium">{item.product.name}</h3>
                          <p className="caption text-gray-600">
                            {item.size} • {item.color} • Qty: {item.quantity}
                          </p>
                          <p className="body-sm font-medium">
                            ${(item.product.salePrice || item.product.price) * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="body-sm">Subtotal</span>
                      <span className="body-sm">${getSubtotal()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="body-sm">Delivery</span>
                      <span className="body-sm">${deliveryFee}</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-2">
                      <span className="heading-sm">Total</span>
                      <span className="heading-sm">${total}</span>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="mt-6 p-4 bg-white border border-gray-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Truck size={16} />
                      <span className="caption">ESTIMATED DELIVERY</span>
                    </div>
                    <p className="body-sm">3-5 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;