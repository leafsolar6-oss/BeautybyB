'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 text-center">
        <span className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Join Our Community</span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-green-950 mt-4 mb-6 leading-tight">
          Subscribe to Our <em className="italic font-normal">Newsletter</em>
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed mb-12 max-w-2xl mx-auto px-4">
          Be the first to discover new arrivals, exclusive offers, and beauty insights curated by our experts.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-white border-2 border-gray-200 rounded-sm focus:outline-none focus:border-gold transition-colors text-base"
          />
          <button
            type="submit"
            className="btn-luxury px-8 py-4 bg-gold text-green-950 font-bold tracking-wide rounded-sm hover:bg-gold-light transition-all duration-500 whitespace-nowrap"
          >
            {isSubmitted ? 'Thank You!' : 'Subscribe'}
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-6">
          Join 50,000+ beauty enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
