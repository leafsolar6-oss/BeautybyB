import Link from 'next/link';
import { categories } from '@/data/products';

export default function CategoryGrid() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group block">
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center text-xs md:text-sm font-bold tracking-wider uppercase">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
