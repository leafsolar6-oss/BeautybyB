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
    name: 'Designer Perfumes',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=designer',
  },
  {
    name: 'Imported Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=skincare',
  },
  {
    name: 'Skincare Supplements',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=supplements',
  },
  {
    name: 'Gym Supplements',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=1600&fit=crop&crop=center&q=90&auto=format',
    href: '/shop?category=gym',
  },
];

export const quickCategories = [
  { name: 'Designer Perfumes', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=designer' },
  { name: 'Imported Skincare', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=skincare' },
  { name: 'Skincare Supplements', image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=supplements' },
  { name: 'Gym Supplements', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop?category=gym' },
  { name: 'Best Sellers', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
  { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
  { name: 'Gift Sets', image: 'https://images.unsplash.com/photo-1549298222-1b090ee4ec07?w=1200&h=1200&fit=crop&crop=center&q=90&auto=format', href: '/shop' },
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
