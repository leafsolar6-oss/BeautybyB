import Link from 'next/link';
import { categories } from '@/data/products';

export default function ShopByCategory() {
  const allCategories = [
    ...categories,
    {
      name: 'Lash & Brow',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600&h=1600&fit=crop&q=90&auto=format',
      href: '/services/lashes',
      count: 15,
    },
    {
      name: 'Body Care',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&h=1600&fit=crop&q=90&auto=format',
      href: '/shop?category=bodycare',
      count: 42,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Our Categories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Shop By <span className="text-[#c5a572]">Category</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {allCategories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="category-circle group text-center">
              <div className="cat-ring w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#c5a572]/30 transition-all duration-300 group-hover:border-[#1a3c34]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-3 font-semibold text-sm text-[#1a1a1a] group-hover:text-[#1a3c34] transition-colors">{cat.name}</p>
              <p className="text-xs text-[#999]">{cat.count} Products</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
