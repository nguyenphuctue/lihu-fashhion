import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Post } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <Link to={`/blog/${post.id}`} className="block overflow-hidden aspect-[16/9]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={14} />
            {post.author}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors">
          <Link to={`/blog/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
          {post.excerpt}
        </p>
        
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-sm font-medium text-black hover:text-gray-600 transition-colors group/link"
        >
          Đọc tiếp
          <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
