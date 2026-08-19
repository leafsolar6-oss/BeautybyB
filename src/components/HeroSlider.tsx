'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1600&h=700&fit=crop',
    title: 'LUXURY FRAGRANCES',
    subtitle: 'Authentic perfumes from top brands',
    cta: 'Shop Now',
    link: '/shop',
  },
  {
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?w=1600&h=700&fit=crop',
    title: 'NEW ARRIVALS',
    subtitle: 'Discover the latest scents',
    cta: 'Explore',
    link: '/shop',
  },
  {
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1600&h=700&fit=crop',
    title: 'BEST SELLERS',
    subtitle: 'Our most loved fragrances',
    cta: 'View Collection',
    link: '/shop',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] md:h-[600px] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 tracking-wide">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base mb-10 tracking-widest uppercase text-white/80">
                {slide.subtitle}
              </p>
              <Link
                href={slide.link}
                className="inline-block px-10 py-4 bg-white text-dark text-xs font-bold tracking-widest uppercase hover:bg-[#b8956a] hover:text-white transition-all duration-300"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[2px] transition-all duration-500 ${
              index === current ? 'bg-white w-12' : 'bg-white/40 w-6'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
