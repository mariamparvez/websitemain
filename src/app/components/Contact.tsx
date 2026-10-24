import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";

export function Contact() {
  return (
    <section id="contact" className="py-10 relative overflow-hidden bg-[#1b1b1b] border-t-2 border-[#fdfdfd]/15">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center text-[#fdfdfd]">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] to-[#6b63f7] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-[#b8b8b8] text-base md:text-lg max-w-2xl mx-auto text-center">
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
            <div className="bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-xl font-bold mb-4 text-[#fdfdfd]">Get in Touch</h3>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#3d38f5] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#fdfdfd]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#b8b8b8] mb-1">Email</p>
                    <a
                      href="mailto:designwithmariam@gmail.com"
                      className="text-lg text-[#9a96ff] hover:text-[#6b63f7] transition-colors break-all"
                    >
                      designwithmariam@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[#3d38f5] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#fdfdfd]" />
                  </div>
                  <div>
                    <p className="text-[#b8b8b8] mb-1">Location</p>
                    <p className="text-lg text-[#fdfdfd]">Tamil Nadu, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#fdfdfd]/15">
                <p className="text-[#b8b8b8] mb-4 font-medium">Follow me on</p>
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
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-[#232323] hover:bg-[#3d38f5] text-[#d6d6d6] hover:text-[#fdfdfd] border border-[#fdfdfd]/15 hover:border-[#3d38f5] rounded-full text-sm transition-all"
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
              className="bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-2xl p-6 space-y-4 h-full flex flex-col"
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
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#fdfdfd]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-xl focus:border-[#3d38f5] focus:outline-none transition-all text-[#fdfdfd]"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#fdfdfd]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-xl focus:border-[#3d38f5] focus:outline-none transition-all text-[#fdfdfd]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#fdfdfd]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 bg-[#121212] border-2 border-[#fdfdfd]/15 rounded-xl focus:border-[#3d38f5] focus:outline-none transition-all resize-none text-[#fdfdfd]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3d38f5] text-[#fdfdfd] rounded-xl font-bold hover:bg-[#2d28d5] hover:scale-105 transition-all"
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
