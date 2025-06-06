
export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  category: 'men' | 'women' | 'kids';
  subcategory: string;
  sizes: string[];
  colors: string[];
  material: string;
  style: string;
  images: string[];
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isSale?: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
  styles: string[];
  materials: string[];
  availability: string[];
}

export interface Customer {
  fullName: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  estimatedDelivery: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: string;
}
