export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
  countdown?: boolean;
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'SilkSculpt Serum',
    category: 'Skin Care',
    price: 35.00,
    originalPrice: 70.00,
    discount: 50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=80',
    isBestseller: true,
    countdown: true,
  },
  {
    id: 'p2',
    name: 'SilkSkin Serum',
    category: 'Skin Care',
    price: 48.00,
    originalPrice: 60.00,
    discount: 20,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=80',
    isBestseller: true,
  },
  {
    id: 'p3',
    name: 'Argan Glow',
    category: 'Hair Care',
    price: 63.00,
    originalPrice: 90.00,
    discount: 30,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop&q=80',
    isBestseller: true,
  },
  {
    id: 'p4',
    name: 'Argan Gold Oil',
    category: 'Body Care',
    price: 45.00,
    originalPrice: 50.00,
    discount: 10,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop&q=80',
    isBestseller: true,
  },
  {
    id: 'p5',
    name: 'Smooth Foundation',
    category: 'Makeup',
    price: 20.00,
    originalPrice: 40.00,
    discount: 50,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1631730486784-5c00d76b589b?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'p6',
    name: 'Smooth Body Cream',
    category: 'Body Care',
    price: 30.00,
    originalPrice: 60.00,
    discount: 50,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'p7',
    name: 'AquaAura Wellness',
    category: 'Body Care',
    price: 30.00,
    originalPrice: 60.00,
    discount: 50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
  {
    id: 'p8',
    name: 'Velvet Rose',
    category: 'Makeup',
    price: 10.00,
    originalPrice: 20.00,
    discount: 50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
  {
    id: 'p9',
    name: 'Herbal Haven',
    category: 'Body Care',
    price: 10.00,
    originalPrice: 20.00,
    discount: 50,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
  {
    id: 'p10',
    name: 'Essence Body Gel',
    category: 'Body Care',
    price: 30.00,
    originalPrice: 60.00,
    discount: 50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
  {
    id: 'p11',
    name: 'HydraLuxe Serum',
    category: 'Skin Care',
    price: 20.00,
    originalPrice: 40.00,
    discount: 50,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
  {
    id: 'p12',
    name: 'OceanMist Moisturizer',
    category: 'Skin Care',
    price: 20.00,
    originalPrice: 40.00,
    discount: 50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=600&fit=crop&q=80',
    isNew: true,
  },
];

export const shopCategories = [
  { name: 'Skin Care', count: 52, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&q=80' },
  { name: 'Makeup', count: 48, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&q=80' },
  { name: 'Hair Care', count: 86, image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop&q=80' },
  { name: 'Fragrances', count: 27, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&q=80' },
  { name: 'Nail Care', count: 86, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=400&fit=crop&q=80' },
];

export const marqueeCategories = ['Skin Care', 'Makeup', 'Hair Care', 'Fragrances', 'Nail Care', 'Body Care'];
