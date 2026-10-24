import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

const roles = [
  "Web Design",
  "UI/UX Design",
  "Graphic Design",
  "Art",
  "Teaching"
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[50vh] sm:min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-32 pb-12 px-4 bg-white"
    >

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h4
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, there! I'm Mariam, and I..
          </motion.h4>

          <div className="space-y-1 overflow-visible">
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              design products people <span className="bg-gradient-to-r from-[#3d38f5] via-[#6b63f7] to-[#3d38f5] bg-clip-text text-transparent">don't want to leave.</span>
            </motion.p>
          </div>

          <motion.p
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            and I now help others do the same.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://www.youtube.com/watch?v=nJ3clNDNu9s"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3d38f5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2d28d5] transition-all shadow-lg"
            >
              Latest Course
            </motion.a>

            <motion.a
              href="https://www.youtube.com/watch?v=cs2ySXNG4aU"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3d38f5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2d28d5] transition-all shadow-lg"
            >
              About Me
            </motion.a>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
}