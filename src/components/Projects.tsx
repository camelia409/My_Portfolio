import React, { useEffect, useRef, useState } from 'react';
import { Github, Brain, TrendingUp, Rocket, DollarSign, Users } from 'lucide-react';

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects = [
    {
      title: 'AI-Powered Geospatial Crisis Monitoring Dashboard',
      description: 'Real-time crisis monitoring system using Next.js, Mapbox, NLP, and ML to analyze and visualize geospatial data for emergency response and disaster management.',
      icon: <Brain className="w-8 h-8" />,
      tech: ['Next.js', 'Mapbox', 'NLP', 'Machine Learning', 'Geospatial Analytics'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'GerontoVoice – Voice-First AI Simulator',
      description: 'Advanced voice-first AI simulator for geriatric care using React, FastAPI, Mistral, RAG, and LoRA fine-tuning for personalized healthcare interactions.',
      icon: <Users className="w-8 h-8" />,
      tech: ['React', 'FastAPI', 'Mistral', 'RAG', 'LoRA', 'Voice AI'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'HealMate AI – Empathetic Health Assistant',
      description: 'Intelligent health assistant built with FastAPI, NLP, and integrated APIs to provide empathetic, personalized healthcare guidance and support.',
      icon: <Brain className="w-8 h-8" />,
      tech: ['FastAPI', 'NLP', 'APIs', 'Healthcare AI', 'Python'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Tesla Stock Prediction',
      description: 'Advanced time-series machine learning model for Tesla stock price prediction using historical data and market sentiment analysis.',
      icon: <TrendingUp className="w-8 h-8" />,
      tech: ['Python', 'Time Series', 'Machine Learning', 'Financial Analysis', 'LSTM'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Falcon 9 Landing Prediction',
      description: 'Machine learning model to predict SpaceX Falcon 9 first stage landing success using historical launch data and mission parameters.',
      icon: <Rocket className="w-8 h-8" />,
      tech: ['Python', 'Machine Learning', 'Data Analysis', 'Classification', 'SpaceX API'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Loan Repayment Prediction',
      description: 'Intelligent system to forecast loan repayment probabilities using machine learning algorithms and risk assessment models.',
      icon: <DollarSign className="w-8 h-8" />,
      tech: ['Python', 'Classification', 'Risk Assessment', 'Financial ML', 'Credit Scoring'],
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
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my work in AI, machine learning, and data science projects that demonstrate practical applications and innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`group bg-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{project.icon}</div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-600/50 text-gray-300 text-xs rounded border border-slate-500/50 hover:border-cyan-400/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/camelia409"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;