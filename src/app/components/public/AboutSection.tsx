import { Download, Play } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">
              <span className="block text-sm text-orange-500 mb-2 uppercase tracking-wider">About Me</span>
              <span className="block text-gray-900">Creating Digital Experiences That Matter</span>
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With over 5 years of experience in UI/UX design and front-end development,
                I've had the privilege of working with diverse clients across industries,
                from innovative startups to established enterprises.
              </p>

              <p>
                My approach combines user-centered design thinking with technical expertise,
                ensuring that every solution is not only beautiful but also functional,
                accessible, and scalable.
              </p>

              <p>
                I believe in design that tells a story, interfaces that feel natural,
                and experiences that leave lasting impressions. My work is driven by
                curiosity, empathy, and a relentless pursuit of excellence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105">
                <Download className="w-5 h-5" />
                Download Resume
              </button>

              <a
                href="https://www.youtube.com/watch?v=cs2ySXNG4aU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all border-2 border-gray-200 hover:border-orange-300"
              >
                <Play className="w-5 h-5" />
                Watch About Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Philosophy</h3>

              <div className="space-y-4">
                {[
                  {
                    title: 'User-Centered',
                    description: 'Every design decision starts with understanding user needs and behaviors.'
                  },
                  {
                    title: 'Data-Driven',
                    description: 'Informed by research, analytics, and continuous user feedback.'
                  },
                  {
                    title: 'Collaborative',
                    description: 'Best results come from working closely with stakeholders and developers.'
                  },
                  {
                    title: 'Iterative',
                    description: 'Embracing continuous improvement through testing and refinement.'
                  }
                ].map((principle, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-1">{principle.title}</h4>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
