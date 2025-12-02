import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Trophy, Code, Rocket, Sparkles } from 'lucide-react';

interface JourneyNode {
  id: string;
  title: string;
  subtitle: string;
  sectionId: string;
  icon: JSX.Element;
  position: { x: number; y: number };
  gradient: string;
}

const JourneyMap = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const nodes: JourneyNode[] = [
    {
      id: 'school',
      title: 'School',
      subtitle: 'Foundation',
      sectionId: '#about',
      icon: <GraduationCap className="w-6 h-6" />,
      position: { x: 10, y: 50 },
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'education',
      title: 'B.Tech AI & DS',
      subtitle: 'Learning',
      sectionId: '#skills',
      icon: <GraduationCap className="w-6 h-6" />,
      position: { x: 25, y: 30 },
      gradient: 'from-cyan-400 to-purple-400'
    },
    {
      id: 'internships',
      title: 'Internships',
      subtitle: 'Real Experience',
      sectionId: '#experience',
      icon: <Briefcase className="w-6 h-6" />,
      position: { x: 45, y: 20 },
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      id: 'hackathons',
      title: 'Hackathons',
      subtitle: 'Competitions',
      sectionId: '#achievements',
      icon: <Trophy className="w-6 h-6" />,
      position: { x: 65, y: 35 },
      gradient: 'from-pink-400 to-orange-400'
    },
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Building',
      sectionId: '#projects',
      icon: <Code className="w-6 h-6" />,
      position: { x: 80, y: 55 },
      gradient: 'from-orange-400 to-red-400'
    },
    {
      id: 'present',
      title: 'Present',
      subtitle: 'Striving for Learning',
      sectionId: '#skills',
      icon: <Rocket className="w-6 h-6" />,
      position: { x: 90, y: 75 },
      gradient: 'from-red-400 to-pink-400'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveNode(sectionId);
      setTimeout(() => setActiveNode(null), 2000);
    }
  };

  // Generate smooth curved SVG path
  const generatePath = () => {
    const points = nodes.map(node => ({
      x: (node.position.x / 100) * 1000,
      y: (node.position.y / 100) * 600
    }));

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const next = points[i + 1] || curr;
      
      const cp1x = prev.x + (curr.x - prev.x) * 0.5;
      const cp1y = prev.y;
      const cp2x = curr.x - (next.x - curr.x) * 0.5;
      const cp2y = curr.y;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }

    return path;
  };

  useEffect(() => {
    // Animate path drawing
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength}`;
      
      const animatePath = () => {
        pathRef.current!.style.transition = 'stroke-dashoffset 3s ease-in-out';
        pathRef.current!.style.strokeDashoffset = '0';
      };
      
      setTimeout(animatePath, 500);
    }
  }, []);

  return (
    <section id="journey-map" className="relative py-20 bg-slate-900/80 overflow-hidden">
      {/* Anime-style Background Layers */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-gray-400 text-lg">Follow the path of growth and achievement</p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-6"></div>
          </div>

          {/* Journey Map Container */}
          <div 
            ref={containerRef}
            className="relative w-full h-[600px] max-w-6xl mx-auto"
          >
            {/* SVG Path */}
            <svg 
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="journeyPathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <path
                ref={pathRef}
                d={generatePath()}
                fill="none"
                stroke="url(#journeyPathGradient)"
                strokeWidth="4"
                filter="url(#glow)"
                className="transition-all duration-1000"
              />
            </svg>

            {/* Journey Nodes */}
            {nodes.map((node, index) => {
              const isActive = activeNode === node.sectionId || hoveredNode === node.id;
              const nodeSize = isActive ? 80 : 60;
              
              return (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${node.position.x}%`,
                    top: `${node.position.y}%`,
                    transition: 'all 0.3s ease-out'
                  }}
                  onClick={() => scrollToSection(node.sectionId)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  data-cursor-node
                >
                  {/* Glow Ring */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${node.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl ${
                      isActive ? 'opacity-50 animate-pulse' : ''
                    }`}
                    style={{
                      width: `${nodeSize + 20}px`,
                      height: `${nodeSize + 20}px`,
                      marginLeft: `-${(nodeSize + 20) / 2}px`,
                      marginTop: `-${(nodeSize + 20) / 2}px`
                    }}
                  />

                  {/* Node Circle */}
                  <div
                    className={`relative rounded-full bg-gradient-to-br ${node.gradient} border-4 border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                    style={{
                      width: `${nodeSize}px`,
                      height: `${nodeSize}px`
                    }}
                  >
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 text-white">
                      {node.icon}
                    </div>

                    {/* Sparkle Effect on Hover */}
                    {isActive && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Node Label */}
                  <div
                    className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-70 group-hover:opacity-100 group-hover:scale-105'
                    }`}
                    style={{ minWidth: '120px' }}
                  >
                    <h3 className="text-white font-bold text-sm mb-1 whitespace-nowrap">
                      {node.title}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Animated Particles along Path */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float-particle"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${50 - i * 5}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;

