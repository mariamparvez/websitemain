import { motion } from "motion/react";
import { ArrowLeft, Shield, Eye, Cookie, Lock, Database, UserCheck, Mail, FileText } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us when you:
• Contact us through forms on our website
• Subscribe to our newsletter or updates
• Request design services or purchase artwork
• Communicate with us via email or social media

Information collected may include:
• Name and contact information (email address, phone number)
• Project details and requirements
• Payment information (processed securely through third-party payment processors)
• Correspondence and communications with us

We also automatically collect certain information when you visit our website:
• Browser type and version
• Device information
• IP address and location data
• Pages visited and time spent on site
• Referring website addresses`
    },
    {
      icon: Database,
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:
• Provide, maintain, and improve our services
• Process transactions and send related information
• Respond to your comments, questions, and requests
• Send you technical notices, updates, and support messages
• Communicate about products, services, offers, and events
• Monitor and analyze trends, usage, and activities
• Detect, prevent, and address technical issues
• Personalize and improve your experience on our website
• Carry out any other purpose described to you at the time of collection

We will never sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent.`
    },
    {
      icon: Lock,
      title: "3. Data Security",
      content: `We take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it against unauthorized access, alteration, disclosure, or destruction.

Security measures include:
• Secure SSL/TLS encryption for data transmission
• Regular security assessments and updates
• Access controls and authentication procedures
• Secure storage of sensitive information
• Regular backups of data

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.`
    },
    {
      icon: Cookie,
      title: "4. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are stored on your device.

Types of cookies we use:
• Essential cookies: Required for the website to function properly
• Analytics cookies: Help us understand how visitors interact with our website
• Preference cookies: Remember your settings and preferences
• Marketing cookies: Track your browsing habits to show relevant content

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`
    },
    {
      icon: UserCheck,
      title: "5. Third-Party Services",
      content: `We may employ third-party companies and services to facilitate our website and services:
• Analytics services (e.g., Google Analytics)
• Payment processors (for secure payment processing)
• Email service providers (for newsletters and communications)
• Social media platforms (for content sharing and engagement)
• Form submission services (FormSubmit for contact forms)

These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose. Each third-party service has its own privacy policy governing the use of your information.`
    },
    {
      icon: Shield,
      title: "6. Your Rights and Choices",
      content: `You have certain rights regarding your personal information:
• Access: You can request access to the personal information we hold about you
• Correction: You can request correction of inaccurate or incomplete information
• Deletion: You can request deletion of your personal information
• Objection: You can object to the processing of your personal information
• Data portability: You can request a copy of your data in a structured format
• Withdrawal of consent: You can withdraw consent for data processing at any time

To exercise these rights, please contact us at designwithmariam@gmail.com. We will respond to your request within a reasonable timeframe.`
    },
    {
      icon: FileText,
      title: "7. Children's Privacy",
      content: `Our website and services are not intended for children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from children without verification of parental consent, we will take steps to remove that information from our servers.`
    },
    {
      icon: Database,
      title: "8. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

Retention periods:
• Contact form submissions: Retained for the duration of the inquiry and up to 2 years afterward
• Client project data: Retained for the duration of the project and up to 7 years for legal and tax purposes
• Newsletter subscriptions: Retained until you unsubscribe
• Analytics data: Retained according to our analytics provider's policies (typically 26 months)

When we no longer need your information, we will securely delete or anonymize it.`
    },
    {
      icon: Shield,
      title: "9. International Data Transfers",
      content: `Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ from those in your jurisdiction.

If you are located outside India/Pakistan and choose to provide information to us, please note that we transfer the data, including personal information, to India/Pakistan and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.`
    },
    {
      icon: FileText,
      title: "10. Changes to This Privacy Policy",
      content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page. Your continued use of the website after any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide by the modified Privacy Policy.`
    },
    {
      icon: Mail,
      title: "11. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: designwithmariam@gmail.com
Website: mariamparvez.in
Instagram: @themimpact

We will make every effort to respond to your inquiry within 48 hours during business days.`
    }
  ];

  return (
    <>
      <SEO 
        title="Privacy Policy - Mariam Parvez"
        description="Read Mariam Parvez's Privacy Policy to understand how we collect, use, protect, and manage your personal information when you use our design services and website."
        keywords="Privacy Policy, Data Protection, Personal Information, Cookie Policy, GDPR, Data Security, Mariam Parvez Privacy"
        canonicalUrl="https://mariamparvez.in/privacy"
      />
      <Navigation />
      <div className="relative bg-[#121212] min-h-screen text-[#fdfdfd] overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-24">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Shield className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-[#999999] text-lg max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-[#a3a3a3] text-sm mt-4">
              Last Updated: April 6, 2026
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 p-6 md:p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Our Commitment to Your Privacy</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mariam Parvez ("we", "our", or "us") operates mariamparvez.in (the "Website"). This Privacy Policy informs you 
              of our policies regarding the collection, use, and disclosure of personal information when you use our Website 
              and the choices you have associated with that data.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use your data to provide and improve our services. By using the Website, you agree to the collection and 
              use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used 
              have the same meanings as in our Terms and Conditions.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 3) }}
                className="p-6 md:p-8 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 backdrop-blur-sm border border-blue-500/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-300">{section.title}</h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-8 md:p-12 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-[#999999] mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
              <a
                href="mailto:designwithmariam@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#fdfdfd]/10 backdrop-blur-sm border border-[#fdfdfd]/30 rounded-full font-medium hover:bg-[#fdfdfd]/20 transition-all"
              >
                designwithmariam@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
