import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download, Eye, MessageSquare } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['AI Engineer', 'Data Scientist', 'Full-Stack Developer', 'ML Enthusiast'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // This would generate a PDF from resume data
    const link = document.createElement('a');
    link.href = '/ProfessionalResume.pdf';
    link.download = 'Abinandida_R_Resume.pdf';
    link.click();
  };

  const handleHireMe = () => {
    scrollToSection('#contact');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Particle Animation */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-12 py-20">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl">
                  <img
                    src="/me.jpg"
                    alt="Abinandida R"
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abinandida R
              </span>
            </h1>
            
            <div className="text-2xl md:text-4xl text-gray-300 mb-4 h-16 flex items-center justify-center md:justify-start">
              <span className="border-r-2 border-cyan-400 pr-2 animate-pulse min-w-[300px] text-left">
                {displayText}
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl">
              Final-year B.Tech AI & Data Science student at Anna University, Coimbatore, India
            </p>

            <p className="text-md text-gray-500 mb-8">
              📍 Coimbatore, India
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={() => scrollToSection('#about')}
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Eye size={20} />
                <span>View Resume</span>
              </button>
              <button
                onClick={handleDownloadCV}
                className="group border-2 border-cyan-400 px-8 py-4 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
              <button
                onClick={handleHireMe}
                className="group border-2 border-purple-400 px-8 py-4 rounded-lg text-purple-400 font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <MessageSquare size={20} />
                <span>Hire Me</span>
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-8">
              <a
                href="https://github.com/camelia409"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Github size={28} />
              </a>
              <a
                 href="https://linkedin.com/in/abinandida-r-377128258"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:abinandida4@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')} 
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;