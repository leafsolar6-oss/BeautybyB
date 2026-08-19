export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span>Spend $59 To Unlock Free Shipping For U.S.A Orders</span>
          <a href="/shop" className="font-semibold underline hover:no-underline">Shop Now</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://instagram.com" className="hover:text-gray-300 transition-colors">Instagram</a>
          <span className="text-gray-600">|</span>
          <a href="https://facebook.com" className="hover:text-gray-300 transition-colors">Facebook</a>
          <span className="text-gray-600">|</span>
          <a href="https://tiktok.com" className="hover:text-gray-300 transition-colors">TikTok</a>
        </div>
      </div>
    </div>
  );
}
