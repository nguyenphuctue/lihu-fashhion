import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { formatCurrency } from '../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button 
            onClick={handleToggleWishlist}
            className={`p-2 rounded-full shadow-md transition-colors cursor-pointer ${
              isInWishlist(product.id) 
                ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                : 'bg-white hover:bg-black hover:text-white'
            }`}
          >
            <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
          </button>
          <button 
            onClick={handleAddToCart}
            className="bg-white p-2 rounded-full shadow-md hover:bg-black hover:text-white transition-colors cursor-pointer"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 font-medium">
            <Link to={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{formatCurrency(product.price)}</p>
      </div>
    </motion.div>
  );
}

export default ProductCard;
