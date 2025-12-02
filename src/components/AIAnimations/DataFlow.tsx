import { useEffect, useRef } from 'react';

interface DataFlowProps {
  className?: string;
  particleCount?: number;
}

const DataFlow = ({ className = '', particleCount = 50 }: DataFlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: Array<{
      element: HTMLDivElement;
      x: number;
      y: number;
      speed: number;
      size: number;
    }> = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.background = 'linear-gradient(135deg, #00d9ff, #a855f7)';
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      particle.style.boxShadow = '0 0 10px #00d9ff';

      container.appendChild(particle);

      particles.push({
        element: particle,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 0.5 + 0.2,
        size: Math.random() * 4 + 2,
      });
    }

    let animationFrame: number;

    const animate = () => {
      particles.forEach((particle) => {
        // Move particles in flowing pattern
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.y * 0.01) * 0.5;

        // Wrap around
        if (particle.y < -5) {
          particle.y = 105;
          particle.x = Math.random() * 100;
        }
        if (particle.x < -5) particle.x = 105;
        if (particle.x > 105) particle.x = -5;

        particle.element.style.left = `${particle.x}%`;
        particle.element.style.top = `${particle.y}%`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      particles.forEach((p) => p.element.remove());
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
    />
  );
};

export default DataFlow;

