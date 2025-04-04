'use client';

import { motion } from 'framer-motion';
import { FaPencilAlt, FaMusic, FaCloudDownloadAlt } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPencilAlt size={28} />,
    title: '描述你的灵感',
    description: '使用简单的语言描述你想要的歌曲类型、主题或情感。'
  },
  {
    icon: <FaMusic size={28} />,
    title: 'AI创作旋律',
    description: '我们的AI技术会分析你的描述，并生成匹配的音乐作品。'
  },
  {
    icon: <FaCloudDownloadAlt size={28} />,
    title: '下载你的歌曲',
    description: '几秒钟内，你就可以收听、下载和分享你独特的AI创作歌曲。'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">如何使用</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">简单三步创作专属歌曲</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            通过我们简单直观的创作流程，无需专业知识即可获得独特的音乐作品。
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* 连接步骤的线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className="md:w-1/2 p-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all">
                    <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center text-white mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2 relative">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-500 shadow-lg z-10">
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-purple-500">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/create" className="btn btn-primary">开始创作</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 