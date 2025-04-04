'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: '这个AI歌曲生成器是如何工作的？',
    answer: '我们的AI歌曲生成器使用先进的人工智能模型来创建原创歌曲。您可以使用自然语言描述您想要的歌曲类型，或者在自定义模式中提供更详细的输入，如歌词和乐器偏好。AI会分析您的输入并创建符合您要求的独特歌曲。'
  },
  {
    question: '使用这个工具需要音乐知识吗？',
    answer: '完全不需要！我们的AI歌曲生成器设计为对所有人友好，无论您是专业音乐人还是完全没有音乐背景。简单描述您想要的歌曲类型，AI会处理所有复杂的音乐创作过程。'
  },
  {
    question: '我可以自定义生成的歌曲吗？',
    answer: '是的！在自定义模式中，您可以指定歌词、音乐风格、情绪、乐器和其他参数，以创建符合您确切愿景的歌曲。您还可以为不同部分提供详细说明，比如合唱或副歌。'
  },
  {
    question: '我可以使用生成的歌曲做什么？',
    answer: '您可以将生成的歌曲用于个人或商业项目，包括视频背景音乐、播客介绍、社交媒体内容等。所有生成的歌曲都是原创的，您可以自由使用而无需担心版权问题。'
  },
  {
    question: '生成一首歌需要多长时间？',
    answer: '这取决于歌曲的复杂性和当前的系统负载，但通常我们的AI可以在几分钟内创建一首完整的歌曲。简单模式的歌曲生成通常比具有详细自定义参数的歌曲更快。'
  },
  {
    question: '我可以编辑或修改已生成的歌曲吗？',
    answer: '目前，我们不提供直接编辑已生成歌曲的选项。但是，您可以通过尝试不同的输入参数并生成新版本来微调结果。我们计划在将来添加更多编辑功能。'
  },
  {
    question: '我可以下载生成的歌曲吗？',
    answer: '是的，所有生成的歌曲都可以下载为MP3文件，以便您可以在任何设备上离线使用或将它们集成到其他项目中。'
  },
  {
    question: '使用这个AI歌曲生成器需要多少费用？',
    answer: '基本使用是完全免费的。您可以生成完整的歌曲和下载它们，无需支付任何费用。我们可能在将来提供高级功能的付费计划，但核心功能将保持免费。'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-4">常见问题</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">您可能想知道的问题</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            关于我们的AI歌曲生成器，以下是用户最常问的一些问题。如果您有其他问题，请随时联系我们。
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4 last:mb-0 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <div className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full ${activeIndex === index ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'} flex items-center justify-center transition-all duration-200`}>
                  {activeIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            还有其他问题？我们很乐意提供帮助
          </p>
          <a href="mailto:contact@aimusicgenerator.com" className="btn btn-primary">
            联系我们
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 