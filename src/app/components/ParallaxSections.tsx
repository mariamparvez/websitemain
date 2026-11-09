import { useEffect } from "react";

export function ParallaxSections() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section, #root > div > section"));
    let frame = 0;
    const update = () => { frame = 0; const mid = window.innerHeight / 2; sections.forEach((section) => { const rect = section.getBoundingClientRect(); const offset = Math.max(-18, Math.min(18, (mid - (rect.top + rect.height / 2)) * 0.035)); section.style.setProperty("--parallax-offset", `${offset}px`); }); };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll); return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return null;
}
