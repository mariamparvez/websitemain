import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { WhyChooseMe } from "../components/WhyChooseMe";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { Certifications } from "../components/Certifications";
import { ArtCallout } from "../components/ArtCallout";
import { Designs } from "../components/Designs";
import { Testimonials } from "../components/Testimonials";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO />
      <div className="relative bg-[#fdfdfd] min-h-screen text-gray-900 overflow-x-hidden max-w-full" style={{ position: 'relative' }}>
        <Navigation />
        <Hero />
        <WhyChooseMe />
        <Services />
        <CaseStudies />
        <Certifications />
        <ArtCallout />
        <Designs />
        <Testimonials />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}