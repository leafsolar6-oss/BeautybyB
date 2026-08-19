'use client';

import Link from 'next/link';

const categories = [
  {
    title: "Men's Fragrances",
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume&gender=men',
  },
  {
    title: "Women's Fragrances",
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume&gender=women',
  },
  {
    title: 'Designer Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'Arabian Perfumes',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'Niche Fragrances',
    image: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?w=600&h=600&fit=crop',
    link: '/shop?cat=perfume',
  },
  {
    title: 'Skincare & Beauty',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop',
    link: '/shop?cat=skincare',
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.link} className="group block">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-center text-base font-semibold text-dark">
                {cat.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
