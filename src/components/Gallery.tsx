const galleryItems = [
  {
    label: 'Restaurant Exterior',
    src: '/images/gallery-1.jpg',
    span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
    aspect: 'aspect-square',
  },
  {
    label: 'Village Themed Interior',
    src: '/images/gallery-2.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Signature Bati Chokha',
    src: '/images/gallery-3.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Earthen Pot Serving',
    src: '/images/gallery-4.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Sitting Area',
    src: '/images/gallery-5.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Mud Wall Decor',
    src: '/images/gallery-6.jpg',
    span: 'col-span-1 row-span-1 md:col-span-2',
    aspect: 'aspect-square md:aspect-[2/1]',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-dancing text-gold text-xl md:text-2xl mb-2">Visual Journey</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="font-poppins text-warm/60 max-w-xl mx-auto text-sm">
            Experience the rustic charm and authentic village atmosphere of our restaurant
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative group rounded-2xl overflow-hidden cursor-pointer`}
            >
              {/* Actual Image */}
              <div className={`w-full ${item.aspect} overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-playfair font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
