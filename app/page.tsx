import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Search, Sparkles, Target, Compass, Code, Layers, Zap } from "lucide-react";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import ProjectCard from "@/components/common/ProjectCard";
import LearningCard from "@/components/common/LearningCard";
import CTASection from "@/components/common/CTASection";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/common/FAQAccordion";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { learningArticles } from "@/data/learning";

export const metadata: Metadata = {
  title: "IT Company in Abbottabad | Zavera.Tech",
  description:
    "Zavera.Tech is an IT company in Abbottabad offering software development, web development, digital marketing and graphic design services.",
  keywords: [
    "IT Company in Abbottabad",
    "Software House in Abbottabad",
    "Software Development Company in Abbottabad",
    "Digital Marketing Agency in Abbottabad",
    "Web Development Company in Abbottabad",
    "Graphic Designing Services in Abbottabad",
    "Custom Software Development",
    "Professional Website Development",
    "Search Engine Optimization",
    "Zavera.Tech",
  ],
  alternates: {
    canonical: "https://zavera-tech-seo.vercel.app/",
  },
  openGraph: {
    title: "IT Company in Abbottabad | Zavera.Tech",
    description:
      "Zavera.Tech is an IT company in Abbottabad offering software development, web development, digital marketing and graphic design services.",
    url: "https://zavera-tech-seo.vercel.app/",
    siteName: "Zavera.Tech",
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "ITCompany"],
    name: "Zavera.Tech",
    url: "https://zavera-tech-seo.vercel.app/",
    logo: "https://zavera-tech-seo.vercel.app/icon.svg",
    image: "https://zavera-tech-seo.vercel.app/purpose-showcase.jpg",
    description:
      "Zavera.Tech is an IT company in Abbottabad offering software development, web development, digital marketing and graphic design services.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abbottabad",
      addressRegion: "Khyber Pakhtunkhwa",
      addressCountry: "PK",
    },
    areaServed: [
      { "@type": "City", name: "Abbottabad" },
      { "@type": "Country", name: "Pakistan" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Search Engine Optimization" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Designing Services" } },
      ],
    },
  };

  const homepageFAQs = [
    {
      question: "Which IT services does Zavera.Tech offer?",
      answer:
        "Zavera.Tech is a full-service IT company and software house in Abbottabad offering custom software development, modern web development, search engine optimization (SEO), digital marketing campaigns, and corporate brand identity design.",
    },
    {
      question: "Does Zavera.Tech provide website development?",
      answer:
        "Yes. As a dedicated web development company in Abbottabad, we engineer responsive business websites, Next.js web applications, and scalable e-commerce platforms optimized for speed and search engine rankings.",
    },
    {
      question: "Does Zavera.Tech offer digital marketing services?",
      answer:
        "Yes. Our digital marketing agency in Abbottabad provides comprehensive technical SEO, local search optimization, content marketing, Google Ads management, and social media campaigns.",
    },
    {
      question: "Does Zavera.Tech provide graphic design?",
      answer:
        "Yes. We offer professional graphic designing services in Abbottabad, including corporate logo design, complete brand identity kits, marketing collateral, and UI/UX design.",
    },
    {
      question: "How can I contact Zavera.Tech?",
      answer:
        "You can easily get in touch with our team through our Contact page, send an email to our project consultants, or request a free quote for your software, web, or marketing project in Abbottabad.",
    },
  ];

  const workingProcess = [
    {
      step: "01",
      name: "Discover",
      desc: "We analyze your business goals, target audience, technical requirements, and market dynamics to establish clear milestones.",
      icon: Search,
    },
    {
      step: "02",
      name: "Plan",
      desc: "Our architects map out system structures, technology stacks, content frameworks, and sprint roadmaps to ensure predictability.",
      icon: Compass,
    },
    {
      step: "03",
      name: "Design",
      desc: "We craft human-centric UI/UX mockups, brand assets, and interactive prototypes tailored for user retention and elegance.",
      icon: Sparkles,
    },
    {
      step: "04",
      name: "Develop",
      desc: "Our engineers write clean, modular, and type-safe code paired with continuous performance audits and SEO indexing standards.",
      icon: Code,
    },
    {
      step: "05",
      name: "Launch",
      desc: "We oversee secure deployments, server optimizations, analytics integration, and comprehensive post-launch monitoring.",
      icon: Zap,
    },
  ];

  const whyChooseUs = [
    {
      title: "Client-Focused Solutions",
      desc: "Every line of code, design asset, and SEO campaign is tailored to advance your commercial objectives and local market presence.",
    },
    {
      title: "Modern Technologies",
      desc: "We build on high-performance standards including Next.js, React, TypeScript, and modern cloud infrastructures.",
    },
    {
      title: "Creative and Professional Team",
      desc: "Our multidisciplinary software developers, digital marketers, and visual designers work cohesively on your projects.",
    },
    {
      title: "Business-Oriented Approach",
      desc: "We emphasize measurable digital growth, search visibility, conversion optimization, and long-term technical reliability.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Introduction Section */}
      <section className="py-20 bg-neutral-50/60 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
                Professional Digital Solutions for Modern Businesses
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                Based in Abbottabad, Khyber Pakhtunkhwa, Zavera.Tech operates as a dedicated software house and full-service IT company. We believe transformative digital solutions require both precision software engineering and strategic digital marketing.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                As a trusted software development company in Abbottabad, our multidisciplinary engineers, digital marketers, and UI/UX designers collaborate to turn complex business goals into scalable online platforms.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-neutral-800">
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">Custom Software Development</h3>
                  <p className="text-neutral-500 font-normal">Robust web apps &amp; systems</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">Modern Website Development</h3>
                  <p className="text-neutral-500 font-normal">Fast, responsive Next.js sites</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">Digital Marketing Solutions</h3>
                  <p className="text-neutral-500 font-normal">SEO &amp; targeted growth ads</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-neutral-200/80">
                  <h3 className="font-bold text-neutral-900 text-sm mb-1">Creative Graphic Designing</h3>
                  <p className="text-neutral-500 font-normal">Brand identity &amp; UI design</p>
                </div>
              </div>
              <div className="pt-2">
                <Button variant="outline" size="md" href="/about">
                  Learn More About Zavera.Tech
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 bg-white p-4 flex items-center justify-center">
                <Image
                  src="/purpose-showcase.jpg"
                  alt="Zavera.Tech - IT Company and Software House in Abbottabad delivering web development and digital marketing"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Deliver"
            title="Our Services"
            description="As a full-service IT company and software house in Abbottabad, we provide specialized software engineering, web development, digital marketing, and graphic design solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#F07825] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F07825] uppercase tracking-wider">Service 01</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-3">Software Development Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Custom software development, scalable web architectures, and reliable enterprise systems engineered for business efficiency.
                </p>
              </div>
              <Link href="/services/custom-web-application-development" className="text-xs font-semibold text-[#F07825] flex items-center gap-1 hover:underline">
                Explore Software <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#F07825] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F07825] uppercase tracking-wider">Service 02</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-3">Web Development Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  As a leading web development company in Abbottabad, we build responsive Next.js websites and high-converting e-commerce stores.
                </p>
              </div>
              <Link href="/services/web-development" className="text-xs font-semibold text-[#F07825] flex items-center gap-1 hover:underline">
                Explore Web Dev <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#F07825] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F07825] uppercase tracking-wider">Service 03</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-3">Digital Marketing Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Our digital marketing agency in Abbottabad provides technical SEO, local search ranking, Google Ads, and social media campaigns.
                </p>
              </div>
              <Link href="/services/digital-marketing" className="text-xs font-semibold text-[#F07825] flex items-center gap-1 hover:underline">
                Explore Marketing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-[#F07825] hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#F07825] uppercase tracking-wider">Service 04</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-3">Graphic Designing Services</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  Professional graphic designing services in Abbottabad including brand identity, corporate logos, marketing creatives, and UI/UX design.
                </p>
              </div>
              <Link href="/services/graphic-designing" className="text-xs font-semibold text-[#F07825] flex items-center gap-1 hover:underline">
                Explore Design <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" size="md" href="/services">
              <span>View All Services & Specializations</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Zavera.Tech Section */}
      <section className="py-24 bg-neutral-50/70 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Zavera Standard"
            title="Why Choose Zavera.Tech as Your IT Partner in Abbottabad?"
            description="We build digital products and marketing campaigns designed for stability, high search rankings, and commercial growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-xs hover:border-[#F07825]/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F07825] mb-5 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Working Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Methodology"
            title="Web Development and Software Solutions for Your Business"
            description="A battle-tested 5-stage lifecycle designed to bring custom web apps and digital products from concept to successful launch."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workingProcess.map((proc, idx) => {
              const IconComp = proc.icon;
              return (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#F07825]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#F07825] bg-orange-50 px-2.5 py-1 rounded-md">
                        STAGE {proc.step}
                      </span>
                      <IconComp className="w-5 h-5 text-neutral-400" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {proc.name}
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Digital Marketing Services to Grow Your Online Presence */}
      <section className="py-24 bg-neutral-50/70 border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
                Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
                Featured Projects
              </h2>
              <p className="mt-2 text-neutral-600 text-base max-w-xl">
                A selection of digital platforms, web portals, and branding initiatives engineered for our partners.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="md" href="/services">
              <span>Discuss Your Next Project</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Learning Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
                Knowledge Hub
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
                Creative Graphic Design and Brand Identity Solutions
              </h2>
              <p className="mt-2 text-neutral-600 text-base max-w-xl">
                Free foundational tutorials covering modern web development, SEO strategies, and visual branding.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button variant="outline" size="sm" href="/learning">
                Browse All Guides
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningArticles.slice(0, 3).map((article) => (
              <LearningCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials Architecture (Clearly labeled demo architecture per prompt guidelines) */}
      <section className="py-20 bg-neutral-50/50 border-t border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Regional Reach"
            title="Serving Businesses in Abbottabad and Across Pakistan"
            description="We partner closely with local enterprises in Abbottabad and organizations across Pakistan, delivering transparent milestones and measurable business results."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                &ldquo;Zavera.Tech approaches projects with a structured software engineering discipline. Their understanding of Next.js and technical SEO delivered a measurable boost in our site performance.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F07825] flex items-center justify-center font-bold text-sm">
                  JS
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">Platform Partner</div>
                  <div className="text-xs text-neutral-500">Recruitment & Job Platform</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                &ldquo;The brand identity and visual assets created for our digital commerce portal gave us the clarity and professionalism needed to launch confidently.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F07825] flex items-center justify-center font-bold text-sm">
                  ES
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">E-Commerce Partner</div>
                  <div className="text-xs text-neutral-500">Digital Retail Platform</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                &ldquo;From responsive layouts to rapid query loading, Zavera.Tech proved to be reliable, transparent, and technically rigorous throughout development.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F07825] flex items-center justify-center font-bold text-sm">
                  MR
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">Hospitality Partner</div>
                  <div className="text-xs text-neutral-500">Tour & Travel Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Frequently Asked Questions */}
      <section className="py-24 bg-white border-t border-neutral-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Queries"
            title="Frequently Asked Questions About Our IT Services"
            description="Clear answers regarding our IT services, software engineering, digital marketing, and web development in Abbottabad, Pakistan."
          />
          <FAQAccordion items={homepageFAQs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <CTASection
        badge="Ready to build?"
        title="Ready to Grow Your Business with Zavera.Tech?"
        description="Partner with Abbottabad's trusted IT company and software house to engineer high-performing digital solutions."
      />
    </div>
  );
}
