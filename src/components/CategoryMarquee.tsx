import { marqueeCategories } from '@/data/products';

export default function CategoryMarquee() {
  const items = [...marqueeCategories, ...marqueeCategories];

  return (
    <div className="bg-[#2d5016] overflow-hidden py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((cat, i) => (
          <span key={i} className="flex items-center mx-8">
            <span className="text-white text-sm font-medium tracking-wider">{cat}</span>
            <svg className="w-4 h-4 ml-8 text-[#b8956a]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
