import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const blogPosts = [
    {
      title: 'Insights on AI in Healthcare',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare through personalized medicine, diagnostic assistance, and patient care optimization.',
      date: 'Coming Soon',
      readTime: '5 min read',
      category: 'AI & Healthcare',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'ML Project Tips',
      excerpt: 'Essential tips and best practices for successful machine learning projects, from data preprocessing to model deployment and monitoring.',
      date: 'Coming Soon',
      readTime: '7 min read',
      category: 'Machine Learning',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'The Future of Data Science',
      excerpt: 'Analyzing emerging trends in data science, including automated ML, edge computing, and the democratization of data analytics.',
      date: 'Coming Soon',
      readTime: '6 min read',
      category: 'Data Science',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Building Scalable AI Systems',
      excerpt: 'A comprehensive guide to designing and implementing AI systems that can scale efficiently while maintaining performance and reliability.',
      date: 'Coming Soon',
      readTime: '8 min read',
      category: 'AI Engineering',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blogs & Insights
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Sharing knowledge and insights on AI, machine learning, data science, and emerging technologies. Stay tuned for upcoming articles!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`group bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${post.gradient} bg-opacity-20 text-cyan-400 text-sm rounded-full`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${post.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors duration-200">
                        <span>Read More</span>
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-lg border border-cyan-500/30">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">More Articles Coming Soon!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;