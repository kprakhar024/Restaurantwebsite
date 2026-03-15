import { Flame, Leaf, Users, IndianRupee } from 'lucide-react';

const highlights = [
  {
    icon: <Flame className="w-7 h-7" />,
    title: 'Traditional Bati Chokha',
    desc: 'Authentic North Indian food with a focus on signature Bati Chokha, served in earthen pots.',
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: 'Village-Themed Decor',
    desc: 'Rustic ambiance with mud walls, wooden plates, and a simple, home-like setup.',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Family Friendly',
    desc: 'Warm and welcoming vibe, perfect for families seeking a genuine dining experience.',
  },
  {
    icon: <IndianRupee className="w-7 h-7" />,
    title: 'Affordable Pricing',
    desc: 'Enjoy a satisfying meal at prices that won\'t break the bank.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-dancing text-accent text-xl md:text-2xl mb-2">Discover Our Story</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {/* PLACEHOLDER: Replace with restaurant interior/ambiance image */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-warm-dark to-warm flex items-center justify-center border-4 border-dashed border-accent/30 rounded-2xl">
                <div className="text-center p-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4 text-accent/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-primary font-poppins font-medium text-sm">Restaurant Ambiance Photo</p>
                  <p className="text-primary/50 font-poppins text-xs mt-1">Place your image in /public/images/about.jpg</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-earth mb-6">
              A Taste of Village Life <br />
              <span className="text-accent">in the Heart of Prayagraj</span>
            </h3>
            <p className="text-earth/70 font-poppins leading-relaxed mb-6">
              Bati Chokha Family Restaurant is a popular eatery in Prayagraj known for its traditional
              North Indian cuisine, particularly its signature Bati Chokha. Located in a cozy setting,
              it offers a rustic, village-themed ambiance that enhances the dining experience.
            </p>
            <p className="text-earth/70 font-poppins leading-relaxed mb-8">
              The restaurant specializes in authentic Bati Chokha, served in earthen pots with a
              traditional touch. Dishes are often accompanied by chutney, salad, and ghee, adding to
              the rustic feel. The interior is designed to evoke a village atmosphere, featuring mud
              walls, wooden plates, and a simple, home-like setup.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-poppins font-medium">
                🔥 Wood-Fire Cooked
              </span>
              <span className="px-4 py-2 bg-olive/10 text-olive rounded-full text-sm font-poppins font-medium">
                🌿 Fresh Ingredients
              </span>
              <span className="px-4 py-2 bg-gold/10 text-primary rounded-full text-sm font-poppins font-medium">
                🍯 Pure Desi Ghee
              </span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-warm-dark/30 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="font-playfair font-bold text-earth text-lg mb-2">{item.title}</h4>
              <p className="text-earth/60 font-poppins text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
