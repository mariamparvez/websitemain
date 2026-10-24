import svgPaths from "./svg-snbigemavh";

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[34px] top-1/2" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Frame">
          <rect fill="var(--fill-0, white)" height="34" rx="17" width="34" />
          <path d={svgPaths.p1b7446a0} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" />
        </g>
      </svg>
    </div>
  );
}

export default function Favicon() {
  return (
    <div className="relative size-full" data-name="favicon">
      <Frame />
    </div>
  );
}