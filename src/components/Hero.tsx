import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download, Eye, MessageSquare, Briefcase, Code, Trophy, Award, Layers } from 'lucide-react';
import NeuralNetwork from './AIAnimations/NeuralNetwork';
import DataFlow from './AIAnimations/DataFlow';
import StatBadge from './StatBadge';

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

  const handleViewResume = () => {
    window.open('/ProfessionalResume.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ProfessionalResume.pdf';
    link.download = 'Abinandida_R_Resume.pdf';
    link.click();
  };

  const handleHireMe = () => {
    scrollToSection('#contact');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-container">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

        {/* Anime-style Grid Background */}
        <div className="absolute inset-0 opacity-20 parallax-layer" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'translateZ(-1px) scale(1.1)'
        }}></div>

        {/* Neural Network Animation */}
        <NeuralNetwork nodeCount={40} connectionCount={60} />

        {/* Data Flow Particles */}
        <DataFlow particleCount={80} />

        {/* Enhanced Gradient Waves - Parallax Layers */}
        <div className="absolute inset-0 opacity-40 parallax-layer">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Floating Spark Particles */}
        <div className="absolute inset-0 parallax-layer">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
                transform: 'translateZ(-2px)'
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-70 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-12 py-20">
          {/* Profile Image Section */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="flex justify-center">
              <div className="relative group">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 opacity-75 animate-spin-slow" style={{ width: '280px', height: '280px', margin: '-8px' }}></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-50 animate-spin-reverse-slow" style={{ width: '280px', height: '280px', margin: '-8px' }}></div>

                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-400 to-purple-400 shadow-2xl ring-4 ring-cyan-400/50 group-hover:ring-purple-400/50 transition-all duration-300">
                  <img
                    src="/me.jpg"
                    alt="Abinandida R"
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-60 animate-float-orbit"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-float-orbit-reverse"></div>
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

            {/* RPG-style Stat Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-4xl">
              <StatBadge
                label="Internships"
                value="5+"
                icon={<Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />}
                gradient="from-blue-500 to-cyan-500"
                delay={0}
              />
              <StatBadge
                label="AI Projects"
                value="5+"
                icon={<Code className="w-4 h-4 sm:w-5 sm:h-5" />}
                gradient="from-cyan-500 to-purple-500"
                delay={100}
              />
              <StatBadge
                label="Hackathons"
                value="4+"
                icon={<Trophy className="w-4 h-4 sm:w-5 sm:h-5" />}
                gradient="from-purple-500 to-pink-500"
                delay={200}
              />
              <StatBadge
                label="Certifications"
                value="8+"
                icon={<Award className="w-4 h-4 sm:w-5 sm:h-5" />}
                gradient="from-pink-500 to-orange-500"
                delay={300}
              />
              <StatBadge
                label="Technologies"
                value="20+"
                icon={<Layers className="w-4 h-4 sm:w-5 sm:h-5" />}
                gradient="from-orange-500 to-red-500"
                delay={400}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={handleViewResume}
                data-cursor-hover
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Eye size={20} />
                <span>View Resume</span>
              </button>
              <button
                onClick={handleDownloadCV}
                data-cursor-hover
                className="group border-2 border-cyan-400 px-8 py-4 rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </button>
              <button
                onClick={handleHireMe}
                data-cursor-hover
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
                data-cursor-hover
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/abinandida-r-377128258"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:abinandida4@gmail.com"
                data-cursor-hover
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