import { motion, useMotionValue, useTransform, PanInfo } from "motion/react";
import { useState } from "react";
import { ParticlesBackground } from "./ParticlesBackground";
import { SwipeGuideAnimation } from "./SwipeGuideAnimation";
import { BigSwipeIndicator } from "./BigSwipeIndicator";

const experiences = [
  {
    role: "Lead UI UX Designer and Developer",
    company: "Prodapt",
    location: "Chennai, India",
    duration: "Mar 2025 – Present",
    achievements: [
      "Led enterprise-level UX initiatives for BT SRIMS stakeholders, collaborating with business analysts to deliver strategic digital experiences",
      "Mentored junior designers and improved cross-functional collaboration to optimize usability and product workflows",
      "Contributed to frontend-aware UX execution, ensuring seamless design-to-development handoffs for responsive digital products"
    ]
  },
  {
    role: "Primary Web & Graphic Designer (Freelance)",
    company: "Catalyst Media FZE",
    location: "Sharjah, UAE",
    duration: "Jan 2025 – Mar 2025",
    achievements: [
      "Designed and developed the company website, strengthening digital brand visibility and UI consistency",
      "Managed visual direction and web presence independently as freelance creative contributor for international client"
    ]
  },
  {
    role: "UI/UX Designer Coach and Trainer",
    company: "ACTE Technologies",
    location: "Chennai, India",
    duration: "Jul 2024 – Jan 2025",
    achievements: [
      "Mentored aspiring designers and developers through structured UI/UX coaching and career-focused educational content",
      "Conducted frontend workflow training, guiding students through practical, real-world design challenges"
    ]
  },
  {
    role: "Senior UI UX Designer and Developer",
    company: "InSoft.com",
    location: "Chennai, India",
    duration: "Sep 2022 – Jul 2024",
    achievements: [
      "Led website redesign initiatives for US and Belgium projects, delivering responsive UX workflows and frontend-aware design execution",
      "Mentored junior designers and developers, improving team collaboration and design-to-code workflows"
    ]
  },
  {
    role: "UI UX Designer and Developer",
    company: "YOCO Labs Private Limited",
    location: "Chennai, India",
    duration: "Nov 2021 – Sep 2022",
    achievements: [
      "Designed CCTV software interfaces focused on usability optimization, workflow efficiency, and product adoption",
      "Contributed to interaction-focused product experiences that enhanced user engagement and operational clarity"
    ]
  },
  {
    role: "Web Designer",
    company: "Netaxis IT Solutions",
    location: "Chennai, India",
    duration: "Sep 2020 – Nov 2021",
    achievements: [
      "Developed responsive web experiences using HTML, CSS, and JavaScript",
      "Built foundational UX and frontend implementation skills through practical project execution"
    ]
  },
  {
    role: "Graphic Designer",
    company: "Deloitte Digital (formerly Ad2Pro Media Solutions)",
    location: "Chennai, India",
    duration: "Sep 2018 – Sep 2020",
    achievements: [
      "Designed creative assets for international clients including Macy's and News Corp",
      "Strengthened branding, visual hierarchy, and production-ready design execution across print and digital campaigns"
    ]
  },
  {
    role: "Graphic Designer Intern",
    company: "Deloitte Digital",
    location: "Chennai, India",
    duration: "Mar 2018 – Sep 2018",
    achievements: [
      "Selected among 400 applicants to contribute to enterprise design production workflows",
      "Assisted creative teams while learning branding standards and large-scale design execution"
    ]
  }
];

export function ExperienceTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 50 || velocity > 200) {
      // Swipe right - previous
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else if (offset < -50 || velocity < -200) {
      // Swipe left - next
      setCurrentIndex((prev) => Math.min(experiences.length - 1, prev + 1));
    }
  };

  return (
    <section id="experience" className="relative py-10 overflow-hidden bg-[#1b1b1b] border-t-2 border-[#fdfdfd]/15">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#fdfdfd] mb-3">
            My Experience Journey
          </h2>
          <p className="text-[#b8b8b8] text-base max-w-2xl mx-auto">
            Swipe to explore my professional timeline
          </p>
        </motion.div>

        {/* Card Stack Container */}
        <div className="relative h-[400px] md:h-[350px]">
          {experiences.map((exp, index) => {
            const isActive = index === currentIndex;
            const offset = index - currentIndex;

            return (
              <motion.div
                key={index}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isActive ? handleDragEnd : undefined}
                style={{ x: isActive ? x : 0 }}
                animate={{
                  scale: isActive ? 1 : 0.95 - Math.abs(offset) * 0.05,
                  opacity: Math.max(0, 1 - Math.abs(offset) * 0.3),
                  y: Math.abs(offset) * 20,
                  zIndex: experiences.length - Math.abs(offset)
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute inset-0 bg-[#121212] rounded-2xl border-2 border-[#fdfdfd]/15 p-6 md:p-8 cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-[#fdfdfd] mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-sm text-[#b8b8b8]">
                      <span className="font-semibold text-[#9a96ff]">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-[#d6d6d6]">
                          <span className="text-[#9a96ff] mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="mt-4 pt-4 border-t border-[#fdfdfd]/15 flex justify-between items-center">
                    <span className="text-sm text-[#a3a3a3]">
                      {currentIndex + 1} / {experiences.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                        disabled={currentIndex === 0}
                        className="px-4 py-2 bg-[#232323] text-[#d6d6d6] rounded-full text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2e2e2e] transition-all"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentIndex((prev) => Math.min(experiences.length - 1, prev + 1))}
                        disabled={currentIndex === experiences.length - 1}
                        className="px-4 py-2 bg-[#3d38f5] text-[#fdfdfd] rounded-full text-sm font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2d28d5] transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <SwipeGuideAnimation />
          <BigSwipeIndicator />
        </div>

        {/* Dots Indicator */}
        <div className="relative z-20 flex justify-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to experience ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-[#3d38f5] w-8" : "bg-[#2e2e2e]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
