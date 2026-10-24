import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Import blog images
import blog1Img from "figma:asset/0ba5d1f06fbee29f386abda5688335c6d343056d.png";
import blog2Img from "figma:asset/8295654486b1ab4e4e84e9b32063d37890ee3303.png";
import blog3Img from "figma:asset/5310a1d936833a9c8391005bd7219b7b7b79a6d7.png";

export function Blogs() {
  return (
    <section id="blogs" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#060e22] to-[#08132c]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary/Featured Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-8 h-auto md:h-[500px]"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blog1Img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 via-blue-800/60 via-blue-700/40 to-blue-950/20" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center px-8 md:px-12 lg:px-16 py-12 md:py-0">
            <div className="max-w-2xl">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 italic"
              >
                Why Color is Important in Graphic Design and Fashion Design
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg mb-6"
              >
                Explore how color shapes our emotions and decisions in both graphic design and fashion, and see how the right colors can bring life and meaning to your creations.
              </motion.p>
              <motion.a
                href="https://themariamparvez.medium.com/why-color-is-important-in-graphic-design-and-fashion-design-03096dfe57f9"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-white font-bold text-lg hover:text-blue-400 transition-colors"
              >
                Continue reading
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
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
            className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full mb-3 w-fit">
                  Rebranding
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  🛑‼ Most Wanted ‼🛑: The Ice Cream Project
                </h3>
                <p className="text-gray-500 text-sm mb-2">Sep 26</p>
                <p className="text-gray-400 mb-4 flex-1">
                  This blog is a gist of my behance Case Study.
                </p>
                <a
                  href="https://themariamparvez.medium.com/most-wanted-the-ice-cream-project-adb3c1431972"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:translate-x-2 transition-transform"
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
            className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all group"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm font-semibold rounded-full mb-3 w-fit">
                  Design
                </span>
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  My journey as a UI UX Designer
                </h3>
                <p className="text-gray-500 text-sm mb-2">Sep 16</p>
                <p className="text-gray-400 mb-4 flex-1">
                  Trust your instincts and pivot toward your true calling.
                </p>
                <a
                  href="https://themariamparvez.medium.com/my-journey-as-a-ui-ux-designer-ef6a1b9c2728"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors group-hover:translate-x-2 transition-transform"
                >
                  Continue reading
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              <div className="md:w-48 h-48 md:h-auto">
                <img
                  src={blog3Img}
                  alt="UI UX Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}