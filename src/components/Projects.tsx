import { useEffect, useRef, useState } from 'react';
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
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
                className={`group glass-card rounded-xl overflow-hidden relative ${visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                <div className="p-8">
                  <div className="mb-6 relative">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <div className="text-white relative z-10">{project.icon}</div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed text-sm h-20 overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/camelia409"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full border border-slate-600 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-semibold">View Full Portfolio on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;