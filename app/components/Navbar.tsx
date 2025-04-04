'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMusic, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full hero-gradient">
              <FaMusic className="text-white text-lg" />
            </div>
            <span className="font-bold text-xl md:text-2xl">AI音乐生成器</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-[var(--primary-color)] transition-colors">首页</Link>
            <Link href="/create" className="font-medium hover:text-[var(--primary-color)] transition-colors">创建</Link>
            <Link href="/pricing" className="font-medium hover:text-[var(--primary-color)] transition-colors">价格</Link>
            <Link href="/my-songs" className="font-medium hover:text-[var(--primary-color)] transition-colors">我的歌曲</Link>
            <Link href="/tutorials" className="font-medium hover:text-[var(--primary-color)] transition-colors">教程</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/create" className="btn btn-primary hidden md:block">
              免费创建
            </Link>
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-medium hover:text-[var(--primary-color)] transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link 
                href="/create" 
                className="font-medium hover:text-[var(--primary-color)] transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                创建
              </Link>
              <Link 
                href="/pricing" 
                className="font-medium hover:text-[var(--primary-color)] transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                价格
              </Link>
              <Link 
                href="/my-songs" 
                className="font-medium hover:text-[var(--primary-color)] transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                我的歌曲
              </Link>
              <Link 
                href="/tutorials" 
                className="font-medium hover:text-[var(--primary-color)] transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                教程
              </Link>
              <Link 
                href="/create" 
                className="btn btn-primary text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                免费创建
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 