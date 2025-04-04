'use client';

import React, { useState } from 'react';
import { FaMusic, FaSpinner, FaVolumeUp, FaDownload, FaPencilAlt, FaRandom } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 示例风格选项
const styleOptions = [
  "流行", "摇滚", "嘻哈", "电子", "古典", "爵士", "乡村", "民谣", "拉丁", "R&B", "金属"
];

// 示例心情选项
const moodOptions = [
  "快乐", "悲伤", "平静", "激动", "梦幻", "热情", "浪漫", "神秘", "庄严", "欢快", "忧郁"
];

// 示例乐器选项
const instrumentOptions = [
  "钢琴", "吉他", "贝斯", "鼓", "弦乐", "电子合成器", "小提琴", "萨克斯风", "竖笛", "人声"
];

const CreatePage = () => {
  const [mode, setMode] = useState<'simple' | 'custom'>('simple');
  const [prompt, setPrompt] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [title, setTitle] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSong, setGeneratedSong] = useState<string | null>(null);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);

  // 模拟歌曲生成
  const generateSong = () => {
    setIsGenerating(true);
    // 模拟API调用延迟
    setTimeout(() => {
      setGeneratedSong('/demo-song.mp3'); // 这将是实际生成的歌曲URL
      setIsGenerating(false);
    }, 3000);
  };

  // 切换选择项
  const toggleSelection = (item: string, selectedArray: string[], setFunction: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (selectedArray.includes(item)) {
      setFunction(selectedArray.filter(i => i !== item));
    } else {
      setFunction([...selectedArray, item]);
    }
  };

  // 随机生成创意提示
  const generateRandomPrompt = () => {
    const prompts = [
      "一首关于海洋和自由的流行歌曲，带有愉快的节奏",
      "悲伤的钢琴曲，讲述失去和新的开始",
      "充满能量的摇滚歌曲，主题是克服挑战",
      "浪漫的民谣，描述两个灵魂在星空下相遇",
      "电子舞曲，带有未来感和太空探索的主题",
      "爵士风格的歌曲，讲述城市夜生活",
      "平静的冥想音乐，有大自然的元素和轻柔的旋律"
    ];
    setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">创作工作室</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">使用AI制作你的歌曲</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            选择你喜欢的创作方式，几分钟后就能得到一首AI生成的原创歌曲
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 mb-12">
          <motion.div 
            className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all ${mode === 'simple' ? 'border-purple-500 shadow-purple-100 dark:shadow-purple-900/10' : 'border-gray-200 dark:border-gray-700'}`}
            whileHover={{ y: -5 }}
            onClick={() => setMode('simple')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <FaMusic size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">简单模式</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              只需描述你想要的歌曲，AI将为你创作。适合快速生成想法或不确定具体细节时使用。
            </p>
            {mode === 'simple' && (
              <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
            )}
          </motion.div>

          <motion.div 
            className={`flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 cursor-pointer transition-all ${mode === 'custom' ? 'border-purple-500 shadow-purple-100 dark:shadow-purple-900/10' : 'border-gray-200 dark:border-gray-700'}`}
            whileHover={{ y: -5 }}
            onClick={() => setMode('custom')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <FaPencilAlt size={24} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">自定义模式</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
              详细指定歌词、风格、心情和乐器，获得完全按照你的要求定制的歌曲。
            </p>
            {mode === 'custom' && (
              <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
            )}
          </motion.div>
        </div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {mode === 'simple' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="prompt">
                  描述你想要什么样的歌曲
                </label>
                <div className="relative">
                  <textarea 
                    id="prompt"
                    value={prompt} 
                    onChange={(e) => setPrompt(e.target.value)} 
                    placeholder="例如：一首充满活力的流行歌曲，讲述夏日冒险和青春"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 min-h-[120px]"
                  />
                  <button 
                    onClick={generateRandomPrompt}
                    className="absolute right-3 bottom-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 p-2 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800/30 transition-colors"
                    title="生成随机创意"
                  >
                    <FaRandom size={16} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  提示：描述越详细，AI创作的歌曲就越符合你的想法
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="title">
                  歌曲标题
                </label>
                <input 
                  type="text" 
                  id="title"
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)} 
                  placeholder="输入歌曲标题"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-2" htmlFor="lyrics">
                  歌词（可选）
                </label>
                <textarea 
                  id="lyrics"
                  value={lyrics} 
                  onChange={(e) => setLyrics(e.target.value)} 
                  placeholder="输入歌词，或留空让AI创作"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 min-h-[150px]"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3">
                  音乐风格
                </label>
                <div className="flex flex-wrap gap-2">
                  {styleOptions.map(style => (
                    <button
                      key={style}
                      onClick={() => toggleSelection(style, selectedStyles, setSelectedStyles)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedStyles.includes(style) 
                          ? 'bg-purple-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3">
                  歌曲心情
                </label>
                <div className="flex flex-wrap gap-2">
                  {moodOptions.map(mood => (
                    <button
                      key={mood}
                      onClick={() => toggleSelection(mood, selectedMoods, setSelectedMoods)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedMoods.includes(mood) 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {mood}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-3">
                  乐器
                </label>
                <div className="flex flex-wrap gap-2">
                  {instrumentOptions.map(instrument => (
                    <button
                      key={instrument}
                      onClick={() => toggleSelection(instrument, selectedInstruments, setSelectedInstruments)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedInstruments.includes(instrument) 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {instrument}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={generateSong}
              disabled={isGenerating || (mode === 'simple' && !prompt.trim()) || (mode === 'custom' && !title.trim())}
              className="btn btn-primary py-3 px-8 text-lg flex items-center justify-center min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  正在生成歌曲...
                </>
              ) : (
                <>
                  <FaMusic className="mr-2" />
                  生成AI歌曲
                </>
              )}
            </button>
          </div>
        </motion.div>

        {generatedSong && !isGenerating && (
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">你的AI创作歌曲已完成!</h2>
            
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl">{title || "未命名歌曲"}</h3>
                  <p className="text-gray-600 dark:text-gray-400">AI生成 • {new Date().toLocaleDateString()}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    <FaVolumeUp className="text-purple-500 dark:text-purple-400" size={20} />
                  </button>
                  <button className="bg-purple-500 p-3 rounded-full shadow-md hover:bg-purple-600 transition-colors">
                    <FaDownload className="text-white" size={20} />
                  </button>
                </div>
              </div>
              
              <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-lg relative">
                {/* 这里可以放波形图 */}
                <div className="absolute left-0 bottom-0 right-0 h-1/2 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 rounded-lg"></div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                你可以播放、下载或分享这首歌曲，或继续创作新的歌曲。
              </p>
              <button
                onClick={() => {
                  setGeneratedSong(null);
                  setPrompt('');
                  setLyrics('');
                  setTitle('');
                  setSelectedStyles([]);
                  setSelectedMoods([]);
                  setSelectedInstruments([]);
                }}
                className="btn btn-outline-primary"
              >
                创作新歌曲
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CreatePage; 