import { motion } from "motion/react";
import { ArrowLeft, Scale, FileText, Shield, Clock, CreditCard, AlertCircle, Mail } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: `By accessing and using this website (mariamparvez.in), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website. These terms apply to all visitors, users, and others who access or use the website.`
    },
    {
      icon: Shield,
      title: "2. Use of Services",
      content: `The services offered on this website include UI/UX design, web design, graphic design, design coaching, and art sales. All services are subject to availability and may be modified or discontinued at any time without notice. You agree to use the services only for lawful purposes and in accordance with these terms.`
    },
    {
      icon: CreditCard,
      title: "3. Payment Terms",
      content: `Payment terms will be discussed and agreed upon before the commencement of any project. For design services, a deposit may be required before work begins. Full payment is due upon project completion unless otherwise specified in a separate contract. For artwork purchases, payment is required before shipment. All prices are in Indian Rupees (INR) unless otherwise stated.`
    },
    {
      icon: Clock,
      title: "4. Project Timeline & Deliverables",
      content: `Project timelines are estimates and may be subject to change based on project scope, client feedback, and revisions. Mariam Parvez will make reasonable efforts to meet agreed deadlines. Delays caused by late client feedback or approval will extend the project timeline accordingly. Deliverables will be provided in the format specified in the project agreement.`
    },
    {
      icon: FileText,
      title: "5. Revisions & Changes",
      content: `The number of revisions included in a project will be specified in the project agreement or proposal. Additional revisions beyond the agreed scope may incur additional charges. Significant changes to project scope after work has commenced may require a new quote and adjustment to the timeline.`
    },
    {
      icon: Shield,
      title: "6. Intellectual Property Rights",
      content: `Upon full payment, clients receive ownership of the final deliverables for their agreed-upon use. Mariam Parvez retains the right to display completed work in portfolios, case studies, and promotional materials unless otherwise agreed in writing. Original artwork remains the intellectual property of Mariam Parvez until full payment is received. All design elements, sketches, and preliminary work remain the property of Mariam Parvez.`
    },
    {
      icon: AlertCircle,
      title: "7. Cancellation & Refunds",
      content: `Clients may cancel a project at any time. However, payment will be required for work completed up to the point of cancellation. Deposits are non-refundable. For artwork purchases, cancellations must be made within 24 hours of order placement for a full refund. After 24 hours, refunds are at the discretion of Mariam Parvez.`
    },
    {
      icon: Scale,
      title: "8. Client Responsibilities",
      content: `Clients are responsible for providing timely feedback, content, images, and any other materials required for project completion. Clients must ensure they have the right to use any materials they provide. Clients are responsible for the accuracy of information provided and the legality of their requested work.`
    },
    {
      icon: Shield,
      title: "9. Confidentiality",
      content: `Mariam Parvez agrees to keep confidential any sensitive business information shared during the course of a project. Clients agree to keep confidential any proprietary design processes, techniques, or methodologies shared by Mariam Parvez. Both parties may disclose information as required by law.`
    },
    {
      icon: AlertCircle,
      title: "10. Limitation of Liability",
      content: `Mariam Parvez shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the services. The total liability of Mariam Parvez for any claim arising out of these terms shall not exceed the amount paid for the specific service or product in question.`
    },
    {
      icon: FileText,
      title: "11. Website Content & Accuracy",
      content: `While every effort is made to keep the information on this website accurate and up-to-date, Mariam Parvez makes no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the website or the information contained on the website. Any reliance you place on such information is strictly at your own risk.`
    },
    {
      icon: Shield,
      title: "12. Third-Party Links",
      content: `This website may contain links to third-party websites or services that are not owned or controlled by Mariam Parvez. Mariam Parvez has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Mariam Parvez shall not be responsible for any damage or loss caused by use of any third-party content.`
    },
    {
      icon: Mail,
      title: "13. Contact Information",
      content: `All inquiries regarding services should be directed to designwithmariam@gmail.com. For artwork purchases, please contact via Instagram @themimpact or email. Response time is typically within 24-48 hours during business days.`
    },
    {
      icon: Clock,
      title: "14. Modifications to Terms",
      content: `Mariam Parvez reserves the right to modify or replace these terms at any time. If a revision is material, reasonable notice will be provided before any new terms take effect. What constitutes a material change will be determined at the sole discretion of Mariam Parvez. Your continued use of the website following any changes constitutes acceptance of those changes.`
    },
    {
      icon: Scale,
      title: "15. Governing Law",
      content: `These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms or use of the website shall be subject to the exclusive jurisdiction of the courts of India.`
    },
    {
      icon: FileText,
      title: "16. Entire Agreement",
      content: `These terms constitute the entire agreement between you and Mariam Parvez regarding the use of the website and supersede all prior agreements and understandings. For specific design projects, a separate project agreement or proposal may be provided which will supplement these terms.`
    }
  ];

  return (
    <>
      <SEO 
        title="Terms and Conditions - Mariam Parvez"
        description="Read the terms and conditions for using Mariam Parvez's design services, website, and purchasing artwork. Comprehensive terms covering projects, payments, intellectual property, and more."
        keywords="Terms and Conditions, Legal Terms, Service Agreement, Design Services Terms, Mariam Parvez Terms"
        canonicalUrl="https://mariamparvez.in/terms"
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
              <Scale className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-[#999999] text-lg max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
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
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Welcome to Mariam Parvez Design Services</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship with the mariamparvez.in website 
              (the "Service") operated by Mariam Parvez ("us", "we", or "our"). Please read these Terms and Conditions carefully 
              before using the Service. Your access to and use of the Service is conditioned on your acceptance of and compliance 
              with these Terms. By accessing or using the Service, you agree to be bound by these Terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-[#999999] mb-8 max-w-2xl mx-auto">
              If you have any questions or concerns about these Terms and Conditions, please don't hesitate to contact us.
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
