import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hàng Mới', to: '/products' },
    { name: 'Bộ Sưu Tập', to: '/products' },
    { name: 'Váy Đầm', to: '/products?category=Váy Đầm' },
    { name: 'Về LiHu', to: '/#about' },
  ];

  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${
                !isTransparent ? 'text-gray-800 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link
              to="/"
              className={`text-2xl font-serif font-bold tracking-widest uppercase transition-colors ${
                !isTransparent ? 'text-black' : 'text-white'
              }`}
            >
              LiHu
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  !isTransparent
                    ? 'text-gray-600 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 justify-end flex-1">
            <button
              className={`transition-colors ${
                !isTransparent ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <Search size={20} />
            </button>
            <button
              className={`hidden md:block transition-colors ${
                !isTransparent ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <User size={20} />
            </button>
            <button
              className={`transition-colors relative ${
                !isTransparent ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
              }`}
            >
              <ShoppingBag size={20} />
              <span
                className={`absolute -top-1 -right-1 text-[10px] w-4 h-4 flex items-center justify-center rounded-full ${
                  !isTransparent ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 uppercase tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
