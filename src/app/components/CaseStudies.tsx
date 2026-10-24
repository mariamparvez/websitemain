import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import iceCreamImg from 'figma:asset/8b3157e759eca02cd2111025c32e6995424dbe84.png';

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
    <section id="case-studies" className="relative py-12 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Case Studies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border-2 border-gray-200 hover:border-[#3d38f5]">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={study.bgImage}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                  <div className="inline-flex items-center gap-2 text-[#3d38f5] font-semibold group-hover:gap-3 transition-all">
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
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2d28d5] transition-all shadow-lg"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
