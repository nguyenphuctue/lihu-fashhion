import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Heart, Minus, Plus, ShoppingBag, ArrowLeft, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { useShop } from '../context/ShopContext';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);
      setQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Sản phẩm không tồn tại</h2>
          <Link to="/products" className="text-black underline hover:text-gray-600">
            Quay lại cửa hàng
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product, quantity, selectedSize, selectedColor);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white border border-gray-200' },
    { name: 'Beige', class: 'bg-[#E8E0D5]' },
    { name: 'Navy', class: 'bg-[#1B2432]' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Back */}
          <div className="mb-8">
            <Link
              to="/products"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Quay lại cửa hàng
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded-md overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                    <img
                      src={product.image}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6 space-x-4">
                <p className="text-2xl font-medium text-gray-900">{formatCurrency(product.price)}</p>
                <div className="flex items-center text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" className="text-gray-300" />
                  <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description || 'Một thiết kế tinh tế mang lại vẻ đẹp thanh lịch và sự thoải mái tối đa. Chất liệu cao cấp được tuyển chọn kỹ lưỡng, đường may tỉ mỉ tôn lên vóc dáng người mặc.'}
              </p>

              {/* Selectors */}
              <div className="space-y-6 mb-8 border-t border-b border-gray-100 py-6">
                {/* Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Màu sắc: {selectedColor}</label>
                  <div className="flex space-x-3">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full focus:outline-none ring-2 ring-offset-2 transition-all cursor-pointer ${
                          selectedColor === color.name ? 'ring-black scale-110' : 'ring-transparent hover:scale-110'
                        } ${color.class}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium text-gray-900">Kích thước: {selectedSize}</label>
                    <button className="text-xs text-gray-500 underline hover:text-black cursor-pointer">Hướng dẫn chọn size</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-10 flex items-center justify-center text-sm font-medium border transition-all cursor-pointer ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 text-gray-900 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Số lượng</label>
                  <div className="flex items-center border border-gray-200 w-32">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 cursor-pointer"
                    >
                      <Minus size={16} />
                    </button>
                    <div className="flex-1 text-center text-sm font-medium">{quantity}</div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 cursor-pointer"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4 mb-10">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="flex-1 bg-black text-white py-4 px-6 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isAdding ? (
                    'Đang thêm...'
                  ) : (
                    <>
                      <ShoppingBag size={18} /> Thêm vào giỏ
                    </>
                  )}
                </button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-14 h-14 border flex items-center justify-center transition-colors cursor-pointer ${
                    isInWishlist(product.id)
                      ? 'border-red-500 text-red-500 bg-red-50'
                      : 'border-gray-200 text-gray-900 hover:border-black'
                  }`}
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Truck size={18} />
                  <span>Miễn phí vận chuyển cho đơn hàng trên {formatCurrency(2500000)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw size={18} />
                  <span>Đổi trả miễn phí trong vòng 30 ngày</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} />
                  <span>Bảo hành chính hãng 1 năm</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24 border-t border-gray-100 pt-16">
              <h2 className="text-2xl font-serif font-bold mb-8">Sản phẩm tương tự</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/products/${relatedProduct.id}`} className="group">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                    <h3 className="text-base font-medium text-gray-900 group-hover:underline decoration-1 underline-offset-4">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{formatCurrency(relatedProduct.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
