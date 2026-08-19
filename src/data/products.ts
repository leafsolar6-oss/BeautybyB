// Product types
export interface Product {
  id: number;
  name: string;
  brand: string;
  tagline: string;
  price: string;
  priceNumeric: number;
  category: string;
  gender: string;
  notes: string;
  image: string;
  bestseller: boolean;
  newArrival: boolean;
  inStock: boolean;
  size: string;
  concentration: string;
}

export const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'perfume', label: 'Perfumes' },
  { id: 'supplement', label: 'Supplements' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'beauty-glow', label: 'Beauty & Glow' },
];

export const genderFilters = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'unisex', label: 'Unisex' },
];
