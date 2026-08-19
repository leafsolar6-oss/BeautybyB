// Product types and CSV import support
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
  { id: 'skincare', label: 'Skincare' },
  { id: 'supplements', label: 'Supplements' },
  { id: 'weight-management', label: 'Weight Management' },
  { id: 'gym-fitness', label: 'Gym & Fitness' },
  { id: 'beauty-glow', label: 'Beauty & Glow' },
];

export const genderFilters = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'unisex', label: 'Unisex' },
];
