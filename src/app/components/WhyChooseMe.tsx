import { motion } from "motion/react";
import { Award, Code, Users } from "lucide-react";
import profileImg from "figma:asset/b24ff9e4b7551f05e787bd06aa29bbbf89d44e92.png";
import bgPattern from "figma:asset/16623c4cb9c7d3e071ce4bb4704c43706f38551d.png";
import { ParticlesBackground } from "./ParticlesBackground";

export function WhyChooseMe() {
  return (
    <section className="relative py-10 overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15" style={{ position: 'relative' }}>
      <ParticlesBackground />

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
                className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-[#3d38f5]"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#fdfdfd] mb-4 text-left italic">
              Why Choose Me?
            </h2>

            <p className="text-base md:text-lg text-[#d6d6d6] leading-relaxed text-justify">
              I'm a UI/UX designer and developer with{" "}
              <span className="text-[#9a96ff] font-semibold">8+ years of experience</span>{" "}
              creating high-retention digital products. As a{" "}
              <span className="text-[#9a96ff] font-semibold">Lead Developer Designer at Prodapt</span>,
              I design intuitive, user-centered experiences that drive engagement and real impact,
              while mentoring aspiring designers through{" "}
              <a
                href="https://muxion.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9a96ff] font-semibold hover:text-[#6b63f7] underline decoration-[#3d38f5]/50 hover:decoration-[#6b63f7] transition-colors"
              >
                Muxion Academy
              </a>.
            </p>

            {/* Quick Stats - All in One Row */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-[#3d38f5]/5 to-[#6b63f7]/5 border border-[#3d38f5]/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#3d38f5] flex items-center justify-center mb-3 shadow-lg shadow-[#3d38f5]/30">
                  <Award className="w-6 h-6 text-[#fdfdfd]" />
                </div>
                <div className="text-2xl font-black text-[#fdfdfd]">8+</div>
                <div className="text-sm text-[#b8b8b8] font-medium">Years Experience</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-[#3d38f5]/5 to-[#6b63f7]/5 border border-[#3d38f5]/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#3d38f5] flex items-center justify-center mb-3 shadow-lg shadow-[#3d38f5]/30">
                  <Code className="w-6 h-6 text-[#fdfdfd]" />
                </div>
                <div className="text-2xl font-black text-[#fdfdfd]">Lead</div>
                <div className="text-sm text-[#b8b8b8] font-medium">Developer Designer</div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-[#3d38f5]/5 to-[#6b63f7]/5 border border-[#3d38f5]/10"
              >
                <div className="w-12 h-12 rounded-full bg-[#3d38f5] flex items-center justify-center mb-3 shadow-lg shadow-[#3d38f5]/30">
                  <Users className="w-6 h-6 text-[#fdfdfd]" />
                </div>
                <div className="text-2xl font-black text-[#fdfdfd]">Mentor</div>
                <div className="text-sm text-[#b8b8b8] font-medium">Muxion Academy</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}