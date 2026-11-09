import * as THREE from "three";
import TRUNK from "vanta/dist/vanta.trunk.min";
import { useEffect, useRef } from "react";

export function VantaTrunk() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;
    const effect = TRUNK({
      el: hostRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 0.8,
      color: 0x1e3d9d,
      backgroundColor: 0x061333,
      spacing: 5,
      chaos: 1.7,
    });
    return () => effect?.destroy();
  }, []);

  return <div ref={hostRef} aria-hidden="true" className="vanta-trunk absolute inset-0" />;
}
