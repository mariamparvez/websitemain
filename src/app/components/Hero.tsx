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

const portals = [
  {
    name: "MUXION",
    index: "01",
    tag: "Services & Learning",
    copy: "Hire me for design work, or learn my services and skills hands-on.",
    domain: "muxion.in",
    href: "https://muxion.in",
    cta: "Work with me",
    surface: "bg-gradient-to-br from-[#3d38f5] to-[#1d1a8f] border-[#fdfdfd]/20 hover:border-[#fdfdfd]/50",
    glow: "bg-[#fdfdfd]/15",
  },
  {
    name: "DESNIOSENSE",
    index: "02",
    tag: "Official Merch",
    copy: "Wear the art. Shop my merch, made with the same obsession as everything else.",
    domain: "desniosense.com",
    href: "https://desniosense.com",
    cta: "Shop merch",
    surface: "bg-[#1b1b1b] border-[#fdfdfd]/20 hover:border-[#9a96ff]",
    glow: "bg-[#3d38f5]/30",
  },
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
            {portals.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — ${p.domain}`}
                className={`group relative block [container-type:inline-size] rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a96ff] ${p.surface}`}
              >
                <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#fdfdfd_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${p.glow}`} />

                <div className="relative flex flex-col gap-10 min-h-[300px] md:min-h-[380px] p-7 md:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase text-[#fdfdfd]/80">
                      <span className="tabular-nums text-[#fdfdfd]/50">{p.index}</span>
                      <span className="h-px w-8 bg-[#fdfdfd]/40" />
                      {p.tag}
                    </span>
                    <span className="shrink-0 w-11 h-11 rounded-full bg-[#fdfdfd] text-[#121212] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>

                  <h3
                    className="mt-auto font-bold text-[#fdfdfd] leading-[0.95] tracking-tight whitespace-nowrap text-[clamp(1.75rem,9cqw,4.5rem)]"
                    style={{ fontFamily: "'Balsamiq Sans', sans-serif" }}
                  >
                    {p.name}
                  </h3>

                  <div className="space-y-5">
                    <p className="text-base md:text-lg leading-relaxed text-[#fdfdfd]/80 max-w-[34ch] [text-wrap:balance] [hyphens:none]">
                      {p.copy}
                    </p>
                    <div className="flex items-center justify-between border-t border-[#fdfdfd]/20 pt-4">
                      <span className="text-sm font-semibold text-[#fdfdfd]/70">{p.domain}</span>
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-[#fdfdfd]">
                        {p.cta}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}