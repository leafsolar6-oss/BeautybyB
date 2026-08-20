import HeroSection from '@/components/HeroSection';
import BentoCategories from '@/components/BentoCategories';
import AboutSection from '@/components/AboutSection';
import ProductShowcase from '@/components/ProductShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsletterSection from '@/components/NewsletterSection';
import InstagramFeed from '@/components/InstagramFeed';

export default function Home() {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="categories"><BentoCategories /></section>
      <section id="about"><AboutSection /></section>
      <section id="bestsellers"><ProductShowcase /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="instagram"><InstagramFeed /></section>
      <section id="newsletter"><NewsletterSection /></section>
    </>
  );
}
