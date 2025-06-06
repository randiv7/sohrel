
import { Product } from '@/types';

export const products: Product[] = [
  // Men's Collection
  {
    id: 'men-essential-white-tee',
    name: 'Essential White Tee',
    price: 45,
    category: 'men',
    subcategory: 'Shirts & Tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'
    ],
    description: 'A minimalist essential crafted from premium organic cotton. Perfect for layering or wearing alone.',
    inStock: true,
    isNew: true
  },
  {
    id: 'men-classic-black-jeans',
    name: 'Classic Black Jeans',
    price: 85,
    category: 'men',
    subcategory: 'Pants & Bottoms',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Black'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400'
    ],
    description: 'Timeless black denim with a modern slim fit. Versatile enough for any occasion.',
    inStock: true
  },
  {
    id: 'men-minimal-bomber',
    name: 'Minimal Bomber Jacket',
    price: 150,
    category: 'men',
    subcategory: 'Outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Synthetic',
    style: 'Street',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400'
    ],
    description: 'Clean-lined bomber with modern proportions. A contemporary take on a classic silhouette.',
    inStock: true
  },
  {
    id: 'men-structured-polo',
    name: 'Structured Polo',
    price: 65,
    category: 'men',
    subcategory: 'Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black'],
    material: 'Cotton',
    style: 'Formal',
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400',
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400'
    ],
    description: 'Refined polo shirt with clean lines and premium finish. Elevated comfort for modern professionals.',
    inStock: true
  },
  {
    id: 'men-tailored-shorts',
    name: 'Tailored Shorts',
    price: 55,
    salePrice: 35,
    category: 'men',
    subcategory: 'Pants & Bottoms',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1506629905607-84d56143dbc0?w=400',
      'https://images.unsplash.com/photo-1506629905607-84d56143dbc0?w=400'
    ],
    description: 'Precision-cut shorts with a clean aesthetic. Perfect for warm weather sophistication.',
    inStock: true,
    isSale: true
  },

  // Women's Collection
  {
    id: 'women-flowing-midi-dress',
    name: 'Flowing Midi Dress',
    price: 95,
    category: 'women',
    subcategory: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
    material: 'Cotton',
    style: 'Minimal',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400'
    ],
    description: 'Effortless midi dress with fluid movement. Understated elegance for any occasion.',
    inStock: true,
    isNew: true
  },
  {
    id: 'women-cropped-blazer',
    name: 'Cropped Blazer',
    price: 120,
    category: 'women',
    subcategory: 'Outerwear',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Wool',
    style: 'Formal',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400'
    ],
    description: 'Sharp tailoring meets modern proportions. A statement piece for the contemporary wardrobe.',
    inStock: true
  },
  {
    id: 'women-high-waist-trousers',
    name: 'High-Waist Trousers',
    price: 75,
    category: 'women',
    subcategory: 'Bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Gray'],
    material: 'Cotton',
    style: 'Formal',
    images: [
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400'
    ],
    description: 'High-waisted trousers with a flattering silhouette. Sophistication with comfort.',
    inStock: true
  },
  {
    id: 'women-oversized-knit',
    name: 'Oversized Knit Sweater',
    price: 90,
    category: 'women',
    subcategory: 'Tops & Blouses',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Gray'],
    material: 'Wool',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    ],
    description: 'Luxuriously soft oversized sweater. Cozy elegance with contemporary styling.',
    inStock: true
  },
  {
    id: 'women-slip-dress',
    name: 'Minimalist Slip Dress',
    price: 80,
    salePrice: 60,
    category: 'women',
    subcategory: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black'],
    material: 'Cotton',
    style: 'Minimal',
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0c6bb8e8e0b?w=400',
      'https://images.unsplash.com/photo-1566479179817-c0c6bb8e8e0b?w=400'
    ],
    description: 'Pure minimalism in dress form. Effortless sophistication for day to night.',
    inStock: true,
    isSale: true
  },

  // Kids' Collection
  {
    id: 'kids-organic-tee',
    name: 'Organic Cotton Tee',
    price: 25,
    category: 'kids',
    subcategory: 'Tops',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '10', '12'],
    colors: ['White', 'Black', 'Gray'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400',
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5d2?w=400'
    ],
    description: 'Soft organic cotton tee designed for active kids. Gentle on skin and planet.',
    inStock: true,
    isNew: true
  },
  {
    id: 'kids-joggers',
    name: 'Comfortable Joggers',
    price: 35,
    category: 'kids',
    subcategory: 'Bottoms',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '10', '12'],
    colors: ['Black', 'Gray'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400'
    ],
    description: 'Ultra-comfortable joggers for all-day play. Modern cut with classic comfort.',
    inStock: true
  },
  {
    id: 'kids-hoodie',
    name: 'Hooded Sweatshirt',
    price: 45,
    category: 'kids',
    subcategory: 'Outerwear',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '10', '12'],
    colors: ['Black', 'Gray'],
    material: 'Cotton',
    style: 'Casual',
    images: [
      'https://images.unsplash.com/photo-1526518938125-35d0e82e7f8f?w=400',
      'https://images.unsplash.com/photo-1526518938125-35d0e82e7f8f?w=400'
    ],
    description: 'Cozy hooded sweatshirt with clean design. Perfect for layering and play.',
    inStock: true
  }
];

export const categories = {
  men: {
    name: 'MEN',
    subcategories: ['Shirts & Tops', 'Pants & Bottoms', 'Outerwear', 'Accessories']
  },
  women: {
    name: 'WOMEN',
    subcategories: ['Dresses', 'Tops & Blouses', 'Bottoms', 'Outerwear', 'Accessories']
  },
  kids: {
    name: 'KIDS',
    subcategories: ['Tops', 'Bottoms', 'Outerwear', 'Accessories']
  }
};

export const filterOptions = {
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2T', '3T', '4T', '5T', '6', '7', '8', '10', '12', '28', '30', '32', '34', '36', '38'],
  colors: ['Black', 'White', 'Gray'],
  materials: ['Cotton', 'Linen', 'Wool', 'Synthetic'],
  styles: ['Casual', 'Formal', 'Street', 'Minimal'],
  priceRange: [20, 200] as [number, number]
};
