import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Product } from '../types';

const products: Product[] = [
  {
    id: 1,
    name: 'Đầm Dạ Hội Lụa',
    price: 299,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop',
    category: 'Váy Đầm',
  },
  {
    id: 2,
    name: 'Áo Len Cashmere',
    price: 189,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop',
    category: 'Áo Kiểu',
  },
  {
    id: 3,
    name: 'Túi Tote Da',
    price: 349,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    category: 'Phụ Kiện',
  },
  {
    id: 4,
    name: 'Đầm Linen Mùa Hè',
    price: 129,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1888&auto=format&fit=crop',
    category: 'Váy Đầm',
  },
];

export default function ProductSection() {
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
          {products.map((product) => (
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
