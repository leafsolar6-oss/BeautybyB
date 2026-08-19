'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { heroSlides } from '@/data/products';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[280px] md:h-[420px] lg:h-[500px]">
        {heroSlides.map((slide, index) => (
          <Link
            key={index}
            href={slide.link}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="hidden md:block w-full h-full object-cover"
            />
            <img
              src={slide.mobileImage}
              alt={`Slide ${index + 1}`}
              className="md:hidden w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={() => goTo((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % heroSlides.length)}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-[3px] transition-all ${
              index === current ? 'bg-white w-12' : 'bg-white/40 w-8'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
