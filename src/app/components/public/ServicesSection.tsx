import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import * as Icons from 'lucide-react';

export function ServicesSection() {
  const { services } = useCMS();

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-br from-orange-50/50 via-white to-pink-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">What I Offer</span>
          <h2 className="mt-4 text-gray-900">Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive design and development solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }> || Icons.Box;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-orange-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors inline-flex items-center gap-2">
                  {service.cta}
                  <Icons.ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
