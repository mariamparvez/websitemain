import { motion } from "motion/react";
import { Sparkles, ArrowRight, Palette, Paintbrush } from "lucide-react";
import { Link } from "react-router";
import mariamImg from "../../imports/me.jpg";
import colorSplash from "../../imports/1.jpg";

export function ArtCallout() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 border-t-2 border-gray-200">
      {/* Colorful Background Overlay */}
      <div className="absolute inset-0 opacity-90 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" />

      {/* Animated Color Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 opacity-40 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* User Face Image - LEFT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-shrink-0 lg:order-1"
          >
            <div className="relative">
              {/* Colorful Border Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-75 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img
                src={mariamImg}
                alt="Mariam Parvez - Artist"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-8 border-white"
              />
              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center border-4 border-white"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Palette className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-white"
                animate={{ rotate: [360, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Paintbrush className="w-8 h-8 text-white" />
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
              className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/40"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-bold">Art Portfolio</span>
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
              className="text-white text-lg leading-relaxed mb-6 max-w-2xl"
            >
              Check out my Art Pieces on my art gallery. I create{" "}
              <span className="font-bold text-yellow-200">Acrylic Painting</span>,{" "}
              <span className="font-bold text-cyan-200">Watercolor Painting</span>,{" "}
              <span className="font-bold text-pink-200">Russian Sculpture Art</span>,{" "}
              <span className="font-bold text-orange-200">Sketching</span>, and{" "}
              <span className="font-bold text-purple-200">Mandala Art</span>
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
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg hover:scale-105 transition-all"
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
