import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function MLoader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 1250); return () => window.clearTimeout(timer); }, []);
  return <AnimatePresence>{visible && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="fixed inset-0 z-[100] grid place-items-center bg-[#121212]" aria-label="Loading portfolio">
    <svg width="170" height="126" viewBox="0 0 170 126" fill="none" aria-hidden="true"><motion.path d="M22 102V20L63 72L104 20V112" stroke="#fdfdfd" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0.35 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.05, ease: "easeInOut" }} /></svg>
  </motion.div>}</AnimatePresence>;
}
