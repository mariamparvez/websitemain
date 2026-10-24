import { motion } from "motion/react";
import MuxionLogo from "../../imports/SocialIcon/SocialIcon";

const platforms = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/themariamparvez/",
    icon: "💼"
  },
  {
    name: "Superprof",
    url: "https://www.superprof.co.in/with-over-years-experience-being-senior-designer-and-developer-and-with-the-experience-hold-coaching-can-not.html",
    icon: "👨‍🏫"
  },
  {
    name: "MUXION",
    url: "https://muxion.in/",
    isLogo: true
  },
  {
    name: "Medium",
    url: "https://medium.com/@themariamparvez",
    icon: "✍️"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@muxionacademy",
    icon: "📺"
  },
  {
    name: "Behance",
    url: "https://www.behance.net/mariamparvez",
    icon: "🎨"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/mariamparvez",
    icon: "🏀"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muxionacademy/",
    icon: "📸"
  }
];

export function InfiniteMarquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] border-y-2 border-gray-200">
      <div className="relative flex">
        {/* First set */}
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: [0, -100 + "%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {platforms.map((platform, index) => (
            <a
              key={`first-${index}`}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all whitespace-nowrap"
            >
              {platform.isLogo ? (
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="scale-[0.15] -ml-12 -mt-12">
                    <MuxionLogo />
                  </div>
                </div>
              ) : (
                <span className="text-2xl">{platform.icon}</span>
              )}
              <span className="text-white font-bold text-lg">{platform.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Second set (duplicate for seamless loop) */}
        <motion.div
          className="flex gap-8 pr-8"
          animate={{
            x: [0, -100 + "%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {platforms.map((platform, index) => (
            <a
              key={`second-${index}`}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all whitespace-nowrap"
            >
              {platform.isLogo ? (
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="scale-[0.15] -ml-12 -mt-12">
                    <MuxionLogo />
                  </div>
                </div>
              ) : (
                <span className="text-2xl">{platform.icon}</span>
              )}
              <span className="text-white font-bold text-lg">{platform.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
