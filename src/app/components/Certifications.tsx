import { motion } from "motion/react";
import { Award, ArrowRight } from "lucide-react";
import { useState } from "react";
import { CertificateModal } from "./CertificateModal";
import { ParticlesBackground } from "./ParticlesBackground";
import adobePdf from "../../imports/adobe-premiere-pro-1.pdf";
import coachingPdf from "../../imports/coaching-and-developing-employees-1.pdf";
import codeAsylumsPdf from "../../imports/code-asylums-1.pdf";
import webDevPdf from "../../imports/complete-web-dev-1.pdf";
import pmSkillsPdf from "../../imports/essential-new-skills-for-project-management-1.pdf";
import futureLearnPdf from "../../imports/future-learn-1.pdf";
import pmAssessmentPdf from "../../imports/project-management-assessment-1.pdf";
import videoProductionPdf from "../../imports/video-production-1.pdf";

const certifications = [
  {
    title: "Adobe Premiere Pro",
    organization: "Adobe",
    icon: "🎬",
    pdfLink: adobePdf
  },
  {
    title: "Coaching and Developing Employees",
    organization: "Professional Development",
    icon: "👥",
    pdfLink: coachingPdf
  },
  {
    title: "Code Asylums",
    organization: "Code Asylums",
    icon: "💻",
    pdfLink: codeAsylumsPdf
  },
  {
    title: "Complete Web Development",
    organization: "Online Learning",
    icon: "🌐",
    pdfLink: webDevPdf
  },
  {
    title: "Essential New Skills for Project Management",
    organization: "Professional Institute",
    icon: "📊",
    pdfLink: pmSkillsPdf
  },
  {
    title: "Future Learn",
    organization: "FutureLearn",
    icon: "📚",
    pdfLink: futureLearnPdf
  },
  {
    title: "Project Management Assessment",
    organization: "Professional Institute",
    icon: "📋",
    pdfLink: pmAssessmentPdf
  },
  {
    title: "Video Production",
    organization: "Creative Academy",
    icon: "🎥",
    pdfLink: videoProductionPdf
  }
];

export function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<{ title: string; pdfLink: string } | null>(null);

  const openCertificate = (cert: { title: string; pdfLink: string }) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  return (
    <section id="certifications" className="relative py-10 overflow-hidden bg-white border-t-2 border-gray-200">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 bg-white rounded-full border-2 border-[#3d38f5]/20"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 text-[#3d38f5]" />
            <span className="text-[#3d38f5] font-bold text-sm">Credentials</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            My Certifications
          </h2>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-4 transition-all duration-300 border-2 border-gray-200 hover:border-[#3d38f5] hover:scale-105 h-full">
                {/* Emoji Icon */}
                <div className="relative mb-3">
                  <div className="text-3xl mb-2">
                    {cert.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-tight">
                    {cert.title}
                  </h3>

                  <div className="mb-3">
                    <p className="text-gray-600 text-xs font-medium">{cert.organization}</p>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-end">
                    <motion.button
                      onClick={() => openCertificate(cert)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3d38f5] text-white rounded-full font-bold hover:bg-[#2d28d5] transition-all text-xs group/btn"
                    >
                      View
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          pdfUrl={selectedCert.pdfLink}
          title={selectedCert.title}
        />
      )}
    </section>
  );
}
