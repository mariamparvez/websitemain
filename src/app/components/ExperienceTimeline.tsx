import { motion } from "motion/react";
import { useEffect, useState } from "react";

type TimelineItem = {
  kind: "education" | "work";
  lane: "left" | "right";
  start: number;
  months: number;
  dateLabel: string;
  title: string;
  organisation: string;
  roles?: { dateLabel: string; title: string; organisation: string }[];
};

// The canvas starts in May 2016. Eight pixels equals one month, keeping every
// card's top edge anchored to its real start month and its height proportional.
const SCALE = 8;
const CANVAS_HEIGHT = 992;

const items: TimelineItem[] = [
  { kind: "education", lane: "left", start: 0, months: 36, dateLabel: "May 2016 - May 2019", title: "BSc Animation", organisation: "Vels University" },
  {
    kind: "work", lane: "right", start: 28, months: 24, dateLabel: "Sep 2018 - Sep 2020", title: "Deloitte Digital", organisation: "formerly 2adpro",
    roles: [
      { dateLabel: "Sep 2018 - Mar 2019", title: "Graphic Designer Intern", organisation: "Deloitte Digital" },
      { dateLabel: "Mar 2019 - Sep 2020", title: "Graphic Designer", organisation: "Deloitte Digital · formerly 2adpro" },
    ],
  },
  { kind: "education", lane: "left", start: 45, months: 27, dateLabel: "Feb 2020 - May 2022", title: "MBA in Technology Management", organisation: "Anna University · Centre for Distance Education" },
  { kind: "work", lane: "right", start: 52, months: 14, dateLabel: "Sep 2020 - Nov 2021", title: "Web Designer", organisation: "Netaxis IT Solutions" },
  { kind: "work", lane: "right", start: 66, months: 11, dateLabel: "Nov 2021 - Sep 2022", title: "UI/UX Designer & Developer", organisation: "YOCO Labs Private Limited" },
  { kind: "work", lane: "left", start: 76, months: 22, dateLabel: "Sep 2022 - Jul 2024", title: "Senior UI/UX Designer & Developer", organisation: "InSoft.com" },
  {
    kind: "work", lane: "left", start: 98, months: 9, dateLabel: "Jul 2024 - Mar 2025", title: "Freelance Engagements", organisation: "UI/UX, web & graphic design",
    roles: [
      { dateLabel: "Jul 2024 - Jan 2025", title: "UI/UX Designer Coach & Trainer", organisation: "ACTE Technologies" },
      { dateLabel: "Jan 2025 - Mar 2025", title: "Primary Web & Graphic Designer", organisation: "Catalyst Media FZE" },
    ],
  },
  { kind: "work", lane: "right", start: 106, months: 16, dateLabel: "Mar 2025 - Jun 2026", title: "Lead UI/UX Designer, Developer & Product Designer", organisation: "Prodapt" },
];

const years = [
  [0, "2016"], [8, "2017"], [20, "2018"], [32, "2019"], [44, "2020"], [56, "2021"],
  [68, "2022"], [80, "2023"], [92, "2024"], [104, "2025"], [116, "2026"],
] as const;

function TimelineCard({ item, compact = false }: { item: TimelineItem; compact?: boolean }) {
  const isEducation = item.kind === "education";
  const height = Math.max(item.months * SCALE, 64);
  const top = item.start * SCALE;
  const layoutStyle = compact
    ? { borderRadius: 8 }
    : { top, height, width: "calc(50% - 34px)", borderRadius: 8 };
  return (
    <motion.article
      className={`${compact ? "relative min-w-0 overflow-visible" : `absolute overflow-hidden ${item.lane === "left" ? "left-0" : "right-0"}`} border p-2 shadow-[0_10px_22px_rgba(0,0,0,.18)] ${isEducation ? "border-[#4f786b]/65 bg-[#142b25]" : "border-[#4f6f9a]/65 bg-[#111d32]"}`}
      style={layoutStyle}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className={`text-[10px] font-bold uppercase tracking-[0.08em] ${isEducation ? "text-[#9dcbbb]" : "text-[#9bb6dd]"}`}>{item.dateLabel}</p>
      <h3 className="mt-1 text-sm font-extrabold leading-tight text-[#fdfdfd]">{item.title}</h3>
      <p className="mt-1 leading-snug text-[#c2c9d7]">{item.organisation}</p>
      {item.roles?.map((role, index) => (
        <div key={role.dateLabel} className={`mt-2 ${index ? "border-t border-white/10 pt-2" : ""}`}>
          <span className="block text-[10px] font-bold uppercase tracking-[0.06em] text-[#9bb6dd]">{role.dateLabel}</span>
          <span className="block text-xs font-bold leading-snug text-[#fdfdfd]">{role.title}</span>
          <span className="block text-[10px] leading-snug text-[#c2c9d7]">{role.organisation}</span>
        </div>
      ))}
      <span className={`absolute inset-y-0 left-0 w-[3px] ${isEducation ? "bg-[#68a58f]" : "bg-[#6487b9]"}`} />
    </motion.article>
  );
}

export function ExperienceTimeline() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const compactRows: [TimelineItem, TimelineItem | null][] = [
    [items[0], items[1]], [items[2], items[3]], [items[5], items[4]],
    [items[6], items[7]],
  ];
  return (
    <section id="experience" className="relative overflow-hidden border-t border-white/10 bg-[#000104] pb-16 pt-12 sm:pb-20 sm:pt-16">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header className="mb-6 text-center sm:mb-8" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#8293bd]">A shared timeline</p>
          <h2 className="text-3xl font-black tracking-tight text-[#fdfdfd] sm:text-5xl">My Experience Journey</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#aeb6c8] sm:text-base">Education and work shown together, at their real dates.</p>
        </motion.header>
        {compact ? (
          <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-2">
            <div aria-hidden="true" className="absolute inset-y-1 left-1/2 w-px -translate-x-1/2 bg-[#52698f]" />
            {compactRows.map(([left, right]) => (
              <div key={`${left.title}-${right?.title ?? "empty"}`} className="col-span-2 grid grid-cols-2 gap-2">
                <TimelineCard item={left} compact />
                {right ? <TimelineCard item={right} compact /> : <div aria-hidden="true" />}
              </div>
            ))}
          </div>
        ) : (
          <div className="relative mx-auto max-w-5xl" style={{ height: CANVAS_HEIGHT }}>
            <div aria-hidden="true" className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#52698f]" />
            {years.map(([month, label]) => (
              <div key={label} className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-[#000104] px-1 text-[9px] font-black text-[#c7d4ed] sm:text-[10px]" style={{ top: month * SCALE }}>
                {label}
              </div>
            ))}
            {items.map((item) => <TimelineCard key={`${item.title}-${item.start}`} item={item} />)}
          </div>
        )}
      </div>
    </section>
  );
}
