import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Star, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main>
        {/* Hero Section - Editorial Style */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop"
              alt="HuLi Fashion Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 text-sm md:text-base tracking-[0.3em] uppercase font-light"
            >
              Since 2024
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
            >
              Câu Chuyện <br/> <span className="italic font-light">Của HuLi</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Hành trình đánh thức vẻ đẹp tiềm ẩn và sự tự tin của người phụ nữ hiện đại.
            </motion.p>
          </div>
        </section>

        {/* Intro Text - Minimal & Clean */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif leading-relaxed text-gray-900">
                "Chúng tôi tin rằng thời trang không chỉ là trang phục, mà là <span className="italic text-stone-500">ngôn ngữ không lời</span> của sự tự tin và khí chất."
              </h2>
              <div className="w-24 h-px bg-gray-300 mx-auto mt-12"></div>
            </motion.div>
          </div>
        </section>

        {/* The Story - Asymmetrical Layout */}
        <section className="py-20 bg-stone-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                    alt="HuLi Design Process"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-10 -right-10 md:-right-20 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                  <p className="font-serif italic text-xl text-gray-800 mb-2">"Tỉ mỉ trong từng chi tiết"</p>
                  <p className="text-sm text-gray-500">Mỗi đường kim mũi chỉ là một lời cam kết về chất lượng.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 lg:pl-12"
              >
                <span className="text-stone-500 tracking-widest uppercase text-sm font-semibold">Khởi Nguồn</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Hành Trình <br/> Tìm Kiếm Cái Đẹp</h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    HuLi được thành lập với một sứ mệnh đơn giản nhưng đầy tham vọng: mang đến vẻ đẹp thanh lịch, vượt thời gian cho phụ nữ Việt. Chúng tôi hiểu rằng, giữa nhịp sống hối hả, mỗi người phụ nữ đều cần những khoảnh khắc được là chính mình, được tỏa sáng theo cách riêng.
                  </p>
                  <p>
                    Tên gọi "HuLi" là sự kết hợp giữa nét duyên dáng Á Đông và tinh thần phóng khoáng của thời trang thế giới. Chúng tôi không chạy theo xu hướng nhất thời, mà tập trung vào những giá trị bền vững, những thiết kế có thể đồng hành cùng bạn qua nhiều mùa.
                  </p>
                </div>
                <Link to="/products" className="inline-flex items-center gap-2 text-black font-medium border-b border-black pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
                  Xem Bộ Sưu Tập <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values - Bento Grid Style */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-stone-500 tracking-widest uppercase text-sm font-semibold">Giá Trị Cốt Lõi</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 text-gray-900">Điều Chúng Tôi Theo Đuổi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-stone-50 p-10 rounded-2xl text-center group hover:bg-stone-100 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-8 h-8 text-stone-800" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-gray-900">Chất Lượng Thượng Hạng</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chúng tôi tuyển chọn kỹ lưỡng từng mét vải, từng phụ kiện để đảm bảo sản phẩm đến tay bạn luôn hoàn hảo nhất.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-stone-900 p-10 rounded-2xl text-center text-white group hover:bg-black transition-colors transform md:-translate-y-4 shadow-xl"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Tận Tâm Với Khách Hàng</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sự hài lòng của bạn là niềm hạnh phúc của chúng tôi. HuLi luôn lắng nghe và nỗ lực mang đến trải nghiệm tuyệt vời.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-stone-50 p-10 rounded-2xl text-center group hover:bg-stone-100 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="w-8 h-8 text-stone-800" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">Thời Trang Bền Vững</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cam kết giảm thiểu tác động đến môi trường thông qua quy trình sản xuất có trách nhiệm và vật liệu thân thiện.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Image Grid / Moodboard */}
        <section className="py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" alt="Mood 1" className="w-full h-64 md:h-96 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop" alt="Mood 2" className="w-full h-64 md:h-96 object-cover rounded-lg mt-8 md:mt-12" />
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Mood 3" className="w-full h-64 md:h-96 object-cover rounded-lg" />
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop" alt="Mood 4" className="w-full h-64 md:h-96 object-cover rounded-lg mt-8 md:mt-12" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-stone-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Sẵn Sàng Tỏa Sáng Cùng HuLi?</h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Khám phá bộ sưu tập mới nhất và tìm thấy mảnh ghép hoàn hảo cho phong cách của bạn.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors rounded-full"
            >
              Mua Sắm Ngay
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
