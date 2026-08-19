export default function ContactPage() {
  return (
    <div className="max-w-[800px] mx-auto px-8 py-32 text-center">
      <h1 className="font-serif text-4xl text-dark mb-6">Contact</h1>
      <p className="text-lg text-muted mb-8">
        Reach out to us via Instagram or WhatsApp
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a 
          href="https://www.instagram.com/beauty_byb.ng" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-dark text-white text-base font-semibold rounded-full hover:bg-dark/80 transition-all"
        >
          Instagram
        </a>
        <a 
          href="https://wa.me/2348012345678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 border-2 border-dark text-dark text-base font-semibold rounded-full hover:bg-dark hover:text-white transition-all"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
