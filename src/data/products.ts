import { Product } from '../types';

export const products: Product[] = [
  // Váy Đầm
  {
    id: 1,
    name: 'Đầm Dạ Hội Lụa',
    price: 299,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1908&auto=format&fit=crop',
    category: 'Váy Đầm',
    description: 'Đầm dạ hội lụa cao cấp, thiết kế sang trọng cho các buổi tiệc tối.',
  },
  {
    id: 4,
    name: 'Đầm Linen Mùa Hè',
    price: 129,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1888&auto=format&fit=crop',
    category: 'Váy Đầm',
    description: 'Thoáng mát và nhẹ nhàng, hoàn hảo cho những ngày hè năng động.',
  },
  {
    id: 5,
    name: 'Đầm Nhung Đỏ',
    price: 249,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1888&auto=format&fit=crop',
    category: 'Váy Đầm',
    description: 'Quyến rũ và nổi bật với chất liệu nhung mềm mại.',
  },
  {
    id: 6,
    name: 'Đầm Hoa Nhí',
    price: 89,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop',
    category: 'Váy Đầm',
    description: 'Dịu dàng và nữ tính với họa tiết hoa nhí tinh tế.',
  },

  // Áo Kiểu
  {
    id: 2,
    name: 'Áo Len Cashmere',
    price: 189,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop',
    category: 'Áo Kiểu',
    description: 'Ấm áp và mềm mại, chất liệu cashmere cao cấp.',
  },
  {
    id: 7,
    name: 'Áo Sơ Mi Trắng',
    price: 79,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020&auto=format&fit=crop',
    category: 'Áo Kiểu',
    description: 'Thanh lịch và chuyên nghiệp, phù hợp môi trường công sở.',
  },
  {
    id: 8,
    name: 'Áo Thun Basic',
    price: 39,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2070&auto=format&fit=crop',
    category: 'Áo Kiểu',
    description: 'Đơn giản, dễ phối đồ, chất liệu cotton thoáng mát.',
  },
  {
    id: 9,
    name: 'Áo Crop Top',
    price: 49,
    image: 'https://images.unsplash.com/photo-1551163943-3f6a29e39454?q=80&w=1935&auto=format&fit=crop',
    category: 'Áo Kiểu',
    description: 'Trẻ trung và năng động, tôn dáng người mặc.',
  },

  // Phụ Kiện
  {
    id: 3,
    name: 'Túi Tote Da',
    price: 349,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop',
    category: 'Phụ Kiện',
    description: 'Túi da thật cao cấp, rộng rãi và tiện dụng.',
  },
  {
    id: 10,
    name: 'Bộ Trang Sức Vàng',
    price: 499,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop',
    category: 'Phụ Kiện',
    description: 'Tinh tế và sang trọng, điểm nhấn hoàn hảo cho trang phục.',
  },
  {
    id: 11,
    name: 'Khăn Choàng Lụa',
    price: 69,
    image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc540f?q=80&w=2070&auto=format&fit=crop',
    category: 'Phụ Kiện',
    description: 'Mềm mại và ấm áp, phụ kiện không thể thiếu cho mùa thu.',
  },
  {
    id: 12,
    name: 'Đồng Hồ Cổ Điển',
    price: 199,
    image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=2070&auto=format&fit=crop',
    category: 'Phụ Kiện',
    description: 'Thiết kế cổ điển, bền bỉ và chính xác.',
  },

  // Quần
  {
    id: 13,
    name: 'Quần Jeans Skinny',
    price: 89,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop',
    category: 'Quần',
    description: 'Ôm sát tôn dáng, chất liệu co giãn thoải mái.',
  },
  {
    id: 14,
    name: 'Chân Váy Xếp Ly',
    price: 69,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop',
    category: 'Quần',
    description: 'Nữ tính và bay bổng, dễ dàng kết hợp với nhiều kiểu áo.',
  },
  {
    id: 15,
    name: 'Quần Short Denim',
    price: 49,
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1935&auto=format&fit=crop',
    category: 'Quần',
    description: 'Năng động và thoải mái cho những ngày hè.',
  },
];
