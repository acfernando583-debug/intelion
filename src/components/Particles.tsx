import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: string;
}

export function Particles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${6 + Math.random() * 8}s`,
      animationDelay: `${Math.random() * 5}s`,
      size: `${2 + Math.random() * 4}px`,
      opacity: `${0.2 + Math.random() * 0.4}`,
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            background: Math.random() > 0.5
              ? "rgba(255, 214, 0, 0.5)"
              : "rgba(255, 255, 255, 0.4)",
          }}
        />
      ))}
    </div>
  );
}
