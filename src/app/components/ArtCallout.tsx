import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import bgImage from "figma:asset/aa43f793764a7490f8c87793750a0fd36b5286f5.png";

export function ArtCallout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#060e22] to-[#08132c]">
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative backdrop-blur-sm border-y border-cyan-500/30 p-6 lg:p-12 overflow-hidden"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
          
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-cyan-400/50"
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Art Portfolio</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-white text-left leading-tight"
                style={{ fontWeight: 900 }}
              >
                I also paint, sculpt and sketch!
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white text-lg leading-relaxed mb-6 text-left"
              >
                Check out my Art Pieces on my e-commerce Website. I create{" "}
                <span className="text-cyan-300 font-semibold">Acrylic Painting</span>,{" "}
                <span className="text-cyan-300 font-semibold">Watercolor Painting</span>,{" "}
                <span className="text-cyan-300 font-semibold">Russian Sculpture Art</span>,{" "}
                <span className="text-cyan-300 font-semibold">Sketching</span>, and{" "}
                <span className="text-cyan-300 font-semibold">Mandala Art</span>
              </motion.p>
            </div>

            <motion.a
              href="themimpact/index.html"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-900 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-white/30 transition-all border-2 border-white"
            >
              <span>Shop My Art</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}