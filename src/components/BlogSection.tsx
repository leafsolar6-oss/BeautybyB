import Link from 'next/link';

const blogPosts = [
  {
    title: 'Your Ultimate Guide to Healthy, Radiant Skin',
    date: '22 August 2026',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'The Best Body Care Products for Every Skin Type',
    date: '20 August 2026',
    category: 'Body Care',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Why Sun Protection is Essential for Healthy Skin',
    date: '18 August 2026',
    category: 'Skin Care',
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee3313?w=600&h=400&fit=crop&q=80',
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[#c5a572] text-xs tracking-wider uppercase font-medium mb-2">News & Blogs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
              Our Latest <span className="text-[#c5a572]">News & Blogs</span>
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a3c34] text-white text-xs font-bold rounded-full hover:bg-[#c5a572] transition-colors self-start"
          >
            View All Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-[#1a3c34] text-white text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-[#c5a572] font-medium">BeautybyB</span>
                <span className="text-[#ccc]">•</span>
                <span className="text-xs text-[#999]">{post.date}</span>
              </div>
              <h3 className="font-semibold text-base text-[#1a1a1a] group-hover:text-[#1a3c34] transition-colors leading-snug mb-2">
                {post.title}
              </h3>
              <Link href="#" className="text-xs font-semibold text-[#c5a572] hover:text-[#1a3c34] transition-colors">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
