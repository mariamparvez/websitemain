import { motion } from "motion/react";
import { Award, Download, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Adobe Premiere Pro",
    organization: "Adobe",
    year: "2024",
    icon: "🎬",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Code Asylums Certification",
    organization: "Code Asylums",
    year: "2023",
    icon: "💻",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Complete Web Development",
    organization: "Online Learning Platform",
    year: "2023",
    icon: "🌐",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Future Learn Certification",
    organization: "FutureLearn",
    year: "2023",
    icon: "📚",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Project Management Assessment",
    organization: "Professional Institute",
    year: "2024",
    icon: "📊",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Video Production",
    organization: "Creative Academy",
    year: "2024",
    icon: "🎥",
    color: "from-pink-500 to-rose-500"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-white">
      {/* Floating Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#3d38f5]/10 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white rounded-full shadow-md border-2 border-[#3d38f5]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-6 h-6 text-[#3d38f5]" />
            <span className="text-[#3d38f5] font-bold text-lg">Credentials & Achievements</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            My Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and professional development to stay at the forefront of design and technology
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#3d38f5] h-full">
                {/* Icon with Gradient Background */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`} />

                {/* Emoji Icon */}
                <div className="relative mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Verified</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="space-y-2 mb-6">
                    <p className="text-gray-600 font-medium">{cert.organization}</p>
                    <p className="text-[#3d38f5] font-bold text-lg">{cert.year}</p>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Certificate
                  </motion.button>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#3d38f5]/5 rounded-tr-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] rounded-3xl p-12 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-5xl font-black mb-2">12+</div>
              <div className="text-xl font-medium opacity-90">Certifications Earned</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">7.6+</div>
              <div className="text-xl font-medium opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">50+</div>
              <div className="text-xl font-medium opacity-90">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
