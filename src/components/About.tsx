import React from 'react';
import { Brain, Database, Code, Cloud, Github, Linkedin } from 'lucide-react';

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
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a final-year AI & Data Science student passionate about crafting scalable solutions 
                through machine learning, full-stack development, and cloud computing. I thrive on solving 
                complex challenges and collaborating on innovative projects.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently pursuing my B.Tech in Artificial Intelligence and Data Science at Anna University, 
                Coimbatore, I have gained hands-on experience through internships at leading companies like 
                Deloitte, Infosys, and Intrnforte. My expertise spans across Python, machine learning frameworks, 
                and modern web technologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in the transformative power of AI and data-driven solutions to create meaningful 
                impact across industries. My goal is to contribute to cutting-edge projects that push the 
                boundaries of what's possible with artificial intelligence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">
                  Python
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg border border-purple-500/30">
                  Machine Learning
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg border border-pink-500/30">
                  Data Science
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">
                  Full Stack
                </span>
              </div>

              <div className="flex items-center space-x-6 pt-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-cyan-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;