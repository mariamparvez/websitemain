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
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.75,
      color: 0x101f55,
      shininess: 18,
      waveHeight: 11,
      waveSpeed: 0.55,
      zoom: 0.85,
      backgroundColor: 0x080d1d,
    });
    return () => effect?.destroy();
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0 opacity-75" />;
}
