export interface SubServiceDetail {
  slug: string;
  categorySlug: string;
  categoryTitle: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  heroDescription: string;
  image: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  localKeywords: string[];
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const dedicatedServices: SubServiceDetail[] = [
  {
    slug: "web-development",
    categorySlug: "software-development",
    categoryTitle: "Software Development",
    title: "Web Development Services",
    shortDesc: "High-performance, secure, and modern custom website development built with Next.js, React, and TypeScript.",
    heroHeadline: "Premier Web Development Company in Abbottabad, Pakistan",
    heroDescription: "We engineer lightning-fast, conversion-focused websites and web applications tailored to expand your business footprint locally and globally.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    primaryKeyword: "web development company in Abbottabad",
    secondaryKeywords: [
      "website development services Pakistan",
      "Next.js web development",
      "custom website development",
      "responsive web design Abbottabad",
      "frontend and backend developers",
    ],
    localKeywords: [
      "web developers in Abbottabad",
      "software house in Abbottabad",
      "website design Abbottabad KPK",
    ],
    features: [
      {
        title: "Modern Next.js & React Architecture",
        description: "Zero bloat, instant page transitions, and server-side rendering optimized for Core Web Vitals and top search engine rankings.",
      },
      {
        title: "Pixel-Perfect Responsive Layouts",
        description: "Adaptive interfaces crafted to render seamlessly across smartphones, tablets, laptops, and ultra-wide desktops.",
      },
      {
        title: "Enterprise Grade Security",
        description: "Rigorous input sanitization, CSRF protections, HTTPS compliance, and robust API boundaries protecting your corporate data.",
      },
      {
        title: "Scalable Full-Stack Integration",
        description: "Database modeling, cloud deployments, and custom third-party API integrations engineered for seamless continuous scaling.",
      },
    ],
    process: [
      { step: "01", title: "Requirement Discovery", desc: "Analyzing your business model, target audience, and functional specifications." },
      { step: "02", title: "Architecture & UI Wireframing", desc: "Structuring system flow, component hierarchies, and interactive design mockups." },
      { step: "03", title: "Engineering & API Development", desc: "Writing type-safe, maintainable code with Next.js, React, and robust database layers." },
      { step: "04", title: "Quality Assurance & SEO Audit", desc: "Cross-device responsiveness testing, speed optimization, and on-page SEO integration." },
      { step: "05", title: "Deployment & Support", desc: "Live production launch with continuous monitoring, maintenance, and technical updates." },
    ],
    faqs: [
      {
        question: "Why should my business choose custom web development over generic templates?",
        answer: "Generic templates are weighed down with unneeded code, security vulnerabilities, and sluggish loading speeds that hurt SEO. Custom development by Firnas.tech guarantees unique brand positioning, top performance scores, and tailored features that match your exact business workflows.",
      },
      {
        question: "Do you offer web development services for businesses in Abbottabad and across Pakistan?",
        answer: "Yes! Firnas.tech is proudly based in Abbottabad, Khyber Pakhtunkhwa. We serve local entrepreneurs, educational institutions, tourism ventures, and commercial enterprises across Pakistan and international clients.",
      },
      {
        question: "Will our new website be fully mobile responsive and SEO-friendly?",
        answer: "Every website we develop is built mobile-first and includes technical SEO fundamentals like XML sitemaps, Open Graph metadata, semantic HTML5, and schema structured data out of the box.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    categorySlug: "software-development",
    categoryTitle: "Software Development",
    title: "E-Commerce Website Development",
    shortDesc: "Scalable online stores with seamless payment gateways, inventory control, and high-converting checkout flows.",
    heroHeadline: "Scalable E-Commerce Store Development in Pakistan",
    heroDescription: "Transform your retail catalog into a 24/7 revenue engine with custom shopping carts, secure payment gateways, and friction-free user journeys.",
    image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    primaryKeyword: "ecommerce website development Abbottabad",
    secondaryKeywords: [
      "online store development Pakistan",
      "custom ecommerce platform",
      "payment gateway integration Pakistan",
      "Shopify & Next.js ecommerce",
      "ecommerce SEO services",
    ],
    localKeywords: [
      "ecommerce developers Abbottabad",
      "online shop builder KPK",
      "Pakistan online store solutions",
    ],
    features: [
      {
        title: "Optimized Checkout Experience",
        description: "Streamlined single-page checkouts designed to minimize cart abandonment and maximize purchase completion rates.",
      },
      {
        title: "Multi-Currency & Local Gateways",
        description: "Seamless integration with Pakistani payment methods (EasyPaisa, JazzCash, bank cards) and international gateways (Stripe, PayPal).",
      },
      {
        title: "Inventory & Order Management",
        description: "Real-time stock tracking, order notifications, invoice generation, and automated shipping status updates.",
      },
      {
        title: "Search-Engine Optimized Product Catalogs",
        description: "Rich product schema markup, breadcrumb navigation, and canonical tagging to get your products ranked on Google Shopping.",
      },
    ],
    process: [
      { step: "01", title: "Catalog & Business Flow Audit", desc: "Mapping categories, SKU structures, shipping rules, and payment gateways." },
      { step: "02", title: "Store UI/UX Prototyping", desc: "Designing intuitive product detail layouts, search filters, and checkout screens." },
      { step: "03", title: "Platform Implementation", desc: "Developing secure cart mechanisms, database logic, and gateway APIs." },
      { step: "04", title: "Security & Transaction Testing", desc: "Validating order flows, payment handshakes, and SSL cryptographic integrity." },
      { step: "05", title: "Launch & Growth Strategy", desc: "Going live with product feed setup, analytics tracking, and conversion optimization." },
    ],
    faqs: [
      {
        question: "Can you integrate local Pakistani payment gateways like JazzCash and EasyPaisa?",
        answer: "Yes, we integrate both local Pakistani payment gateways (JazzCash, EasyPaisa, PayFast, direct debit) and international merchant options (Stripe, PayPal) with secure webhook verification.",
      },
      {
        question: "How do you protect customer transactions and card data?",
        answer: "We adhere strictly to PCI-DSS best practices, enforce HTTPS encryption, and tokenize sensitive financial details so payment data is never stored vulnerably on local servers.",
      },
    ],
  },
  {
    slug: "seo-services",
    categorySlug: "digital-marketing",
    categoryTitle: "Digital Marketing & SEO",
    title: "Search Engine Optimization (SEO) Services",
    shortDesc: "Data-driven organic search strategies designed to dominate competitive rankings and drive qualified customer leads.",
    heroHeadline: "Leading SEO Agency in Abbottabad & Pakistan",
    heroDescription: "Get your website discovered by high-intent customers actively searching for your services on Google through data-backed technical and on-page SEO.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    primaryKeyword: "best SEO agency in Abbottabad",
    secondaryKeywords: [
      "SEO services Pakistan",
      "technical SEO consultant",
      "on-page SEO optimization",
      "organic traffic growth agency",
      "Google Search Console optimization",
    ],
    localKeywords: [
      "local SEO Abbottabad",
      "SEO expert Abbottabad KPK",
      "business ranking Abbottabad",
    ],
    features: [
      {
        title: "Comprehensive Technical SEO Audits",
        description: "Resolving crawl anomalies, sitemap errors, indexing obstacles, rendering bottlenecks, and Core Web Vitals latency.",
      },
      {
        title: "Intent-Mapped Keyword Strategies",
        description: "Targeting commercial and transactional search queries that attract qualified, paying clients rather than hollow traffic.",
      },
      {
        title: "On-Page Content & Structure Tuning",
        description: "Crafting optimized meta titles, descriptions, semantic heading hierarchies, internal linking webs, and image alt tags.",
      },
      {
        title: "Rich Schema Markup Implementation",
        description: "Injecting Organization, Article, LocalBusiness, and FAQ schemas to capture rich Google snippets and elevated CTRs.",
      },
    ],
    process: [
      { step: "01", title: "Site Health & Keyword Audit", desc: "Discovering technical crawl errors, backlink profiles, and competitive search gaps." },
      { step: "02", title: "Strategy Formulation", desc: "Building a targeted roadmap mapping high-value keywords to dedicated landing pages." },
      { step: "03", title: "Technical & On-Page Execution", desc: "Implementing schema, tuning speed, optimizing title tags, and refining site architecture." },
      { step: "04", title: "Authority Building & Content", desc: "Publishing authoritative industry guides and cultivating high-trust backlink signals." },
      { step: "05", title: "Performance Monitoring", desc: "Tracking Google Search Console rankings, CTR, user engagement, and continuous iteration." },
    ],
    faqs: [
      {
        question: "How long does it typically take to see organic rankings improve?",
        answer: "SEO is a strategic compounding investment. Technical fixes and indexing updates usually show initial traction within 3 to 6 weeks, while competitive keyword ranking improvements typically build strong momentum between 3 to 6 months.",
      },
      {
        question: "Do you guarantee first-place rankings on Google?",
        answer: "As an ethical digital agency, we adhere strictly to Google Webmaster Guidelines and do not use black-hat techniques or make false guarantees. We focus on transparent technical excellence, superior content relevance, and verifiable organic growth.",
      },
    ],
  },
  {
    slug: "local-seo",
    categorySlug: "digital-marketing",
    categoryTitle: "Digital Marketing & SEO",
    title: "Local SEO & Regional Optimization",
    shortDesc: "Dominate local searches in Abbottabad and Khyber Pakhtunkhwa to capture foot traffic and inbound customer calls.",
    heroHeadline: "Local SEO Services for Abbottabad Businesses",
    heroDescription: "Connect with nearby customers searching 'near me' in Abbottabad. We optimize your geographic search footprint to drive real-world calls and store visits.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
    primaryKeyword: "local SEO services in Abbottabad",
    secondaryKeywords: [
      "Abbottabad business SEO",
      "local search optimization KPK",
      "Google map ranking Pakistan",
      "near me search optimization",
      "local citations Abbottabad",
    ],
    localKeywords: [
      "Abbottabad local SEO company",
      "local marketing Abbottabad Pakistan",
      "Google Business Profile optimization Abbottabad",
    ],
    features: [
      {
        title: "Localized Schema Markup",
        description: "Structured LocalBusiness, PostalAddress, and geographic coordinates signaling your physical location clearly to search engines.",
      },
      {
        title: "Regional Keyword Mapping",
        description: "Optimizing content with geographic intent (Abbottabad, KPK, Hazara Division, Pakistan) to attract local buyers.",
      },
      {
        title: "NAP Consistency Assurance",
        description: "Ensuring identical Name, Address, and Phone details across your website, citations, directories, and social profiles.",
      },
      {
        title: "Hyper-Local Content Creation",
        description: "Developing regional service landing pages that answer local queries and address distinct community market needs.",
      },
    ],
    process: [
      { step: "01", title: "Local Presence Assessment", desc: "Auditing existing regional visibility, NAP citations, and localized competitor strength." },
      { step: "02", title: "Local Keyword Identification", desc: "Discovering high-volume regional search queries for Abbottabad and surrounding areas." },
      { step: "03", title: "On-Site Localization", desc: "Embedding localized metadata, contact blocks, and JSON-LD PostalAddress schema." },
      { step: "04", title: "Regional Citation Building", desc: "Aligning business directory listings to reinforce regional authority signals." },
      { step: "05", title: "Tracking Local Inquiries", desc: "Monitoring local search queries, direction requests, phone clicks, and website visits." },
    ],
    faqs: [
      {
        question: "Why is Local SEO crucial for businesses in Abbottabad?",
        answer: "When consumers in Abbottabad look for clinics, schools, software houses, retail stores, or consulting services, they search locally. Ranking in local search results puts your brand directly in front of ready-to-buy customers in your immediate vicinity.",
      },
      {
        question: "Does Firnas.tech help with Google Business Profile optimization?",
        answer: "Yes, we structure your website data to support and align seamlessly with your Google Business Profile, ensuring consistent location data and strong local search signals.",
      },
    ],
  },
  {
    slug: "brand-identity-design",
    categorySlug: "graphic-designing",
    categoryTitle: "Graphic Designing",
    title: "Brand Identity & Logo Design",
    shortDesc: "Distinguished vector logos, color systems, and corporate visual guidelines that build trust and visual authority.",
    heroHeadline: "Creative Logo Design & Brand Identity in Abbottabad",
    heroDescription: "We craft iconic, enduring brand visual identities that communicate your company's core values and distinguish you from competitors.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    primaryKeyword: "logo design company in Abbottabad",
    secondaryKeywords: [
      "brand identity designer Pakistan",
      "corporate branding agency",
      "vector logo design Abbottabad",
      "business stationery design KPK",
      "visual design system Pakistan",
    ],
    localKeywords: [
      "graphic designer in Abbottabad",
      "branding services Abbottabad KPK",
      "creative agency Abbottabad",
    ],
    features: [
      {
        title: "Original Vector Logo Creation",
        description: "Precision-engineered vector marks and wordmarks designed from scratch to scale clearly from favicons to building billboards.",
      },
      {
        title: "Cohesive Color & Typography Systems",
        description: "Psychologically grounded color palettes paired with harmonious typography hierarchies for print and digital interfaces.",
      },
      {
        title: "Complete Corporate Brand Guidelines",
        description: "Comprehensive style manuals specifying clear zones, prohibited uses, color codes (HEX, RGB, CMYK), and brand applications.",
      },
      {
        title: "Digital & Print Ready Deliverables",
        description: "Assets exported in SVG, AI, EPS, PNG, and PDF formats ready for social media, merchandise, invoices, and signage.",
      },
    ],
    process: [
      { step: "01", title: "Brand Discovery & Moodboards", desc: "Understanding company ethos, competitive landscape, and aesthetic aspirations." },
      { step: "02", title: "Conceptual Sketching & Ideation", desc: "Developing diverse logo directions exploring symbolism, typography, and abstracts." },
      { step: "03", title: "Vector Crafting & Refinement", desc: "Fine-tuning geometric proportions, bezier curves, typography pairing, and colors." },
      { step: "04", title: "Real-World Mockup Testing", desc: "Validating visual impact across business cards, digital screens, apparel, and signage." },
      { step: "05", title: "Final Deliverable Package", desc: "Packaging all master vector source files, raster exports, and brand guideline documentation." },
    ],
    faqs: [
      {
        question: "What source file formats do you deliver upon completion?",
        answer: "We provide complete production-ready file kits including scalable vector files (AI, EPS, SVG) and high-resolution raster files (PNG transparent, JPG) alongside standard PDF brand guideline sheets.",
      },
      {
        question: "Do you offer branding services for startups in Abbottabad and overseas?",
        answer: "Yes, we have developed visual identities for local startups across Abbottabad and KPK as well as international digital commerce and SaaS brands.",
      },
    ],
  },
];

