import { useEffect, useRef, useState } from 'react';

interface SectionDividerProps {
  chapterNumber?: number;
  chapterTitle: string;
  subtitle?: string;
  gradient?: string;
  delay?: number;
}

const SectionDivider = ({ 
  chapterNumber,
  chapterTitle,
  subtitle, 
  gradient = 'from-cyan-400 via-purple-400 to-pink-400',
  delay = 0 
}: SectionDividerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [slashAnimated, setSlashAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              setSlashAnimated(true);
            }, delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`relative py-24 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Anime-style Slash Line */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`absolute w-full h-1 bg-gradient-to-r ${gradient} transform transition-all duration-1000 ${
            slashAnimated 
              ? 'translate-x-0 opacity-60 scale-x-100' 
              : '-translate-x-full opacity-0 scale-x-0'
          }`}
          style={{
            transform: slashAnimated 
              ? 'translateX(0) scaleX(1) rotate(-2deg)' 
              : 'translateX(-100%) scaleX(0) rotate(-2deg)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Chapter Number */}
          {chapterNumber && (
            <div className="mb-4">
              <span className="text-sm md:text-base text-gray-500 uppercase tracking-wider">
                Chapter {chapterNumber}
              </span>
            </div>
          )}

          {/* Chapter Title */}
          <h2 className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            {chapterTitle}
          </h2>

          {/* Subtitle */}
          {subtitle && (
            <p className={`text-lg md:text-xl text-gray-400 mt-6 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      {/* Corner Sparkles */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default SectionDivider;

