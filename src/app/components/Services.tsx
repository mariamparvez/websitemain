import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Palette, Paintbrush, GraduationCap, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import parallaxBg from 'figma:asset/089d4811ef31488112e1cf08c729f30084a51a92.png';
import { ParticlesBackground } from "./ParticlesBackground";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Skilled in creating responsive, user-centric websites using HTML, CSS, and JavaScript. Over 5 years of delivering top-quality web and mobile designs.",
    link: "https://www.behance.net/themariamparvez",
    linkText: "Latest Work"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "5+ years of experience creating impactful logos, branding, and marketing materials using Adobe Creative Suite.",
    link: "https://dribbble.com/themariamparvez",
    linkText: "View Designs"
  },
  {
    icon: Paintbrush,
    title: "Art",
    description: "Creating unique Acrylic, Watercolor, Mandala, and Abstract Art pieces. Commissions available to bring your ideas to life.",
    link: "/art",
    linkText: "Explore Art",
    isRoute: true
  },
  {
    icon: GraduationCap,
    title: "Coach",
    description: "Experienced UI/UX and Graphic Design coach, loved by students for practical and engaging learning.",
    link: "https://muxion.in",
    linkText: "Go To Course"
  }
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.2, 0.6, 0.8, 0.6, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <section ref={sectionRef} id="services" className="relative pt-10 pb-10 overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto mb-0 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[#fdfdfd]">
            What I{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] via-[#3d38f5] to-indigo-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-[#b8b8b8] text-base md:text-lg max-w-2xl mx-auto">
            Bringing creativity and expertise to every project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-0 mb-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-2xl p-5 h-full overflow-hidden transition-all duration-300 hover:border-[#3d38f5] hover:scale-105 flex flex-col">
                  {/* Large Background Icon */}
                  <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
                    <Icon className="w-40 h-40 lg:w-48 lg:h-48 text-[#9a96ff]" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-lg lg:text-xl font-bold mb-2 text-[#fdfdfd]">
                    {service.title}
                  </h3>
                  <p className="relative text-[#d6d6d6] text-sm mb-4 leading-snug flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  {service.isRoute ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto flex justify-end"
                    >
                      <Link
                        to={service.link}
                        className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3d38f5] text-[#fdfdfd] rounded-full font-bold hover:bg-[#2d28d5] transition-all group/btn text-xs"
                      >
                        {service.linkText}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="mt-auto flex justify-end"
                    >
                      <motion.a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3d38f5] text-[#fdfdfd] rounded-full font-bold hover:bg-[#2d28d5] transition-all group/btn text-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {service.linkText}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}