import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredParticle, setHoveredParticle] = useState<number | null>(null);

  useEffect(() => {
    const colors = [
      "#dbeafe", // blue-100
      "#bfdbfe", // blue-200
      "#93c5fd", // blue-300
      "#e0f2fe", // sky-100
      "#bae6fd", // sky-200
      "#e0e7ff", // indigo-100
      "#c7d2fe", // indigo-200
    ];

    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full">
        {/* Connection lines between nearby particles */}
        {particles.map((particle, i) =>
          particles.slice(i + 1).map((otherParticle, j) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
                Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < 15) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${particle.x}%`}
                  y1={`${particle.y}%`}
                  x2={`${otherParticle.x}%`}
                  y2={`${otherParticle.y}%`}
                  stroke="#93c5fd"
                  strokeWidth="0.5"
                  opacity={0.3 - distance / 50}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
              );
            }
            return null;
          })
        )}

        {/* Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particle.color}
            fillOpacity={0.4}
            className="cursor-pointer pointer-events-auto"
            animate={{
              cx: hoveredParticle === particle.id
                ? `${particle.x}%`
                : `${particle.x + particle.speedX * 50}%`,
              cy: hoveredParticle === particle.id
                ? `${particle.y}%`
                : `${particle.y + particle.speedY * 50}%`,
              r: hoveredParticle === particle.id ? particle.size * 2.5 : particle.size,
            }}
            transition={{
              duration: hoveredParticle === particle.id ? 0.4 : 20,
              repeat: hoveredParticle === particle.id ? 0 : Infinity,
              repeatType: "reverse",
              ease: hoveredParticle === particle.id ? "easeOut" : "linear",
            }}
            whileHover={{
              r: particle.size * 2.8,
              fill: "#60a5fa",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            onMouseEnter={() => setHoveredParticle(particle.id)}
            onMouseLeave={() => setHoveredParticle(null)}
          />
        ))}
      </svg>
    </div>
  );
}
