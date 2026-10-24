import { motion } from "motion/react";
import { ArrowLeft, Instagram, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useRef } from "react";
import art1 from "figma:asset/44bc4ae49779224ab35cf09963389b8c58f729aa.png";
import art2 from "figma:asset/b0ab5f894f83d2851c3736ef69232cb7974cb671.png";
import art3 from "figma:asset/ed51938dd8cf845db517dbbd5ea02156401e66e3.png";
import art4 from "figma:asset/5bcf8dd5d4b7fc164606326bb59f757682c1a005.png";
import art5 from "figma:asset/c80864e580e821e9b0b3afb94c7ccf6d20b40783.png";
import art6 from "figma:asset/774675c43fe003f5321b84fba521c3d9d42c3114.png";

const latestWork = [
  { id: 1, src: art1, title: "Cherry Blossom Tree", description: "Beautiful acrylic painting with vibrant pink cherry blossoms", price: "₹2,500", category: "Acrylic" },
  { id: 2, src: art2, title: "Ocean Waves", description: "Serene watercolor depicting ocean waves and beach", price: "₹1,800", category: "Watercolor" },
  { id: 3, src: art3, title: "Spring Blossom", description: "Delicate cherry blossom tree in full bloom", price: "₹2,200", category: "Acrylic" },
  { id: 4, src: art4, title: "Blue Burst", description: "Abstract blue acrylic with textured center burst", price: "₹2,000", category: "Acrylic" },
  { id: 5, src: art5, title: "Moonlit Night", description: "Mystical circular painting with deer silhouette", price: "₹2,300", category: "Acrylic" },
  { id: 6, src: art6, title: "Waterfall Serenity", description: "Peaceful waterfall scene with mountain backdrop", price: "₹2,400", category: "Acrylic" },
];

const acrylicPaintings = [
  { id: 1, src: art1, title: "Cherry Blossom Dream", description: "Vibrant pink and white cherry blossoms", price: "₹2,500" },
  { id: 2, src: art3, title: "Pink Blossom Tree", description: "Spring cherry blossom with white fence", price: "₹2,200" },
  { id: 3, src: art4, title: "Blue Abstract Burst", description: "Textured blue acrylic explosion", price: "₹2,000" },
  { id: 4, src: art5, title: "Moonlit Silhouette", description: "Deer under the moonlight", price: "₹2,300" },
  { id: 5, src: art6, title: "Mountain Waterfall", description: "Serene waterfall landscape", price: "₹2,400" },
];

const watercolorPaintings = [
  { id: 1, src: art2, title: "Ocean Waves", description: "Beautiful beach and ocean scene", price: "₹1,800" },
  { id: 2, src: art2, title: "Coastal Beauty", description: "Serene watercolor seascape", price: "₹1,900" },
];

const mandalaArt = [
  { id: 1, src: art5, title: "Circular Mandala", description: "Intricate circular mandala design", price: "₹1,500" },
];

