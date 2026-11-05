import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MapPin, Sparkles, ChevronRight, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import CTASection from "@/components/shared/CTASection";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { allSubServices, getServiceBySlug } from "@/data/servicesCatalog/index";
import { siteConfig } from "@/data/navigation";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allSubServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Firnas.tech",
    };
  }

  const title = `${service.title} | Firnas.tech — Abbottabad, Pakistan`;
  const description = `${service.shortDesc} Professional ${service.primaryKeyword} delivered by Firnas.tech in Abbottabad, Pakistan and worldwide.`;

  return {
    title,
    description,
    keywords: [
      service.primaryKeyword,
      ...service.secondaryKeywords,
      ...service.localKeywords,
      "Firnas.tech Abbottabad",
    ],
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "website",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default async function DedicatedServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related dedicated services from same category or complementary disciplines
  const relatedServices = allSubServices
    .filter((s) => s.slug !== service.slug && (s.categorySlug === service.categorySlug || Math.random() > 0.5))
    .slice(0, 3);

  // LocalBusiness & Service JSON-LD Structured Data
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDesc,
    provider: {
      "@type": "LocalBusiness",
      name: "Firnas.tech",
      image: `${siteConfig.url}/logo.svg`,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Abbottabad",
        addressRegion: "Khyber Pakhtunkhwa",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "34.1688",
        longitude: "73.2215",
      },
      url: siteConfig.url,
      priceRange: "$$",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Abbottabad",
      },
      {
        "@type": "Country",
        name: "Pakistan",
      },
    ],
  };

  return (
    <div className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.categoryTitle, href: `/services#${service.categorySlug}` },
            { label: service.title },
          ]}
        />

        {/* Hero Section */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F07825] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Abbottabad, Pakistan &bull; {service.categoryTitle}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
                {service.heroDescription}
              </p>

              {/* Local SEO & Quality Highlight Box */}
              <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200/80 text-sm text-neutral-800 space-y-1">
                <p className="font-semibold text-neutral-900">
                  Targeted Local & Global Impact
                </p>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Engineered for businesses in <strong>Abbottabad, Hazara Division, Islamabad, and across Pakistan</strong> seeking international standards in engineering and design.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="lg" href="/contact">
                  <span>Get a Free Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" href="/services">
                  View All Services
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900">
                <Image
                  src={service.image}
                  alt={`${service.title} - Firnas.tech Abbottabad Pakistan`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Features & Value Proposition */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
              Why Our {service.title} Deliver Superior Results
            </h2>
            <p className="text-neutral-600 text-base mt-2">
              Engineered with industry-leading standards, strict security, and customer conversion principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-xs hover:border-[#F07825]/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F07825] flex items-center justify-center font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Flow */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
              Execution Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
              Our 5-Stage Delivery Process
            </h2>
            <p className="text-neutral-600 text-base mt-2">
              From strategic discovery to live delivery in Abbottabad and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#F07825] bg-white px-2.5 py-1 rounded-md border border-neutral-200 inline-block mb-3">
                    STEP {step.step}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 border-t border-neutral-200/80">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
                Frequently Asked Questions About {service.title}
              </h2>
            </div>
            <FAQAccordion items={service.faqs} />
          </section>
        )}

        {/* Related Services */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F07825]">
                Cross-Disciplinary Synergies
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-2">
                Explore Other Digital Solutions
              </h2>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/services"
                className="text-sm font-semibold text-[#F07825] hover:underline flex items-center"
              >
                <span>All Services Overview</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-xs hover:border-[#F07825]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#F07825] uppercase tracking-wider">
                    {rel.categoryTitle}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-neutral-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                  <Link
                    href={`/services/${rel.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          badge="Get in Touch"
          title={`Ready to Elevate Your Business with ${service.title}?`}
          description="Contact Firnas.tech today for a tailored proposal, technical roadmap, and transparent milestone estimate."
          buttonText="Request a Free Quote"
          buttonHref="/contact"
        />
      </div>
    </div>
  );
}
