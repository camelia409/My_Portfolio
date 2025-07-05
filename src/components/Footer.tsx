import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ProfessionalResume.pdf';
    link.download = 'Abinandida_R_Resume.pdf';
    link.click();
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Abinandida R
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Final-year AI & Data Science student passionate about building intelligent solutions 
                that make a difference. Currently pursuing B.Tech at Anna University, Coimbatore.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/camelia409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abinandida-r-377128258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:abinandida4@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Certifications', href: '#certifications' },
                  { name: 'Blogs', href: '#blogs' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 abinandida4@gmail.com</p>
                <p>📍 Coimbatore, India</p>
                <p>🎓 Anna University</p>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleDownloadResume}
                  className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Abinandida R. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-current" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;