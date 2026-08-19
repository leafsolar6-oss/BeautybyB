import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BeautybyB — Luxury Fragrances",
  description: "Discover exquisite luxury perfumes crafted with the finest ingredients. Elevate your essence with BeautybyB.",
  keywords: "luxury perfume, fragrance, BeautybyB, eau de parfum, niche fragrance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
