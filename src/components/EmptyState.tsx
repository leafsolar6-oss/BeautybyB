import Link from 'next/link';

export default function EmptyState() {
  return (
    <div className="py-20 md:py-28 text-center">
      <h3 className="font-serif text-3xl md:text-4xl text-dark mb-4">
        Curated Selection
      </h3>
      <p className="text-[#666] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Our master curators are selecting the finest fragrances.
        <br />
        A bespoke collection of exceptional scents will be revealed shortly.
      </p>

      <Link
        href="/shop"
        className="inline-block px-10 py-4 bg-dark text-white text-xs font-bold tracking-widest uppercase hover:bg-[#b8956a] transition-all"
      >
        Explore Collection
      </Link>
    </div>
  );
}
