import { motion } from "motion/react";
import { Award, Code, Users } from "lucide-react";
import profileImg from "figma:asset/b24ff9e4b7551f05e787bd06aa29bbbf89d44e92.png";
import bgPattern from "figma:asset/16623c4cb9c7d3e071ce4bb4704c43706f38551d.png";

export function WhyChooseMe() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" style={{ position: 'relative' }}>
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Photo - Small and Subtle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl" />
              <img
                src={profileImg}
                alt="Mariam Parvez"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-cyan-400/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content - Emphasis on Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Me?
            </h2>
            
            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-6">
              I'm a UI/UX designer and front-end developer with{" "}
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
            <div className="flex flex-wrap gap-6 mt-8">
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