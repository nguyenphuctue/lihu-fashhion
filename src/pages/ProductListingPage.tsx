import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { formatCurrency } from '../utils/formatCurrency';

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [sortOption, setSortOption] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Update selected categories when URL changes
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
      
      // Update URL if single category selected, or clear if multiple/none
      if (newCategories.length === 1) {
        setSearchParams({ category: newCategories[0] });
      } else {
        setSearchParams({});
      }
      
      return newCategories;
    });
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by Price
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Default to newest (using ID as proxy for now)
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [selectedCategories, priceRange, sortOption]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-serif font-bold text-gray-900">
            {selectedCategories.length === 1 ? selectedCategories[0] : 'Tất Cả Sản Phẩm'}
          </h1>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <button 
              className="md:hidden flex items-center text-gray-700 hover:text-black cursor-pointer"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <Filter size={20} className="mr-2" />
              Bộ Lọc
            </button>
            
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black cursor-pointer">
                Sắp xếp: <span className="ml-1 text-gray-900 font-semibold">
                  {sortOption === 'newest' && 'Mới Nhất'}
                  {sortOption === 'price-asc' && 'Giá: Thấp đến Cao'}
                  {sortOption === 'price-desc' && 'Giá: Cao đến Thấp'}
                </span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block z-10 border border-gray-100">
                <button 
                  onClick={() => setSortOption('newest')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Mới Nhất
                </button>
                <button 
                  onClick={() => setSortOption('price-asc')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Giá: Thấp đến Cao
                </button>
                <button 
                  onClick={() => setSortOption('price-desc')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Giá: Cao đến Thấp
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden md:block w-64 flex-shrink-0 space-y-8">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Danh Mục</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                    />
                    <span className="ml-3 text-sm text-gray-600 group-hover:text-black transition-colors">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Khoảng Giá</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                />
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 flex md:hidden">
              <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
              <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-xl p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-gray-900">Bộ Lọc</h2>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X size={24} className="text-gray-500 cursor-pointer" />
                  </button>
                </div>
                
                {/* Mobile Categories */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Danh Mục</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-5 w-5 rounded border-gray-300 text-black focus:ring-black"
                        />
                        <span className="ml-3 text-base text-gray-600">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Price */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Khoảng Giá</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{formatCurrency(priceRange[0])}</span>
                      <span>{formatCurrency(priceRange[1])}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button 
                    onClick={() => {
                      setSelectedCategories([]);
                      setPriceRange([0, 10000000]);
                    }}
                    className="w-full py-3 border border-gray-300 text-black font-medium rounded-md mb-3 cursor-pointer"
                  >
                    Xóa Bộ Lọc
                  </button>
                  <button 
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="w-full py-3 bg-black text-white font-medium rounded-md cursor-pointer"
                  >
                    Xem {filteredProducts.length} Sản Phẩm
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp.</p>
                <button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setPriceRange([0, 10000000]);
                  }}
                  className="mt-4 text-black underline hover:text-gray-600 cursor-pointer"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
