import { motion } from "motion/react";
import { Sparkles, ArrowRight, Palette, Paintbrush } from "lucide-react";
import { Link } from "react-router";
import mariamImg from "../../imports/me.jpg";
import colorSplash from "../../imports/1-1.jpg";

export function ArtCallout() {
  return (
    <section
      className="relative overflow-hidden py-10 border-t-2 border-gray-200"
      style={{
        backgroundImage: `url(${colorSplash})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-pink-800/50 to-orange-700/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* User Face Image - LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 lg:order-1"
          >
            <div className="relative">
              {/* Subtle Glow Ring */}
              <motion.div
                className="absolute -inset-3 rounded-full bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-orange-400/40 blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src={mariamImg}
                alt="Mariam Parvez - Artist"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-white/80"
              />
              {/* Floating Icons - Subtle */}
              <motion.div
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center border-3 border-white/90"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Palette className="w-6 h-6 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center border-3 border-white/90"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Paintbrush className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content - RIGHT */}
          <div className="flex-1 text-left lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/30 backdrop-blur-md rounded-full border-2 border-white/50"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Art Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white leading-tight drop-shadow-lg"
            >
              I also paint, sculpt and sketch!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white text-lg leading-relaxed mb-6 max-w-2xl drop-shadow-md"
            >
              Check out my Art Pieces on my art gallery. I create{" "}
              <span className="font-bold text-white/95">Acrylic Painting</span>,{" "}
              <span className="font-bold text-white/95">Watercolor Painting</span>,{" "}
              <span className="font-bold text-white/95">Russian Sculpture Art</span>,{" "}
              <span className="font-bold text-white/95">Sketching</span>, and{" "}
              <span className="font-bold text-white/95">Mandala Art</span>
            </motion.p>

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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/95 text-purple-700 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
              >
                <span>View My Art</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
