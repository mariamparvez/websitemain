import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import Masonry from 'react-responsive-masonry';
import { ArrowRight } from 'lucide-react';

export function ArtSection() {
  const { artworks } = useCMS();
  const displayArtworks = artworks.slice(0, 6);

  return (
    <section id="art" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Creative Work</span>
          <h2 className="mt-4 text-gray-900">Art Corner</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A curated collection of my artistic explorations
          </p>
        </motion.div>

        <Masonry columnsCount={3} gutter="1.5rem">
          {displayArtworks.map((artwork, idx) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{artwork.title}</h3>
                {artwork.description && (
                  <p className="text-white/80 text-sm mt-1">{artwork.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </Masonry>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
