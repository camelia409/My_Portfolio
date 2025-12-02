import { useEffect, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  hovered: boolean;
  nodeHovered: boolean;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    hovered: false,
    nodeHovered: false
  });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia('(pointer: fine)').matches === false) {
      return;
    }

    let animationFrame: number;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const ease = 0.15;

    const updateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * ease;
      cursorY += dy * ease;

      setCursor(prev => ({ ...prev, x: cursorX, y: cursorY }));

      // Update trail
      setTrail(prev => {
        const newTrail = [{ x: cursorX, y: cursorY, id: Date.now() }, ...prev.slice(0, 5)];
        return newTrail;
      });

      animationFrame = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor-hover]')
      ) {
        setCursor(prev => ({ ...prev, hovered: true }));
      }
      if (target.closest('[data-cursor-node]')) {
        setCursor(prev => ({ ...prev, nodeHovered: true }));
      }
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, hovered: false, nodeHovered: false }));
    };

    // Check initial hover state
    const checkInitialHover = () => {
      const hovered = document.querySelector(':hover') as HTMLElement;
      if (hovered) {
        if (
          hovered.tagName === 'BUTTON' ||
          hovered.tagName === 'A' ||
          hovered.closest('button') ||
          hovered.closest('a') ||
          hovered.closest('[data-cursor-hover]')
        ) {
          setCursor(prev => ({ ...prev, hovered: true }));
        }
        if (hovered.closest('[data-cursor-node]')) {
          setCursor(prev => ({ ...prev, nodeHovered: true }));
        }
      }
    };

    updateCursor();
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Check hover state periodically
    const hoverCheck = setInterval(checkInitialHover, 100);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      clearInterval(hoverCheck);
    };
  }, []);

  // Don't render on mobile/tablet
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches === false) {
    return null;
  }

  const cursorSize = cursor.hovered ? 40 : cursor.nodeHovered ? 50 : 20;
  const cursorGlow = cursor.hovered ? 'blur-xl' : cursor.nodeHovered ? 'blur-2xl' : 'blur-sm';

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-200 ease-out"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-200 ${cursorGlow}`}
          style={{
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
        </div>
      </div>

      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <div
          key={`${point.id}-${index}`}
          className="fixed pointer-events-none z-[9998] rounded-full bg-cyan-400/30 transition-opacity duration-300"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            width: `${10 - index * 1.5}px`,
            height: `${10 - index * 1.5}px`,
            opacity: 1 - index * 0.2,
          }}
        />
      ))}

      {/* Spark Effect for Node Hover */}
      {cursor.nodeHovered && (
        <div
          className="fixed pointer-events-none z-[9999] transition-all duration-300"
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-transparent via-yellow-300 to-yellow-400 rounded-full animate-sparkle"
                style={{
                  transform: `rotate(${i * 90}deg) translateY(-20px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CustomCursor;

