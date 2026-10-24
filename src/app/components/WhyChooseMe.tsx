import { motion } from "motion/react";
import { Award, Code, Users } from "lucide-react";
import profileImg from "figma:asset/b24ff9e4b7551f05e787bd06aa29bbbf89d44e92.png";
import bgPattern from "figma:asset/16623c4cb9c7d3e071ce4bb4704c43706f38551d.png";

export function WhyChooseMe() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-[#020816]" style={{ position: 'relative' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={bgPattern} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why Choose Me?
          </h2>
        </motion.div>

        {/* Image LEFT - Content RIGHT Layout */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30" />
              <img
                src={profileImg}
                alt="Mariam Parvez"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20"
              />
            </div>
          </motion.div>

          {/* Content - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-left"
          >
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-6">
              I'm a UI/UX designer and developer with{" "}
              <span className="text-cyan-300 font-semibold">7.6+ years of experience</span>{" "}
              creating high-retention digital products. As a{" "}
              <span className="text-cyan-300 font-semibold">Lead Developer Designer at Prodapt</span>, 
              I design intuitive, user-centered experiences that drive engagement and real impact, 
              while mentoring aspiring designers through{" "}
              <a 
                href="https://muxion.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 font-semibold hover:text-cyan-200 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors"
              >
                Muxion Academy
              </a>.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">7.6+</div>
                  <div className="text-sm text-blue-300/70">Years Experience</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Lead</div>
                  <div className="text-sm text-blue-300/70">Developer Designer</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">Mentor</div>
                  <div className="text-sm text-blue-300/70">Muxion Academy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}