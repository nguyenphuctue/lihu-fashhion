import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="new-arrivals" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
              Hàng Mới Về
            </h2>
            <p className="text-gray-500">Những phong cách mới nhất dành cho bạn.</p>
          </div>
          <Link
            to="/products"
            className="hidden md:block text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-widest border-b border-black pb-1"
          >
            Xem Tất Cả
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/products"
            className="text-sm font-medium text-black hover:text-gray-600 transition-colors uppercase tracking-widest border-b border-black pb-1"
          >
            Xem Tất Cả Sản Phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
