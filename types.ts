
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'hot-dogs' | 'burgers' | 'gourmet' | 'sides' | 'drinks' | 'extra-dog' | 'extra-burger' | 'combos';
  isFeatured?: boolean;
  extraIds?: string[];
  standardIngredients?: string[];
}

export interface BusinessConfig {
  name: string;
  phone: string;
  formattedPhone: string;
  openingHours: string;
  closedDays: string;
  address: string;
}

export interface CartItem {
  cartId: string;
  product: Product;
  quantity: number;
  selectedExtras: Product[];
  removedIngredients: string[];
  observation?: string;
}
