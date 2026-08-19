// BeautybyB product data
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  gender: 'Men' | 'Women' | 'Unisex';
  category: 'perfume' | 'skincare' | 'supplement' | 'beauty-glow';
  concentration: string;
  size: string;
  image: string;
  hoverImage?: string;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  notes?: string;
}

// Empty product list - ready for your products
export const products: Product[] = [];

export const categories = [
  {
    name: "Men's Fragrances",
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?gender=Men',
  },
  {
    name: "Women's Fragrances",
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?gender=Women',
  },
  {
    name: 'Designer Perfumes',
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=designer',
  },
  {
    name: 'Arabian Perfumes',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=arabian',
  },
  {
    name: 'Niche Fragrances',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=niche',
  },
  {
    name: 'Skincare & Beauty',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=skincare',
  },
];

export const quickCategories = [
  { name: "Women's Perfume", image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?gender=Women' },
  { name: "Men's Cologne", image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?gender=Men' },
  { name: 'Designer', image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=designer' },
  { name: 'Arabian', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=arabian' },
  { name: 'Niche', image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=niche' },
  { name: 'Best Sellers', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
  { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
  { name: 'Gift Sets', image: 'https://images.unsplash.com/photo-1549298222-1b090ee4ec07?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
  { name: 'Skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=skincare' },
];

export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=3200&h=1600&fit=crop&crop=center&q=90&auto=format',
    mobileImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&h=1000&fit=crop&crop=center&q=90&auto=format',
    link: '/shop',
  },
  {
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=3200&h=1600&fit=crop&crop=center&q=90&auto=format',
    mobileImage: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1600&h=1000&fit=crop&crop=center&q=90&auto=format',
    link: '/shop',
  },
  {
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=3200&h=1600&fit=crop&crop=center&q=90&auto=format',
    mobileImage: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&h=1000&fit=crop&crop=center&q=90&auto=format',
    link: '/shop',
  },
];
