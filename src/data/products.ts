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
  { id: 'supplement', label: 'Supplements' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'beauty-glow', label: 'Beauty & Glow' },
];

// Subcategory filters for perfumes
export const perfumeSubcategories = [
  { id: 'all', label: 'All Perfumes' },
  { id: 'designer', label: 'Designer' },
  { id: 'arabian', label: 'Arabian' },
  { id: 'niche', label: 'Niche' },
  { id: 'unisex', label: 'Unisex' },
];

// Top brands for filtering
export const topBrands = [
  { id: 'all', label: 'All Brands' },
  { id: 'Zara Perfume', label: 'Zara' },
  { id: 'Amouage Perfumes', label: 'Amouage' },
  { id: 'Afnan Perfumes', label: 'Afnan' },
  { id: 'Al Haramain', label: 'Al Haramain' },
  { id: 'Christian Dior', label: 'Dior' },
  { id: 'Louis Vuitton LV', label: 'Louis Vuitton' },
  { id: 'Victoria Secret', label: "Victoria's Secret" },
  { id: 'Paco Rabanne', label: 'Paco Rabanne' },
  { id: 'Yves Saint Laurent', label: 'YSL' },
  { id: 'Armaf Perfumes', label: 'Armaf' },
  { id: 'Giorgio Armani', label: 'Armani' },
];

export const genderFilters = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'unisex', label: 'Unisex' },
];
