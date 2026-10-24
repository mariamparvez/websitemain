import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Sparkles } from 'lucide-react';
import iceCreamImg from 'figma:asset/8b3157e759eca02cd2111025c32e6995424dbe84.png';

const caseStudies = [
  {
    title: "The Ice Cream Shop",
    description: "Follow Along Course showcasing how to build of a UI UX Case Study for Portfolio",
    bgImage: iceCreamImg,
    link: "https://www.behance.net/gallery/208803827/CREME-CLOUD-A-fictional-ICE-CREAM-BRAND-MAKEOVER",
    gradient: "from-pink-500/20 to-orange-500/20"
  },
  {
    title: "MALEO: The Updated Case Study",
    description: "Importance of a website for small businesses with social media ice breakers' platforms integrated",
    bgImage: "https://images.unsplash.com/photo-1551810292-5b30a8a61f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbGFwdG9wJTIwbW9ja3VwJTIwc29jaWFsJTIwbWVkaWF8ZW58MXx8fHwxNzc1MzQyMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.behance.net/gallery/152910207/UX-Case-Study-on-MALEO-Updated",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "MALEO: The Case Study",
    description: "Need for Websites for Small Businesses",
    bgImage: "https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBsYXB0b3AlMjBzY3JlZW4lMjBtb2Rlcm58ZW58MXx8fHwxNzc1MzQyMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.behance.net/gallery/123100525/MALEO",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect - tracks this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.2, 0.6, 0.8, 0.6, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <section ref={sectionRef} id="case-studies" className="relative py-32 overflow-hidden bg-gradient-to-br from-[#1a2951] to-[#0f1b3d]">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none relative">{/* Added relative positioning */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(8, 145, 178, 0.1)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-300 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              My Behance Case Studies
            </span>
          </h2>
          
          <p className="text-xl text-blue-200/70 max-w-3xl mx-auto leading-relaxed">
            Real-world UX case studies showcasing user-centered design solutions
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.a
              key={index}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Container */}
              <div className="relative h-[350px] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/20 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                
                {/* Background Image */}
                <div className="absolute inset-0">
                  <motion.div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.bgImage})` }}
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/70 to-transparent opacity-80" />
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 leading-tight"
                    animate={{
                      y: hoveredIndex === index ? -10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {study.title}
                  </motion.h3>

                  {/* Description - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-blue-100/90 mb-3 leading-relaxed">
                      {study.description}
                    </p>
                    
                    {/* CTA Button */}
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 text-sm"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>

                  {/* Arrow Indicator - Shows by default, hides on hover */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 0 : 1,
                      x: hoveredIndex === index ? 20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-5 right-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{
                    x: hoveredIndex === index ? '100%' : '-100%',
                  }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl -z-10"
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://www.behance.net/themariamparvez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects on Behance</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}