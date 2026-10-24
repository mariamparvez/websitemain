import { motion } from 'motion/react';
import { useCMS } from '../../contexts/CMSContext';
import { Quote } from 'lucide-react';
import { useState } from 'react';

export function TestimonialsSection() {
  const { testimonials } = useCMS();
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-orange-500 uppercase tracking-wider">Client Love</span>
          <h2 className="mt-4 text-gray-900">What People Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feedback from clients I've had the pleasure to work with
          </p>
        </motion.div>

        <div className="relative">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: idx === current ? 1 : 0,
                display: idx === current ? 'block' : 'none'
              }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-pink-50 p-12 rounded-3xl shadow-xl"
            >
              <Quote className="w-12 h-12 text-orange-300 mb-6" />

              <p className="text-xl text-gray-800 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.designation} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
