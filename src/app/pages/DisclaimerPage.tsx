import { motion } from "motion/react";
import { ArrowLeft, AlertTriangle, FileWarning, Info, ExternalLink, Mail, ShieldAlert } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function DisclaimerPage() {
  const sections = [
    {
      icon: AlertTriangle,
      title: "1. General Information",
      content: `The information provided on mariamparvez.in is for general informational purposes only. All information on the website is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.

Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the website or reliance on any information provided on the website. Your use of the website and your reliance on any information on the website is solely at your own risk.`
    },
    {
      icon: FileWarning,
      title: "2. Professional Advice Disclaimer",
      content: `The website contains information about design services, coaching, and creative work. This information is not intended as professional advice for your specific situation. While Mariam Parvez is an experienced UI/UX Designer, Web Designer, and Graphic Designer, the content on this website should not be used as a substitute for professional consultation for your specific project needs.

Always seek the advice of qualified professionals with any questions you may have regarding your specific design requirements, technical implementations, or business decisions. Never disregard professional advice or delay in seeking it because of something you have read on this website.`
    },
    {
      icon: ShieldAlert,
      title: "3. No Warranties",
      content: `This website is provided "as is" and "as available" without any representations or warranties, express or implied. Mariam Parvez makes no representations or warranties in relation to this website or the information and materials provided on this website.

We do not warrant that:
• The website will be constantly available, or available at all
• The information on this website is complete, true, accurate, or non-misleading
• The website will be secure or free from bugs or viruses
• The quality of any products, services, information, or other material obtained through the website will meet your expectations

Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial, or design matter, you should consult an appropriate professional.`
    },
    {
      icon: ExternalLink,
      title: "4. External Links Disclaimer",
      content: `The website may contain links to external websites that are not provided or maintained by or in any way affiliated with Mariam Parvez. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s) or their content.

We have no control over the nature, content, and availability of those external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. We take no responsibility for the content of linked websites.

Please be aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies and Terms of Service of these sites before engaging in any business or uploading any information.`
    },
    {
      icon: Info,
      title: "5. Portfolio and Case Studies",
      content: `All portfolio work, case studies, and design examples displayed on this website are the intellectual property of Mariam Parvez unless otherwise stated. These examples are shown for illustrative purposes to demonstrate skills, style, and capabilities.

Project details, client names, and outcomes shown in case studies may have been modified or simplified for presentation purposes. Results from past projects are not necessarily indicative of results that may be achieved for future clients. Each project is unique and depends on numerous factors including scope, budget, timeline, and client collaboration.

Images, mockups, and designs shown are protected by copyright and may not be reproduced, copied, or used without explicit written permission from Mariam Parvez.`
    },
    {
      icon: FileWarning,
      title: "6. Testimonials and Reviews Disclaimer",
      content: `Testimonials and reviews displayed on this website represent individual experiences and opinions of clients. These testimonials are not necessarily representative of what any other client may experience when working with Mariam Parvez.

Results and experiences may vary from client to client based on numerous factors including project scope, communication, timelines, and specific requirements. Testimonials are voluntarily provided and may have been edited for length, clarity, or grammatical correctness, but the essence and sentiment remain unchanged.

No guarantee is given that you will experience the same results or satisfaction. Individual results will vary depending on your specific situation, requirements, and level of collaboration during the project.`
    },
    {
      icon: AlertTriangle,
      title: "7. Design Services Disclaimer",
      content: `Design services offered through this website are subject to availability, scope definition, and mutual agreement. All design work is customized to each client's specific needs and requirements.

Mariam Parvez retains the right to refuse service to anyone for any reason at any time. Project timelines, deliverables, and pricing are estimates and may be subject to change based on project complexity, revisions, and client feedback.

Design concepts and deliverables remain the property of Mariam Parvez until full payment is received. Upon full payment, ownership transfers as outlined in the project agreement. Mariam Parvez retains the right to display completed work in portfolios and promotional materials unless specifically prohibited by a written agreement.`
    },
    {
      icon: Info,
      title: "8. Art and Artwork Sales Disclaimer",
      content: `All artwork displayed on this website is original work created by Mariam Parvez. Images of artwork are representative and may vary slightly from the actual physical piece due to photography, screen resolution, and color calibration differences.

Artwork is sold on a first-come, first-served basis and is subject to availability. Prices are subject to change without notice. Once a piece is sold, it will be marked as sold on the website, but there may be a delay in updating the website.

Colors, dimensions, and materials are described as accurately as possible, but slight variations may occur. All artwork sales are final unless the item arrives damaged or significantly different from the description. Please refer to our Terms and Conditions for more information about artwork purchases and returns.`
    },
    {
      icon: ShieldAlert,
      title: "9. Technical Accuracy",
      content: `While efforts are made to ensure the website functions correctly and displays accurately across different devices and browsers, we cannot guarantee that the website will work perfectly on all devices, browsers, or screen sizes.

Technical issues, browser compatibility problems, or display inconsistencies may occur. We are not responsible for any loss or inconvenience caused by technical difficulties, including but not limited to:
• Form submission failures
• Image loading issues
• Navigation problems
• Payment processing errors (handled by third-party processors)
• Email delivery failures

If you experience technical difficulties, please contact us at designwithmariam@gmail.com.`
    },
    {
      icon: FileWarning,
      title: "10. Limitation of Liability",
      content: `To the maximum extent permitted by law, Mariam Parvez shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
• Your use or inability to use the website or services
• Any unauthorized access to or use of our servers
• Any interruption or cessation of transmission to or from the website
• Any bugs, viruses, or malicious code that may be transmitted through the website
• Any errors or omissions in any content
• Any loss or damage incurred as a result of the use of any content posted or transmitted through the website

This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis.`
    },
    {
      icon: AlertTriangle,
      title: "11. Changes to This Disclaimer",
      content: `We reserve the right to modify this disclaimer at any time. Any changes will be effective immediately upon posting to this page. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.

It is your responsibility to review this disclaimer periodically for updates. The "Last Updated" date at the top of this page indicates when the disclaimer was last revised.`
    },
    {
      icon: Mail,
      title: "12. Contact Information",
      content: `If you have any questions about this disclaimer or require clarification on any point, please contact us:

Email: designwithmariam@gmail.com
Website: mariamparvez.in
Instagram: @themimpact

We will respond to your inquiry as soon as possible during business hours.`
    }
  ];

  return (
    <>
      <SEO 
        title="Disclaimer - Mariam Parvez"
        description="Important disclaimer and legal information about using Mariam Parvez's website, design services, and content. Read our terms of use and limitations."
        keywords="Disclaimer, Legal Disclaimer, Terms of Use, Limitations, Mariam Parvez Disclaimer"
        canonicalUrl="https://mariamparvez.in/disclaimer"
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6">
              <AlertTriangle className="w-10 h-10 text-amber-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Disclaimer
            </h1>
            <p className="text-[#999999] text-lg max-w-3xl mx-auto">
              Important information about the use of this website and our services
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
            className="mb-12 p-6 md:p-8 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-sm border border-amber-500/20 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-amber-300">Important Notice</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This disclaimer governs your use of mariamparvez.in. By using this website, you accept this disclaimer in full. 
              If you disagree with any part of this disclaimer, you must not use this website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this disclaimer carefully before using our website or services. This disclaimer, together with our 
              Terms and Conditions and Privacy Policy, constitutes the entire agreement between you and Mariam Parvez regarding 
              the use of this website.
            </p>
          </motion.div>

          {/* Disclaimer Sections */}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions or Concerns?</h2>
            <p className="text-[#999999] mb-8 max-w-2xl mx-auto">
              If you have any questions about this disclaimer or need clarification, please feel free to contact us.
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
