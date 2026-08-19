'use client';

import Link from 'next/link';

const categories = [
  {
    title: "MEN'S FRAGRANCES",
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume&gender=men',
  },
  {
    title: "WOMEN'S FRAGRANCES",
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume&gender=women',
  },
  {
    title: 'DESIGNER PERFUMES',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'ARABIAN PERFUMES',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'NICHE FRAGRANCES',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'SKINCARE & BEAUTY',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop',
    link: '/shop?cat=skincare',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.link} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0] mb-3">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="text-center text-[11px] font-bold tracking-widest text-dark uppercase">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
