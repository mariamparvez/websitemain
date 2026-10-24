import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { WhyChooseMe } from "./components/WhyChooseMe";
import { Services } from "./components/Services";
import { CaseStudies } from "./components/CaseStudies";
import { ArtCallout } from "./components/ArtCallout";
import { Designs } from "./components/Designs";
import { Testimonials } from "./components/Testimonials";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-[#010408] min-h-screen text-white overflow-x-hidden" style={{ position: 'relative' }}>
      <Navigation />
      <Hero />
      <WhyChooseMe />
      <Services />
      <CaseStudies />
      <ArtCallout />
      <Designs />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}