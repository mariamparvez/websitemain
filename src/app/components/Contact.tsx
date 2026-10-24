import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3d38f5] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3d38f5] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-left md:text-center">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] via-[#3d38f5] to-indigo-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl md:mx-auto text-left md:text-center">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#3d38f5]/20 to-[#6b63f7]/20 backdrop-blur-sm border border-[#3d38f5]/20 rounded-3xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 md:mb-6">Get in Touch</h3>
              
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-600 mb-1">Email</p>
                    <a
                      href="mailto:designwithmariam@gmail.com"
                      className="text-lg text-[#3d38f5] hover:text-[#6b63f7] transition-colors break-all"
                    >
                      designwithmariam@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">Location</p>
                    <p className="text-lg text-gray-900">Tamil Nadu, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#3d38f5]/20">
                <p className="text-gray-600 mb-4">Follow me on</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/in/themariamparvez/" },
                    { name: "Behance", url: "https://www.behance.net/themariamparvez" },
                    { name: "Dribbble", url: "https://dribbble.com/themariamparvez" },
                    { name: "Instagram", url: "https://www.instagram.com/themimpact/" },
                    { name: "Medium", url: "https://medium.com/@themariamparvez" }
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#3d38f5] hover:bg-[#3d38f5] border border-[#3d38f5]/20 hover:border-[#3d38f5]/20 rounded-full text-sm transition-all"
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              action="https://formsubmit.co/designwithmariam@gmail.com"
              method="POST"
              className="bg-gradient-to-br from-[#3d38f5]/20 to-[#6b63f7]/20 backdrop-blur-sm border border-[#3d38f5]/20 rounded-3xl p-8 space-y-4 h-full"
            >
              {/* Honeypot */}
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              {/* Disable Captcha */}
              <input type="hidden" name="_captcha" value="false" />
              
              {/* Success Page */}
              <input type="hidden" name="_next" value={window.location.href} />
              
              {/* Subject */}
              <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio!" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#3d38f5] border border-[#3d38f5]/20 rounded-xl focus:border-[#3d38f5]/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#3d38f5] border border-[#3d38f5]/20 rounded-xl focus:border-[#3d38f5]/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  className="w-full px-4 py-3 bg-[#3d38f5] border border-[#3d38f5]/20 rounded-xl focus:border-[#3d38f5]/20 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#3d38f5] via-[#6b63f7] to-indigo-600 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-shadow"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}