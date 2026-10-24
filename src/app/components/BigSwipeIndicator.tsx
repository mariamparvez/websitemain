import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import openHandIcon from "../../imports/openhand-2.svg";

export function BigSwipeIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hideIndicator = () => {
      setIsVisible(false);
    };

    const section = sectionRef.current?.closest('section');
    if (section) {
      section.addEventListener('wheel', hideIndicator);
      section.addEventListener('touchstart', hideIndicator);
      section.addEventListener('mousedown', hideIndicator);
      section.addEventListener('scroll', hideIndicator);

      return () => {
        section.removeEventListener('wheel', hideIndicator);
        section.removeEventListener('touchstart', hideIndicator);
        section.removeEventListener('mousedown', hideIndicator);
        section.removeEventListener('scroll', hideIndicator);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0.95
      }}
    >
      <motion.img
        src={openHandIcon}
        alt="Swipe Left"
        animate={{
          x: [120, -120, -180],
          opacity: [0, 1, 1, 0]
        }}
        transition={{
          duration: 3,
          times: [0, 0.15, 0.5, 1],
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: '220px',
          height: 'auto',
          filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.25))'
        }}
      />
    </div>
  );
}
