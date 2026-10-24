import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  isArtPage?: boolean;
}

export function SEO({
  title = "Mariam Parvez - Expert UI/UX Designer, Web Designer & Graphic Designer | India & Pakistan",
  description = "Mariam Parvez is a leading UI/UX Designer, Web Designer, and Graphic Designer specializing in creating exceptional digital experiences. Based in India & Pakistan, offering expert design services, UI/UX coaching, and stunning art. Transform your digital presence with award-winning design solutions.",
  keywords = "Mariam Parvez, Mariam, UI UX Designer, UI/UX Designer India, UI/UX Designer Pakistan, Web Designer, Graphic Designer, UX Designer, UI Designer, Product Designer, Design Coach, Art by Mariam, Mariam Designer, themimpact, The M Impact, UI Design Expert, User Experience Designer, Interface Designer, Digital Designer India, Web Design Services, Graphic Design Portfolio, Design Coaching India, Best UI Designer, Top UX Designer India, Female UI Designer, Professional Web Designer, Creative Designer Pakistan",
  canonicalUrl = "https://mariamparvez.in",
  ogImage = "https://mariamparvez.in/og-image.jpg",
  ogType = "website",
  isArtPage = false,
}: SEOProps) {
  const fullTitle = title.includes("Mariam Parvez") ? title : `${title} | Mariam Parvez`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mariam Parvez" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language and Location */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.placename" content="Pakistan" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content="Mariam Parvez - UI/UX Designer Portfolio" />
      <meta property="og:site_name" content="Mariam Parvez Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:locale:alternate" content="en_PK" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@themariamparvez" />
      <meta name="twitter:site" content="@themariamparvez" />
      
      {/* Additional SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={isArtPage ? "#6b21a8" : "#0a0e27"} />
      
      {/* Structured Data - Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mariam Parvez",
          alternateName: ["Mariam", "The M Impact", "themimpact"],
          url: "https://mariamparvez.in",
          image: "https://mariamparvez.in/mariam-parvez-profile.jpg",
          jobTitle: [
            "UI/UX Designer",
            "Web Designer",
            "Graphic Designer",
            "Product Designer",
            "Design Coach",
            "Artist"
          ],
          description: "Expert UI/UX Designer, Web Designer, and Graphic Designer specializing in creating exceptional digital experiences and teaching design.",
          knowsAbout: [
            "UI Design",
            "UX Design",
            "User Interface",
            "User Experience",
            "Web Design",
            "Graphic Design",
            "Product Design",
            "Design Systems",
            "Wireframing",
            "Prototyping",
            "Adobe Creative Suite",
            "Figma",
            "HTML",
            "CSS",
            "JavaScript",
            "Design Coaching",
            "Art",
            "Acrylic Painting",
            "Watercolor",
            "Digital Art"
          ],
          sameAs: [
            "https://www.instagram.com/themimpact/",
            "https://www.brush.bio/themimpact/",
            "https://www.behance.net/themariamparvez",
            "https://dribbble.com/themariamparvez",
            "https://x.com/themariamparvez",
            "https://www.linkedin.com/in/themariamparvez/",
            "https://www.pinterest.co.uk/themariamparvez/",
            "https://medium.com/@themariamparvez"
          ],
          worksFor: {
            "@type": "Organization",
            name: "The M Impact"
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: ["IN", "PK"],
            addressRegion: ["India", "Pakistan"]
          }
        })}
      </script>
      
      {/* Structured Data - Professional Service */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Mariam Parvez Design Services",
          alternateName: "The M Impact",
          image: "https://mariamparvez.in/logo.png",
          url: "https://mariamparvez.in",
          telephone: "",
          email: "designwithmariam@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressCountry: ["IN", "PK"]
          },
          geo: [
            {
              "@type": "GeoCoordinates",
              addressCountry: "IN"
            },
            {
              "@type": "GeoCoordinates",
              addressCountry: "PK"
            }
          ],
          priceRange: "$$",
          servedCuisine: undefined,
          areaServed: [
            {
              "@type": "Country",
              name: "India"
            },
            {
              "@type": "Country",
              name: "Pakistan"
            },
            {
              "@type": "Place",
              name: "Worldwide"
            }
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Design Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "UI/UX Design",
                  description: "Professional User Interface and User Experience design services for web and mobile applications"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Design",
                  description: "Custom website design and development services"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Graphic Design",
                  description: "Professional graphic design for branding, marketing materials, and digital assets"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Design Coaching",
                  description: "One-on-one design coaching and mentorship for aspiring designers"
                }
              }
            ]
          }
        })}
      </script>
      
      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mariam Parvez Portfolio",
          alternateName: "The M Impact",
          url: "https://mariamparvez.in",
          description: "Official portfolio of Mariam Parvez - Expert UI/UX Designer, Web Designer, and Graphic Designer",
          author: {
            "@type": "Person",
            name: "Mariam Parvez"
          },
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://mariamparvez.in?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          inLanguage: "en-US"
        })}
      </script>

      {/* Structured Data - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://mariamparvez.in"
            },
            ...(isArtPage ? [{
              "@type": "ListItem",
              position: 2,
              name: "Art Gallery",
              item: "https://mariamparvez.in/art"
            }] : [])
          ]
        })}
      </script>
    </Helmet>
  );
}
