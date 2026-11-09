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
      color: 0x294cc0,
      shininess: 30,
      waveHeight: 16,
      waveSpeed: 0.7,
      zoom: 0.85,
      backgroundColor: 0x07163b,
    });
    return () => effect?.destroy();
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="absolute inset-0 opacity-95" />;
}
