import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata: Metadata = {
  title: "BeautybyB — Authentic Perfumes, Skincare & Supplements | Nigeria",
  description: "Nigeria's trusted destination for authentic luxury perfumes, imported skincare, health supplements, weight management, gym products & beauty essentials. Nationwide delivery.",
  keywords: "perfume Nigeria, authentic fragrance Lagos, skincare Nigeria, supplements Nigeria, gym supplements, weight loss, beauty products, BeautybyB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <WishlistProvider>
          <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
