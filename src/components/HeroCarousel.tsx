'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Slide {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1400&h=700&fit=crop',
    subtitle: 'Authentic Luxury',
    title: 'Find Your Signature Scent',
    description: 'Curated perfumes from the world\'s finest houses.',
    cta: 'Shop Perfumes',
    ctaLink: '/shop',
  },
  {
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1400&h=700&fit=crop',
    subtitle: 'Imported & Authentic',
    title: 'Skincare That Works',
    description: 'Premium skincare routines for every skin type.',
    cta: 'Shop Skincare',
    ctaLink: '/shop?cat=skincare',
  },
  {
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c4df491f?w=1400&h=700&fit=crop',
    subtitle: 'Health & Wellness',
    title: 'Fuel Your Journey',
    description: 'Quality supplements for health, fitness & glow.',
    cta: 'Shop Supplements',
    ctaLink: '/shop?cat=supplements',
  },
  {
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1400&h=700&fit=crop',
    subtitle: 'Radiance Essentials',
    title: 'Glow From Within',
    description: 'Beauty & glow products for your best skin ever.',
    cta: 'Shop Beauty',
    ctaLink: '/shop?cat=beauty-glow',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  // Auto-advance every 4 seconds (fast-paced)
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-dark">
      {/* Slides */}
      <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
              index === current
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-[1.02]'
            }`}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <div className="max-w-lg">
                  <span
                    className={`inline-block text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 mb-3 transition-all duration-500 delay-200 ${
                      index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                  >
                    {slide.subtitle}
                  </span>
                  <h2
                    className={`font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] transition-all duration-500 delay-300 ${
                      index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`text-[13px] md:text-[15px] text-white/70 mt-3 max-w-sm transition-all duration-500 delay-400 ${
                      index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`mt-6 transition-all duration-500 delay-500 ${
                      index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                  >
                    <Link
                      href={slide.ctaLink}
                      className="inline-block px-7 py-3 bg-white text-dark text-[12px] font-bold uppercase tracking-wider hover:bg-gold hover:text-white transition-colors duration-300"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators + progress bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="relative w-8 h-[3px] bg-white/30 overflow-hidden transition-all duration-300 hover:bg-white/50"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current && (
              <span
                className="absolute left-0 top-0 h-full bg-white animate-[progress_4s_linear]"
                style={{
                  animation: 'progress 4s linear forwards',
                }}
              />
            )}
            {index !== current && (
              <span className={`absolute left-0 top-0 w-full h-full bg-white transition-all duration-300 ${
                index === current ? 'scale-x-100' : 'scale-x-0'
              }`} />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
