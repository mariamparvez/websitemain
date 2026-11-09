import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import artBg from "../../imports/art-bg.jpg";

export function ArtCallout() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10"
      style={{ position: 'relative' }}
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          backgroundImage: `url(${artBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e]/90 via-[#283593]/90 to-[#3949ab]/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-[#fdfdfd] leading-tight">
              I also paint, sculpt and sketch!
            </h2>

            <p className="text-[#fdfdfd]/90 text-base md:text-lg leading-relaxed max-w-2xl">
              Check out my Art Pieces on my art gallery. I create{" "}
              <span className="font-semibold text-[#fdfdfd]">Acrylic Painting</span>,{" "}
              <span className="font-semibold text-[#fdfdfd]">Watercolor Painting</span>,{" "}
              <span className="font-semibold text-[#fdfdfd]">Russian Sculpture Art</span>,{" "}
              <span className="font-semibold text-[#fdfdfd]">Sketching</span>, and{" "}
              <span className="font-semibold text-[#fdfdfd]">Mandala Art</span>
            </p>
          </motion.div>

          {/* CTA - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex-shrink-0"
          >
            <a
              href="https://instagram.com/themimpact"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[#fdfdfd] font-semibold hover:text-[#9a96ff] transition-colors"
            >
              <span>Ready for Art?</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
