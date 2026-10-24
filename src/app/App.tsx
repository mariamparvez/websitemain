import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
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
    <div className="relative bg-gradient-to-br from-[#050816] via-[#0a0e27] via-[#0f1942] to-[#1a1f3a] min-h-screen text-white overflow-x-hidden" style={{ position: 'relative' }}>
      <Navigation />
      <Hero />
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