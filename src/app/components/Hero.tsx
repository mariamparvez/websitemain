import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import TechText from "./TechText";

const projects = [
  { name: "MUXION", index: "01", tag: "Services & Learning", copy: "Hire me for design work, or learn my skills hands-on.", chips: ["UI/UX", "Branding", "Courses"], domain: "muxion.in", href: "https://muxion.in", ring: "from-[#fdfdfd]/70 via-[#6b63f7] to-[#3d38f5]", surface: "bg-gradient-to-br from-[#4a45ff] via-[#3d38f5] to-[#1d1a8f]", dot: "bg-[#fdfdfd]" },
  { name: "DESNIO SENSE", index: "02", tag: "Official Merch", copy: "Wear the art. Merch made with the same obsession.", chips: ["Tees", "Prints", "Drops"], domain: "desniosense.com", href: "https://desniosense.com", ring: "from-[#9a96ff] via-[#3d38f5]/40 to-[#fdfdfd]/40", surface: "bg-gradient-to-br from-[#1f1f2b] via-[#171720] to-[#121212]", dot: "bg-[#9a96ff]" },
];

export function Hero() {
  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 sm:py-28">
        <div className="hero-slats absolute inset-0" />
        <div className="absolute inset-0 bg-[#121212]/82" />
        <ParticlesBackground />
        <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-2 sm:space-y-5">
            <motion.h4 className="text-lg sm:text-xl md:text-2xl leading-tight text-[#b8b8b8] font-normal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>Hi, there! I&apos;m Mariam, and I..</motion.h4>
            <motion.div className="mx-auto w-full max-w-7xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} role="heading" aria-level={1} aria-label="design products people don't want to leave."><div className="h-[3.6rem] sm:h-[clamp(5.25rem,10vw,9.5rem)]"><TechText text="design products people" fontFamily="Be Vietnam Pro" fontWeight={900} fontSize={200} color="#fdfdfd" accentColor="#9a96ff" lineStyle="dashed" reveal="letter" labels={false} draggable={false} guides={false} sweep={false} /></div><div className="h-[3.6rem] sm:h-[clamp(5.25rem,10vw,9.5rem)]"><TechText text="don't want to leave." fontFamily="Be Vietnam Pro" fontWeight={900} fontSize={200} color="#4d5dff" accentColor="#c4c1ff" lineStyle="dashed" reveal="letter" labels={false} draggable={false} guides={false} sweep={false} /></div></motion.div>
            <motion.p className="text-[#b8b8b8] text-base sm:text-lg md:text-xl leading-tight max-w-2xl mx-auto italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>and I now help others do the same.</motion.p>
            <motion.a href="#recent-projects" aria-label="Scroll to recent projects" className="scroll-cue mx-auto mt-3 sm:mt-7 grid place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}><span /><i /></motion.a>
          </motion.div>
        </div>
      </section>

      <section id="recent-projects" className="relative overflow-hidden bg-[#121212] px-4 py-12 sm:py-16 md:py-20 border-t-2 border-[#fdfdfd]/15">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div className="mb-7 sm:mb-9 text-center" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="text-[#9a96ff] text-xs font-bold tracking-[0.2em] uppercase mb-2">Independent ventures</p><h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none tracking-tight text-[#fdfdfd]">Recent projects</h2></motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {projects.map((p, i) => <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`group rounded-lg p-[1.5px] bg-gradient-to-br ${p.ring} shadow-[0_20px_60px_-25px_rgba(61,56,245,0.7)] transition-transform duration-300 hover:-translate-y-1`}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} — ${p.domain}`} className={`relative block min-h-[252px] h-full rounded-[calc(0.5rem-1.5px)] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a96ff] ${p.surface} md:min-h-[325px]`}>
                <span aria-hidden="true" className="absolute -bottom-6 -right-2 text-[8rem] md:text-[11rem] leading-none font-black text-transparent [-webkit-text-stroke:1.5px_rgba(253,253,253,0.16)]">{p.index}</span>
                <div className="relative flex min-h-[252px] flex-col gap-3 p-4 md:min-h-[325px] md:gap-5 md:p-9">
                  <div className="flex items-center justify-between gap-2"><span className="inline-flex whitespace-nowrap items-center gap-1.5 rounded border border-[#fdfdfd]/25 bg-[#121212]/25 backdrop-blur-sm px-2 py-1 text-[9px] font-semibold tracking-[0.1em] uppercase text-[#fdfdfd] sm:text-xs sm:tracking-[0.14em]"><span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />{p.tag}</span><span className="h-9 w-9 shrink-0 rounded border border-[#fdfdfd]/45 bg-transparent text-[#fdfdfd] flex items-center justify-center transition-all duration-300 group-hover:bg-[#fdfdfd] group-hover:text-[#121212] group-hover:rotate-45"><ArrowUpRight className="w-4 h-4" /></span></div>
                  <div className="mt-auto"><h3 className="font-black text-[#fdfdfd] leading-[0.95] tracking-[-0.04em] text-[clamp(1.6rem,5.8cqw,3.5rem)]">{p.name}</h3><p className="mt-3 text-base md:text-lg leading-snug text-[#fdfdfd]/80 max-w-[32ch]">{p.copy}</p><div className="hidden md:flex gap-2 pt-4">{p.chips.map((c) => <span key={c} className="rounded-full border border-[#fdfdfd]/25 px-3 py-1 text-xs font-semibold text-[#fdfdfd]/85">{c}</span>)}</div></div>
                  <div className="flex items-center justify-between border-t border-[#fdfdfd]/20 pt-3"><span className="text-xs md:text-sm font-semibold text-[#fdfdfd]/70">{p.domain}</span><span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-[#fdfdfd]">{p.name === "MUXION" ? "Work with me" : "Shop merch"}<ArrowUpRight className="w-4 h-4" /></span></div>
                </div>
              </a>
            </motion.div>)}
          </div>
        </div>
      </section>
    </>
  );
}
