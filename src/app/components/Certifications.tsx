import { motion } from "motion/react";
import { Award, ExternalLink, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Adobe Premiere Pro",
    organization: "Adobe",
    year: "2024",
    icon: "🎬",
    pdfLink: "/src/imports/adobe-premiere-pro.pdf"
  },
  {
    title: "Code Asylums",
    organization: "Code Asylums",
    year: "2023",
    icon: "💻",
    pdfLink: "/src/imports/code-asylums.pdf"
  },
  {
    title: "Complete Web Development",
    organization: "Online Learning",
    year: "2023",
    icon: "🌐",
    pdfLink: "/src/imports/complete-web-dev.pdf"
  },
  {
    title: "Future Learn",
    organization: "FutureLearn",
    year: "2023",
    icon: "📚",
    pdfLink: "/src/imports/future-learn.pdf"
  },
  {
    title: "Project Management",
    organization: "Professional Institute",
    year: "2024",
    icon: "📊",
    pdfLink: "/src/imports/project-management-assessment.pdf"
  },
  {
    title: "Video Production",
    organization: "Creative Academy",
    year: "2024",
    icon: "🎥",
    pdfLink: "/src/imports/video-production.pdf"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-16 overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-white">
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
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-5 py-2 bg-white rounded-full shadow-md border-2 border-[#3d38f5]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-[#3d38f5]" />
            <span className="text-[#3d38f5] font-bold">Credentials</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            My Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#3d38f5] h-full">
                {/* Emoji Icon */}
                <div className="relative mb-3">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-semibold text-green-600">Verified</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="space-y-1 mb-3">
                    <p className="text-gray-600 text-sm font-medium">{cert.organization}</p>
                    <p className="text-[#3d38f5] font-bold text-sm">{cert.year}</p>
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={cert.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#3d38f5] text-white px-4 py-2 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#2d28d5] transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] rounded-2xl p-6 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-3xl font-black mb-1">12+</div>
              <div className="text-sm font-medium opacity-90">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">7.6+</div>
              <div className="text-sm font-medium opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-black mb-1">50+</div>
              <div className="text-sm font-medium opacity-90">Projects Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
