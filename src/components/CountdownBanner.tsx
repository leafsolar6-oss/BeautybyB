'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 14, minutes: 48, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; minutes = 0; seconds = 0; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="py-12 md:py-16 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden bg-white shadow-sm border border-[#e5e7eb]/60">
          {/* Left Image */}
          <div className="hidden md:block aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop&q=80"
              alt="Summer Glow"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="md:col-span-1 flex flex-col items-center justify-center py-10 md:py-12 px-6">
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Special Savings</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2">
              Summer <span className="text-[#c5a572]">Glow</span> Deals
            </h2>
            <p className="text-[#666] text-sm mb-8">Get 50% off - Limited Time Offer!</p>

            {/* Countdown */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="countdown-box">
                    <span className="text-xl md:text-2xl font-bold block">{pad(item.value)}</span>
                    <span className="text-[10px] text-white/70 block">{item.label}</span>
                  </div>
                  {i < 3 && <span className="text-[#1a3c34] text-xl font-bold">:</span>}
                </div>
              ))}
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a3c34] text-white text-sm font-semibold rounded-full hover:bg-[#c5a572] transition-colors"
            >
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>

          {/* Right Image */}
          <div className="hidden md:block aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=800&fit=crop&q=80"
              alt="Summer Glow"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
