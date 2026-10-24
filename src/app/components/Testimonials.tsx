import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import testimonial images
import rajeevImg from "figma:asset/c36a1a4faf91b7365b04df6f3a9bed203a782d09.png";
import bhoopathiImg from "figma:asset/3e0732befcb3a9a58cfb483d474aac3938c36983.png";
import ireneImg from "figma:asset/b3db6da50679807c51f8005840a9100785d4fd63.png";
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
    image: joshuaImg,
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false
  };

  return (
    <section id="testimonials" className="relative py-8 md:py-32 overflow-hidden bg-gradient-to-br from-[#030816] to-[#050b18]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-200/60 max-w-2xl mx-auto"
          >
            What people say about working with me
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto pb-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 md:px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-4 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  {/* Header with Image, Name, and Role */}
                  <div className="flex items-start gap-4 mb-3 md:mb-6">
                    {/* Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 flex-shrink-0"
                    />
                    
                    {/* Name and Role */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-1 break-words">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-300/70 text-xs md:text-sm break-words">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-blue-100/80 text-sm md:text-lg leading-relaxed text-left break-words">
                    {testimonial.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}