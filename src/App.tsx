import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <Gallery />
      <div className="section-divider" />
      <MenuSection />
      <Reviews />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </div>
  );
}
