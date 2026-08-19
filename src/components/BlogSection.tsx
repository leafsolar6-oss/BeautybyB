import Link from 'next/link';

const blogPosts = [
  { title: 'Your Ultimate Guide to Healthy, Radiant Skin', date: '22 January 2025', category: 'Skin Care', author: 'Jenny Alexander', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=350&fit=crop&q=80' },
  { title: 'The Best Body Care Products for Every Skin Type', date: '21 January 2025', category: 'Body Care', author: 'Jenny Alexander', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=350&fit=crop&q=80' },
  { title: 'Why Sun Protection is Essential for Healthy Skin', date: '20 January 2025', category: 'Skin Care', author: 'Jenny Alexander', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=350&fit=crop&q=80' },
];

export default function BlogSection() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#888] text-sm mb-2">News & Blogs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Our Latest <span className="text-[#b8956a]">News & Blogs</span>
            </h2>
          </div>
          <Link href="#" className="inline-flex items-center px-5 py-2.5 bg-[#2d5016] text-white text-xs font-bold rounded-full hover:bg-[#1e3a0e] transition-colors self-start">
            View All Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#2d5016] text-white text-xs font-medium rounded-full">{post.category}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-[#b8956a] font-medium">{post.author}</span>
                <span className="text-[#ccc]">•</span>
                <span className="text-xs text-[#999]">{post.date}</span>
              </div>
              <h3 className="font-semibold text-sm text-[#1a1a1a] group-hover:text-[#2d5016] transition-colors leading-snug mb-2">{post.title}</h3>
              <Link href="#" className="text-xs font-semibold text-[#b8956a] hover:text-[#2d5016] transition-colors">Read More</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
