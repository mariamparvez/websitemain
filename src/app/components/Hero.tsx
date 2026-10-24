import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import heroBg from "../../imports/1.jpg";

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
      className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-28 pb-10 px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#121212]/90" />
      <ParticlesBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h4
            className="text-xl sm:text-2xl md:text-3xl text-[#b8b8b8] font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, there! I'm Mariam, and I..
          </motion.h4>

          <div className="space-y-1 overflow-visible">
            <motion.p
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#fdfdfd] leading-tight max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              design products people <span className="bg-gradient-to-r from-[#3d38f5] via-[#6b63f7] to-[#3d38f5] bg-clip-text text-transparent">don't want to leave.</span>
            </motion.p>
          </div>

          <motion.p
            className="text-[#b8b8b8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-center italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            and I now help others do the same.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-[#fdfdfd]/15 pt-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {/* Latest Course */}
            <div className="flex items-center gap-2 text-lg">
              <span className="text-[#fdfdfd] font-medium">Latest:</span>
              <a
                href="https://www.youtube.com/watch?v=nJ3clNDNu9s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a96ff] font-bold hover:text-[#6b63f7] transition-colors underline"
              >
                UI/UX Design Course
              </a>
            </div>

            {/* About Me Button */}
            <motion.a
              href="https://www.youtube.com/watch?v=cs2ySXNG4aU"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#3d38f5] text-[#fdfdfd] px-6 py-3 rounded-full font-bold text-lg hover:bg-[#2d28d5] transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-[#fdfdfd]/20 flex items-center justify-center">
                <Play className="w-4 h-4 fill-[#fdfdfd] text-[#fdfdfd]" />
              </div>
              <span>About Me</span>
            </motion.a>
          </motion.div>


          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full pt-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://muxion.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between min-h-[260px] md:min-h-[340px] p-8 md:p-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#3d38f5] to-[#1d1a8f] border-2 border-[#fdfdfd]/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#fdfdfd]/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <div className="relative flex items-start justify-between">
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#fdfdfd]/80">Services &amp; Learning</span>
                <span className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#fdfdfd] text-[#121212] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </div>
              <div className="relative space-y-3">
                <h3 className="text-5xl md:text-7xl font-bold text-[#fdfdfd] leading-none" style={{ fontFamily: "'Balsamiq Sans', sans-serif" }}>MUXION</h3>
                <p className="text-base md:text-lg text-[#fdfdfd]/85 max-w-md">Reach out to hire me for design work, or learn my services and skills hands-on.</p>
                <span className="text-sm font-semibold text-[#fdfdfd]/80 underline underline-offset-4">muxion.in</span>
              </div>
            </a>

            <a
              href="https://desniosens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between min-h-[260px] md:min-h-[340px] p-8 md:p-10 rounded-3xl overflow-hidden bg-[#1b1b1b] border-2 border-[#fdfdfd]/25 hover:border-[#9a96ff] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -left-16 -bottom-20 w-72 h-72 rounded-full bg-[#3d38f5]/25 blur-3xl group-hover:scale-125 transition-transform duration-500" />
              <div className="relative flex items-start justify-between">
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-[#9a96ff]">Official Merch</span>
                <span className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#fdfdfd] text-[#fdfdfd] flex items-center justify-center group-hover:bg-[#fdfdfd] group-hover:text-[#121212] group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </span>
              </div>
              <div className="relative space-y-3">
                <h3 className="text-5xl md:text-7xl font-bold text-[#fdfdfd] leading-none" style={{ fontFamily: "'Balsamiq Sans', sans-serif" }}>DESNIOSENSE</h3>
                <p className="text-base md:text-lg text-[#b8b8b8] max-w-md">Wear the art. Shop my merch collection, designed with the same obsession as everything else.</p>
                <span className="text-sm font-semibold text-[#b8b8b8] underline underline-offset-4">desniosens.com</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}