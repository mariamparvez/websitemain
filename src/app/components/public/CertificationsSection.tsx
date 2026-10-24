import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import { Award, ExternalLink } from 'lucide-react';

export function CertificationsSection() {
  const { certifications } = useCMS();

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-br from-purple-50/50 via-white to-orange-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Credentials</span>
          <h2 className="mt-4 text-gray-900">Certifications & Training</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-orange-100 hover:border-orange-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.organization}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{cert.year}</span>
                    {cert.credentialLink && (
                      <a
                        href={cert.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
