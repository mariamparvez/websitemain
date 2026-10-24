import { motion } from "motion/react";
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
  return (
    <section id="designs" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#020715] to-[#050d24]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Creative{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Graphic Designs
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Around 2019, I started my freelance journey by doing these designs. I had alot of fun as a gigster!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {designs.map((design, index) => (
            <motion.a
              key={design.id}
              href="https://dribbble.com/themariamparvez"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/20 group-hover:to-cyan-600/20 transition-all duration-300 z-10" />
              <img
                src={design.src}
                alt={design.alt}
                className="w-full h-full object-cover"
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://dribbble.com/themariamparvez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-shadow"
          >
            View More on Dribbble
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}