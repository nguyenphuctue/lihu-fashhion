import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
              alt="LiHu Brand Story"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Thiết Kế Cho <br />
              <span className="italic text-gray-500">Nàng Thơ Hiện Đại</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              LiHu không chỉ là một thương hiệu; đó là sự tôn vinh cá tính riêng biệt. Được sinh ra từ niềm đam mê với vẻ đẹp thanh lịch vượt thời gian và thiết kế đương đại, chúng tôi tạo ra những trang phục giúp phái đẹp tự tin thể hiện phong cách riêng của mình.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mỗi sản phẩm đều được thiết kế tỉ mỉ với chất liệu cao cấp và sự chú trọng đến từng chi tiết, đảm bảo bạn không chỉ trông tuyệt vời mà còn cảm thấy đặc biệt.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="inline-block border border-black px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
              >
                Câu Chuyện Của Chúng Tôi
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
