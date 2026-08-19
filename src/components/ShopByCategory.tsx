import { shopCategories } from '@/data/products';

export default function ShopByCategory() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[#888] text-sm mb-2">Our Categories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Shop By <span className="text-[#b8956a]">Category</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {shopCategories.map((cat) => (
            <a key={cat.name} href="#" className="cat-circle text-center group">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="mt-3 font-semibold text-sm text-[#1a1a1a]">{cat.name}</p>
              <p className="text-xs text-[#999]">{cat.count} Products</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
