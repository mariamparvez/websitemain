import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import blogHeroImg from "../../imports/1-3.jpg";

import blog2Img from "figma:asset/8295654486b1ab4e4e84e9b32063d37890ee3303.png";
import blog3Img from "figma:asset/5310a1d936833a9c8391005bd7219b7b7b79a6d7.png";

export function Blogs() {
  return (
    <section id="blogs" className="py-10 relative overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15">
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
          className="relative overflow-hidden mb-8 p-5 sm:p-8 md:p-10 bg-[#121212] border border-[#fdfdfd]/15"
          style={{ borderRadius: 8,
            
            backgroundImage: `url(${blogHeroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Soft light veil on mobile only, so dark text stays legible over the full image */}
          <div className="absolute inset-0 bg-[#fdfdfd]/55 md:bg-transparent" />

          {/* Content - VISIBLE on all screens */}
          <div className="max-w-2xl relative z-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#121212] italic leading-tight">
              Why Color is Important in Graphic Design and Fashion Design
            </h1>
            <p className="text-[#121212] font-medium text-base md:text-lg mb-6 leading-relaxed">
              Explore how color shapes our emotions and decisions in both graphic design and fashion, and see how the right colors can bring life and meaning to your creations.
            </p>
            <a
              href="https://themariamparvez.medium.com/why-color-is-important-in-graphic-design-and-fashion-design-03096dfe57f9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#3d38f5] text-[#fdfdfd] font-bold text-sm md:text-base px-4 py-2 hover:scale-[1.03] transition-all"
              style={{ borderRadius: 4 }}
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
          className="bg-[#121212] border border-[#fdfdfd]/15 overflow-hidden hover:border-[#3d38f5] hover:-translate-y-1 transition-all duration-300 group"
          style={{ borderRadius: 8 }}
          >
            <div className="flex h-full flex-col md:flex-row">
              <div className="h-40 shrink-0 md:h-auto md:w-48 md:bg-[#0b0d12] md:p-2 lg:w-52">
                <img
                  src={blog2Img}
                  alt="Ice Cream Project"
                  className="h-full w-full object-cover md:object-contain"
                />
              </div>
              <div className="p-5 flex flex-1 flex-col sm:p-6">
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
            </div>
          </motion.article>

          {/* Blog 3 */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#121212] border border-[#fdfdfd]/15 overflow-hidden hover:border-[#3d38f5] hover:-translate-y-1 transition-all duration-300 group"
          style={{ borderRadius: 8 }}
          >
            <div className="flex h-full flex-col md:flex-row">
              <div className="h-40 shrink-0 md:h-auto md:w-48 md:bg-[#0b0d12] md:p-2 lg:w-52">
                <img
                  src={blog3Img}
                  alt="Simplicity in UX"
                  className="h-full w-full object-cover md:object-contain"
                />
              </div>
              <div className="p-5 flex flex-1 flex-col sm:p-6">
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
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-[#fdfdfd] px-5 py-2.5 font-bold hover:bg-[#2d28d5] hover:scale-[1.03] transition-all"
            style={{ borderRadius: 4 }}
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
