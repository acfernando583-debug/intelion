import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: string;
  background: string;
}

function randomFromIndex(index: number, seed: number) {
  const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

export function Particles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, index) => {
      const colorSeed = randomFromIndex(index, 6);
      return {
        id: index,
        left: `${randomFromIndex(index, 1) * 100}%`,
        animationDuration: `${6 + randomFromIndex(index, 2) * 8}s`,
        animationDelay: `${randomFromIndex(index, 3) * 5}s`,
        size: `${2 + randomFromIndex(index, 4) * 4}px`,
        opacity: `${0.2 + randomFromIndex(index, 5) * 0.4}`,
        background:
          colorSeed > 0.5
            ? "rgba(255, 214, 0, 0.5)"
            : "rgba(255, 255, 255, 0.4)",
      };
    });
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
            background: p.background,
          }}
        />
      ))}
    </div>
  );
}
