const galleryItems = [
  {
    label: 'Restaurant Exterior',
    hint: 'Place image: /public/images/gallery-1.jpg',
    span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
    aspect: 'aspect-square',
  },
  {
    label: 'Village Themed Interior',
    hint: 'Place image: /public/images/gallery-2.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Signature Bati Chokha',
    hint: 'Place image: /public/images/gallery-3.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Earthen Pot Serving',
    hint: 'Place image: /public/images/gallery-4.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Sitting Area',
    hint: 'Place image: /public/images/gallery-5.jpg',
    span: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    label: 'Mud Wall Decor',
    hint: 'Place image: /public/images/gallery-6.jpg',
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
              {/* PLACEHOLDER: Replace with actual image */}
              <div
                className={`w-full ${item.aspect} bg-gradient-to-br from-primary/80 to-primary-dark flex items-center justify-center border-2 border-dashed border-warm/20`}
              >
                <div className="text-center p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 text-warm/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-warm/40 font-poppins font-medium text-xs md:text-sm">
                    {item.label}
                  </p>
                  <p className="text-warm/20 font-poppins text-[10px] md:text-xs mt-1">
                    {item.hint}
                  </p>
                </div>
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
