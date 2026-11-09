import { useEffect, useRef } from "react";

type VantaEffect = { destroy: () => void };

declare global {
  interface Window {
    VANTA?: { WAVES?: (options: Record<string, unknown>) => VantaEffect };
  }
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") resolve();
      else existing.addEventListener("load", () => resolve(), { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => { script.dataset.loaded = "true"; resolve(); };
    script.onerror = () => reject(new Error(`Unable to load ${src}`));
    document.head.appendChild(script);
  });
}

export function VantaWaves() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: VantaEffect | undefined;
    let cancelled = false;
    const start = async () => {
      try {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js");
        if (cancelled || !hostRef.current || !window.VANTA?.WAVES) return;
        effect = window.VANTA.WAVES({
          el: hostRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          mouseEase: 0.08,
          color: 0x07183f,
          shininess: 12,
          waveHeight: 14,
          waveSpeed: 0.58,
          zoom: 0.86,
          backgroundColor: 0x01040c,
        });
      } catch {
        // A browser that blocks WebGL still receives the near-black navy section base.
      }
    };
    void start();
    return () => { cancelled = true; effect?.destroy(); };
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0" />;
}
