import { motion } from "motion/react";

type TimelineItem = {
  kind: "education" | "work";
  start: number;
  months: number;
  dateLabel: string;
  title: string;
  organisation: string;
};

// Timeline zero is May 2016. Each grid row is one calendar month.
const education: TimelineItem[] = [
  { kind: "education", start: 0, months: 36, dateLabel: "May 2016 - May 2019", title: "BSc Animation", organisation: "Vels University" },
  { kind: "education", start: 45, months: 27, dateLabel: "Feb 2020 - May 2022", title: "MBA in Technology Management", organisation: "Anna University · Centre for Distance Education" },
];

const work: TimelineItem[] = [
  { kind: "work", start: 28, months: 6, dateLabel: "Sep 2018 - Mar 2019", title: "Graphic Designer Intern", organisation: "Deloitte Digital" },
  { kind: "work", start: 34, months: 18, dateLabel: "Mar 2019 - Sep 2020", title: "Graphic Designer", organisation: "Deloitte Digital · formerly 2adpro" },
  { kind: "work", start: 52, months: 14, dateLabel: "Sep 2020 - Nov 2021", title: "Web Designer", organisation: "Netaxis IT Solutions" },
  { kind: "work", start: 66, months: 11, dateLabel: "Nov 2021 - Sep 2022", title: "UI/UX Designer & Developer", organisation: "YOCO Labs Private Limited" },
  { kind: "work", start: 76, months: 22, dateLabel: "Sep 2022 - Jul 2024", title: "Senior UI/UX Designer & Developer", organisation: "InSoft.com" },
  { kind: "work", start: 98, months: 7, dateLabel: "Jul 2024 - Jan 2025", title: "UI/UX Designer Coach & Trainer", organisation: "ACTE Technologies" },
  { kind: "work", start: 104, months: 3, dateLabel: "Jan 2025 - Mar 2025", title: "Primary Web & Graphic Designer", organisation: "Catalyst Media FZE · Freelance" },
  { kind: "work", start: 106, months: 16, dateLabel: "Mar 2025 - Jun 2026", title: "Lead UI/UX Designer & Developer", organisation: "Prodapt" },
];

const years = [
  [0, "2016"], [8, "2017"], [20, "2018"], [32, "2019"], [44, "2020"], [56, "2021"],
  [68, "2022"], [80, "2023"], [92, "2024"], [104, "2025"], [116, "2026"],
] as const;

const GRID_MONTHS = 122;

function TimelineCard({ item }: { item: TimelineItem }) {
  const lane = item.kind === "education" ? "col-start-1" : "col-start-3";
  const bg = item.kind === "education" ? "bg-[#121d35]" : "bg-[#111725]";
  const visualMonths = Math.max(item.months, 6);
  return (
    <motion.article
      className={`${lane} ${bg} relative z-10 overflow-hidden border border-[#60749d]/45 p-3 shadow-[0_12px_28px_rgba(0,0,0,.22)] sm:p-4`}
      style={{ gridRow: `${item.start + 1} / span ${visualMonths}`, borderRadius: 8 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8fa1cf] sm:text-xs">{item.dateLabel}</p>
      <h3 className="mt-2 text-sm font-extrabold leading-tight text-[#fdfdfd] sm:text-lg">{item.title}</h3>
      <p className="mt-1 text-xs leading-snug text-[#bdc5d8] sm:text-sm">{item.organisation}</p>
      <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#4a5f91]" />
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/10 bg-[#0c0f17] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header className="mb-10 text-center sm:mb-14" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8293bd]">Career & education</p>
          <h2 className="text-3xl font-black tracking-tight text-[#fdfdfd] sm:text-5xl">My Experience Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#aeb6c8] sm:text-base">One real timeline: studies on the left, work on the right.</p>
        </motion.header>

        <div className="mb-4 grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-3 text-[10px] font-bold uppercase tracking-[0.14em] sm:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] sm:gap-6 sm:text-xs">
          <span className="text-right text-[#9eafda]">Education</span>
          <span />
          <span className="text-[#9eafda]">Experience</span>
        </div>

        <div
          className="relative grid grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] gap-3 sm:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] sm:gap-6"
          style={{ gridTemplateRows: `repeat(${GRID_MONTHS}, 10px)` }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 w-[2px] -translate-x-1/2 bg-[#516891]" />
          {years.map(([month, label]) => (
            <div key={label} className="col-start-2 z-10 -translate-y-1/2 justify-self-center border border-[#66799f] bg-[#0c0f17] px-1.5 py-1 text-[10px] font-black text-[#dce5ff] sm:px-2 sm:text-xs" style={{ gridRow: month + 1, borderRadius: 4 }}>
              {label}
            </div>
          ))}
          {education.map((item) => <TimelineCard key={`${item.title}-${item.start}`} item={item} />)}
          {work.map((item) => <TimelineCard key={`${item.title}-${item.start}`} item={item} />)}
        </div>
      </div>
    </section>
  );
}
