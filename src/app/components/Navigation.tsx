import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation, Link } from "react-router";
import { MLoader } from "./MLoader";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isArtPage = location.pathname === "/art";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.45] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const navColors: Record<string, string> = {
    home: "rgba(1, 3, 10, .60)",
    experience: "rgba(0, 1, 4, .76)",
    testimonials: "rgba(4, 13, 38, .72)",
    designs: "rgba(10, 10, 13, .70)",
    blogs: "rgba(14, 14, 17, .72)",
    contact: "rgba(15, 15, 18, .75)",
  };
  const navBackground = navColors[activeSection] ?? "rgba(10, 11, 16, .70)";

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Art", href: "/art", isRoute: true },
    { label: "Designs", href: "#designs" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    if (isRoute) {
      setIsOpen(false);
      return;
    }
    
    e.preventDefault();
    
    // If we're on a different page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
    <MLoader />
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,.16)] transition-colors duration-500"
      style={{ backgroundColor: scrolled ? navBackground : "rgba(1, 3, 10, .48)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-2xl lg:text-3xl font-black text-[#fdfdfd]"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif", fontWeight: 700 }}
            >
              {isArtPage ? "The M Impact" : "Mariam Parvez"}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.href}
                    className="text-[#b8b8b8] hover:text-[#fdfdfd] transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                  className="text-[#b8b8b8] hover:text-[#fdfdfd] transition-colors relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] group-hover:w-full transition-all duration-300" />
                </motion.a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#b8b8b8] hover:text-[#fdfdfd]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 backdrop-blur-xl"
            style={{ backgroundColor: navBackground }}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-[#b8b8b8] hover:text-[#fdfdfd] hover:bg-[#3d38f5]/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
                    className="block px-4 py-2 text-[#b8b8b8] hover:text-[#fdfdfd] hover:bg-[#3d38f5]/10 rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}
