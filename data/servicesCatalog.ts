export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  subServices: {
    title: string;
    slug: string;
    shortDesc: string;
  }[];
}

export const servicesCategoriesData: ServiceCategory[] = [
  {
    id: "web-dev",
    title: "Web Development",
    slug: "web-development",
    icon: "Code2",
    description: "Custom web applications, modern responsive websites, Next.js, and e-commerce stores.",
    subServices: [
      { title: "Web Development Services", slug: "web-development", shortDesc: "Full-cycle modern web development" },
      { title: "Website Development", slug: "website-development", shortDesc: "Fast, responsive business websites" },
      { title: "Custom Web Application Development", slug: "custom-web-application-development", shortDesc: "Bespoke SaaS & web platforms" },
      { title: "Next.js Development", slug: "nextjs-development", shortDesc: "React Server Components & SSR architecture" },
      { title: "React.js Development", slug: "reactjs-development", shortDesc: "Interactive dynamic user interfaces" },
      { title: "E-commerce Website Development", slug: "ecommerce-development", shortDesc: "Scalable stores & secure payment gateways" },
      { title: "Full Stack Development", slug: "full-stack-development", shortDesc: "End-to-end frontend and backend systems" },
      { title: "Website Maintenance", slug: "website-maintenance", shortDesc: "Security, speed updates & continuous support" },
    ],
  },
  {
    id: "seo",
    title: "SEO Services",
    slug: "seo-services",
    icon: "Search",
    description: "Data-driven organic search strategies, technical audits, and high-converting keyword growth.",
    subServices: [
      { title: "SEO Services", slug: "seo-services", shortDesc: "End-to-end organic search growth" },
      { title: "Technical SEO", slug: "technical-seo", shortDesc: "Crawlability, Core Web Vitals & indexing" },
      { title: "On-Page SEO", slug: "on-page-seo", shortDesc: "Meta architecture, headings & intent mapping" },
      { title: "Off-Page SEO", slug: "off-page-seo", shortDesc: "Authority building & digital PR signals" },
      { title: "Local SEO", slug: "local-seo", shortDesc: "Abbottabad & regional search dominance" },
      { title: "Keyword Research", slug: "keyword-research", shortDesc: "Commercial & transactional query targeting" },
      { title: "Website SEO Audit", slug: "website-seo-audit", shortDesc: "Deep technical health & speed diagnosis" },
      { title: "Link Building", slug: "link-building", shortDesc: "High-trust authority backlinks" },
      { title: "Content Optimization", slug: "content-optimization", shortDesc: "Search-intent aligned copywriting" },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    slug: "digital-marketing",
    icon: "TrendingUp",
    description: "Paid advertising, social media growth, lead generation, and performance marketing funnels.",
    subServices: [
      { title: "Digital Marketing Services", slug: "digital-marketing", shortDesc: "Comprehensive digital growth strategies" },
      { title: "Social Media Marketing", slug: "social-media-marketing", shortDesc: "Multi-platform audience engagement" },
      { title: "Facebook Marketing", slug: "facebook-marketing", shortDesc: "Targeted campaigns & customer acquisition" },
      { title: "Instagram Marketing", slug: "instagram-marketing", shortDesc: "Visual storytelling & brand recognition" },
      { title: "Google Ads Management", slug: "google-ads", shortDesc: "High-ROI PPC search & shopping campaigns" },
      { title: "PPC Advertising", slug: "ppc-advertising", shortDesc: "Data-backed pay-per-click lead generation" },
      { title: "Content Marketing", slug: "content-marketing", shortDesc: "Authority blogs, guides & visual media" },
      { title: "Email Marketing", slug: "email-marketing", shortDesc: "Automated nurture sequences & retention" },
    ],
  },
  {
    id: "design",
    title: "Graphic Designing",
    slug: "graphic-designing",
    icon: "Palette",
    description: "Memorable vector logos, comprehensive corporate brand identities, and commercial graphics.",
    subServices: [
      { title: "Graphic Designing Services", slug: "graphic-designing", shortDesc: "Creative visual design across all media" },
      { title: "Logo Design", slug: "logo-design", shortDesc: "Distinctive geometric & vector logos" },
      { title: "Brand Identity Design", slug: "brand-identity-design", shortDesc: "Typography, color systems & style manuals" },
      { title: "Social Media Post Design", slug: "social-media-design", shortDesc: "High-retention feed posts & stories" },
      { title: "Business Card Design", slug: "business-card-design", shortDesc: "Corporate stationery & executive cards" },
      { title: "Banner Design", slug: "banner-design", shortDesc: "Digital web ads & marketing display banners" },
      { title: "Brochure Design", slug: "brochure-design", shortDesc: "Professional company profiles & product flyers" },
      { title: "UI/UX Design", slug: "ui-ux-design", shortDesc: "User-centric wireframes & Figma prototypes" },
    ],
  },
];

