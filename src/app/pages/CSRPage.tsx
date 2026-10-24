import { motion } from "motion/react";
import { ArrowLeft, Heart, Users, Lightbulb, GraduationCap, Sparkles, Target, Mail, HandHeart } from "lucide-react";
import { Link } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function CSRPage() {
  const sections = [
    {
      icon: Heart,
      title: "1. Our Commitment to Social Responsibility",
      content: `At Mariam Parvez Design Services, we believe that success is not just measured by business achievements, but by the positive impact we create in our communities and the world. Our Corporate Social Responsibility (CSR) policy reflects our commitment to ethical business practices, community empowerment, and sustainable growth.

We are dedicated to using our skills, resources, and platform to make a meaningful difference in society. Through design education, mentorship, and community initiatives, we strive to create opportunities for aspiring designers and contribute to the creative ecosystem in India and Pakistan.

Our CSR initiatives align with our core values of creativity, education, empowerment, and inclusivity. We believe that great design has the power to transform lives and solve real-world problems.`
    },
    {
      icon: GraduationCap,
      title: "2. Design Education & Skill Development",
      content: `Education is at the heart of our CSR initiatives. We are committed to making design education accessible to aspiring designers, especially those from underserved communities.

Our educational initiatives include:
• Free design resources, tutorials, and articles shared through our blog and social media
• Discounted coaching sessions for students and recent graduates
• Pro-bono design workshops for educational institutions
• Mentorship programs for young designers entering the industry
• Sharing industry insights and best practices to help designers grow

We believe that by empowering the next generation of designers with knowledge and skills, we contribute to a more creative and innovative future. We regularly share our expertise through various platforms to help aspiring designers learn and grow.`
    },
    {
      icon: Users,
      title: "3. Community Empowerment",
      content: `We are committed to empowering our local communities, particularly women and young professionals in the design industry.

Community initiatives include:
• Supporting women in design through mentorship and networking opportunities
• Collaborating with local artists and designers on community projects
• Providing design services at reduced rates for non-profit organizations
• Participating in design communities and forums to share knowledge
• Creating opportunities for freelancers and independent designers

We believe in the power of community and actively work to create spaces where designers can connect, learn, and grow together. Our goal is to build a supportive ecosystem that nurtures talent and celebrates creativity.`
    },
    {
      icon: HandHeart,
      title: "4. Support for Non-Profit Organizations",
      content: `We recognize the important work done by non-profit organizations and social enterprises. To support their missions, we offer special programs:

Non-profit support includes:
• Discounted design services (up to 30% off) for registered non-profits
• Pro-bono work for select causes aligned with our values (education, arts, women empowerment)
• Priority scheduling for urgent non-profit projects
• Free consultations to help non-profits improve their digital presence
• Recommendations and introductions to other service providers when needed

Organizations working in education, arts and culture, women's empowerment, and community development are particularly encouraged to reach out. We evaluate non-profit requests on a case-by-case basis and select projects where we can make the most impact.`
    },
    {
      icon: Sparkles,
      title: "5. Promoting Art and Creativity",
      content: `As both a designer and an artist, Mariam Parvez is passionate about promoting art and creativity in society.

Art promotion initiatives include:
• Creating and sharing original artwork to inspire others
• Using a portion of art sales proceeds to support art education initiatives
• Encouraging art appreciation through social media and online platforms
• Collaborating with other artists to showcase diverse creative perspectives
• Making art accessible through various price points and formats

We believe art enriches lives and communities. By sharing our artistic journey and supporting other artists, we hope to contribute to a more vibrant and creative society that values artistic expression.`
    },
    {
      icon: Lightbulb,
      title: "6. Ethical Business Practices",
      content: `We are committed to conducting business with the highest standards of ethics and integrity.

Our ethical commitments include:
• Fair pricing and transparent business practices
• Respecting intellectual property rights of others
• Maintaining client confidentiality and data privacy
• Providing honest timelines and realistic expectations
• Clear communication and professional conduct
• Fair treatment of all clients regardless of project size
• Honoring commitments and delivering quality work

We believe that ethical business practices build trust, create lasting relationships, and contribute to a healthier business ecosystem. We hold ourselves accountable to these standards in every project and interaction.`
    },
    {
      icon: Target,
      title: "7. Sustainable Design Practices",
      content: `As a digital designer, we are conscious of our environmental impact and strive to implement sustainable practices.

Sustainability efforts include:
• Promoting digital-first solutions to reduce paper waste
• Encouraging clients to use sustainable printing options when physical materials are needed
• Designing for longevity to reduce the need for frequent redesigns
• Optimizing websites for performance to reduce energy consumption
• Supporting eco-friendly packaging for artwork shipments
• Minimizing waste in our art practice through conscious material choices

While our environmental footprint is relatively small as a digital service provider, we believe every effort counts. We continuously look for ways to make our practice more sustainable and encourage our clients to consider sustainability in their projects.`
    },
    {
      icon: Users,
      title: "8. Diversity and Inclusion",
      content: `We are committed to fostering diversity and inclusion in the design industry and our business practices.

Diversity and inclusion initiatives include:
• Welcoming clients and collaborators from all backgrounds
• Promoting diverse representation in our work
• Creating accessible designs that consider users with different abilities
• Supporting women in design and technology
• Advocating for inclusive design practices in the industry
• Respecting cultural differences and perspectives

We believe that diversity strengthens creativity and innovation. By embracing different perspectives and experiences, we create better designs and contribute to a more inclusive design community.`
    },
    {
      icon: GraduationCap,
      title: "9. Knowledge Sharing and Content Creation",
      content: `We believe in giving back to the design community through free educational content.

Content initiatives include:
• Publishing blog articles on design topics, tutorials, and industry insights
• Sharing design tips and resources on social media platforms
• Creating case studies to help others learn from real projects
• Participating in design discussions and forums
• Answering questions from aspiring designers
• Documenting our design process to help others improve

By sharing our knowledge and experiences, we hope to help aspiring designers learn, grow, and succeed in their careers. We are committed to making quality design education accessible to everyone.`
    },
    {
      icon: Target,
      title: "10. Future CSR Goals",
      content: `We are continuously working to expand and improve our CSR initiatives. Our future goals include:

Short-term goals (1-2 years):
• Launch a structured mentorship program for emerging designers
• Partner with at least 2-3 non-profit organizations annually
• Create a scholarship or grant for design students
• Develop free design courses or workshops
• Increase pro-bono work capacity

Long-term goals (3-5 years):
• Establish a design education fund for underprivileged students
• Create a community platform for designers to connect and collaborate
• Develop partnerships with educational institutions
• Expand support for artists and creative professionals
• Measure and report on CSR impact annually

We are committed to growing our positive impact alongside our business growth.`
    },
    {
      icon: Heart,
      title: "11. Volunteer and Pro-Bono Work",
      content: `We dedicate a portion of our time and resources to volunteer and pro-bono work each year.

Pro-bono commitments:
• At least 2-3 pro-bono projects annually for qualifying organizations
• Free design consultations for non-profits and social enterprises
• Volunteer participation in design-related community events
• Support for educational institutions and student projects
• Emergency design assistance for crisis response organizations

Qualifying criteria for pro-bono work:
• Registered non-profit or social enterprise status
• Mission aligned with our values (education, arts, community development)
• Demonstrable positive impact in the community
• Clear project scope and objectives
• Reasonable timeline and deliverables

To apply for pro-bono services, please contact us with details about your organization and project needs.`
    },
    {
      icon: Mail,
      title: "12. Partnership and Collaboration Opportunities",
      content: `We welcome partnerships and collaborations that align with our CSR mission.

We are interested in:
• Collaborating with educational institutions on design programs
• Partnering with non-profits on impactful projects
• Joining forces with other designers and creatives on community initiatives
• Supporting events and conferences focused on design education
• Contributing to publications and platforms that promote design learning

If you have an initiative or project that aligns with our CSR goals, we would love to hear from you. Together, we can create greater impact and contribute to a better future for the design community and society.

Contact us at: designwithmariam@gmail.com`
    }
  ];

  return (
    <>
      <SEO 
        title="CSR Policy - Corporate Social Responsibility | Mariam Parvez"
        description="Learn about Mariam Parvez's Corporate Social Responsibility initiatives including design education, community empowerment, non-profit support, and ethical business practices."
        keywords="CSR Policy, Corporate Social Responsibility, Design Education, Community Support, Pro Bono Design, Mariam Parvez CSR"
        canonicalUrl="https://mariamparvez.in/csr"
      />
      <Navigation />
      <div className="relative bg-[#010408] min-h-screen text-white overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 mb-6">
              <Heart className="w-10 h-10 text-rose-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-500 bg-clip-text text-transparent">
              Corporate Social Responsibility
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our commitment to making a positive impact through design, education, and community support
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
            className="mb-12 p-6 md:p-8 bg-gradient-to-br from-rose-900/20 to-pink-900/20 backdrop-blur-sm border border-rose-500/20 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4 text-rose-300">Giving Back Through Design</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Mariam Parvez Design Services, we believe that with success comes the responsibility to give back. Our 
              Corporate Social Responsibility (CSR) policy outlines our commitment to using our skills, resources, and 
              platform to create positive change in our communities and the design industry.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through education, mentorship, community support, and ethical practices, we strive to empower aspiring 
              designers, support meaningful causes, and contribute to a more creative, inclusive, and sustainable future. 
              This is not just policy—it's our purpose.
            </p>
          </motion.div>

          {/* CSR Sections */}
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
            className="mt-16 p-8 md:p-12 bg-gradient-to-br from-rose-900/30 to-pink-900/30 backdrop-blur-sm border border-rose-500/30 rounded-3xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Partner With Us for Social Impact</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Are you a non-profit, educational institution, or community organization? Let's collaborate to create meaningful impact through design.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full font-medium hover:shadow-2xl hover:shadow-rose-500/30 transition-all"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
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
