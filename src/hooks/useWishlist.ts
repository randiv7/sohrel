import { useState, useEffect } from 'react';
import { Product } from '@/types';
import { toast } from '@/hooks/use-toast';

export const useWishlist = () => {
  const [items, setItems] = useState<Product[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('sohrel-wishlist');
    if (savedWishlist) {
      setItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('sohrel-wishlist', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Already in wishlist",
          description: `${product.name} is already in your wishlist`,
        });
        return currentItems;
      } else {
        toast({
          title: "Added to wishlist",
          description: `${product.name} added to your wishlist`,
        });
        return [...currentItems, product];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => {
      const item = currentItems.find(item => item.id === productId);
      if (item) {
        toast({
          title: "Removed from wishlist",
          description: `${item.name} removed from your wishlist`,
        });
      }
      return currentItems.filter(item => item.id !== productId);
    });
  };

  const isInWishlist = (productId: string) => {
    return items.some(item => item.id === productId);
  };

  const clearWishlist = () => {
    setItems([]);
    toast({
      title: "Wishlist cleared",
      description: "All items removed from your wishlist",
    });
  };

  const getTotalItems = () => {
    return items.length;
  };

  return {
    items,
    addItem,
    removeItem,
    isInWishlist,
    clearWishlist,
    getTotalItems
  };
};