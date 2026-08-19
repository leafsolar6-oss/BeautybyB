import HeroSection from '@/components/HeroSection';
import CategoryMarquee from '@/components/CategoryMarquee';
import ShopByCategory from '@/components/ShopByCategory';
import PromoBanners from '@/components/PromoBanners';
import AboutSection from '@/components/AboutSection';
import BestSellersSection from '@/components/BestSellersSection';
import CountdownBanner from '@/components/CountdownBanner';
import DealsOfTheDay from '@/components/DealsOfTheDay';
import WeeklyDealsBanner from '@/components/WeeklyDealsBanner';
import NewArrivalsSection from '@/components/NewArrivalsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import InstagramSection from '@/components/InstagramSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <div className="bg-[#f8f9f8]">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* Shop By Category */}
      <ShopByCategory />

      {/* Two Promo Banners */}
      <PromoBanners />

      {/* About Us */}
      <AboutSection />

      {/* Best Sellers */}
      <BestSellersSection />

      {/* Summer Glow Countdown Banner */}
      <CountdownBanner />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* Deals of the Day */}
      <DealsOfTheDay />

      {/* Weekly Deals Banner */}
      <WeeklyDealsBanner />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* New Arrivals */}
      <NewArrivalsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Category Marquee */}
      <CategoryMarquee />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
