import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-widest uppercase">LiHu</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Định nghĩa lại sự thanh lịch cho người phụ nữ hiện đại. Những thiết kế vượt thời gian được tạo ra bằng đam mê và sự chính xác.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Cửa Hàng</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Hàng Mới Về</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Váy Đầm</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Áo Kiểu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Phụ Kiện</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Khuyến Mãi</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Hỗ Trợ</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Liên Hệ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vận Chuyển & Đổi Trả</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hướng Dẫn Chọn Size</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Câu Hỏi Thường Gặp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-6 uppercase tracking-wider">Bản Tin</h4>
            <p className="text-gray-400 text-sm mb-4">
              Đăng ký để nhận thông tin cập nhật, ưu đãi độc quyền và nhiều hơn nữa.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LiHu Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
