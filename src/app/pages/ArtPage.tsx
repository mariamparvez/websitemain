import { motion } from "motion/react";
import { ArrowLeft, Instagram, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
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
      <SEO
        title="Art Gallery - Mariam Parvez | Acrylic Paintings, Watercolor & Mandala Art"
        description="Explore Mariam Parvez's stunning art collection featuring acrylic paintings, watercolor art, sketches, and intricate mandala designs. Browse and purchase original artwork by a talented UI/UX designer and artist from India & Pakistan."
        keywords="Mariam Parvez Art, Mariam Artist, Art by Mariam, Acrylic Paintings India, Watercolor Art Pakistan, Mandala Art, The M Impact Art, Original Art for Sale, Indian Artist, Pakistani Artist, Designer Artist, UI Designer Art, Mariam Paintings"
        canonicalUrl="https://mariamparvez.in/art"
        isArtPage={true}
      />
      <Navigation />
      <div className="relative bg-[#fdfdfd] min-h-screen text-gray-900 overflow-x-hidden max-w-full">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#3d38f5]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3d38f5]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Hero Grid Section */}
        <section className="relative pt-24 pb-8 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-[#3d38f5] hover:text-[#6b63f7] transition-colors">
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
              className="col-span-2 row-span-2 relative group rounded-3xl overflow-hidden bg-gradient-to-br from-[#3d38f5]/10 to-[#6b63f7]/10 backdrop-blur-sm border border-[#3d38f5]/20 p-8 flex flex-col justify-center items-center text-center hover:border-[#3d38f5]/40 transition-all duration-300"
              style={{
                backgroundImage: `url(${art1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-white/80 group-hover:bg-white/70 transition-all duration-300" />
              <div className="relative z-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get to know me!</h1>
                <p className="text-gray-700 mb-6">Bringing creativity to life through art and design</p>
                <a
                  href="https://www.instagram.com/the.m.impact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>
              </div>
            </motion.div>

            {/* Quick Art Cards */}
            {[art2, art3, art4, art5].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <img src={src} alt={`Art ${idx + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d38f5]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Work Section */}
        <section className="relative py-12 px-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest Work</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(latestScrollRef, 'left')}
                className="p-2 rounded-full bg-white border-2 border-[#3d38f5]/30 text-[#3d38f5] hover:bg-[#3d38f5] hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(latestScrollRef, 'right')}
                className="p-2 rounded-full bg-white border-2 border-[#3d38f5]/30 text-[#3d38f5] hover:bg-[#3d38f5] hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div ref={latestScrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {latestWork.map((art) => (
              <motion.div
                key={art.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all snap-start"
              >
                <img src={art.src} alt={art.title} className="w-full h-80 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-[#3d38f5] font-semibold mb-2">{art.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{art.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{art.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#3d38f5]">{art.price}</span>
                    <button className="flex items-center gap-2 text-[#3d38f5] hover:text-[#6b63f7] transition-colors">
                      View <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Acrylic Paintings */}
        <section className="relative py-12 px-4 bg-white max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Acrylic Paintings</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll(acrylicScrollRef, 'left')}
                className="p-2 rounded-full bg-white border-2 border-[#3d38f5]/30 text-[#3d38f5] hover:bg-[#3d38f5] hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(acrylicScrollRef, 'right')}
                className="p-2 rounded-full bg-white border-2 border-[#3d38f5]/30 text-[#3d38f5] hover:bg-[#3d38f5] hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div ref={acrylicScrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {acrylicPaintings.map((art) => (
              <motion.div
                key={art.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all snap-start border-2 border-gray-100"
              >
                <img src={art.src} alt={art.title} className="w-full h-72 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{art.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{art.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#3d38f5]">{art.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Watercolor & Mandala Sections */}
        <section className="relative py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Watercolor & Mandala Art</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {watercolorPaintings.concat(mandalaArt).map((art, idx) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img src={art.src} alt={art.title} className="w-full h-96 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{art.title}</h3>
                  <p className="text-gray-600 mb-4">{art.description}</p>
                  <span className="text-2xl font-bold text-[#3d38f5]">{art.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
