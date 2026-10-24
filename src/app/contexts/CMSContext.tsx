import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export interface CaseStudy {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  summary: string;
  cta: string;
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  year: string;
  credentialLink?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface Blog {
  id: string;
  coverImage: string;
  title: string;
  excerpt: string;
  date: string;
  cta: string;
  featured?: boolean;
}

export interface Artwork {
  id: string;
  image: string;
  title: string;
  description?: string;
}

interface CMSData {
  services: Service[];
  caseStudies: CaseStudy[];
  certifications: Certification[];
  testimonials: Testimonial[];
  blogs: Blog[];
  artworks: Artwork[];
}

interface CMSContextType extends CMSData {
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addCaseStudy: (caseStudy: Omit<CaseStudy, 'id'>) => void;
  updateCaseStudy: (id: string, caseStudy: Partial<CaseStudy>) => void;
  deleteCaseStudy: (id: string) => void;
  addCertification: (cert: Omit<Certification, 'id'>) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  deleteCertification: (id: string) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addBlog: (blog: Omit<Blog, 'id'>) => void;
  updateBlog: (id: string, blog: Partial<Blog>) => void;
  deleteBlog: (id: string) => void;
  setFeaturedBlog: (id: string) => void;
  addArtwork: (artwork: Omit<Artwork, 'id'>) => void;
  updateArtwork: (id: string, artwork: Partial<Artwork>) => void;
  deleteArtwork: (id: string) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

const initialData: CMSData = {
  services: [
    {
      id: '1',
      icon: 'Palette',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences that delight users and drive business results.',
      cta: 'Learn More'
    },
    {
      id: '2',
      icon: 'Search',
      title: 'UX Audit',
      description: 'Comprehensive analysis of your product to identify usability issues and optimization opportunities.',
      cta: 'Get Started'
    },
    {
      id: '3',
      icon: 'Layout',
      title: 'Design Systems',
      description: 'Building scalable design systems that ensure consistency across your product ecosystem.',
      cta: 'Explore'
    },
    {
      id: '4',
      icon: 'Code',
      title: 'Front-End Development',
      description: 'Bringing designs to life with clean, performant, and accessible code.',
      cta: 'View Work'
    },
    {
      id: '5',
      icon: 'Sparkles',
      title: 'Brand Identity',
      description: 'Crafting unique visual identities that resonate with your target audience.',
      cta: 'Discover'
    },
    {
      id: '6',
      icon: 'TrendingUp',
      title: 'UX Strategy',
      description: 'Strategic guidance to align user experience with business goals.',
      cta: 'Consult'
    }
  ],
  caseStudies: [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800',
      title: 'E-Commerce Platform Redesign',
      category: 'UI/UX Design',
      summary: 'Complete redesign of a multi-vendor e-commerce platform resulting in 45% increase in conversion rates.',
      cta: 'View Case Study',
      featured: true
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      title: 'Healthcare Mobile App',
      category: 'Mobile Design',
      summary: 'Designed an intuitive healthcare app connecting patients with doctors seamlessly.',
      cta: 'View Case Study'
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      title: 'Financial Dashboard',
      category: 'Dashboard Design',
      summary: 'Created a comprehensive financial dashboard for enterprise clients with real-time data visualization.',
      cta: 'View Case Study'
    }
  ],
  certifications: [
    {
      id: '1',
      title: 'Adobe Premiere Pro',
      organization: 'Adobe',
      year: '2024',
      credentialLink: ''
    },
    {
      id: '2',
      title: 'Code Asylums Certification',
      organization: 'Code Asylums',
      year: '2023',
      credentialLink: ''
    },
    {
      id: '3',
      title: 'Complete Web Development',
      organization: 'Online Learning Platform',
      year: '2023',
      credentialLink: ''
    },
    {
      id: '4',
      title: 'Future Learn Certification',
      organization: 'FutureLearn',
      year: '2023',
      credentialLink: ''
    },
    {
      id: '5',
      title: 'Project Management Assessment',
      organization: 'Professional Institute',
      year: '2024',
      credentialLink: ''
    },
    {
      id: '6',
      title: 'Video Production',
      organization: 'Creative Academy',
      year: '2024',
      credentialLink: ''
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      designation: 'Product Manager',
      company: 'TechCorp Inc.',
      quote: 'Mariam\'s design thinking and attention to detail transformed our product. Her ability to understand user needs and translate them into beautiful interfaces is exceptional.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      id: '2',
      name: 'Michael Chen',
      designation: 'CEO',
      company: 'StartupHub',
      quote: 'Working with Mariam was a game-changer. She delivered a design system that scaled perfectly with our growth.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      designation: 'Design Lead',
      company: 'Creative Studio',
      quote: 'Mariam brings creativity and strategic thinking to every project. Her work consistently exceeds expectations.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    }
  ],
  blogs: [
    {
      id: '1',
      coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      title: 'The Future of UI/UX Design in 2026',
      excerpt: 'Exploring emerging trends in user interface and experience design, from AI-powered personalization to immersive 3D interfaces.',
      date: '2026-04-15',
      cta: 'Read More',
      featured: true
    },
    {
      id: '2',
      coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800',
      title: 'Building Design Systems That Scale',
      excerpt: 'A comprehensive guide to creating maintainable design systems for growing product teams.',
      date: '2026-03-28',
      cta: 'Read More'
    },
    {
      id: '3',
      coverImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
      title: 'Accessibility in Modern Web Design',
      excerpt: 'Why accessibility should be at the core of every design decision and how to implement it effectively.',
      date: '2026-03-10',
      cta: 'Read More'
    }
  ],
  artworks: [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600',
      title: 'Abstract Composition',
      description: 'Digital art exploring color and form'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600',
      title: 'Urban Dreams',
      description: 'Mixed media artwork'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1567095751004-aa51a2690368?w=600',
      title: 'Floral Symphony',
      description: 'Watercolor painting'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=600',
      title: 'Geometric Patterns',
      description: 'Vector illustration'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600',
      title: 'Nature Study',
      description: 'Photography series'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600',
      title: 'Modern Minimalism',
      description: 'Digital illustration'
    }
  ]
};

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<CMSData>(() => {
    const saved = localStorage.getItem('cmsData');
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('cmsData', JSON.stringify(data));
  }, [data]);

  const generateId = () => Date.now().toString();

  const addService = (service: Omit<Service, 'id'>) => {
    setData(prev => ({ ...prev, services: [...prev.services, { ...service, id: generateId() }] }));
  };

  const updateService = (id: string, service: Partial<Service>) => {
    setData(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, ...service } : s)
    }));
  };

  const deleteService = (id: string) => {
    setData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
  };

  const addCaseStudy = (caseStudy: Omit<CaseStudy, 'id'>) => {
    setData(prev => ({ ...prev, caseStudies: [...prev.caseStudies, { ...caseStudy, id: generateId() }] }));
  };

  const updateCaseStudy = (id: string, caseStudy: Partial<CaseStudy>) => {
    setData(prev => ({
      ...prev,
      caseStudies: prev.caseStudies.map(c => c.id === id ? { ...c, ...caseStudy } : c)
    }));
  };

  const deleteCaseStudy = (id: string) => {
    setData(prev => ({ ...prev, caseStudies: prev.caseStudies.filter(c => c.id !== id) }));
  };

  const addCertification = (cert: Omit<Certification, 'id'>) => {
    setData(prev => ({ ...prev, certifications: [...prev.certifications, { ...cert, id: generateId() }] }));
  };

  const updateCertification = (id: string, cert: Partial<Certification>) => {
    setData(prev => ({
      ...prev,
      certifications: prev.certifications.map(c => c.id === id ? { ...c, ...cert } : c)
    }));
  };

  const deleteCertification = (id: string) => {
    setData(prev => ({ ...prev, certifications: prev.certifications.filter(c => c.id !== id) }));
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    setData(prev => ({ ...prev, testimonials: [...prev.testimonials, { ...testimonial, id: generateId() }] }));
  };

  const updateTestimonial = (id: string, testimonial: Partial<Testimonial>) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => t.id === id ? { ...t, ...testimonial } : t)
    }));
  };

  const deleteTestimonial = (id: string) => {
    setData(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }));
  };

  const addBlog = (blog: Omit<Blog, 'id'>) => {
    setData(prev => ({ ...prev, blogs: [...prev.blogs, { ...blog, id: generateId() }] }));
  };

  const updateBlog = (id: string, blog: Partial<Blog>) => {
    setData(prev => ({
      ...prev,
      blogs: prev.blogs.map(b => b.id === id ? { ...b, ...blog } : b)
    }));
  };

  const deleteBlog = (id: string) => {
    setData(prev => ({ ...prev, blogs: prev.blogs.filter(b => b.id !== id) }));
  };

  const setFeaturedBlog = (id: string) => {
    setData(prev => ({
      ...prev,
      blogs: prev.blogs.map(b => ({ ...b, featured: b.id === id }))
    }));
  };

  const addArtwork = (artwork: Omit<Artwork, 'id'>) => {
    setData(prev => ({ ...prev, artworks: [...prev.artworks, { ...artwork, id: generateId() }] }));
  };

  const updateArtwork = (id: string, artwork: Partial<Artwork>) => {
    setData(prev => ({
      ...prev,
      artworks: prev.artworks.map(a => a.id === id ? { ...a, ...artwork } : a)
    }));
  };

  const deleteArtwork = (id: string) => {
    setData(prev => ({ ...prev, artworks: prev.artworks.filter(a => a.id !== id) }));
  };

  return (
    <CMSContext.Provider value={{
      ...data,
      addService,
      updateService,
      deleteService,
      addCaseStudy,
      updateCaseStudy,
      deleteCaseStudy,
      addCertification,
      updateCertification,
      deleteCertification,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addBlog,
      updateBlog,
      deleteBlog,
      setFeaturedBlog,
      addArtwork,
      updateArtwork,
      deleteArtwork
    }}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
