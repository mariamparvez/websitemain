import { motion } from "motion/react";
import { Dribbble, Heart, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/themariamparvez/", icon: <Linkedin /> },
  { label: "Behance", href: "https://www.behance.net/themariamparvez", icon: <span className="text-[11px] font-black leading-none">Bē</span> },
  { label: "Dribbble", href: "https://dribbble.com/themariamparvez", icon: <Dribbble /> },
  { label: "Instagram", href: "https://www.instagram.com/themimpact/", icon: <Instagram /> },
  { label: "Medium", href: "https://medium.com/@themariamparvez", icon: <span className="text-[11px] font-black leading-none">M</span> },
];

const legal = [
  ["Terms & Conditions", "/terms"],
  ["Privacy Policy", "/privacy"],
  ["Disclaimer", "/disclaimer"],
  ["Copyright", "/copyright"],
  ["CSR Policy", "/csr"],
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-[#fdfdfd]/15 bg-[#1b1b1b] py-8">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-center">
          <h3 className="mb-2 text-2xl font-bold text-[#5b58f7] md:text-3xl">Mariam Parvez</h3>
          <p className="mx-auto max-w-3xl text-sm font-medium text-[#b8b8b8]">Web Designer · UI/UX Expert · Graphic Designer · Artist · Coach</p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#b8b8b8]">
            <span>© {currentYear} Mariam Parvez</span><Heart className="h-3 w-3 fill-red-400 text-red-400" aria-label="Made with care" />
          </div>

          <nav aria-label="Social links" className="mt-5 flex justify-center gap-2">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="grid h-8 w-8 place-items-center rounded-[4px] border border-[#fdfdfd]/20 text-[#d7d5ff] transition hover:border-[#8e87ff] hover:bg-[#3d38f5] hover:text-white">
                <span className="[&>svg]:h-4 [&>svg]:w-4">{social.icon}</span>
              </a>
            ))}
          </nav>

          <nav aria-label="Legal links" className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-x-3 gap-y-2 text-[8px] font-medium leading-none text-[#969696] sm:text-[9px]">
            {legal.map(([label, to]) => <Link key={to} to={to} className="transition hover:text-[#9a96ff]">{label}</Link>)}
          </nav>
        </motion.div>
      </div>
    </footer>
  );
}
