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
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQAccordion from "@/components/common/FAQAccordion";
import Button from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { servicesFAQs } from "@/data/faqs";
import { servicesCategoriesData } from "@/data/servicesCatalog";

export const metadata: Metadata = {
  title: "Services | Web Development, SEO, Digital Marketing & Graphic Design",
  description:
    "Explore full-service digital solutions by Zavera.Tech: Custom Next.js Web Development, Technical & Local SEO, Google & Meta Ads, and Brand Identity Design in Abbottabad, Pakistan.",
  keywords: [
    "web development services Abbottabad",
    "software house Abbottabad",
    "SEO services Abbottabad Pakistan",
    "digital marketing agency Abbottabad",
    "graphic design agency Abbottabad",
    "custom web applications Pakistan",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />

        {/* Hero Section */}
        <div className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
            Our Complete Service Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mt-4 mb-6">
            End-to-End Digital Solutions Tailored for Growth
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From bespoke web engineering and high-performance Next.js architectures to multi-channel digital marketing and memorable brand identity design, Zavera.Tech delivers quantifiable business growth.
          </p>
        </div>

        {/* 4 Core Pillars Overview Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesCategoriesData.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#F07825]/40 hover:bg-orange-50/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block p-3 rounded-xl bg-orange-100/70 text-[#F07825] font-bold text-sm mb-4">
                  {category.title}
                </span>
                <p className="text-xs text-neutral-600 line-clamp-2 mb-4">
                  {category.description}
                </p>
              </div>
              <div className="text-xs font-semibold text-[#F07825] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View {category.subServices.length} Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* 4 Full Category Sections with all 33 Sub-Services */}
        {servicesCategoriesData.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={cat.id}
            className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#F07825] text-xs font-bold uppercase tracking-wider mb-3">
                  <span>Category 0{catIdx + 1}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
                  {cat.title}
                </h2>
                <p className="text-base text-neutral-600 mt-2 max-w-2xl">
                  {cat.description}
                </p>
              </div>
              <Button variant="outline" size="sm" href="/contact">
                Get a Quote
              </Button>
            </div>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.subServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group p-5 rounded-2xl bg-white border border-neutral-200 hover:border-[#F07825] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#F07825] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {item.shortDesc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#F07825] border-t border-neutral-100">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ============================================================== */}
        {/* FAQ SECTION */}
        {/* ============================================================== */}
        <section id="faq" className="pt-16 pb-20 border-t border-neutral-200/80 scroll-mt-24">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            description="Clear answers regarding our service delivery, project methodologies, and ongoing technical support in Abbottabad, Pakistan."
          />
          <FAQAccordion items={servicesFAQs} />
        </section>

        {/* CTA */}
        <CTASection
          badge="Ready to build?"
          title="Transform Your Online Presence with Zavera.Tech"
          description="Tell us about your brand's digital requirements and let our team engineer a high-performing solution."
        />
      </div>
    </div>
  );
}
