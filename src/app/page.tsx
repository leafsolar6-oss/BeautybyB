import HeroSection from '@/components/HeroSection';
import CategoryMarquee from '@/components/CategoryMarquee';
import ShopByCategory from '@/components/ShopByCategory';
import PromoBanners from '@/components/PromoBanners';
import AboutSection from '@/components/AboutSection';
import BestSellersSection from '@/components/BestSellersSection';
import SummerGlowBanner from '@/components/SummerGlowBanner';
import DealsSection from '@/components/DealsSection';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import InstagramSection from '@/components/InstagramSection';
import FAQSection from '@/components/FAQSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <HeroSection />
      <CategoryMarquee />
      <ShopByCategory />
      <PromoBanners />
      <AboutSection />
      <BestSellersSection />
      <SummerGlowBanner />
      <CategoryMarquee />
      <DealsSection />
      <CategoryMarquee />
      <NewArrivalsSection />
      <TestimonialsSection />
      <BlogSection />
      <CategoryMarquee />
      <InstagramSection />
      <CategoryMarquee />
      <FAQSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
