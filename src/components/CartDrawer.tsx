
import React from 'react';
import { X, Plus, User } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

const CartDrawer: React.FC = () => {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getSubtotal 
  } = useCart();

  const deliveryFee = 10;
  const total = getSubtotal() + deliveryFee;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="cart-drawer open">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="heading-md">SHOPPING BAG ({items.length})</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="heading-sm text-gray-600 mb-4">Your bag is empty</p>
              <p className="body-sm text-gray-500">
                Add some items to get started
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex space-x-4">
                  {/* Product Image */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-gray-50"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="heading-sm mb-1">{item.product.name}</h3>
                    <p className="caption text-gray-600 mb-2">
                      {item.size} • {item.color}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 mb-2">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="body-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    {/* Price and Remove */}
                    <div className="flex items-center justify-between">
                      <span className="heading-sm">
                        ${(item.product.salePrice || item.product.price) * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(index)}
                        className="caption text-gray-500 hover:text-black transition-colors"
                      >
                        REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Order Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="body-sm">Subtotal</span>
                <span className="body-sm">${getSubtotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="body-sm">Delivery</span>
                <span className="body-sm">${deliveryFee}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="heading-sm">Total</span>
                <span className="heading-sm">${total}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full btn-primary mb-4">
              CHECKOUT
            </button>

            {/* Guest Checkout */}
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <User size={16} />
              <span className="caption">GUEST CHECKOUT AVAILABLE</span>
            </div>

            {/* Estimated Delivery */}
            <div className="text-center mt-4">
              <p className="caption text-gray-500">
                Estimated delivery: 3-5 business days
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
