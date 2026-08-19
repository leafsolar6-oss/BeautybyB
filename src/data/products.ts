// Product data — Add your products here
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

export const allProducts: Product[] = [
  // Add your products here. Example:
  // {
  //   id: 1,
  //   name: 'Your Fragrance Name',
  //   brand: 'Brand Name',
  //   tagline: 'Short & Catchy',
  //   price: '₦50,000',
  //   priceNumeric: 50000,
  //   category: 'designer',
  //   gender: 'unisex',
  //   notes: 'Note 1, Note 2, Note 3',
  //   image: '/images/your-product.jpg',
  //   bestseller: true,
  //   newArrival: false,
  //   inStock: true,
  //   size: '100ml',
  //   concentration: 'Eau de Parfum',
  // },
];

export const categories = [
  { id: 'all', label: 'All Fragrances' },
  { id: 'designer', label: 'Designer' },
  { id: 'niche', label: 'Niche & Exclusive' },
  { id: 'perfume-oils', label: 'Perfume Oils' },
];

export const genderFilters = [
  { id: 'all', label: 'All' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'unisex', label: 'Unisex' },
];
