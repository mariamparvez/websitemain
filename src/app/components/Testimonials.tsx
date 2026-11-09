import { motion } from "motion/react";
import { useRef } from "react";
import { ParticlesBackground } from "./ParticlesBackground";
import { InteractiveSlats } from "./InteractiveSlats";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Import testimonial images
import rajeevImg from "figma:asset/c36a1a4faf91b7365b04df6f3a9bed203a782d09.png";
import bhoopathiImg from "figma:asset/3e0732befcb3a9a58cfb483d474aac3938c36983.png";
import ireneImg from "../../imports/Irene-1.jpg";
import joshuaImg from "figma:asset/a85c44b66329e34735f33144351eb2acc86109d7.png";
import koteeshwarImg from "figma:asset/e44b0a4bddd410f54e633051ffd90fd6c14be3ec.png";
import manojImg from "figma:asset/1015908ea8bd5c3f8e0662f071bc71125795d7a4.png";
import vinodhiniImg from "figma:asset/39ddbabb326872f9801f978e2f526b5f19bb07c4.png";
import dishaImg from "figma:asset/2b228cb42e36ad059f7e5eaafdeb74145d228281.png";

const testimonials = [
  {
    name: "Rajeev Rajendran",
    role: "InSoft Project Manager",
    image: dishaImg,
    text: "Mariam was a huge asset to our team at Insoft.com from September 2022 to July 2024 as a Senior UI/UX Designer. Her work on the AAPC project and two Belgium projects, ATA IT and Micoon App, always impressed our clients. Along with delivering creative, detail-oriented designs, Mariam shared her expertise through knowledge transfer sessions for new employees and guided both designers and developers, helping the team thrive. Mariam would be a fantastic addition to any team, and I'd definitely recommend her."
  },
  {
    name: "Bhoopathi Anna",
    role: "2AdPro Team Leader",
    image: bhoopathiImg,
    text: "No matter where you put a star it will always get its way out to shine. You are just like that. I am so grateful that I had a great individual like you. You were always so unique with your ideas and your thoughts. Thank you for giving your best to this office. All the luck and warmth for your future!"
  },
  {
    name: "Irene Sonia",
    role: "CSE @ InSoft",
    image: ireneImg,
    text: "I've really enjoyed working with you because you've helped lift morale and boosted our company profits by project. Your efforts have helped us reach our goals faster every quarter. You've been a great asset to the team. I'm really happy with how detail-oriented you were in this task. Your attention to detail makes it clear that you can continue to take on new challenges and grow with the company."
  },
  {
    name: "Joshua Samuel",
    role: "Jr PM @ InSoft",
    image: joshuaImg,
    text: "Mariam has a knack to come up with good design that would please the client in every aspect. Her designs are always customer centric. I like how she always sticks to the design process which always yields good results. She also excels in motion graphics and is well versed in it. Her background in understanding Front end development brings flavour to the designs as she also has a developer perspective in the mix."
  },
  {
    name: "Koteeshwar M G",
    role: "PM/Analyst @ InSoft",
    image: koteeshwarImg,
    text: "It was pleasure of working with Mariam Parvez, a talented UI/UX Designer and Developer with an impressive of skill set and experiences. Her passion for design and dedication are top notch. I hope and have confidence in her career growth."
  },
  {
    name: "Manoj Kumar",
    role: "Student @ ACTE",
    image: manojImg,
    text: "I highly recommend Mariam as a UI & UX tutor. Her teaching style is clear and structured, making complex concepts easy to understand for beginners and advanced learners alike. With a focus on hands-on learning, Mariam empowers students to design intuitively and think critically about user experience."
  },
  {
    name: "Vinodhini",
    role: "Student @ ACTE",
    image: vinodhiniImg,
    text: "Mariam's teaching in UI/UX courses is excellent; she has a great way of breaking down complex ideas so that everyone can understand them. Her practical approach and real-life examples help students gain the skills they need to succeed in the field."
  },
  {
    name: "Disha Kapur",
    role: "Student @ ACTE",
    image: rajeevImg,
    text: "Mariyam ma'am teaches me every single detail required to learn in UXUI design.. I have hardly seen a teacher putting so much effort on her student. I'm glad that I got a chance to learn from her.."
  }
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: number) => trackRef.current?.scrollBy({ left: direction * 432, behavior: "smooth" });

  return (
    <section id="testimonials" className="relative py-8 overflow-hidden bg-[#121212] border-t-2 border-[#fdfdfd]/15">
      <InteractiveSlats />
      <ParticlesBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight text-[#fdfdfd] mb-3"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#b8b8b8] max-w-2xl mx-auto"
          >
            What people say about working with me
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div ref={trackRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {testimonials.map((testimonial, index) => <motion.article key={testimonial.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="relative flex h-[240px] w-[min(82vw,400px)] shrink-0 snap-start flex-col overflow-hidden border border-[#fdfdfd]/20 bg-[#121212] p-4">
              <Quote className="absolute right-4 top-4 h-9 w-9 text-[#4d5dff]/15" strokeWidth={1.2} /><div className="flex items-center gap-3"><img src={testimonial.image} alt={testimonial.name} className="h-10 w-10 rounded-full border-2 border-[#4d5dff] object-cover" /><div><h4 className="font-bold text-[#fdfdfd]">{testimonial.name}</h4><p className="mt-1 text-xs text-[#b8b8b8]">{testimonial.role}</p></div></div><p className="mt-4 line-clamp-4 text-[15px] leading-6 text-[#d6d6d6]">{testimonial.text}</p>
            </motion.article>)}
          </div>
          <div className="mt-5 flex justify-end gap-2"><button onClick={() => scroll(-1)} aria-label="Previous testimonials" className="grid h-9 w-9 place-items-center border border-[#fdfdfd]/20 text-[#fdfdfd]"><ChevronLeft className="h-4 w-4" /></button><button onClick={() => scroll(1)} aria-label="Next testimonials" className="grid h-9 w-9 place-items-center border border-[#fdfdfd]/20 text-[#fdfdfd]"><ChevronRight className="h-4 w-4" /></button></div>
        </div>
      </div>
    </section>
  );
}
