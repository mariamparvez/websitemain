import svgPaths from "./svg-6uvn83ncvv";

function Group() {
  return (
    <div className="absolute contents inset-[4.7%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.21%_79.87%_4.7%_1.64%]" data-name="Vector">
        <div className="absolute inset-[-5.8%_-8.39%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9057 35.8339">
            <path d={svgPaths.p306db900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[11.36%_62.16%_4.7%_24.7%]" data-name="Vector">
        <div className="absolute inset-[-5.6%_-11.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4939 36.9626">
            <path d={svgPaths.p33a9c980} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[11.6%_43.29%_4.7%_42.41%]" data-name="Vector">
        <div className="absolute inset-[-5.62%_-10.85%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8891 36.8687">
            <path d={svgPaths.p2ee19600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.73%_38.31%_4.71%_61.28%]" data-name="Vector">
        <div className="absolute inset-[-6.06%_-382.41%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.20977 34.4376">
            <path d={svgPaths.p39dd2600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.83%_22.11%_4.7%_66.25%]" data-name="Vector">
        <div className="absolute inset-[-6.77%_-13.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6842 31.2317">
            <path d={svgPaths.p16ac9900} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.7%_1.64%_4.7%_82.45%]" data-name="Vector">
        <div className="absolute inset-[-5.19%_-9.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8032 39.5998">
            <path d={svgPaths.p34e59c00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.72298" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function MuxionLogo() {
  return (
    <div className="h-[39.6px] overflow-clip relative shrink-0 w-full" data-name="MuxionLogo">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[39.6px] items-start relative shrink-0 w-[120px]" data-name="Container">
      <MuxionLogo />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#1a1816] content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[170px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-5 border-[#155dfc] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Container1 />
    </div>
  );
}

export default function SocialIcon() {
  return (
    <div className="relative size-full" data-name="social icon">
      <Container />
    </div>
  );
}