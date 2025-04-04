'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMusic, FaStar, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-gradient py-20 sm:py-24 relative overflow-hidden">
      {/* 装饰效果 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full bg-white opacity-5"></div>
        <div className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-white opacity-5"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 text-center md:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              专业级 <span className="relative">
                AI音乐生成器
                <span className="absolute bottom-0 left-0 w-full h-2 bg-white opacity-20"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-lg leading-relaxed">
              使用AI技术轻松创建高质量音乐。只需描述你想要的风格，让AI为你打造专属曲目。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link href="/create" className="btn btn-primary px-8 py-4 text-lg">
                立即创建
              </Link>
              <Link href="/tutorials" className="btn btn-secondary bg-white/10 backdrop-blur-sm border-0 text-white px-8 py-4 text-lg">
                了解更多
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white"></div>
                ))}
              </div>
              <div className="ml-4 text-sm">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="ml-1">5.0</span>
                </div>
                <p className="opacity-80">由全球25,000+音乐人和创作者信赖</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden p-6 shadow-xl relative">
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                专业版
              </div>
              
              <div className="aspect-w-16 aspect-h-9 bg-black/30 rounded-lg mb-6 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-white text-xs mt-2">
                    <span>1:15</span>
                    <span>3:45</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-white">摇滚风格热情歌曲</h3>
                    <p className="text-white/70 text-sm">生成于 2分钟前</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
                      <FaMusic />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-white/70 text-xs">风格</div>
                    <div className="text-white font-medium">摇滚</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-white/70 text-xs">时长</div>
                    <div className="text-white font-medium">3:45</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-white/70 text-xs">心情</div>
                    <div className="text-white font-medium">热情</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-white/70 text-xs">乐器</div>
                    <div className="text-white font-medium">电吉他，鼓</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 