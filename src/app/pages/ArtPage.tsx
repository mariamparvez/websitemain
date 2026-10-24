import { motion } from "motion/react";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const artPieces = [
  {
    id: 1,
    title: "Abstract Watercolor Dream",
    description: "Vibrant watercolor composition exploring fluid forms",
    image: "https://images.unsplash.com/photo-1750327324364-6700eab9ad7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzc1NTAxNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Watercolor"
  },
  {
    id: 2,
    title: "Modern Acrylic Expression",
    description: "Bold acrylic painting with modern aesthetic",
    image: "https://images.unsplash.com/photo-1532949293134-3eb646d213f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwcGFpbnRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzc1Mzg0NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Acrylic"
  },
  {
    id: 3,
    title: "Mandala Meditation",
    description: "Intricate mandala design with vibrant colors",
    image: "https://images.unsplash.com/photo-1773433379709-0d32baa8ddea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYWxhJTIwYXJ0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1NTAxNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mandala"
  },
  {
    id: 4,
    title: "Vibrant Abstract Flow",
    description: "Dynamic abstract composition with bold colors",
    image: "https://images.unsplash.com/photo-1525434486320-567654c1f256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhaW50aW5nJTIwdmlicmFudHxlbnwxfHx8fDE3NzU0Njg0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Abstract"
  },
  {
    id: 5,
    title: "Contemporary Vision",
    description: "Modern contemporary artwork with depth",
    image: "https://images.unsplash.com/photo-1590968802291-f1e1f86cde34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzU1MDE2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Contemporary"
  },
  {
    id: 6,
    title: "Modern Art Essence",
    description: "Capturing the essence of modern art movements",
    image: "https://images.unsplash.com/photo-1706811833540-2a1054cddafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBwYWludGluZ3xlbnwxfHx8fDE3NzU0MjY4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Modern"
  },
  {
    id: 7,
    title: "Floral Watercolor",
    description: "Delicate watercolor flowers in soft hues",
    image: "https://images.unsplash.com/photo-1700608277871-a16cfe788293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwZmxvd2VycyUyMGFydHxlbnwxfHx8fDE3NzU1MDE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Watercolor"
  },
  {
    id: 8,
    title: "Colorful Acrylic Abstract",
    description: "Explosive colors in acrylic medium",
    image: "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3J5bGljJTIwYWJzdHJhY3QlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzU1MDE2MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Acrylic"
  },
  {
    id: 9,
    title: "Geometric Mandala",
    description: "Precise geometric patterns in mandala form",
    image: "https://images.unsplash.com/photo-1599424785167-712f4cc6acaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5kYWxhJTIwZ2VvbWV0cmljJTIwcGF0dGVybnxlbnwxfHx8fDE3NzU1MDE2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mandala"
  },
  {
    id: 10,
    title: "Contemporary Artwork",
    description: "Modern contemporary piece with unique perspective",
    image: "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnR3b3JrJTIwbW9kZXJufGVufDF8fHx8MTc3NTUwMTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Contemporary"
  },
  {
    id: 11,
    title: "Mixed Media Creation",
    description: "Combining multiple mediums for unique texture",
    image: "https://images.unsplash.com/photo-1696937059409-60900a43bc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG1lZGlhJTIwYXJ0fGVufDF8fHx8MTc3NTUwMTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mixed Media"
  },
  {
    id: 12,
    title: "Abstract Color Symphony",
    description: "Harmonious blend of colors in abstract form",
    image: "https://images.unsplash.com/photo-1716901548718-da465a9060fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50aW5nJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc1NTAxNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Abstract"
  }
];

export function ArtPage() {
  return (
    <>
      <Navigation />
      <div className="relative bg-[#010408] min-h-screen text-white pt-24 pb-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
                Art Gallery
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl">
              Creating unique Acrylic, Watercolor, Mandala, and Abstract Art pieces. Each piece tells a story and brings life to spaces. Commissions available to bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.a
                href="https://www.instagram.com/themimpact/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all"
              >
                <Instagram className="w-5 h-5" />
                Follow on Instagram
              </motion.a>

              <motion.a
                href="https://ig.me/m/themimpact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Commission an Art Piece
              </motion.a>
            </div>
          </motion.div>

          {/* Art Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artPieces.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 hover:border-pink-500/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300 z-10" />
                  <ImageWithFallback
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <span className="text-xs font-semibold text-purple-300 mb-2">
                    {art.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{art.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{art.description}</p>
                  <a
                    href="https://ig.me/m/themimpact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm font-medium"
                  >
                    Enquire on Instagram
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Bottom Info (Always Visible) */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold group-hover:text-pink-400 transition-colors">
                    {art.title}
                  </h3>
                  <span className="text-xs text-purple-400">
                    {art.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Love What You See?
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              I take commissions for custom art pieces. Whether it's for your home, office, or a special gift, let's create something beautiful together.
            </p>
            <motion.a
              href="https://ig.me/m/themimpact"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-pink-500/30 transition-all"
            >
              <Instagram className="w-6 h-6" />
              Get in Touch on Instagram
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}