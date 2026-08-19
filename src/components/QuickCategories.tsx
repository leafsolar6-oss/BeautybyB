import Link from 'next/link';
import { quickCategories } from '@/data/products';

export default function QuickCategories() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {quickCategories.map((cat) => (
            <Link key={cat.name} href={cat.href} className="group block relative aspect-[4/5] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white font-heading text-lg md:text-xl uppercase tracking-wider text-center font-bold">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
