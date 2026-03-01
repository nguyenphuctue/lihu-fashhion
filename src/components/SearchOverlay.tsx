import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  }, [isOpen]);

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm"
        >
          <div className="max-w-4xl mx-auto px-4 pt-8">
            <div className="flex justify-end mb-8">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="relative mb-12">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full text-3xl md:text-4xl font-serif border-b-2 border-gray-200 py-4 bg-transparent focus:outline-none focus:border-black placeholder-gray-300"
              />
              <Search
                size={32}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {searchTerm && (
              <div className="space-y-8 overflow-y-auto max-h-[60vh] pb-20">
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  {filteredProducts.length} kết quả tìm thấy
                </p>

                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-lg font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                            {product.name}
                          </h3>
                          <p className="text-gray-500">{formatCurrency(product.price)}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
                  </div>
                )}
              </div>
            )}

            {!searchTerm && (
              <div className="mt-12">
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">
                  Tìm kiếm phổ biến
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Váy Đầm', 'Áo Sơ Mi', 'Túi Xách', 'Quần Jeans', 'Phụ Kiện'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchTerm(term)}
                      className="px-4 py-2 bg-gray-100 hover:bg-black hover:text-white rounded-full text-sm transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
