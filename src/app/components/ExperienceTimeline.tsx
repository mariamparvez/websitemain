import { motion } from "motion/react";

type TimelineItem = {
  years: string;
  title: string;
  organisation: string;
  location: string;
  kind: "education" | "work";
  details: string;
};

const timeline: TimelineItem[] = [
  { years: "2016–2019", title: "BSc Animation & Multimedia", organisation: "Vels University", location: "Chennai, India", kind: "education", details: "Built a foundation in visual storytelling, animation, multimedia production, and creative technology." },
  { years: "2018–2020", title: "Graphic Designer", organisation: "Deloitte Digital (formerly Ad2Pro)", location: "Chennai, India", kind: "work", details: "Created production-ready creative assets for international brands including Macy’s and News Corp." },
  { years: "2020–2022", title: "MBA in Technology Management", organisation: "Anna University", location: "Chennai, India", kind: "education", details: "Developed a strategic perspective on technology, operations, and digital business management." },
  { years: "2020–2021", title: "Web Designer", organisation: "Netaxis IT Solutions", location: "Chennai, India", kind: "work", details: "Developed responsive web experiences and strengthened practical UX and frontend implementation skills." },
  { years: "2021–2022", title: "UI/UX Designer & Developer", organisation: "YOCO Labs Private Limited", location: "Chennai, India", kind: "work", details: "Designed workflow-focused CCTV software interfaces that improved usability and product adoption." },
  { years: "2022–2024", title: "Senior UI/UX Designer & Developer", organisation: "InSoft.com", location: "Chennai, India", kind: "work", details: "Led responsive redesign work across US and Belgium projects while mentoring designers and developers." },
  { years: "2024–2025", title: "UI/UX Designer Coach & Trainer", organisation: "ACTE Technologies", location: "Chennai, India", kind: "work", details: "Taught hands-on UI/UX and frontend workflows through career-focused, real-world learning." },
  { years: "2025", title: "Primary Web & Graphic Designer", organisation: "Catalyst Media FZE", location: "Sharjah, UAE", kind: "work", details: "Owned web design and visual direction as an independent creative contributor for an international client." },
  { years: "2025–now", title: "Lead UI/UX Designer & Developer", organisation: "Prodapt", location: "Chennai, India", kind: "work", details: "Leading enterprise UX initiatives and design-to-development collaboration for strategic digital products." },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/10 bg-[#0c0f17] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header className="mb-12 text-center sm:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8090bd]">Career & education</p>
          <h2 className="text-3xl font-black tracking-tight text-[#fdfdfd] sm:text-5xl">My Experience Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#abb1c2] sm:text-base">A visual timeline of the work, study, and craft that shape how I design.</p>
        </motion.header>

        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#20335f] via-[#344b80] to-[#152344]" />
          <ol className="relative space-y-8 sm:space-y-12">
            {timeline.map((item, index) => {
              const left = index % 2 === 0;
              const tint = item.kind === "education" ? "bg-[#111b32]" : "bg-[#101522]";
              return (
                <motion.li key={`${item.years}-${item.title}`} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: Math.min(index * 0.035, 0.2) }}>
                  <article className={`${left ? "col-start-1" : "col-start-3"} ${tint} relative min-w-0 border border-[#52658e]/45 p-4 shadow-[0_16px_32px_rgba(1,5,15,.18)] sm:p-5`} style={{ borderRadius: 8 }}>
                    <span className="mb-3 inline-flex border border-[#7184af]/45 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#aebce0]" style={{ borderRadius: 4 }}>{item.kind === "education" ? "Education" : "Experience"}</span>
                    <h3 className="text-base font-extrabold leading-tight text-[#fdfdfd] sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-[#8fa1d4]">{item.organisation}</p>
                    <p className="mt-1 text-xs text-[#9ea6b9]">{item.location}</p>
                    <p className="mt-3 hidden text-sm leading-6 text-[#ccd0da] sm:block">{item.details}</p>
                  </article>
                  <div className="col-start-2 z-10 flex h-14 w-14 shrink-0 items-center justify-center border-4 border-[#0c0f17] bg-[#253a68] text-center text-[11px] font-black leading-3 text-[#fdfdfd] shadow-[0_0_0_1px_#6275a0] sm:h-16 sm:w-16 sm:text-xs" style={{ borderRadius: 9999 }}>{item.years}</div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
