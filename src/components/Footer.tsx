import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-earth text-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-lg text-warm">Bati Chokha</h3>
                <p className="text-warm/50 text-xs font-poppins">Family Restaurant</p>
              </div>
            </div>
            <p className="text-warm/60 font-poppins text-sm leading-relaxed">
              Serving authentic North Indian village cuisine since years.
              Experience the true taste of tradition in every bite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-warm mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Menu', 'Reviews', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-warm/60 hover:text-gold font-poppins text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-warm mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-1 shrink-0" />
                <span className="text-warm/60 font-poppins text-sm">
                  Under Max Mall, MG Marg, Civil Lines, Prayagraj, UP 211001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+919956161195" className="text-warm/60 hover:text-gold font-poppins text-sm transition-colors">
                  +91 99561 61195
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-gold shrink-0" />
                <span className="text-warm/60 font-poppins text-sm">7:30 AM – 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div>
            <h4 className="font-playfair font-bold text-warm mb-4 text-lg">Follow Us</h4>
            {/* PLACEHOLDER: Add social media links / small gallery */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  className="aspect-square rounded-lg bg-warm/5 border border-warm/10 flex items-center justify-center hover:bg-warm/10 transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-warm/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-warm/30 font-poppins text-xs mt-2">
              Add your social media images here
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm/40 font-poppins text-sm text-center">
            © {new Date().getFullYear()} Bati Chokha Family Restaurant. All rights reserved.
          </p>
          <p className="text-warm/40 font-poppins text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rust fill-rust" /> in Prayagraj
          </p>
        </div>
      </div>
    </footer>
  );
}
