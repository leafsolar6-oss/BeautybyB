import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BentoCategories from '@/components/BentoCategories';
import AboutSection from '@/components/AboutSection';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BentoCategories />
        <AboutSection />
        <ProductShowcase />
        <TestimonialsSection />
        <InstagramFeed />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
