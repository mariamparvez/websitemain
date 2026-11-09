import { motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { Carousel, type CarouselItem, type CarouselRef } from "react-round-carousel";
import "react-round-carousel/dist/index.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ParticlesBackground } from "./ParticlesBackground";
import img1 from "figma:asset/3a6fd584cba573c439db70b5abacd46376caf688.png";
import img2 from "figma:asset/d98cf614ccdae81c7dbebc1fe013460fe19bdb11.png";
import img3 from "figma:asset/a21bc0583f5a3b8e2007b7c18d61fe7cf9973a63.png";
import img4 from "figma:asset/ecc574b52fac21c6d77bf4c93af5f35aba164d4b.png";
import img5 from "figma:asset/86481626d7156767a3faa452fa7e29d4e1224fe1.png";
import img6 from "figma:asset/065005bd3014367941197ecd15d897b2a50c5568.png";
import img7 from "figma:asset/442ff1bfed857c44ef347ec914d92663a9418156.png";
import img8 from "figma:asset/5a2b8d3c64a4e574bbfef9a822ea10ff8da02e43.png";
import img9 from "figma:asset/9c1da59c1b917171a8ad2797f7f5901b5be714dc.png";
import img10 from "figma:asset/dbb384bb2bb3f8fa2763851d2821e27a695c5632.png";
import img11 from "figma:asset/43222878cecab0e26082e440edc117051654e8c8.png";
import img12 from "figma:asset/49fcad8a5b60055d26881600d453409bcdb9e1a8.png";
import img13 from "figma:asset/37cdbb7dafb692f2b40d67da5a5d4451277220a3.png";
import img14 from "figma:asset/ef68e327a52ce6bc07cfe66a1ac24d34ef2bd719.png";
import img15 from "figma:asset/ad0120f925abce67e9da4bc0b9129f2f6a36a46f.png";
import img16 from "figma:asset/1261fb59b3224f9c03add8a9120a3116a1a4666a.png";
import img17 from "figma:asset/7ee57d02c0d97de0e360f94e0e44e75bd15c4ec9.png";
import img18 from "figma:asset/83c35228d09af0e79abd658b65d11c1d674e4e55.png";

const designs = [
  { id: 1, src: img1, alt: "Weather Location Design" },
  { id: 2, src: img2, alt: "Mountain Landscape" },
  { id: 3, src: img3, alt: "Sunset Mountain House" },
  { id: 4, src: img4, alt: "Hills Home Design" },
  { id: 5, src: img5, alt: "Thai Lotus Food" },
  { id: 6, src: img6, alt: "Diwali Snacks" },
  { id: 7, src: img7, alt: "Gorilla Character" },
  { id: 8, src: img8, alt: "Sumangali Silks Saree" },
  { id: 9, src: img9, alt: "Elampillai Silks Craftsmanship" },
  { id: 10, src: img10, alt: "Portrait Illustration" },
  { id: 11, src: img11, alt: "Furniture Expo Poster" },
  { id: 12, src: img12, alt: "Beauty of Black Saree" },
  { id: 13, src: img13, alt: "Bharani Silks Collection" },
  { id: 14, src: img14, alt: "Bharani Silks Golden Classics" },
  { id: 15, src: img15, alt: "Bharani Silks Ethnic Menswear" },
  { id: 16, src: img16, alt: "Sumangali Silks Eid Mubarak" },
  { id: 17, src: img17, alt: "Konika Jewellery Kundan" },
  { id: 18, src: img18, alt: "Geometric Portrait Art" },
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
    <section id="designs" className="py-12 md:py-16 relative overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 text-[#fdfdfd]">
            Creative{" "}
            <span className="bg-gradient-to-r from-[#3d38f5] via-sky-400 to-[#6b63f7] bg-clip-text text-transparent">
              Graphic Designs
            </span>
          </h2>
          <p className="text-[#b8b8b8] text-base max-w-3xl mx-auto">
            Around 2019, I started my freelance journey by doing these designs. I had alot of fun as a gigster!
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl pt-1">
          <motion.a key={active.id} href="https://dribbble.com/themariamparvez" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, rotateY: -18, scale: .96 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} transition={{ duration: .35 }} className="relative z-10 mx-auto block aspect-[4/3] w-[min(76vw,510px)] overflow-hidden border border-[#fdfdfd]/20 bg-[#121212] shadow-[0_28px_70px_-35px_rgba(77,93,255,.7)]"><img src={active.src} alt={active.alt} className="h-full w-full object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121212] to-transparent px-5 pb-4 pt-14"><p className="text-sm font-bold text-[#fdfdfd]">{active.alt}</p></div></motion.a>
          <div className="design-carousel mt-7 grid place-items-center" aria-label="Choose a graphic design">
            <Carousel ref={carouselRef} items={carouselItems} itemWidth={190} showControls={false} slideOnClick />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex items-center justify-between gap-4"
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
            View More on Dribbble
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
