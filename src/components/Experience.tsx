import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experiences = [
    {
      title: 'Job Simulation Trainee',
      company: 'Deloitte Australia (Forage)',
      period: 'Jun 2025',
      location: 'Remote',
      description: 'Created a Tableau dashboard for forensic data analysis and used Excel to classify anomalies for stakeholders.',
      skills: ['Tableau', 'Excel', 'Data Analysis', 'Forensic Analytics'],
      type: 'Job Simulation'
    },
    {
      title: 'ML Project Intern',
      company: 'Infosys Springboard',
      period: 'Nov 2024 - Jan 2025',
      location: 'Remote',
      description: 'Built a time-series ML model to predict Tesla stock prices and led 25+ interns.',
      skills: ['Machine Learning', 'Time Series', 'Python', 'Leadership'],
      type: 'Internship'
    },
    {
      title: 'Data Science Intern',
      company: 'Intrnforte',
      period: 'Sep 2024 - Nov 2024',
      location: 'Remote',
      description: 'Designed models for housing price and loan repayment prediction.',
      skills: ['Data Science', 'Predictive Modeling', 'Python', 'Machine Learning'],
      type: 'Internship'
    },
    {
      title: 'Web Developer',
      company: 'Anna University Regional Campus',
      period: 'Aug 2024 - Sep 2024',
      location: 'Coimbatore, India',
      description: 'Built a website with Vue.js and Tailwind CSS, enhancing UI/UX, performance, and accessibility.',
      skills: ['Vue.js', 'Tailwind CSS', 'UI/UX', 'Web Development'],
      type: 'Project'
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey through various roles and projects that have shaped my expertise in AI, data science, and software development.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`relative flex items-center transition-all duration-700 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full mb-2">
                            {exp.type}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <h4 className="text-lg text-cyan-400 font-semibold">{exp.company}</h4>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-lg border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;