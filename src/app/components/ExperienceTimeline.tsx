import { motion } from "motion/react";
import { VantaWaves } from "./VantaWaves";

type TimelineItem = {
  kind: "education" | "work";
  lane: "left" | "right";
  start: number;
  months: number;
  offset?: number;
  dateLabel: string;
  title: string;
  organisation: string;
};

// The canvas starts in May 2016. Four pixels equals one month: dates remain
// proportional without turning the timeline into a long scrolling wall.
const SCALE = 4;
const CANVAS_HEIGHT = 620;

const items: TimelineItem[] = [
  { kind: "education", lane: "left", start: 0, months: 36, dateLabel: "May 2016 - May 2019", title: "BSc Animation", organisation: "Vels University" },
  { kind: "work", lane: "right", start: 28, months: 6, dateLabel: "Sep 2018 - Mar 2019", title: "Graphic Designer Intern", organisation: "Deloitte Digital" },
  { kind: "work", lane: "right", start: 34, months: 18, offset: 48, dateLabel: "Mar 2019 - Sep 2020", title: "Graphic Designer", organisation: "Deloitte Digital · formerly 2adpro" },
  { kind: "education", lane: "left", start: 45, months: 27, dateLabel: "Feb 2020 - May 2022", title: "MBA in Technology Management", organisation: "Anna University · Centre for Distance Education" },
  { kind: "work", lane: "right", start: 52, months: 14, offset: 86, dateLabel: "Sep 2020 - Nov 2021", title: "Web Designer", organisation: "Netaxis IT Solutions" },
  { kind: "work", lane: "right", start: 66, months: 11, offset: 100, dateLabel: "Nov 2021 - Sep 2022", title: "UI/UX Designer & Developer", organisation: "YOCO Labs Private Limited" },
  { kind: "work", lane: "left", start: 76, months: 22, dateLabel: "Sep 2022 - Jul 2024", title: "Senior UI/UX Designer & Developer", organisation: "InSoft.com" },
  { kind: "work", lane: "left", start: 98, months: 6, dateLabel: "Jul 2024 - Jan 2025", title: "UI/UX Designer Coach & Trainer", organisation: "ACTE Technologies" },
  { kind: "work", lane: "left", start: 104, months: 3, offset: 92, dateLabel: "Jan 2025 - Mar 2025", title: "Primary Web & Graphic Designer", organisation: "Catalyst Media FZE · Freelance" },
  { kind: "work", lane: "right", start: 106, months: 20, dateLabel: "Mar 2025 - Present", title: "Lead UI/UX Designer, Developer & Product Designer", organisation: "Prodapt" },
];

const years = [
  [0, "2016"], [8, "2017"], [20, "2018"], [32, "2019"], [44, "2020"], [56, "2021"],
  [68, "2022"], [80, "2023"], [92, "2024"], [104, "2025"], [116, "2026"],
] as const;

function TimelineCard({ item }: { item: TimelineItem }) {
  const isEducation = item.kind === "education";
  const height = Math.max(item.months * SCALE, 78);
  const top = item.start * SCALE + (item.offset ?? 0);
  return (
    <motion.article
      className={`absolute overflow-hidden border p-2 shadow-[0_10px_22px_rgba(0,0,0,.18)] ${item.lane === "left" ? "left-0" : "right-0"} ${isEducation ? "border-[#4f786b]/65 bg-[#142b25]" : "border-[#4f6f9a]/65 bg-[#111d32]"}`}
      style={{ top, height, width: "calc(50% - 34px)", borderRadius: 8 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className={`truncate text-[8px] font-bold uppercase tracking-[0.08em] ${isEducation ? "text-[#9dcbbb]" : "text-[#9bb6dd]"}`}>{item.dateLabel}</p>
      <h3 className="mt-0.5 line-clamp-2 text-[11px] font-extrabold leading-tight text-[#fdfdfd] sm:text-sm">{item.title}</h3>
      <p className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-[#c2c9d7] sm:text-[10px]">{item.organisation}</p>
      <span className={`absolute inset-y-0 left-0 w-[3px] ${isEducation ? "bg-[#68a58f]" : "bg-[#6487b9]"}`} />
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/10 bg-[#0c0f17] pb-16 pt-12 sm:pb-20 sm:pt-16">
      <VantaWaves />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header className="mb-6 text-center sm:mb-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8293bd]">A shared timeline</p>
          <h2 className="text-3xl font-black tracking-tight text-[#fdfdfd] sm:text-5xl">My Experience Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#aeb6c8] sm:text-base">Education and work shown together, at their real dates.</p>
        </motion.header>
        <div className="relative mx-auto max-w-5xl" style={{ height: CANVAS_HEIGHT }}>
          <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#52698f]" />
          {years.map(([month, label]) => (
            <div key={label} className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#0c0f17] px-1 text-[9px] font-black text-[#c7d4ed] sm:text-[10px]" style={{ top: month * SCALE }}>
              {label}
            </div>
          ))}
          {items.map((item) => <TimelineCard key={`${item.title}-${item.start}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}
