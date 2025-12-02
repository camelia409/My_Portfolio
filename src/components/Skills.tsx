import React from 'react';
import SkillIcon from './SkillIcon';

const Skills = () => {
  // Skills organized by category - duplicate for seamless loop
  const allSkills = [
    // Programming
    'Python',
    'JavaScript',
    'SQL',
    'Bash',
    // ML/AI
    'Machine Learning',
    'NLP',
    'RAG',
    'Time-Series Forecasting',
    // Frameworks
    'FastAPI',
    'Scikit-learn',
    'TensorFlow',
    'PyTorch',
    'Next.js',
    // Tools
    'Git',
    'Linux',
    'Firebase',
    'Tableau',
    'Power BI',
    'Jupyter',
    'Excel'
  ];

  // Duplicate skills array for seamless infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="w-full mx-auto">
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

          {/* Continuous Scrolling Container */}
          <div className="relative overflow-hidden rounded-2xl w-full">
            <div className="bg-slate-700/50 border border-slate-600/50 p-8 md:p-12 overflow-hidden w-full min-h-[200px] md:min-h-[250px] flex items-center">
              {/* Scrolling Skills */}
              <div className="flex animate-scroll gap-8 md:gap-12 will-change-transform">
                {duplicatedSkills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="flex flex-col items-center justify-center space-y-4 flex-shrink-0 w-[200px] md:w-[250px] group"
                  >
                    <div className="transform transition-all duration-300 group-hover:scale-110">
                      <SkillIcon name={skill} className="w-20 h-20 md:w-24 md:h-24" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white text-center whitespace-nowrap leading-tight">
                      {skill}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-slate-800/50 via-slate-800/30 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-slate-800/50 via-slate-800/30 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;