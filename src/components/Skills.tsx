import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Cloud, Wrench, Globe, Users, MessageSquare } from 'lucide-react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 }
      ],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Scikit-learn', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'Time-Series', level: 85 },
        { name: 'NLP', level: 80 }
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Vue.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Flask', level: 80 }
      ],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'IBM Cloud', level: 85 },
        { name: 'AWS', level: 75 },
        { name: 'Firebase', level: 90 }
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'APIs & Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'AutoML', level: 80 },
        { name: 'Firebase Auth', level: 90 },
        { name: 'Git', level: 95 },
        { name: 'Google Fit API', level: 75 }
      ],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: 'Communication', level: 95 },
        { name: 'Teamwork', level: 90 },
        { name: 'Problem Solving', level: 95 }
      ],
      gradient: 'from-yellow-500 to-orange-500'
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains of AI, data science, and software development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} mr-4`}>
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: visibleItems.includes(index) ? `${skill.level}%` : '0%',
                            transitionDelay: `${(skillIndex + 1) * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;