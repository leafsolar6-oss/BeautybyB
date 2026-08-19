'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SummerGlowBanner() {
  const [time, setTime] = useState({ days: 4, hours: 14, minutes: 48, seconds: 18 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="py-8 md:py-12 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Left Image */}
          <div className="md:col-span-3 aspect-[3/4] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=600&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="md:col-span-6 py-10 md:py-14 px-6 flex flex-col items-center justify-center text-center relative">
            {/* Decorative palm leaves */}
            <div className="absolute top-0 left-0 w-32 h-20 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 100" fill="none"><path d="M0 100C0 100 30 50 80 30C130 10 200 0 200 0C200 0 150 40 100 60C50 80 0 100 0 100Z" fill="#2d5016"/></svg>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-20 opacity-20 pointer-events-none rotate-180">
              <svg viewBox="0 0 200 100" fill="none"><path d="M0 100C0 100 30 50 80 30C130 10 200 0 200 0C200 0 150 40 100 60C50 80 0 100 0 100Z" fill="#2d5016"/></svg>
            </div>

            <p className="text-sm text-[#333] mb-2">Special Savings</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
              Summer <span className="text-[#b8956a]">Glow</span> Deals
            </h2>
            <p className="text-[#888] text-sm mb-8">Get 50% off - Limited Time Offer!</p>

            {/* Countdown */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { v: time.days, l: 'Days' },
                { v: time.hours, l: 'Hours' },
                { v: time.minutes, l: 'Minutes' },
                { v: time.seconds, l: 'Seconds' },
              ].map((item, i) => (
                <div key={item.l} className="flex items-center gap-3">
                  <div className="text-center">
                    <span className="text-2xl md:text-3xl font-bold text-[#1a1a1a] block">{pad(item.v)}</span>
                    <span className="text-[10px] text-[#888] block">{item.l}</span>
                  </div>
                  {i < 3 && <span className="text-[#1a1a1a] text-2xl font-bold -mt-3">:</span>}
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d5016] text-white text-sm font-semibold rounded-full hover:bg-[#1e3a0e] transition-colors"
            >
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="md:col-span-3 aspect-[3/4] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=600&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
