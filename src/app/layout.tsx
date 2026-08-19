import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BeautybyB — Nigeria's Luxury Fragrance Destination",
  description: "Discover exquisite luxury perfumes from Essenza Collection, Tom Ford, Xerjoff, Amouage, Nishane and more. Nigeria's premier fragrance store — delivering nationwide.",
  keywords: "luxury perfume Nigeria, Essenza, Tom Ford, Xerjoff, Amouage, Nishane, fragrance Lagos, perfume Abuja, BeautybyB",
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
