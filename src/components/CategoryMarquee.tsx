const categories = ['Skin Care', 'Makeup', 'Hair Care', 'Fragrances', 'Nail Care', 'Body Care', 'Designer Perfumes', 'Skincare', 'Supplements', 'Gym'];

export default function CategoryMarquee() {
  return (
    <div className="bg-[#1a3c34] overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...categories, ...categories].map((cat, i) => (
          <span key={i} className="flex items-center mx-6 text-white text-sm font-medium tracking-wider">
            {cat}
            <svg className="w-3.5 h-3.5 ml-6 text-[#c5a572]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.78 9.22c-1.11-1.11-2.91-1.11-4.02 0l-.71.71-1.41-1.41.71-.71c1.11-1.11 2.91-1.11 4.02 0s1.11 2.91 0 4.02l-4.95 4.95c-1.11 1.11-2.91 1.11-4.02 0s-1.11-2.91 0-4.02l.71-.71 1.41 1.41-.71.71c-.37.37-.37.97 0 1.34s.97.37 1.34 0l4.95-4.95c.37-.37.37-.97 0-1.34z"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" opacity="0"/>
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
