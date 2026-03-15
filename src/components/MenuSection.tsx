const menuCategories = [
  {
    name: 'Signature Bati Chokha',
    items: [
      { name: 'Plain Bati Chokha', desc: 'Classic bati served with spicy chokha, ghee & chutney', price: '₹ --' },
      { name: 'Stuffed Bati', desc: 'Bati stuffed with dal filling, served with chokha', price: '₹ --' },
      { name: 'Sattu Bati', desc: 'Filled with roasted gram flour, spices & herbs', price: '₹ --' },
      { name: 'Special Thali', desc: 'Complete thali with bati, chokha, dal, rice & more', price: '₹ --' },
    ],
  },
  {
    name: 'Traditional Mains',
    items: [
      { name: 'Litti Chokha', desc: 'Wheat balls with sattu filling, served with brinjal chokha', price: '₹ --' },
      { name: 'Dal Bafla', desc: 'Steamed & baked wheat dumplings with dal', price: '₹ --' },
      { name: 'Chhena Dahi Vada', desc: 'Soft vadas in spiced yogurt', price: '₹ --' },
      { name: 'Panchmel Dal', desc: 'Five-lentil dal cooked with traditional spices', price: '₹ --' },
    ],
  },
  {
    name: 'Beverages & Desserts',
    items: [
      { name: 'Lassi', desc: 'Thick, creamy traditional yogurt drink', price: '₹ --' },
      { name: 'Thandai', desc: 'Spiced milk drink with dry fruits & saffron', price: '₹ --' },
      { name: 'Malpua', desc: 'Traditional pancake dessert dipped in sugar syrup', price: '₹ --' },
      { name: 'Rabri', desc: 'Thick, sweetened milk dessert with cardamom', price: '₹ --' },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-dancing text-accent text-xl md:text-2xl mb-2">Taste the Tradition</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-earth mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-4" />
          <p className="font-poppins text-earth/60 max-w-xl mx-auto text-sm">
            Sample menu items — prices are indicative. Please ask for the latest menu at the restaurant.
          </p>
        </div>

{/* Menu Image */}
<div className="flex justify-center mb-16">
  <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
    <img
      src="/images/menu1.jpg"
      alt="Restaurant Menu"
      className="w-full h-auto object-cover"
    />
  </div>
</div>

        {/* Text Menu */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, ci) => (
            <div key={ci} className="bg-white rounded-2xl p-8 shadow-md border border-warm-dark/20">
              <h3 className="font-playfair text-xl font-bold text-earth mb-6 pb-3 border-b-2 border-accent/20 text-center">
                {category.name}
              </h3>
              <div className="space-y-5">
                {category.items.map((item, ii) => (
                  <div key={ii} className="group">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-poppins font-medium text-earth group-hover:text-accent transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-poppins font-semibold text-accent text-sm whitespace-nowrap ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-earth/50 font-poppins text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-earth/40 font-poppins text-xs mt-8">
          * Prices shown are placeholders. Please contact the restaurant for current pricing.
        </p>
      </div>
    </section>
  );
}
