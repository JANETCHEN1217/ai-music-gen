'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: '王小明',
    position: '业余音乐爱好者',
    quote: '这个工具真是太棒了！我一直想创作自己的歌曲，但没有专业知识。现在我已经创作了3首歌，朋友们都很惊讶！',
    avatar: '/avatars/avatar-1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: '张丽',
    position: '独立创作人',
    quote: '作为一个独立创作人，这个AI工具极大地提高了我的工作效率。它能帮我快速生成想法，然后我再进行细化。真是创意的催化剂！',
    avatar: '/avatars/avatar-2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: '李强',
    position: '内容创作者',
    quote: '我需要为我的视频制作原创背景音乐，这个平台完美解决了我的需求。不再需要担心版权问题，而且音乐质量非常专业。',
    avatar: '/avatars/avatar-3.jpg',
    rating: 4
  },
  {
    id: 4,
    name: '陈美',
    position: '社交媒体博主',
    quote: '我从来没想过AI可以如此轻松地创作出好听的歌曲！我用它为我的视频创作了主题曲，粉丝们都在问我是从哪找到这么棒的音乐的。',
    avatar: '/avatars/avatar-4.jpg',
    rating: 5
  },
  {
    id: 5,
    name: '刘伟',
    position: '学生',
    quote: '作为一个没有音乐背景的学生，这个工具让我可以表达我的音乐想法。界面简单，容易上手，真的很推荐给想尝试音乐创作的新手。',
    avatar: '/avatars/avatar-5.jpg',
    rating: 4
  },
  {
    id: 6,
    name: '赵琳',
    position: '广告制作人',
    quote: '在广告制作中，我们经常需要快速的音乐创意。这个平台节省了我们大量时间，而且产出的音乐质量始终如一。绝对是专业工作的得力助手。',
    avatar: '/avatars/avatar-6.jpg',
    rating: 5
  }
];

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'} size={16} />
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium mb-4">用户评价</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">看看其他人怎么说</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            来自世界各地的创作者都在使用我们的AI音乐生成器创作令人惊叹的音乐。
          </p>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute -left-6 top-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-30"></div>
        <div className="absolute right-10 bottom-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-2xl opacity-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                {testimonial.avatar ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-gray-200 dark:border-gray-700">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 flex-grow">"{testimonial.quote}"</p>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 text-6xl text-gray-200 dark:text-gray-800 opacity-30 pointer-events-none z-0">❝</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 