import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-dancing text-accent text-xl md:text-2xl mb-2">Get in Touch</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-warm-dark/20 flex gap-5 items-start hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-earth text-lg mb-1">Our Location</h4>
                <p className="text-earth/60 font-poppins text-sm leading-relaxed">
                  Under Max Mall, Mahatma Gandhi Marg,<br />
                  Civil Lines, Prayagraj,<br />
                  Uttar Pradesh 211001, India
                </p>
                <a
                  href="https://www.google.com/maps/search/Bati+Chokha+Family+Restaurant+Prayagraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:text-rust font-poppins text-sm font-medium mt-2 transition-colors"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-warm-dark/20 flex gap-5 items-start hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-earth text-lg mb-1">Call Us</h4>
                <a
                  href="tel:+919956161195"
                  className="text-earth/60 hover:text-accent font-poppins text-sm transition-colors"
                >
                  +91 99561 61195
                </a>
                <p className="text-earth/40 font-poppins text-xs mt-1">
                  For reservations & inquiries
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-warm-dark/20 flex gap-5 items-start hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-earth text-lg mb-1">Opening Hours</h4>
                <div className="space-y-1">
                  <div className="flex justify-between gap-8">
                    <span className="text-earth/60 font-poppins text-sm">Monday – Sunday</span>
                    <span className="text-earth font-poppins text-sm font-medium">7:30 AM – 11:30 PM</span>
                  </div>
                </div>
                <div className="mt-3 px-3 py-1.5 bg-olive/10 rounded-full inline-block">
                  <span className="text-olive font-poppins text-xs font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-olive rounded-full animate-pulse" />
                    Open Now
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-accent to-rust rounded-2xl p-6 text-center shadow-lg">
              <h4 className="font-playfair text-xl font-bold text-white mb-2">
                Ready for an Authentic Experience?
              </h4>
              <p className="text-white/80 font-poppins text-sm mb-4">
                Walk in or call us to reserve your table
              </p>
              <a
                href="tel:+919956161195"
                className="inline-flex items-center gap-2 bg-white text-accent hover:text-rust font-poppins font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-md"
              >
                <Phone size={16} />
                Call to Reserve
              </a>
            </div>
          </div>

          {/* Map / Image Placeholder */}
          <div className="space-y-6">
            {/* Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white h-80 md:h-96">
              <iframe
                title="Bati Chokha Family Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d81.846!3d25.457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI3JzI1LjIiTiA4McKwNTAnNDUuNiJF!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Additional Image Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* PLACEHOLDER: Restaurant front or entrance image */}
              <div className="w-full aspect-video bg-gradient-to-br from-warm to-warm-dark flex items-center justify-center border-4 border-dashed border-accent/20 rounded-2xl">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-primary font-poppins font-medium text-sm">Restaurant Entrance Photo</p>
                  <p className="text-primary/40 font-poppins text-xs mt-1">Place image: /public/images/entrance.jpg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
