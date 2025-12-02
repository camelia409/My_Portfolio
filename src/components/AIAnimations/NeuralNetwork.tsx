import { useEffect, useRef } from 'react';

interface NeuralNetworkProps {
  className?: string;
  nodeCount?: number;
  connectionCount?: number;
}

const NeuralNetwork = ({ className = '', nodeCount = 30, connectionCount = 50 }: NeuralNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const connections: Array<{ from: number; to: number; opacity: number }> = [];

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 2,
      });
    }

    // Initialize connections
    for (let i = 0; i < connectionCount; i++) {
      connections.push({
        from: Math.floor(Math.random() * nodes.length),
        to: Math.floor(Math.random() * nodes.length),
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections
      ctx.strokeStyle = '#00d9ff';
      connections.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        const distance = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);

        if (distance < 200) {
          ctx.globalAlpha = conn.opacity * (1 - distance / 200);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius);
        gradient.addColorStop(0, '#00d9ff');
        gradient.addColorStop(1, '#00d9ff00');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Outer glow
        ctx.fillStyle = '#00d9ff40';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, [nodeCount, connectionCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralNetwork;

