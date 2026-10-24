import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import openHandIcon from "../../imports/openhand.svg";

const SWIPE_GUIDE_KEY = "hasSeenSwipeGuide";

export function SwipeGuideAnimation() {
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Check if user has seen the guide before
    const hasSeenGuide = localStorage.getItem(SWIPE_GUIDE_KEY);

    if (!hasSeenGuide) {
      // Show guide after a brief delay
      const timer = setTimeout(() => {
        setShowGuide(true);
      }, 500);

      // Hide guide after 3-4 seconds
      const hideTimer = setTimeout(() => {
        setShowGuide(false);
        localStorage.setItem(SWIPE_GUIDE_KEY, "true");
      }, 4000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {showGuide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center"
        >
          {/* Swipe Hand Animation */}
          <motion.div
            className="relative"
            initial={{ x: -50 }}
            animate={{ x: 50 }}
            transition={{
              duration: 1.5,
              repeat: 2,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          >
            {/* Open Hand Icon */}
            <img
              src={openHandIcon}
              alt="Swipe hand"
              className="w-20 h-20"
              style={{
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))"
              }}
            />

            {/* Swipe Direction Arrows */}
            <motion.div
              className="absolute -right-12 top-1/2 -translate-y-1/2"
              animate={{ x: [0, 10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="#3d38f5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Optional Text Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#3d38f5] text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
          >
            Swipe to explore →
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
