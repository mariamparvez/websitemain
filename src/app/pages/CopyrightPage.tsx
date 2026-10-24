import { motion } from "motion/react";
import { ArrowLeft, Copyright, Shield, Image, FileText, Palette, Code, Mail } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function CopyrightPage() {
  const sections = [
    {
      icon: Copyright,
      title: "1. Copyright Ownership",
      content: `All content on mariamparvez.in, including but not limited to text, graphics, logos, images, artwork, photographs, designs, user interface elements, visual interfaces, interactive features, and software, is the exclusive property of Mariam Parvez unless otherwise stated.

All content is protected by international copyright laws, trademark laws, and other intellectual property rights. The compilation, organization, and display of the content, as well as all software and inventions used on and in connection with this website, are the exclusive property of Mariam Parvez.

Copyright © ${new Date().getFullYear()} Mariam Parvez. All Rights Reserved.`
    },
    {
      icon: Shield,
      title: "2. Trademark Rights",
      content: `The following names, logos, and branding are trademarks or service marks of Mariam Parvez:
• Mariam Parvez
• The M Impact
• themimpact
• All associated logos and designs

These trademarks may not be used in connection with any product or service that is not affiliated with Mariam Parvez, in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits Mariam Parvez.

All other trademarks not owned by Mariam Parvez that appear on this website are the property of their respective owners.`
    },
    {
      icon: Palette,
      title: "3. Design Work and Portfolio",
      content: `All design work, including UI/UX designs, web designs, graphic designs, illustrations, and creative concepts displayed in the portfolio section, are original works created by Mariam Parvez and are protected by copyright.

For client projects:
• Clients receive usage rights for their specific agreed-upon purposes upon full payment
• Mariam Parvez retains the right to display the work in portfolios and promotional materials
• Original source files and design elements remain the intellectual property of Mariam Parvez unless otherwise agreed in writing
• Clients may not resell, redistribute, or claim authorship of the designs

For personal/speculative work:
• All rights are retained by Mariam Parvez
• Unauthorized use, reproduction, or distribution is strictly prohibited`
    },
    {
      icon: Image,
      title: "4. Artwork and Paintings",
      content: `All original artwork, including acrylic paintings, watercolor pieces, sketches, mandalas, and digital art displayed on this website, is the exclusive property of Mariam Parvez and is protected by copyright.

Copyright ownership:
• Physical artwork: Upon purchase and full payment, the buyer owns the physical piece but not the copyright
• Digital reproductions: Copyright remains with Mariam Parvez
• Buyer may not reproduce, photograph for commercial use, or create derivatives of the artwork
• Mariam Parvez retains the right to photograph artwork for portfolios, prints, and promotional use

Photographs of artwork may not match the exact colors of the original due to screen settings and photography conditions, but copyright applies to both the original work and all reproductions.`
    },
    {
      icon: FileText,
      title: "5. Written Content",
      content: `All written content on this website, including but not limited to blog posts, articles, case studies, descriptions, testimonials compilation, and website copy, is the intellectual property of Mariam Parvez and is protected by copyright.

This includes:
• Blog articles and design tutorials
• Case study write-ups and project descriptions
• Service descriptions and website copy
• Social media content linked from this website
• Email newsletters and communications

You may not reproduce, republish, or redistribute this content without explicit written permission from Mariam Parvez. Brief excerpts may be quoted with proper attribution and a link back to the original source.`
    },
    {
      icon: Code,
      title: "6. Website Design and Code",
      content: `The design, layout, structure, and code of this website are the exclusive property of Mariam Parvez and are protected by copyright.

This includes:
• Visual design and user interface elements
• Color schemes, typography, and layout
• Custom graphics and icons
• HTML, CSS, JavaScript, and other code
• Interactive features and animations

You may not copy, reverse engineer, decompile, disassemble, or create derivative works based on this website's design or code. Screenshots of the website may not be used for commercial purposes without permission.`
    },
    {
      icon: Shield,
      title: "7. Permitted Uses",
      content: `You are permitted to:
• View and browse the website for personal, non-commercial purposes
• Share links to the website on social media with proper attribution
• Contact us for permission to use specific content
• Reference our work with proper attribution and links (for editorial/educational purposes)

You must obtain written permission before:
• Using any design work in presentations or publications
• Reproducing artwork for any purpose
• Using screenshots of the website for commercial purposes
• Creating derivatives of any copyrighted material
• Using our trademarks or branding

For permission requests, please contact: designwithmariam@gmail.com`
    },
    {
      icon: FileText,
      title: "8. Client Work and Confidentiality",
      content: `For design projects created for clients:
• Upon full payment, clients receive a license to use the work for agreed-upon purposes
• Copyright of the final deliverables may transfer to clients as specified in project agreements
• Preliminary designs, sketches, and unused concepts remain the property of Mariam Parvez
• Source files (e.g., .psd, .ai, .fig) remain the property of Mariam Parvez unless specifically purchased
• Mariam Parvez retains portfolio rights to display completed work unless prohibited by NDA

Confidential client information is protected and will not be disclosed without permission. Refer to our Privacy Policy for more information.`
    },
    {
      icon: Copyright,
      title: "9. Third-Party Content",
      content: `Some content on this website may be licensed from third parties or used with permission:
• Stock photos (when used) are properly licensed
• Fonts are licensed for web use
• Third-party libraries and frameworks are used in accordance with their licenses
• Client logos and trademarks are displayed with permission for portfolio purposes

If you believe any content on this website infringes your copyright, please contact us immediately with:
• Your contact information
• Description of the copyrighted work
• Location of the allegedly infringing material
• A statement of good faith belief

We will investigate and take appropriate action.`
    },
    {
      icon: Shield,
      title: "10. Copyright Infringement",
      content: `Mariam Parvez takes copyright infringement seriously. Unauthorized use of any copyrighted material from this website may result in:
• Immediate cease and desist notices
• Removal of infringing content
• Legal action and pursuit of damages
• Criminal prosecution where applicable

If you discover unauthorized use of Mariam Parvez's copyrighted work elsewhere on the internet, please report it to designwithmariam@gmail.com with details of the infringement.

We also respect the intellectual property rights of others and expect users of our website to do the same.`
    },
    {
      icon: FileText,
      title: "11. License Grant",
      content: `Mariam Parvez grants you a limited, non-exclusive, non-transferable, revocable license to:
• Access and view the website content for personal, non-commercial use
• Download and temporarily store pages for personal browsing
• Print individual pages for personal reference

This license does not include:
• Any commercial use or resale
• Collection, copying, or use of product listings or descriptions
• Making derivative works of any content
• Downloading or copying account information for the benefit of another party
• Using data mining, robots, or similar data gathering tools
• Any use that competes with or displaces the market for the website or its content

This license may be revoked at any time without notice.`
    },
    {
      icon: Mail,
      title: "12. Requesting Permission",
      content: `If you wish to use any copyrighted material from this website, please submit a written request to designwithmariam@gmail.com with the following information:
• Your name and contact information
• Specific content you wish to use (include URLs if applicable)
• Intended use and purpose
• Duration of use
• Geographic distribution
• Medium of publication

Permission requests are evaluated on a case-by-case basis. Commercial use typically requires a licensing fee. Educational and non-profit use may be considered for free licensing with proper attribution.

Response time is typically 5-7 business days. Use of any content without permission may result in legal action.`
    }
  ];

  return (
    <>
      <SEO 
        title="Copyright & All Rights Reserved - Mariam Parvez"
        description="Copyright information and intellectual property rights for Mariam Parvez's website, designs, artwork, and content. Learn about permitted uses and restrictions."
        keywords="Copyright, All Rights Reserved, Intellectual Property, Trademark, Design Rights, Mariam Parvez Copyright"
        canonicalUrl="https://mariamparvez.in/copyright"
      />
      <Navigation />
      <div className="relative bg-[#010408] min-h-screen text-white overflow-x-hidden">
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
              <Copyright className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Copyright & All Rights Reserved
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Intellectual property rights and copyright information for all content on this website
            </p>
            <p className="text-gray-500 text-sm mt-4">
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
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Copyright Notice</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              © {new Date().getFullYear()} Mariam Parvez. All Rights Reserved.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content on this website, including but not limited to designs, artwork, photographs, text, graphics, 
              logos, and software, is the exclusive property of Mariam Parvez and is protected by international copyright, 
              trademark, and intellectual property laws.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Unauthorized use, reproduction, or distribution of any materials from this website without express written 
              permission is strictly prohibited and may result in legal action.
            </p>
          </motion.div>

          {/* Copyright Sections */}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Permission to Use Content?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If you wish to use any content from this website, please submit a permission request with details of your intended use.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all"
              >
                <Mail className="w-5 h-5" />
                Request Permission
              </Link>
              <a
                href="mailto:designwithmariam@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-medium hover:bg-white/20 transition-all"
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
