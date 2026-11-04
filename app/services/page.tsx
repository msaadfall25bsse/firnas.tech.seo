import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  TrendingUp,
  Palette,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Layout,
  Server,
  Layers,
  Smartphone,
  ShoppingCart,
  Cpu,
  Search,
  Globe,
  FileText,
  Share2,
  Compass,
  Sparkles,
  PenTool,
  Award,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQAccordion from "@/components/shared/FAQAccordion";
import Button from "@/components/shared/Button";
import { servicesData } from "@/data/services";
import { servicesFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Services | Software Development, Digital Marketing & Graphic Design in Abbottabad",
  description:
    "Explore digital agency services by Firnas.tech in Abbottabad, Pakistan: Custom Web Development, E-Commerce Stores, Technical SEO, Local Search Optimization, and Brand Identity Design.",
  keywords: [
    "web development services Abbottabad",
    "software house Abbottabad",
    "SEO services Abbottabad Pakistan",
    "graphic design agency Abbottabad",
    "digital marketing Abbottabad",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const softwareService = servicesData.find((s) => s.id === "software-development")!;
  const marketingService = servicesData.find((s) => s.id === "digital-marketing")!;
  const designService = servicesData.find((s) => s.id === "graphic-designing")!;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
            Our Offerings
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-tight mt-4 mb-6">
            End-to-End Digital Solutions Tailored for Growth
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From modern web applications and high-conversion e-commerce portals to data-driven SEO campaigns and memorable visual identities, we provide the complete digital toolkit for modern business.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
          <a
            href="#software-development"
            className="px-5 py-2.5 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors bg-white shadow-xs"
          >
            Software Development
          </a>
          <a
            href="#digital-marketing"
            className="px-5 py-2.5 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors bg-white shadow-xs"
          >
            Digital Marketing & SEO
          </a>
          <a
            href="#graphic-designing"
            className="px-5 py-2.5 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors bg-white shadow-xs"
          >
            Graphic Designing
          </a>
          <a
            href="#faq"
            className="px-5 py-2.5 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors bg-white shadow-xs"
          >
            Frequently Asked Questions
          </a>
        </div>

        {/* Dedicated Service Landing Pages Highlight */}
        <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F07825]">
                Specialized Service Hubs
              </span>
              <h2 className="text-lg font-bold text-neutral-900 mt-1">
                Explore Dedicated Local & Industry Service Portals
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <Link href="/services/web-development" className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors">
                Web Development
              </Link>
              <Link href="/services/ecommerce-development" className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors">
                E-Commerce
              </Link>
              <Link href="/services/seo-services" className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors">
                SEO Agency
              </Link>
              <Link href="/services/local-seo" className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors">
                Local SEO (Abbottabad)
              </Link>
              <Link href="/services/brand-identity-design" className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] transition-colors">
                Logo & Branding
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* SERVICE 1: SOFTWARE DEVELOPMENT */}
        {/* ============================================================== */}
        <section
          id="software-development"
          className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F07825] text-xs font-bold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Service Category 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Software Development
              </h2>
              <p className="text-lg font-medium text-neutral-700">
                {softwareService.subtitle}
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                {softwareService.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {softwareService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="primary" size="md" href="/contact">
                  Discuss Software Requirements
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-4/3">
                <Image
                  src={softwareService.image}
                  alt="Software development and programming at Firnas.tech"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sub-services breakdown */}
          <div className="bg-neutral-50/70 rounded-3xl p-8 sm:p-12 border border-neutral-200/80">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center sm:text-left">
              Software Development Specializations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softwareService.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-2xs hover:border-[#F07825]/40 transition-colors"
                >
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {sub.title}
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SERVICE 2: DIGITAL MARKETING */}
        {/* ============================================================== */}
        <section
          id="digital-marketing"
          className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-4/3">
                <Image
                  src={marketingService.image}
                  alt="SEO analytics and digital marketing strategy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F07825] text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Service Category 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Digital Marketing & SEO
              </h2>
              <p className="text-lg font-medium text-neutral-700">
                {marketingService.subtitle}
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                {marketingService.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {marketingService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="primary" size="md" href="/contact">
                  Plan an SEO Growth Campaign
                </Button>
              </div>
            </div>
          </div>

          {/* Sub-services breakdown */}
          <div className="bg-neutral-50/70 rounded-3xl p-8 sm:p-12 border border-neutral-200/80">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center sm:text-left">
              Digital Marketing & SEO Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketingService.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-2xs hover:border-[#F07825]/40 transition-colors"
                >
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {sub.title}
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SERVICE 3: GRAPHIC DESIGNING */}
        {/* ============================================================== */}
        <section
          id="graphic-designing"
          className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F07825] text-xs font-bold uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>Service Category 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                Graphic Designing
              </h2>
              <p className="text-lg font-medium text-neutral-700">
                {designService.subtitle}
              </p>
              <p className="text-neutral-600 text-base leading-relaxed">
                {designService.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {designService.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="primary" size="md" href="/contact">
                  Start Brand Identity Design
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-4/3">
                <Image
                  src={designService.image}
                  alt="Graphic designing, vector art, and creative branding at Firnas.tech"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sub-services breakdown */}
          <div className="bg-neutral-50/70 rounded-3xl p-8 sm:p-12 border border-neutral-200/80">
            <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center sm:text-left">
              Graphic Design & Visual Brand Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designService.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-2xs hover:border-[#F07825]/40 transition-colors"
                >
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {sub.title}
                  </h4>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* FAQ SECTION */}
        {/* ============================================================== */}
        <section id="faq" className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            description="Clear answers regarding our service delivery, project methodologies, and ongoing technical support."
          />
          <FAQAccordion items={servicesFAQs} />
        </section>

        {/* CTA */}
        <CTASection
          badge="Ready to build?"
          title="Transform Your Online Presence with Firnas.tech"
          description="Tell us about your brand's digital requirements and let our experts engineer a high-performing solution."
        />
      </div>
    </div>
  );
}

