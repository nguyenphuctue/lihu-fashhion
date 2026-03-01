import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { posts } from '../data/posts';

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif font-bold mb-4">Bài viết không tồn tại</h2>
          <Link to="/blog" className="text-black underline hover:text-gray-600">
            Quay lại tạp chí
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors group"
            >
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Quay lại tạp chí
            </Link>
          </div>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6 uppercase tracking-wider">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.date}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="font-medium">Đăng bởi {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden mb-12 shadow-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-headings:font-serif prose-a:text-black hover:prose-a:text-gray-600 mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 font-medium">Chia sẻ bài viết này:</p>
            <div className="flex gap-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors">
                <Facebook size={20} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-colors">
                <Twitter size={20} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-[#0A66C2] hover:text-white transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
}
