export interface ServiceItem {
  id: string;
  category: "software" | "marketing" | "design";
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  subServices: {
    title: string;
    description: string;
  }[];
  benefits: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "software-development",
    category: "software",
    title: "Software Development",
    subtitle: "Building modern, scalable, and high-performance digital solutions that help businesses succeed.",
    description:
      "We design and build resilient, secure, and intuitive software applications tailored to your business goals. From high-converting websites to complex cloud-native architectures, we turn technical requirements into high-value assets.",
    icon: "Code2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      {
        title: "Website Development",
        description: "Modern, secure, and blazing fast web solutions engineered for maximum user engagement and conversion.",
      },
      {
        title: "Frontend Development",
        description: "Interactive, accessible, and fluid user interfaces built with React, Next.js, and modern TypeScript.",
      },
      {
        title: "Backend Development",
        description: "Robust APIs, microservices, and database architectures prioritizing high throughput and zero data loss.",
      },
      {
        title: "Full-Stack Development",
        description: "End-to-end engineering delivering complete synergy between frontend components and backend systems.",
      },
      {
        title: "Web Application Development",
        description: "Custom SaaS platforms and web apps that automate workflows and streamline client operations.",
      },
      {
        title: "Custom Software Solutions",
        description: "Tailored software crafted precisely around your unique business workflows and integrations.",
      },
      {
        title: "Responsive Website Development",
        description: "Pixel-perfect multi-device responsiveness ensuring seamless mobile, tablet, and desktop browsing.",
      },
      {
        title: "E-commerce Development",
        description: "Secure digital storefronts with integrated payment processing, inventory tracking, and checkout flows.",
      },
    ],
    benefits: [
      "Engineered with clean, maintainable, and modern codebases",
      "Optimized for high-speed loading and exceptional Core Web Vitals",
      "Enterprise-grade security standards and data protection",
      "Seamless scaling to support your business expansion",
    ],
  },
  {
    id: "digital-marketing",
    category: "marketing",
    title: "Digital Marketing",
    subtitle: "Helping brands increase visibility, reach the right audience, and grow through effective digital strategies.",
    description:
      "Data-driven marketing and technical search engine optimization that puts your brand directly in front of buyers actively searching for your solutions. We prioritize sustainable organic acquisition and predictable ROI.",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Comprehensive organic growth strategy to improve rankings, drive quality leads, and increase authority.",
      },
      {
        title: "Technical SEO",
        description: "Deep crawl optimization, site architecture refinement, schema markup, and Core Web Vitals speed tuning.",
      },
      {
        title: "On-Page SEO",
        description: "Keyword-mapped content structure, meta tag optimization, internal linking, and search intent alignment.",
      },
      {
        title: "Off-Page SEO",
        description: "High-trust backlink acquisition, digital PR, brand authority building, and citation consistency.",
      },
      {
        title: "Local SEO",
        description: "Targeted regional optimization, Google Business Profile enhancement, and localized search visibility.",
      },
      {
        title: "Content Marketing",
        description: "Authoritative, research-backed blogs and guides that answer search queries and establish thought leadership.",
      },
      {
        title: "Social Media Marketing",
        description: "Strategic audience engagement, distribution of visual media, and community growth across major platforms.",
      },
      {
        title: "Digital Marketing Strategy",
        description: "Data-informed roadmaps aligning multi-channel digital campaigns with measurable commercial milestones.",
      },
    ],
    benefits: [
      "Targeted audience reach that yields higher qualified conversion rates",
      "Transparent metric reporting and objective performance tracking",
      "Sustainable organic traffic generation that compounds over time",
      "Holistic search and media synergy designed for brand recognition",
    ],
  },
  {
    id: "graphic-designing",
    category: "design",
    title: "Graphic Designing",
    subtitle: "Creating impactful visual identities and creative designs that make brands memorable.",
    description:
      "Visual communication that captures attention and inspires action. We build unified design languages, brand identities, and commercial graphics that articulate your company's values across every touchpoint.",
    icon: "Palette",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    subServices: [
      {
        title: "Logo Design",
        description: "Distinctive, vector-crafted emblems that embody your brand vision with timeless memorability.",
      },
      {
        title: "Brand Identity",
        description: "Cohesive brand design systems comprising typography, color theory, iconography, and brand guidelines.",
      },
      {
        title: "Social Media Design",
        description: "Eye-catching post layouts, story templates, and video covers optimized for high feed retention.",
      },
      {
        title: "Marketing Banners",
        description: "High-impact visual promotional banners for digital ads, landing pages, and email newsletters.",
      },
      {
        title: "Promotional Graphics",
        description: "Compelling product flyers, presentation decks, brochures, and digital collateral for marketing pushes.",
      },
      {
        title: "Business Graphics",
        description: "Corporate letterheads, business cards, stationery, invoices, and professional brand collateral.",
      },
      {
        title: "Creative Visual Design",
        description: "Custom digital illustrations, visual mockups, and art direction tailored to distinct client campaigns.",
      },
    ],
    benefits: [
      "Consistent, premium visual presence that commands respect",
      "Custom vector assets ready for print, web, and app integration",
      "Strategically structured graphics that communicate messaging instantly",
      "Design assets delivered across all standardized modern formats",
    ],
  },
];

