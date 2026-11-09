import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import iceCreamImg from 'figma:asset/8b3157e759eca02cd2111025c32e6995424dbe84.png';
import { ParticlesBackground } from './ParticlesBackground';

const caseStudies = [
  {
    title: "The Ice Cream Shop",
    description: "Follow Along Course showcasing how to build a UI UX Case Study for Portfolio",
    bgImage: iceCreamImg,
    link: "https://www.behance.net/gallery/208803827/CREME-CLOUD-A-fictional-ICE-CREAM-BRAND-MAKEOVER"
  },
  {
    title: "MALEO: Updated Case Study",
    description: "Website importance for small businesses with social media integration",
    bgImage: "https://images.unsplash.com/photo-1551810292-5b30a8a61f48?w=800",
    link: "https://www.behance.net/gallery/152910207/UX-Case-Study-on-MALEO-Updated"
  },
  {
    title: "MALEO: The Case Study",
    description: "Need for Websites for Small Businesses",
    bgImage: "https://images.unsplash.com/photo-1726056652663-8f1e42b2fc95?w=800",
    link: "https://www.behance.net/gallery/123100525/MALEO"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-10 overflow-hidden bg-[#1b1b1b] border-t-2 border-[#fdfdfd]/15">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#fdfdfd]">
            Case Studies
          </h2>
          <p className="text-[#b8b8b8] text-base max-w-2xl mx-auto">
            Real-world UX case studies showcasing user-centered design solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.a
              key={index}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex h-full flex-col bg-[#121212] rounded-2xl overflow-hidden transition-all duration-300 border-2 border-[#fdfdfd]/15 hover:border-[#3d38f5] hover:scale-105">
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <img
                    src={study.bgImage}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-[#fdfdfd] mb-2">{study.title}</h3>
                  <p className="text-[#b8b8b8] text-sm mb-4">{study.description}</p>
                  <div className="mt-auto inline-flex items-center gap-2 text-[#9a96ff] font-semibold group-hover:gap-3 transition-all">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.behance.net/themariamparvez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-[#fdfdfd] px-8 py-4 rounded-full font-bold hover:bg-[#2d28d5] hover:scale-105 transition-all"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
