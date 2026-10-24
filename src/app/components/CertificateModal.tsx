import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export function CertificateModal({ isOpen, onClose, pdfUrl, title }: CertificateModalProps) {
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#121212]/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-[#121212] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#fdfdfd]/15 bg-[#121212]">
              <h3 className="text-lg font-bold text-[#fdfdfd]">{title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#232323] rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-[#b8b8b8]" />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="bg-[#1b1b1b] p-4 flex items-center justify-center">
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-[70vh]"
                title={title}
              >
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  className="w-full h-[70vh]"
                />
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
