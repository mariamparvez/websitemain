import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import artBg from "../../imports/1-2.jpg";

export function ArtCallout() {
  return (
    <section
      className="relative overflow-hidden py-10 border-t-2 border-gray-200"
      style={{
        backgroundImage: `url(${artBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e]/85 via-[#283593]/85 to-[#3949ab]/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
            >
              I also paint, sculpt and sketch!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-lg leading-relaxed mb-8 max-w-3xl"
            >
              Check out my Art Pieces on my art gallery. I create{" "}
              <span className="font-semibold text-white">Acrylic Painting</span>,{" "}
              <span className="font-semibold text-white">Watercolor Painting</span>,{" "}
              <span className="font-semibold text-white">Russian Sculpture Art</span>,{" "}
              <span className="font-semibold text-white">Sketching</span>, and{" "}
              <span className="font-semibold text-white">Mandala Art</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/art"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#3d38f5] rounded-full font-bold text-lg hover:scale-105 transition-all"
              >
                <span>Ready for Art?</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
