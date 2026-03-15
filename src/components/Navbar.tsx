import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-earth/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center">
              <span className="text-white font-playfair font-bold text-lg md:text-xl">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-warm font-playfair font-bold text-lg md:text-xl leading-tight">
                Bati Chokha
              </h1>
              <p className="text-warm/60 text-[10px] md:text-xs font-poppins tracking-wider uppercase">
                Family Restaurant
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-warm/80 hover:text-gold font-poppins text-sm tracking-wide transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="tel:+919956161195"
              className="flex items-center gap-2 bg-accent hover:bg-rust text-white px-4 py-2 rounded-full font-poppins text-sm transition-colors duration-300"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-warm p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-earth/98 backdrop-blur-sm border-t border-warm/10 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-warm/80 hover:text-gold hover:bg-white/5 rounded-lg font-poppins text-sm transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919956161195"
              className="flex items-center justify-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-poppins text-sm mt-2"
            >
              <Phone size={14} />
              +91 99561 61195
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
