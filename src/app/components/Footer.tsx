import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useLocation, Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isArtPage = location.pathname === "/art";

  return (
    <footer className="relative py-12 overflow-hidden border-t border-gray-200 bg-[#f8f9fa]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] bg-clip-text text-transparent">
              Mariam Parvez
            </h3>
            <p className="text-gray-600 mb-6 font-medium">
              Web Designer | UI/UX Expert | Graphic Designer | Artist | Coach
            </p>

            <div className="hidden md:flex items-center justify-center gap-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>© {currentYear} Mariam Parvez. All rights reserved.</span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <a
                href="https://www.linkedin.com/in/themariamparvez/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d38f5] transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://www.behance.net/themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d38f5] transition-colors"
              >
                Behance
              </a>
              <span>•</span>
              <a
                href="https://dribbble.com/themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d38f5] transition-colors"
              >
                Dribbble
              </a>
              <span>•</span>
              <a
                href="https://www.instagram.com/themimpact/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d38f5] transition-colors"
              >
                Instagram
              </a>
              <span>•</span>
              <a
                href="https://medium.com/@themariamparvez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#3d38f5] transition-colors"
              >
                Medium
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/terms"
                className="text-gray-500 hover:text-[#3d38f5] transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-[#3d38f5] transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/disclaimer"
                className="text-gray-500 hover:text-[#3d38f5] transition-colors"
              >
                Disclaimer
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/copyright"
                className="text-gray-500 hover:text-[#3d38f5] transition-colors"
              >
                Copyright
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                to="/csr"
                className="text-gray-500 hover:text-[#3d38f5] transition-colors"
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
