import { motion } from "motion/react";
import { Award, Code, Users } from "lucide-react";
import profileImg from "figma:asset/b24ff9e4b7551f05e787bd06aa29bbbf89d44e92.png";
import bgPattern from "figma:asset/16623c4cb9c7d3e071ce4bb4704c43706f38551d.png";

export function WhyChooseMe() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-[#f8f9fa]" style={{ position: 'relative' }}>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Image LEFT - Content RIGHT Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Profile Image - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <img
                src={profileImg}
                alt="Mariam Parvez"
                className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#3d38f5] shadow-xl"
              />
            </div>
          </motion.div>

          {/* Content - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left space-y-6 max-w-3xl"
          >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 text-left italic">
              Why Choose Me?
            </h2>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I'm a UI/UX designer and developer with{" "}
              <span className="text-[#3d38f5] font-semibold">7.6+ years of experience</span>{" "}
              creating high-retention digital products. As a{" "}
              <span className="text-[#3d38f5] font-semibold">Lead Developer Designer at Prodapt</span>,
              I design intuitive, user-centered experiences that drive engagement and real impact,
              while mentoring aspiring designers through{" "}
              <a
                href="https://muxion.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3d38f5] font-semibold hover:text-[#6b63f7] underline decoration-[#3d38f5]/50 hover:decoration-[#6b63f7] transition-colors"
              >
                Muxion Academy
              </a>.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d38f5]/10 border border-[#3d38f5]/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#3d38f5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">7.6+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d38f5]/10 border border-[#3d38f5]/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-[#3d38f5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Lead</div>
                  <div className="text-sm text-gray-600">Developer Designer</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3d38f5]/10 border border-[#3d38f5]/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#3d38f5]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Mentor</div>
                  <div className="text-sm text-gray-600">Muxion Academy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}