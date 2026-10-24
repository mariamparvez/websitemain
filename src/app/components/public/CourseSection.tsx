import { motion } from 'motion/react';
import { Play, Users, Star, Clock } from 'lucide-react';

export function CourseSection() {
  return (
    <section id="course" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Education</span>
          <h2 className="mt-4 text-gray-900">UI/UX Design Course</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn from my experience and master UI/UX design fundamentals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative bg-gradient-to-br from-orange-500 to-pink-500 p-12 flex flex-col justify-center">
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                Free Course
              </div>

              <h3 className="text-3xl font-bold text-white mb-6">
                Complete UI/UX Design Masterclass
              </h3>

              <p className="text-white/90 mb-8 leading-relaxed">
                A comprehensive guide to user interface and user experience design,
                covering everything from fundamentals to advanced techniques.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: '10K+ Students', value: 'Enrolled' },
                  { icon: Star, label: '4.8/5', value: 'Rating' },
                  { icon: Clock, label: '8+ Hours', value: 'Content' },
                  { icon: Play, label: '50+ Lessons', value: 'Videos' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <stat.icon className="w-6 h-6 text-white mb-2" />
                    <div className="text-white font-bold">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://youtu.be/nJ3clNDNu9s?si=ZXGWUvzlKH_eYjxh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-500 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Play className="w-5 h-5" />
                Start Learning Now
              </a>
            </div>

            <div className="relative aspect-video md:aspect-auto">
              <iframe
                src="https://www.youtube.com/embed/nJ3clNDNu9s"
                title="UI/UX Design Course"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
