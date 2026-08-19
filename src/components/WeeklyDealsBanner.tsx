import Link from 'next/link';

export default function WeeklyDealsBanner() {
  return (
    <section className="py-6 bg-[#f8f9f8]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1a3c34] via-[#256046] to-[#1a3c34] p-8 md:p-12">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=500&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-[10%] top-0 bottom-0 w-1/4 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=500&fit=crop&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-lg">
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">Weekly Deals</p>
            <h2 className="font-heading text-2xl md:text-4xl font-bold text-white mb-3">
              Amazing Savings: Weekly<br/>
              <span className="text-[#c5a572]">Beauty Must-Haves</span>
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Discover this week&apos;s curated selection of beauty essentials at unbeatable prices. Limited stock available!
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a3c34] text-sm font-bold rounded-full hover:bg-[#c5a572] transition-colors"
            >
              Shop Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
