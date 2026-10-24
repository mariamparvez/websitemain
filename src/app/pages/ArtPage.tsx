import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import art1 from "figma:asset/44bc4ae49779224ab35cf09963389b8c58f729aa.png";
import art2 from "figma:asset/b0ab5f894f83d2851c3736ef69232cb7974cb671.png";
import art3 from "figma:asset/ed51938dd8cf845db517dbbd5ea02156401e66e3.png";
import art4 from "figma:asset/5bcf8dd5d4b7fc164606326bb59f757682c1a005.png";
import art5 from "figma:asset/c80864e580e821e9b0b3afb94c7ccf6d20b40783.png";
import art6 from "figma:asset/774675c43fe003f5321b84fba521c3d9d42c3114.png";

export function ArtPage() {
  return (
    <>
      <SEO
        title="Art Gallery - Mariam Parvez | Original Paintings & Artwork"
        description="Explore Mariam Parvez's art collection featuring acrylic paintings, watercolor, mandala, and sketches. Original artwork by a UI/UX designer and artist."
        keywords="Mariam Art, Mariam Parvez Paintings, Acrylic Art India, Watercolor Paintings, Mandala Art"
        canonicalUrl="https://mariamparvez.in/art"
        isArtPage={true}
      />
      <Navigation />
      <div className="relative bg-white min-h-screen overflow-x-hidden max-w-full">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 bg-gradient-to-br from-[#3d38f5] to-[#6b63f7]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-medium">🎨 Art Portfolio</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-black mb-6 text-white leading-tight">
                  I also paint, sculpt and sketch!
                </h1>

                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Check out my Art Pieces on my art gallery. I create{" "}
                  <span className="font-bold">Acrylic Painting</span>,{" "}
                  <span className="font-bold">Watercolor Painting</span>,{" "}
                  <span className="font-bold">Russian Sculpture Art</span>,{" "}
                  <span className="font-bold">Sketching</span>, and{" "}
                  <span className="font-bold">Mandala Art</span>
                </p>

                <a
                  href="https://www.instagram.com/themimpact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#3d38f5] px-8 py-4 rounded-full font-bold hover:scale-105 transition-all"
                >
                  @themimpact →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={art1}
                    alt="Art 1"
                    className="rounded-2xl border-2 border-white/10"
                  />
                  <img
                    src={art2}
                    alt="Art 2"
                    className="rounded-2xl border-2 border-white/10 mt-8"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
          >
            My Creations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: art1, title: "Cherry Blossom Dream", category: "Acrylic" },
              { src: art2, title: "Ocean Waves", category: "Watercolor" },
              { src: art3, title: "Spring Blossom", category: "Acrylic" },
              { src: art4, title: "Blue Abstract", category: "Acrylic" },
              { src: art5, title: "Moonlit Night", category: "Mandala" },
              { src: art6, title: "Mountain Serenity", category: "Acrylic" }
            ].map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-[#3d38f5] hover:scale-105 transition-all duration-300"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm mb-1">{art.category}</span>
                  <h3 className="text-white text-xl font-bold">{art.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[#f8f9fa]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Connect with me to view all of my art pieces
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Follow me on Instagram to see more artwork available for purchase
              </p>
              <a
                href="https://www.instagram.com/themimpact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3d38f5] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2d28d5] hover:scale-105 transition-all"
              >
                Follow @themimpact →
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
