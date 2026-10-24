import { motion } from "motion/react";
import { Linkedin, Youtube } from "lucide-react";
import muxionIcon from "../../imports/favicon-1.png";

const platforms = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/themariamparvez/",
    iconType: "linkedin"
  },
  {
    name: "Superprof",
    url: "https://www.superprof.co.in/with-over-years-experience-being-senior-designer-and-developer-and-with-the-experience-hold-coaching-can-not.html",
    iconType: "svg",
    svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
  },
  {
    name: "MUXION",
    url: "https://muxion.in/",
    iconType: "muxion"
  },
  {
    name: "Medium",
    url: "https://medium.com/@themariamparvez",
    iconType: "svg",
    svgPath: "M13 12c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7zm6.5 0c0 3.634-1.567 6.581-3.5 6.581s-3.5-2.947-3.5-6.581 1.567-6.581 3.5-6.581 3.5 2.947 3.5 6.581zm3.062 0c0 3.254-.55 5.894-1.227 5.894s-1.227-2.64-1.227-5.894.55-5.894 1.227-5.894 1.227 2.64 1.227 5.894z"
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@muxionacadamy",
    iconType: "youtube"
  },
  {
    name: "Behance",
    url: "https://www.behance.net/themariamparvez",
    iconType: "svg",
    svgPath: "M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/themariamparvez",
    iconType: "svg",
    svgPath: "M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.209.770-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muxionacadamy/",
    iconType: "svg",
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  }
];

export function InfiniteMarquee() {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] border-y-2 border-[#fdfdfd]/15">
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
              className="group flex items-center gap-3 px-6 py-3 bg-[#fdfdfd]/10 backdrop-blur-md rounded-full border border-[#fdfdfd]/20 hover:bg-[#fdfdfd]/20 transition-all whitespace-nowrap"
            >
              {platform.iconType === "muxion" ? (
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <img src={muxionIcon} alt="MUXION" className="w-full h-full object-contain" />
                </div>
              ) : platform.iconType === "linkedin" ? (
                <Linkedin className="w-6 h-6 text-[#fdfdfd]" />
              ) : platform.iconType === "youtube" ? (
                <Youtube className="w-6 h-6 text-[#fdfdfd]" />
              ) : (
                <svg className="w-6 h-6 text-[#fdfdfd] fill-current" viewBox="0 0 24 24">
                  <path d={platform.svgPath} />
                </svg>
              )}
              <span className="text-[#fdfdfd] font-bold text-lg">{platform.name}</span>
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
              className="group flex items-center gap-3 px-6 py-3 bg-[#fdfdfd]/10 backdrop-blur-md rounded-full border border-[#fdfdfd]/20 hover:bg-[#fdfdfd]/20 transition-all whitespace-nowrap"
            >
              {platform.iconType === "muxion" ? (
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <img src={muxionIcon} alt="MUXION" className="w-full h-full object-contain" />
                </div>
              ) : platform.iconType === "linkedin" ? (
                <Linkedin className="w-6 h-6 text-[#fdfdfd]" />
              ) : platform.iconType === "youtube" ? (
                <Youtube className="w-6 h-6 text-[#fdfdfd]" />
              ) : (
                <svg className="w-6 h-6 text-[#fdfdfd] fill-current" viewBox="0 0 24 24">
                  <path d={platform.svgPath} />
                </svg>
              )}
              <span className="text-[#fdfdfd] font-bold text-lg">{platform.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
