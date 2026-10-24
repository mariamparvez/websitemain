import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  const { caseStudies } = useCMS();
  const featured = caseStudies.find(cs => cs.featured);
  const secondary = caseStudies.filter(cs => !cs.featured);

  return (
    <section id="case-studies" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Portfolio</span>
          <h2 className="mt-4 text-gray-900">Case Studies</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore my recent work and the impact created for clients
          </p>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-orange-500">
                  Featured
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="text-sm text-orange-500 uppercase tracking-wider">{featured.category}</span>
                <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-4">{featured.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{featured.summary}</p>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 self-start">
                  {featured.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondary.map((caseStudy, idx) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={caseStudy.thumbnail}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-orange-500 uppercase tracking-wider">{caseStudy.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{caseStudy.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{caseStudy.summary}</p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2">
                  {caseStudy.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