export function ArtPage() {
  const latestScrollRef = useRef<HTMLDivElement>(null);
  const acrylicScrollRef = useRef<HTMLDivElement>(null);
  const watercolorScrollRef = useRef<HTMLDivElement>(null);
  const mandalaScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navigation />
      <div className="relative bg-[#010408] min-h-screen text-white overflow-x-hidden" style={{ position: 'relative' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Grid Section */}
        <section className="relative pt-24 pb-8 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* About Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="col-span-2 row-span-2 relative group rounded-3xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 p-8 flex flex-col justify-center items-center text-center hover:border-purple-500/60 transition-all duration-300"
                style={{
                  backgroundImage: `url(${art1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />
                <div className="relative z-10">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">Get to know me!</h1>
                  <p className="text-gray-300 mb-6">Find me designing websites by day, splashing paints on canvases by night.</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a href="#latest-work" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg transition-all">
                      Latest Work
                    </a>
                    <Link to="/" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all">
                      My Website
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Acrylic Paintings Card */}
              <motion.a
                href="#acrylic-paintings"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border border-blue-500/30 p-6 flex flex-col justify-center items-center text-center hover:border-cyan-500/60 transition-all duration-300"
                style={{
                  backgroundImage: `url(${art3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">My Acrylic Paintings</h4>
                  <button className="mt-4 px-4 py-2 bg-white text-purple-900 rounded-full font-medium text-sm hover:bg-purple-100 transition-all">
                    View
                  </button>
                </div>
              </motion.a>

              {/* Watercolor Paintings Card */}
              <motion.a
                href="#watercolor-paintings"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900/40 to-teal-900/40 backdrop-blur-sm border border-cyan-500/30 p-6 flex flex-col justify-center items-center text-center hover:border-teal-500/60 transition-all duration-300"
                style={{
                  backgroundImage: `url(${art2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">My Watercolor Paintings</h4>
                  <button className="mt-4 px-4 py-2 bg-white text-cyan-900 rounded-full font-medium text-sm hover:bg-cyan-100 transition-all">
                    View
                  </button>
                </div>
              </motion.a>

              {/* Sketches Card */}
              <motion.a
                href="#sketches"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm border border-pink-500/30 p-6 flex flex-col justify-center items-center text-center hover:border-purple-500/60 transition-all duration-300"
                style={{
                  backgroundImage: `url(${art4})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">My Sketches</h4>
                  <button className="mt-4 px-4 py-2 bg-white text-pink-900 rounded-full font-medium text-sm hover:bg-pink-100 transition-all">
                    View
                  </button>
                </div>
              </motion.a>

              {/* Mandala Art Card */}
              <motion.a
                href="#mandala-art"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/30 p-6 flex flex-col justify-center items-center text-center hover:border-purple-500/60 transition-all duration-300"
                style={{
                  backgroundImage: `url(${art5})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Mandala Art</h4>
                  <button className="mt-4 px-4 py-2 bg-white text-indigo-900 rounded-full font-medium text-sm hover:bg-indigo-100 transition-all">
                    View
                  </button>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Latest Work Slider */}
        <section id="latest-work" className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
              <p className="text-gray-400 text-lg">This is the latest Art I did. Explore, buy and let me know how it is!</p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4">
                <button
                  onClick={() => scroll(latestScrollRef, 'left')}
                  className="pointer-events-auto p-4 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll(latestScrollRef, 'right')}
                  className="pointer-events-auto p-4 bg-purple-600 hover:bg-purple-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div ref={latestScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {latestWork.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-4 hover:border-pink-500/40 transition-all"
                  >
                    <img src={art.src} alt={art.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{art.title}</h3>
                      <p className="text-gray-400 text-sm">{art.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-pink-400 font-bold text-lg">{art.price}</span>
                        <a
                          href="https://ig.me/m/themimpact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg transition-all"
                        >
                          Enquire on Insta
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Acrylic Paintings Slider */}
        <section id="acrylic-paintings" className="relative py-16 px-4 bg-[#0a0e1a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Acrylic Paintings</h2>
              <p className="text-gray-400 text-lg">You will mostly find me with my acrylics in the weekends. Explore, buy and let me know how it is!</p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4">
                <button
                  onClick={() => scroll(acrylicScrollRef, 'left')}
                  className="pointer-events-auto p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll(acrylicScrollRef, 'right')}
                  className="pointer-events-auto p-4 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div ref={acrylicScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {acrylicPaintings.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-4 hover:border-cyan-500/40 transition-all"
                  >
                    <img src={art.src} alt={art.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{art.title}</h3>
                      <p className="text-gray-400 text-sm">{art.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-cyan-400 font-bold text-lg">{art.price}</span>
                        <a
                          href="https://ig.me/m/themimpact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium hover:shadow-lg transition-all"
                        >
                          Enquire on Insta
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mandala Art Slider */}
        <section id="mandala-art" className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Mandala Art</h2>
              <p className="text-gray-400 text-lg">Lately, I've been obsessed with Mandala Art. Explore, buy and let me know how it is!</p>
            </motion.div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-4">
                <button
                  onClick={() => scroll(mandalaScrollRef, 'left')}
                  className="pointer-events-auto p-4 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scroll(mandalaScrollRef, 'right')}
                  className="pointer-events-auto p-4 bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div ref={mandalaScrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {mandalaArt.map((art, index) => (
                  <motion.div
                    key={art.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-shrink-0 w-80 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-4 hover:border-purple-500/40 transition-all"
                  >
                    <img src={art.src} alt={art.title} className="w-full h-64 object-cover rounded-xl mb-4" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{art.title}</h3>
                      <p className="text-gray-400 text-sm">{art.description}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-purple-400 font-bold text-lg">{art.price}</span>
                        <a
                          href="https://ig.me/m/themimpact"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-sm font-medium hover:shadow-lg transition-all"
                        >
                          Enquire on Insta
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Love What You See?</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                I take commissions for custom art pieces. Whether it's for your home, office, or a special gift, let's create something beautiful together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="https://www.instagram.com/themimpact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-full hover:border-purple-500/60 transition-all"
                >
                  <Instagram className="w-6 h-6" />
                  Follow on Instagram
                </motion.a>
                <motion.a
                  href="https://ig.me/m/themimpact"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-full font-medium hover:shadow-2xl hover:shadow-pink-500/30 transition-all"
                >
                  <ExternalLink className="w-6 h-6" />
                  Commission an Art Piece
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
