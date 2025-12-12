import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ProfessionalResume.pdf';
    link.download = 'Abinandida_R_Resume.pdf';
    link.click();
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3'
      : 'bg-transparent py-5'
      }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Abinandida R
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-lg text-white hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 w-fit"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;