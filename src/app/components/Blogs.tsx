import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Import blog images
import blog1Img from "figma:asset/0ba5d1f06fbee29f386abda5688335c6d343056d.png";
import blog2Img from "figma:asset/8295654486b1ab4e4e84e9b32063d37890ee3303.png";
import blog3Img from "figma:asset/5310a1d936833a9c8391005bd7219b7b7b79a6d7.png";

export function Blogs() {
  return (
    <section id="blogs" className="py-12 relative overflow-hidden bg-[#f8f9fa]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blogs & Articles</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thoughts on design, creativity, and the process
          </p>
        </motion.div>

        {/* Primary/Featured Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-br from-[#3d38f5] to-[#6b63f7] p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Why Color is Important in Graphic Design and Fashion Design
            </h1>
            <p className="text-white/90 text-lg mb-6">
              Explore how color shapes our emotions and decisions in both graphic design and fashion, and see how the right colors can bring life and meaning to your creations.
            </p>
            <a
              href="https://themariamparvez.medium.com/why-color-is-important-in-graphic-design-and-fashion-design-03096dfe57f9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#3d38f5] font-bold text-lg px-6 py-3 rounded-full hover:shadow-xl transition-all"
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
            className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#3d38f5] hover:shadow-lg transition-all group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-[#3d38f5]/10 text-[#3d38f5] text-sm font-semibold rounded-full mb-3 w-fit">
                  Rebranding
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#3d38f5] transition-colors">
                  The Ice Cream Project
                </h3>
                <p className="text-gray-500 text-sm mb-2">Sep 26</p>
                <p className="text-gray-600 mb-4 flex-1">
                  This blog is a gist of my behance Case Study on ice cream brand makeover.
                </p>
                <a
                  href="https://themariamparvez.medium.com/most-wanted-the-ice-cream-project-adb3c1431972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3d38f5] font-semibold hover:gap-3 transition-all"
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
            className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#3d38f5] hover:shadow-lg transition-all group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-[#3d38f5]/10 text-[#3d38f5] text-sm font-semibold rounded-full mb-3 w-fit">
                  UX Design
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 group-hover:text-[#3d38f5] transition-colors">
                  Simplicity is the Soul of Efficiency
                </h3>
                <p className="text-gray-500 text-sm mb-2">Oct 15</p>
                <p className="text-gray-600 mb-4 flex-1">
                  Exploring the power of minimalism in user experience design.
                </p>
                <a
                  href="https://medium.com/@themariamparvez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3d38f5] font-semibold hover:gap-3 transition-all"
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
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d28d5] transition-all shadow-lg"
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
