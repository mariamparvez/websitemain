import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { WhyChooseMe } from "../components/WhyChooseMe";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { Certifications } from "../components/Certifications";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { ArtCallout } from "../components/ArtCallout";
import { Designs } from "../components/Designs";
import { Testimonials } from "../components/Testimonials";
import { InfiniteMarquee } from "../components/InfiniteMarquee";
import { Blogs } from "../components/Blogs";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { ScrollToTop } from "../components/ScrollToTop";

export function HomePage() {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <div className="relative bg-[#121212] min-h-screen text-[#fdfdfd] overflow-x-hidden max-w-full" style={{ position: 'relative' }}>
        <Navigation />
        <Hero />
        <WhyChooseMe />
        <Services />
        <CaseStudies />
        <Certifications />
        <ExperienceTimeline />
        <ArtCallout />
        <Designs />
        <Testimonials />
        <InfiniteMarquee />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}