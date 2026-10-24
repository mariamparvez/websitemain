import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useLocation, Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isArtPage = location.pathname === "/art";

  return (
    <footer className={`relative py-12 overflow-hidden ${
      isArtPage 
        ? "border-t border-purple-900/20 bg-[#0a0515]" 
        : "border-t border-blue-900/20 bg-[#010408]"
    }`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] ${
          isArtPage ? "bg-purple-600/5" : "bg-blue-600/5"
        } rounded-full blur-3xl`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              isArtPage
                ? "bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent"
            }`}>
              Mariam Parvez
            </h3>
            <p className="text-gray-400 mb-6">
              Web Designer | UI/UX Expert | Graphic Designer | Artist | Coach
            </p>

            <div className="hidden md:flex items-center justify-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>© {currentYear} Mariam Parvez. All rights reserved.</span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a
                href="https://www.linkedin.com/in/themariamparvez/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isArtPage ? "hover:text-purple-400" : "hover:text-blue-400"
                }`}
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://www.behance.net/themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isArtPage ? "hover:text-purple-400" : "hover:text-blue-400"
                }`}
              >
                Behance
              </a>
              <span>•</span>
              <a
                href="https://dribbble.com/themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isArtPage ? "hover:text-purple-400" : "hover:text-blue-400"
                }`}
              >
                Dribbble
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/themimpact/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isArtPage ? "hover:text-purple-400" : "hover:text-blue-400"
                }`}
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://medium.com/@themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  isArtPage ? "hover:text-purple-400" : "hover:text-blue-400"
                }`}
              >
                Medium
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/terms"
                className={`transition-colors ${
                  isArtPage ? "text-gray-500 hover:text-purple-400" : "text-gray-500 hover:text-blue-400"
                }`}
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/privacy"
                className={`transition-colors ${
                  isArtPage ? "text-gray-500 hover:text-purple-400" : "text-gray-500 hover:text-blue-400"
                }`}
              >
                Privacy Policy
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/disclaimer"
                className={`transition-colors ${
                  isArtPage ? "text-gray-500 hover:text-purple-400" : "text-gray-500 hover:text-blue-400"
                }`}
              >
                Disclaimer
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/copyright"
                className={`transition-colors ${
                  isArtPage ? "text-gray-500 hover:text-purple-400" : "text-gray-500 hover:text-blue-400"
                }`}
              >
                Copyright
              </Link>
              <span className="text-gray-700">•</span>
              <Link
                to="/csr"
                className={`transition-colors ${
                  isArtPage ? "text-gray-500 hover:text-purple-400" : "text-gray-500 hover:text-blue-400"
                }`}
              >
                CSR Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}