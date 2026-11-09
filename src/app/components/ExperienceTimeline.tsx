import { motion } from "motion/react";

type TimelineItem = {
  kind: "education" | "work";
  lane: "left" | "right";
  start: number;
  months: number;
  dateLabel: string;
  title: string;
  organisation: string;
};

// Timeline zero is May 2016. Each grid row is one calendar month.
const education: TimelineItem[] = [
  { kind: "education", lane: "left", start: 0, months: 36, dateLabel: "May 2016 - May 2019", title: "BSc Animation", organisation: "Vels University" },
  { kind: "education", lane: "left", start: 45, months: 27, dateLabel: "Feb 2020 - May 2022", title: "MBA in Technology Management", organisation: "Anna University · Centre for Distance Education" },
];

const work: TimelineItem[] = [
  { kind: "work", lane: "right", start: 28, months: 6, dateLabel: "Sep 2018 - Mar 2019", title: "Graphic Designer Intern", organisation: "Deloitte Digital" },
  { kind: "work", lane: "right", start: 34, months: 18, dateLabel: "Mar 2019 - Sep 2020", title: "Graphic Designer", organisation: "Deloitte Digital · formerly 2adpro" },
  { kind: "work", lane: "right", start: 52, months: 14, dateLabel: "Sep 2020 - Nov 2021", title: "Web Designer", organisation: "Netaxis IT Solutions" },
  { kind: "work", lane: "right", start: 66, months: 11, dateLabel: "Nov 2021 - Sep 2022", title: "UI/UX Designer & Developer", organisation: "YOCO Labs Private Limited" },
  { kind: "work", lane: "left", start: 76, months: 22, dateLabel: "Sep 2022 - Jul 2024", title: "Senior UI/UX Designer & Developer", organisation: "InSoft.com" },
  { kind: "work", lane: "left", start: 98, months: 6, dateLabel: "Jul 2024 - Jan 2025", title: "UI/UX Designer Coach & Trainer", organisation: "ACTE Technologies" },
  { kind: "work", lane: "left", start: 104, months: 3, dateLabel: "Jan 2025 - Mar 2025", title: "Primary Web & Graphic Designer", organisation: "Catalyst Media FZE · Freelance" },
  { kind: "work", lane: "right", start: 106, months: 20, dateLabel: "Mar 2025 - Present", title: "Lead UI/UX Designer, Developer & Product Designer", organisation: "Prodapt" },
];

const years = [
  [0, "2016"], [8, "2017"], [20, "2018"], [32, "2019"], [44, "2020"], [56, "2021"],
  [68, "2022"], [80, "2023"], [92, "2024"], [104, "2025"], [116, "2026"],
] as const;

const GRID_MONTHS = 128;

function TimelineCard({ item }: { item: TimelineItem }) {
  const lane = item.lane === "left" ? "col-start-1" : "col-start-3";
  const palette = item.kind === "education"
    ? { card: "bg-[#142b25] border-[#4f786b]/65", date: "text-[#9dcbbb]", rail: "bg-[#68a58f]" }
    : { card: "bg-[#111d32] border-[#4f6f9a]/65", date: "text-[#9bb6dd]", rail: "bg-[#6487b9]" };
  const visualMonths = Math.max(item.months, 20);
  return (
    <motion.article
      className={`${lane} ${palette.card} relative z-10 overflow-hidden border p-2.5 shadow-[0_10px_22px_rgba(0,0,0,.18)] sm:p-3`}
      style={{ gridRow: `${item.start + 1} / span ${visualMonths}`, borderRadius: 8 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <p className={`text-[9px] font-bold uppercase tracking-[0.1em] ${palette.date} sm:text-[10px]`}>{item.dateLabel}</p>
      <h3 className="mt-1 text-xs font-extrabold leading-tight text-[#fdfdfd] sm:text-base">{item.title}</h3>
      <p className="mt-1 text-[10px] leading-snug text-[#c2c9d7] sm:text-xs">{item.organisation}</p>
      <span className={`absolute bottom-0 left-0 top-0 w-[3px] ${palette.rail}`} />
    </motion.article>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/10 bg-[#0c0f17] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header className="mb-8 text-center sm:mb-10" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8293bd]">A shared timeline</p>
          <h2 className="text-3xl font-black tracking-tight text-[#fdfdfd] sm:text-5xl">My Experience Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#aeb6c8] sm:text-base">Education and work shown together, at their real dates.</p>
        </motion.header>

        <div
          className="relative grid grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] gap-2 sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] sm:gap-4"
          style={{ gridTemplateRows: `repeat(${GRID_MONTHS}, 3px)` }}
        >
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-0 w-px -translate-x-1/2 bg-[#52698f]" />
          {years.map(([month, label]) => (
            <div key={label} className="col-start-2 z-10 -translate-y-1/2 justify-self-center bg-[#0c0f17] px-1 text-[9px] font-black text-[#c7d4ed] sm:text-[10px]" style={{ gridRow: month + 1 }}>
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
