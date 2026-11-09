import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import { useEffect, useRef } from "react";

export function VantaWaves() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const effect = WAVES({
      el: hostRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      mouseEase: 0.08,
      eventListenerTarget: window,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.75,
      color: 0x162d73,
      shininess: 26,
      waveHeight: 18,
      waveSpeed: 0.72,
      zoom: 0.78,
      backgroundColor: 0x050a1c,
    });
    return () => effect?.destroy();
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0" />;
}
