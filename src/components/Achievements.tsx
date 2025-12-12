import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Calendar } from 'lucide-react';

const Achievements = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const achievements = [
    {
      title: 'Smart India Hackathon 2025',
      subtitle: 'NTRO Winner',
      date: '2025',
      description: 'Winner of the prestigious Smart India Hackathon 2025 in the National Technical Research Organisation (NTRO) category.',
      gradient: 'from-yellow-500 via-orange-500 to-red-500'
    },
    {
      title: 'AsterHacks 2025',
      subtitle: 'Asters Achievement Award',
      date: '2025',
      description: 'Recognized with the Asters Achievement Award for outstanding performance and innovation in the AsterHacks 2025 hackathon.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'EY Techathon 6.0',
      subtitle: 'Round 2 Qualifier',
      date: '2025',
      description: 'Advanced to Round 2 of EY Techathon 6.0, demonstrating exceptional technical skills and problem-solving capabilities.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Unstop Talent Park 2025',
      subtitle: 'Round 2 Qualifier',
      date: '2025',
      description: 'Qualified for Round 2 of Unstop Talent Park 2025, showcasing expertise in AI, data science, and software development.',
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
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Recognition for excellence in hackathons, competitions, and technical challenges that showcase innovation and problem-solving skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  } ${achievement.title.includes('Winner') || achievement.subtitle.includes('Winner')
                    ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.2)]'
                    : 'border-slate-700/50 hover:border-cyan-500/50'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Winner Glow Effect */}
                {(achievement.title.includes('Winner') || achievement.subtitle.includes('Winner')) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 animate-pulse pointer-events-none" />
                )}

                <div className={`h-2 bg-gradient-to-r ${achievement.gradient}`}></div>

                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                          {achievement.title}
                        </h3>
                        <p className={`font-semibold mt-1 ${achievement.subtitle.includes('Winner')
                            ? 'text-yellow-400'
                            : 'text-cyan-400'
                          }`}>{achievement.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm ml-4 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700">
                      <Calendar size={14} className="mr-1.5" />
                      {achievement.date}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm border-l-2 border-slate-700 pl-4">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-3 rounded-lg border border-cyan-500/30">
              <Trophy className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Driven by Excellence & Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
