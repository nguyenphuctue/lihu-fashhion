import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductSection from '../components/ProductSection';
import About from '../components/About';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ProductSection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
