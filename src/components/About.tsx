import React from 'react';
import { Brain, Database, Code, Cloud, Github, Linkedin, Users, Award, Activity } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Passionate about building intelligent systems with deep learning and NLP'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Science',
      description: 'Expert in data analysis, visualization, and predictive modeling'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies and scalable applications'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Computing',
      description: 'Experienced with IBM Cloud, AWS, and Firebase deployment'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Subtle AI Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/30 to-transparent rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6 lg:pr-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                AI & Data Science enthusiast with experience in building ML-powered systems from concept to delivery. 
                Skilled in Rapid Prototyping, RAG systems, Linux automation, and scalable backend development. 
                Strong leadership skills gained through mentoring interns and coordinating tech teams. Focused on 
                innovation and solving real-world challenges through responsible, secure, and data-driven AI.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my B.Tech in Artificial Intelligence and Data Science at Anna University, 
                Coimbatore, I have gained hands-on experience through <strong className="text-cyan-400 font-semibold">internships</strong> at 
                Infosys Springboard, Intrnforte, and AURCC, where I developed ML models, data science solutions, 
                and web applications. Additionally, I've completed <strong className="text-purple-400 font-semibold">job simulations</strong> 
                at British Airways and Deloitte Australia (via Forage), gaining exposure to industry-standard practices 
                in data analysis, predictive modeling, and forensic analytics.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across Python, JavaScript, SQL, machine learning frameworks (Scikit-learn, 
                TensorFlow, PyTorch), and modern web technologies. At Infosys Springboard, I led a team of 25+ 
                interns in building a time-series ML model for stock prediction, demonstrating both technical 
                prowess and leadership capabilities. I believe in the transformative power of AI to create 
                meaningful impact across industries through secure, scalable solutions.
              </p>

              <div className="flex items-center space-x-6 pt-4">
                <a
                  href="https://github.com/camelia409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/abi-nandida-377128258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Right Column - Skill Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Extracurricular Activities
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-cyan-400 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">DGATE Cell Member</h4>
                <p className="text-gray-400 text-sm">Active member of the DGATE cell, contributing to college initiatives and technical activities.</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-cyan-400 mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">College Chess Team Captain</h4>
                <p className="text-gray-400 text-sm">Leading the college chess team, demonstrating strategic thinking and leadership skills.</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-cyan-400 mb-4">
                  <Activity className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">District-Level Athlete</h4>
                <p className="text-gray-400 text-sm">Competing at district level in short sprint events, showcasing dedication and discipline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;