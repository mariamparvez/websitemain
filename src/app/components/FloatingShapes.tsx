import { motion } from "motion/react";
import { useState } from "react";

interface FloatingShapesProps {
  density?: "light" | "medium" | "heavy";
}

export function FloatingShapes({ density = "medium" }: FloatingShapesProps) {
  const [hoveredShape, setHoveredShape] = useState<number | null>(null);

  const shapeCount = density === "light" ? 3 : density === "medium" ? 5 : 8;

  const shapes = Array.from({ length: shapeCount }, (_, i) => {
    const types = ["circle", "triangle", "hexagon", "square"];
    const sizes = [40, 60, 80, 100, 120];
    const colors = [
      "bg-[#3d38f5]/8",
      "bg-[#6b63f7]/8",
      "bg-blue-400/8",
      "bg-indigo-400/8",
      "bg-sky-400/8",
    ];
    const positions = [
      { top: "10%", left: "5%" },
      { top: "20%", right: "10%" },
      { bottom: "15%", left: "8%" },
      { bottom: "25%", right: "15%" },
      { top: "40%", left: "12%" },
      { top: "60%", right: "8%" },
      { bottom: "40%", left: "15%" },
      { top: "30%", right: "5%" },
    ];

    return {
      id: i,
      type: types[i % types.length],
      size: sizes[i % sizes.length],
      color: colors[i % colors.length],
      position: positions[i % positions.length],
      duration: 4 + (i % 3) * 2,
      delay: i * 0.5,
      rotateSpeed: 10 + (i % 4) * 5,
    };
  });

  const getShapePath = (type: string, size: number) => {
    switch (type) {
      case "triangle":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <polygon
              points="50,10 90,90 10,90"
              fill="currentColor"
              className="transition-all duration-300"
            />
          </svg>
        );
      case "hexagon":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="currentColor"
              className="transition-all duration-300"
            />
          </svg>
        );
      case "square":
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="w-full h-full"
          >
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              fill="currentColor"
              className="transition-all duration-300"
            />
          </svg>
        );
      default: // circle
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color} ${
            shape.type === "circle" ? "rounded-full" : ""
          } cursor-pointer pointer-events-auto hover:z-20`}
          style={{
            width: shape.size,
            height: shape.size,
            ...shape.position,
          }}
          animate={{
            y: hoveredShape === shape.id ? 0 : [0, -30, 0],
            x: hoveredShape === shape.id ? 0 : [0, 20, 0],
            rotate: hoveredShape === shape.id ? 360 : [0, shape.rotateSpeed, 0],
            scale: hoveredShape === shape.id ? 1.5 : 1,
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          whileHover={{
            scale: 2,
            rotate: 180,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          onHoverStart={() => setHoveredShape(shape.id)}
          onHoverEnd={() => setHoveredShape(null)}
        >
          {shape.type === "circle" ? (
            <div className="w-full h-full" />
          ) : (
            getShapePath(shape.type, shape.size)
          )}
        </motion.div>
      ))}
    </div>
  );
}
