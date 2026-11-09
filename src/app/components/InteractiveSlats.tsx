import { Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertex = /* glsl */ `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }
`;

const fragment = /* glsl */ `
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 pointer = uPointer;
  float d = length(vec2((uv.x - pointer.x) * (uResolution.x / uResolution.y), uv.y - pointer.y));
  float touch = exp(-d * 9.0);
  float roll = sin(uv.x * 115.0 + uv.y * 18.0 + uTime * 0.85 + touch * 8.0);
  float slat = smoothstep(0.72, 0.98, abs(roll));
  float glint = pow(max(roll, 0.0), 16.0) * (0.22 + touch * 1.45);
  float horizon = 0.78 + uv.y * 0.22;
  vec3 base = vec3(0.047, 0.051, 0.075);
  vec3 edge = vec3(0.16, 0.19, 0.43);
  vec3 glow = vec3(0.29, 0.36, 1.0);
  vec3 color = mix(base, edge, slat * horizon);
  color += glow * glint;
  color += glow * touch * 0.055;
  gl_FragColor = vec4(color, 0.96);
}
`;

export function InteractiveSlats() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.setAttribute("aria-hidden", "true");
    element.appendChild(canvas);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: { uTime: { value: 0 }, uResolution: { value: [1, 1] }, uPointer: { value: [0.5, 0.5] } },
      transparent: true,
    });
    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });
    let frame = 0;
    let pointer = { x: 0.5, y: 0.5 };

    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      renderer.setSize(width, height);
      program.uniforms.uResolution.value = [width * renderer.dpr, height * renderer.dpr];
    };
    const move = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      pointer = { x: (event.clientX - bounds.left) / bounds.width, y: 1 - (event.clientY - bounds.top) / bounds.height };
    };
    const render = (time: number) => {
      program.uniforms.uTime.value = time * 0.001;
      program.uniforms.uPointer.value = [pointer.x, pointer.y];
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(render);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    element.parentElement?.addEventListener("pointermove", move, { passive: true });
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      element.parentElement?.removeEventListener("pointermove", move);
      canvas.remove();
    };
  }, []);

  return <div ref={host} className="pointer-events-none absolute inset-0 overflow-hidden" />;
}
