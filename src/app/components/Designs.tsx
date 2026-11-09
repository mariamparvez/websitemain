import { motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { Carousel, type CarouselItem, type CarouselRef } from "react-round-carousel";
import "react-round-carousel/dist/index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
const mediaRoot = "https://raw.githubusercontent.com/mariamparvez/designs/master/src/components/bestdesigns";
const designs = [
  { id: 1, src: `${mediaRoot}/1.gif`, alt: "Animated graphic design 01" },
  { id: 2, src: `${mediaRoot}/2.gif`, alt: "Animated graphic design 02" },
  { id: 3, src: `${mediaRoot}/3.gif`, alt: "Animated graphic design 03" },
  { id: 4, src: `${mediaRoot}/4.gif`, alt: "Animated graphic design 04" },
  { id: 5, src: `${mediaRoot}/5.gif`, alt: "Animated graphic design 05" },
  { id: 6, src: `${mediaRoot}/6.gif`, alt: "Animated graphic design 06" },
  ...[7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map((id) => ({
    id,
    src: `${mediaRoot}/${id}${id === 10 || id === 11 ? ".JPG" : ".jpg"}`,
    alt: `Graphic design ${String(id).padStart(2, "0")}`,
  })),
];

export function Designs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<CarouselRef>(null);
  const active = designs[activeIndex];
  const selectDesign = (index: number) => {
    const next = (index + designs.length) % designs.length;
    setActiveIndex(next);
    carouselRef.current?.setSelectedIndex(next);
  };
  const carouselItems = useMemo<CarouselItem[]>(() => designs.map((design, index) => ({
    image: design.src,
    alt: design.alt,
    content: <strong>{design.alt}</strong>,
    onClick: () => setActiveIndex(index),
  })), []);
  return (
    <section id="designs" className="relative flex min-h-[100svh] overflow-hidden border-t-2 border-[#fdfdfd]/15 bg-[#121212] py-5 sm:py-6">
      <ParticlesBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-none flex-col px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-4 text-center sm:px-6 lg:px-8"
        >
          <h2 className="mb-2 text-3xl font-black text-[#fdfdfd] md:text-5xl">
            Creative{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] via-sky-400 to-[#6b63f7] bg-clip-text text-transparent">
              Graphic Designs
            </span>
          </h2>
          <p className="text-[#b8b8b8] text-base max-w-3xl mx-auto">
            Around 2019, I started my freelance journey by doing these designs. I had alot of fun as a gigster!
          </p>
        </motion.div>

        <div className="relative mx-auto w-full max-w-none flex-1 pt-1">
          <motion.a key={active.id} href="https://dribbble.com/themariamparvez" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, rotateY: -18, scale: .96 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} transition={{ duration: .35 }} className="relative z-10 mx-auto block aspect-square w-[min(38svh,72vw,360px)] overflow-hidden border border-[#fdfdfd]/20 bg-[#121212] shadow-[0_28px_70px_-35px_rgba(77,93,255,.7)]"><img src={active.src} alt={active.alt} className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121212] to-transparent px-5 pb-4 pt-14"><p className="text-sm font-bold text-[#fdfdfd]">{active.alt}</p></div></motion.a>
          <div className="design-carousel mt-3 grid place-items-center" aria-label="Choose a graphic design">
            <Carousel ref={carouselRef} items={carouselItems} itemWidth={104} showControls={false} slideOnClick />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-3 flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        >
          <div className="flex gap-2"><button onClick={() => selectDesign(activeIndex - 1)} aria-label="Previous design" className="grid h-9 w-9 place-items-center border border-[#fdfdfd]/25 text-[#fdfdfd] transition-colors hover:border-[#4d5dff] hover:text-[#8e87ff]"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => selectDesign(activeIndex + 1)} aria-label="Next design" className="grid h-9 w-9 place-items-center border border-[#fdfdfd]/25 text-[#fdfdfd] transition-colors hover:border-[#4d5dff] hover:text-[#8e87ff]"><ChevronRight className="h-4 w-4" /></button></div>
          <motion.a
            href="https://dribbble.com/themariamparvez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#3d38f5] text-[#fdfdfd] font-bold hover:bg-[#2d28d5] transition-all"
          >
            View More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
