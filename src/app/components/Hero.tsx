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
    copy: "Hire me for design work, or learn my skills hands-on.",
    chips: ["UI/UX", "Branding", "Courses"],
    domain: "muxion.in",
    href: "https://muxion.in",
    cta: "Work with me",
    ring: "from-[#fdfdfd]/70 via-[#6b63f7] to-[#3d38f5]",
    surface: "bg-gradient-to-br from-[#4a45ff] via-[#3d38f5] to-[#1d1a8f]",
    blobs: ["bg-[#9a96ff]/50", "bg-[#1d1a8f]"],
    dot: "bg-[#fdfdfd]",
  },
  {
    name: "DESNIOSENSE",
    index: "02",
    tag: "Official Merch",
    copy: "Wear the art. Merch made with the same obsession.",
    chips: ["Tees", "Prints", "Drops"],
    domain: "desniosense.com",
    href: "https://desniosense.com",
    cta: "Shop merch",
    ring: "from-[#9a96ff] via-[#3d38f5]/40 to-[#fdfdfd]/40",
    surface: "bg-gradient-to-br from-[#1f1f2b] via-[#171720] to-[#121212]",
    blobs: ["bg-[#3d38f5]/50", "bg-[#9a96ff]/25"],
    dot: "bg-[#9a96ff]",
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
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-[#121212] pt-24 md:pt-28 pb-6 md:pb-10 px-4"
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 w-full text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            {portals.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.15, duration: 0.6 }}
                className={`group rounded-3xl p-[1.5px] bg-gradient-to-br ${p.ring} shadow-[0_20px_60px_-25px_rgba(61,56,245,0.7)] transition-transform duration-300 hover:-translate-y-1`}
              >
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} — ${p.domain}`}
                  className={`relative block h-full [container-type:inline-size] rounded-[calc(1.5rem-1.5px)] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a96ff] ${p.surface}`}
                >
                  <motion.div
                    className={`absolute -top-20 -right-16 w-64 h-64 rounded-full blur-3xl ${p.blobs[0]}`}
                    animate={{ x: [0, -30, 0], y: [0, 24, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className={`absolute -bottom-24 -left-16 w-64 h-64 rounded-full blur-3xl ${p.blobs[1]}`}
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fdfdfd_1px,transparent_1px)] [background-size:16px_16px]" />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-6 -right-2 md:-bottom-10 md:right-2 text-[7rem] md:text-[11rem] leading-none font-black select-none pointer-events-none text-transparent [-webkit-text-stroke:1.5px_rgba(253,253,253,0.16)]"
                  >
                    {p.index}
                  </span>
                  <div className="absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#fdfdfd]/15 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[300%] transition-all duration-1000 ease-out" />

                  <div className="relative flex flex-col gap-3 md:gap-8 p-5 md:p-9 md:min-h-[380px]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[#fdfdfd]/25 bg-[#121212]/30 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-[#fdfdfd]">
                        <span className="relative flex h-2 w-2">
                          <span className={`absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping ${p.dot}`} />
                          <span className={`relative inline-flex h-2 w-2 rounded-full ${p.dot}`} />
                        </span>
                        {p.tag}
                      </span>
                      <span className="shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#fdfdfd] text-[#121212] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                      </span>
                    </div>

                    <div className="md:mt-auto space-y-1.5 md:space-y-4">
                      <h3
                        className="font-bold text-[#fdfdfd] leading-[0.95] tracking-tight whitespace-nowrap text-[clamp(1.75rem,8.5cqw,4.5rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                        style={{ fontFamily: "'Balsamiq Sans', sans-serif" }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-sm md:text-lg leading-snug text-[#fdfdfd]/80 max-w-[34ch] [text-wrap:balance]">
                        {p.copy}
                      </p>
                      <div className="hidden md:flex gap-2 pt-1">
                        {p.chips.map((c) => (
                          <span key={c} className="rounded-full border border-[#fdfdfd]/25 px-3 py-1 text-xs font-semibold text-[#fdfdfd]/85">{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#fdfdfd]/20 pt-3 md:pt-4">
                      <span className="text-xs md:text-sm font-semibold text-[#fdfdfd]/70">{p.domain}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#fdfdfd]">
                        {p.cta}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="intro"
        className="min-h-[50vh] flex items-center justify-center relative overflow-hidden py-16 md:py-24 px-4 border-t-2 border-[#fdfdfd]/15"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
