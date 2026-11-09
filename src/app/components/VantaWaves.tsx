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
      eventListenerTarget: window,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.75,
      color: 0x4c6fff,
      shininess: 48,
      waveHeight: 28,
      waveSpeed: 0.85,
      zoom: 0.65,
      backgroundColor: 0x07163b,
    });
    return () => effect?.destroy();
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0" />;
}
