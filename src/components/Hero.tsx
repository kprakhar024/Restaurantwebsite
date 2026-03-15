import { Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Placeholder */}
      <div className="absolute inset-0 bg-earth">
        {/* PLACEHOLDER: Replace this div's background with your restaurant hero image */}
        {/* Example: Add style={{ backgroundImage: "url('/images/hero.jpg')" }} */}
        <div className="w-full h-full bg-gradient-to-br from-primary-dark via-earth to-primary flex items-center justify-center">
          <div className="text-warm/10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 mx-auto mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm tracking-widest uppercase">Hero Image Placeholder</p>
            <p className="text-xs mt-1 opacity-60">Replace with restaurant exterior or signature dish photo</p>
          </div>
        </div>
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-dancing text-gold text-xl md:text-2xl mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Authentic Village Flavors
        </p>

        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warm mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          Bati Chokha
        </h1>

        <p
          className="font-poppins text-warm/70 tracking-[0.3em] uppercase text-sm md:text-base mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Family Restaurant
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-warm/70 text-sm font-poppins mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gold" />
            <span>7:30 AM – 11:30 PM</span>
          </div>
          <span className="hidden sm:block text-warm/30">|</span>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span>Civil Lines, Prayagraj</span>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="#menu"
            className="bg-accent hover:bg-rust text-white font-poppins font-medium px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="border-2 border-warm/30 hover:border-gold text-warm hover:text-gold font-poppins font-medium px-8 py-3.5 rounded-full transition-all duration-300"
          >
            Visit Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
