import { motion, useScroll, useTransform } from "motion/react";
import { Globe, Palette, Paintbrush, GraduationCap, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import parallaxBg from 'figma:asset/089d4811ef31488112e1cf08c729f30084a51a92.png';

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Skilled in creating responsive, user-centric websites using HTML, CSS, and JavaScript. Over 5 years of delivering top-quality web and mobile designs.",
    link: "https://www.behance.net/themariamparvez",
    linkText: "Latest Work",
    gradient: "from-[#3d38f5] to-[#6b63f7]"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "5+ years of experience creating impactful logos, branding, and marketing materials using Adobe Creative Suite.",
    link: "https://dribbble.com/themariamparvez",
    linkText: "View Designs",
    gradient: "from-[#3d38f5] to-teal-500"
  },
  {
    icon: Paintbrush,
    title: "Art",
    description: "Creating unique Acrylic, Watercolor, Mandala, and Abstract Art pieces. Commissions available to bring your ideas to life.",
    link: "/art",
    linkText: "Explore Art",
    gradient: "from-teal-500 to-emerald-500",
    isRoute: true
  },
  {
    icon: GraduationCap,
    title: "Coach",
    description: "Experienced UI/UX and Graphic Design coach, loved by students for practical and engaging learning.",
    link: "https://muxion.in",
    linkText: "Go To Course",
    gradient: "from-emerald-500 to-[#6b63f7]"
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
    <section ref={sectionRef} id="services" className="relative pt-16 pb-16 overflow-hidden bg-white" style={{ position: 'relative' }}>
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y, opacity }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ scale }}
        >
          <img 
            src={parallaxBg} 
            alt="Background" 
            className="w-full h-full object-cover"
            style={{
              opacity: 0.5
            }}
          />
          {/* Lighter dark overlay to let image show through more */}
          <div className="absolute inset-0 bg-[rgba(2,6,16,0.4)]" />
        </motion.div>
      </motion.div>

      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d38f5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d38f5] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mb-0 px-[32px] py-[24px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What I{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] via-[#3d38f5] to-indigo-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
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
                <div className="relative bg-white/95 backdrop-blur-sm border border-[#3d38f5]/20 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-300 hover:border-[#3d38f5]/20 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3d38f5]/0 to-[#6b63f7]/0 group-hover:from-[#3d38f5]/10 group-hover:to-[#6b63f7]/10 transition-all duration-300" />
                  
                  {/* Large Background Icon */}
                  <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none">
                    <Icon className="w-48 h-48 lg:w-56 lg:h-56 text-[#3d38f5]" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-2xl lg:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Link */}
                  {service.isRoute ? (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                    >
                      <Link
                        to={service.link}
                        className={`relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-shadow group/btn`}
                      >
                        {service.linkText}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-shadow group/btn mt-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {service.linkText}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.a>
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