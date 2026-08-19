import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "BeautybyB — Dark Luxury Fragrances",
  description: "Nigeria's premier destination for authentic luxury perfumes and skincare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-primary">
        <CartProvider>
          <Sidebar />
          <div className="ml-64 min-h-screen">
            <TopBar />
            <main className="pt-20">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
