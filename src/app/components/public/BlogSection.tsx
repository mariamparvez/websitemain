import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import { Calendar, ArrowRight } from 'lucide-react';

export function BlogSection() {
  const { blogs } = useCMS();
  const featured = blogs.find(b => b.featured);
  const secondary = blogs.filter(b => !b.featured);

  return (
    <section id="blog" className="py-24 px-6 bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Insights</span>
          <h2 className="mt-4 text-gray-900">Blog & Articles</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Thoughts on design, development, and creativity
          </p>
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-white rounded-3xl overflow-hidden shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{featured.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{featured.excerpt}</p>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 self-start">
                  {featured.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondary.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2">
                  {blog.cta}
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
