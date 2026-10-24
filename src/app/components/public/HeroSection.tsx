import { motion } from 'motion/react';
import { Play, Briefcase, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50/30 to-pink-50/20 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              <span className="block text-gray-900 mb-2">Mariam Parvez</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                UI/UX Designer • Front-End Developer • Visual Storyteller
              </span>
            </h1>

            <p className="mb-8 text-gray-700 text-lg leading-relaxed max-w-xl">
              I craft digital experiences that blend aesthetic beauty with functional excellence,
              transforming complex problems into intuitive solutions that users love.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all border-2 border-gray-200 hover:border-orange-300"
              >
                Work With Me
                <Briefcase className="w-5 h-5" />
              </a>
            </div>

            <a
              href="https://youtu.be/nJ3clNDNu9s?si=ZXGWUvzlKH_eYjxh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 px-6 py-3 rounded-full border-2 border-purple-200 hover:border-purple-400 transition-all hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Watch My UI/UX Course
            </a>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '12+', label: 'Certifications Earned' },
                { value: '10K+', label: 'Students Reached' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-md border border-orange-100"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-full blur-3xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600"
                alt="Mariam Parvez"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
