import { Navigation } from '../components/public/Navigation';
import { HeroSection } from '../components/public/HeroSection';
import { AboutSection } from '../components/public/AboutSection';
import { ServicesSection } from '../components/public/ServicesSection';
import { CaseStudiesSection } from '../components/public/CaseStudiesSection';
import { CertificationsSection } from '../components/public/CertificationsSection';
import { TestimonialsSection } from '../components/public/TestimonialsSection';
import { BlogSection } from '../components/public/BlogSection';
import { ArtSection } from '../components/public/ArtSection';
import { CourseSection } from '../components/public/CourseSection';
import { ContactSection } from '../components/public/ContactSection';

export function PublicHomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="hero" className="pt-16">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <ServicesSection />
      <CaseStudiesSection />
      <CertificationsSection />
      <TestimonialsSection />
      <BlogSection />
      <ArtSection />
      <CourseSection />
      <ContactSection />

      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mariam Parvez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
