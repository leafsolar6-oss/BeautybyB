export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-2.5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Free Delivery on Orders Over ₦50,000</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://www.instagram.com/beauty_byb.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a84e] transition-colors">Instagram</a>
          <span className="text-gray-600">|</span>
          <a href="https://wa.me/2348012345678" target="_blank" rel="noopener noreferrer" className="hover:text-[#c8a84e] transition-colors">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
