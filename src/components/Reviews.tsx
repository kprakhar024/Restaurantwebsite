import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Happy Customer',
    date: 'October 15, 2018',
    rating: 5,
    title: 'Great restaurant!',
    text: 'One of the best places in civil lines to have a crack. Go for it if you are looking for some different preparation of same food.',
  },
  {
    name: 'Yesteryears Hasty Tasty',
    date: 'January 6, 2015',
    rating: 5,
    title: 'Very good!',
    text: 'Very good but in those days the rush was too much what for? The tasty delicacies it provided at affordable price.',
  },
  {
    name: 'Food Lover',
    date: 'Recent Visit',
    rating: 5,
    title: 'Authentic taste!',
    text: 'Amazing Bati Chokha served in the most traditional way. The village-themed decor makes you feel like you\'re eating at home. Highly recommended!',
  },
  {
    name: 'Local Guide',
    date: 'Recent Visit',
    rating: 4,
    title: 'Must visit in Prayagraj',
    text: 'If you want to experience true North Indian village food, this is the place. The earthen pots and wooden plates add so much character.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? 'fill-gold text-gold' : 'text-warm-dark'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 mud-texture relative overflow-hidden">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 to-primary-dark/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-dancing text-gold text-xl md:text-2xl mb-2">What People Say</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm mb-4">
            Customer Reviews
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="font-poppins text-warm/60 max-w-xl mx-auto text-sm">
            Hear from guests who've enjoyed our authentic village cuisine
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-12 text-center border border-warm/10">
          <p className="font-playfair text-6xl font-bold text-gold mb-2">5.0</p>
          <Stars count={5} />
          <p className="text-warm/60 font-poppins text-sm mt-2">Based on customer reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="absolute top-4 right-4 text-accent/10 group-hover:text-accent/20 transition-colors"
              />

              <div className="flex items-center gap-4 mb-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-playfair font-bold text-accent text-lg">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-earth text-sm">{review.name}</h4>
                  <p className="text-earth/40 font-poppins text-xs">{review.date}</p>
                </div>
              </div>

              <Stars count={review.rating} />

              <h5 className="font-playfair font-bold text-earth mt-3 mb-2">{review.title}</h5>
              <p className="text-earth/60 font-poppins text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
