import Link from 'next/link';
import { Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface ProductSectionProps {
  title: string;
  subtitle: string;
  href: string;
  products: Product[];
}

export default function ProductSection({ title, subtitle, href, products }: ProductSectionProps) {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading text-2xl md:text-4xl uppercase tracking-wider mb-2">
            <Link href={href} className="hover:text-[#c8102e] transition-colors">
              {title}
            </Link>
          </h2>
          <p className="text-sm md:text-base text-[#666]">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
