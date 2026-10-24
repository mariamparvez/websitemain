import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function ArtCallout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3d38f5] to-[#2d28d5] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Art Portfolio</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight"
              >
                I also paint, sculpt and sketch!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/90 text-lg leading-relaxed mb-6 max-w-2xl"
              >
                Check out my Art Pieces on my art gallery. I create{" "}
                <span className="font-semibold text-white">Acrylic Painting</span>,{" "}
                <span className="font-semibold text-white">Watercolor Painting</span>,{" "}
                <span className="font-semibold text-white">Russian Sculpture Art</span>,{" "}
                <span className="font-semibold text-white">Sketching</span>, and{" "}
                <span className="font-semibold text-white">Mandala Art</span>
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/art"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-[#3d38f5] rounded-full font-bold text-lg hover:shadow-2xl transition-all"
              >
                <span>View My Art</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
