import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import bgImage from "../../imports/1.jpg";
import blogHeroImg from "../../imports/1-3.jpg";

// Import blog images
import blog1Img from "figma:asset/0ba5d1f06fbee29f386abda5688335c6d343056d.png";
import blog2Img from "figma:asset/8295654486b1ab4e4e84e9b32063d37890ee3303.png";
import blog3Img from "figma:asset/5310a1d936833a9c8391005bd7219b7b7b79a6d7.png";

export function Blogs() {
  return (
    <section
      id="blogs"
      className="py-10 relative overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-[#121212]/90" />
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fdfdfd] mb-3">Blogs & Articles</h2>
          <p className="text-[#b8b8b8] text-base max-w-2xl mx-auto">
            Thoughts on design, creativity, and the process
          </p>
        </motion.div>

        {/* Primary/Featured Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-8 p-8 md:p-12 bg-[#121212] border-2 border-[#fdfdfd]/15"
          style={{
            backgroundImage: `url(${blogHeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* #fdfdfd 50% overlay ONLY on mobile */}
          <div className="absolute inset-0 bg-[#121212]/50 md:bg-transparent" />

          {/* Content - VISIBLE on all screens */}
          <div className="max-w-2xl relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#fdfdfd] italic leading-tight">
              Why Color is Important in Graphic Design and Fashion Design
            </h1>
            <p className="text-[#d6d6d6] text-base md:text-lg mb-6 leading-relaxed">
              Explore how color shapes our emotions and decisions in both graphic design and fashion, and see how the right colors can bring life and meaning to your creations.
            </p>
            <a
              href="https://themariamparvez.medium.com/why-color-is-important-in-graphic-design-and-fashion-design-03096dfe57f9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#3d38f5] text-[#fdfdfd] font-bold text-base md:text-lg px-6 py-3 rounded-full hover:scale-105 transition-all"
            >
              Continue reading
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Secondary Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog 2 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-2xl overflow-hidden hover:border-[#3d38f5] hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-[#3d38f5]/10 text-[#9a96ff] text-sm font-semibold rounded-full mb-3 w-fit">
                  Rebranding
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#fdfdfd] group-hover:text-[#9a96ff] transition-colors">
                  The Ice Cream Project
                </h3>
                <p className="text-[#a3a3a3] text-sm mb-2">Sep 26</p>
                <p className="text-[#b8b8b8] mb-4 flex-1">
                  This blog is a gist of my behance Case Study on ice cream brand makeover.
                </p>
                <a
                  href="https://themariamparvez.medium.com/most-wanted-the-ice-cream-project-adb3c1431972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#9a96ff] font-semibold hover:gap-3 transition-all"
                >
                  Continue reading
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="md:w-48 h-48 md:h-auto">
                <img
                  src={blog2Img}
                  alt="Ice Cream Project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.article>

          {/* Blog 3 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-2xl overflow-hidden hover:border-[#3d38f5] hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-[#3d38f5]/10 text-[#9a96ff] text-sm font-semibold rounded-full mb-3 w-fit">
                  UX Design
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#fdfdfd] group-hover:text-[#9a96ff] transition-colors">
                  Simplicity is the Soul of Efficiency
                </h3>
                <p className="text-[#a3a3a3] text-sm mb-2">Oct 15</p>
                <p className="text-[#b8b8b8] mb-4 flex-1">
                  Exploring the power of minimalism in user experience design.
                </p>
                <a
                  href="https://medium.com/@themariamparvez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#9a96ff] font-semibold hover:gap-3 transition-all"
                >
                  Continue reading
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="md:w-48 h-48 md:h-auto">
                <img
                  src={blog3Img}
                  alt="Simplicity in UX"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@themariamparvez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-[#fdfdfd] px-8 py-4 rounded-full font-bold hover:bg-[#2d28d5] hover:scale-105 transition-all"
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
