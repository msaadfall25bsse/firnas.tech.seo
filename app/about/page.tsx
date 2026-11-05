import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  HeartHandshake,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
} from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import CTASection from "@/components/common/CTASection";
import FAQAccordion from "@/components/common/FAQAccordion";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Firnas.tech | Digital Agency in Abbottabad",
  description:
    "Discover Firnas.tech, a digital agency in Abbottabad offering software development, web development, digital marketing and creative design solutions.",
  keywords: [
    "Digital Agency in Abbottabad",
    "Technology Company in Abbottabad",
    "Digital Solutions Company in Abbottabad",
    "Web Development and Digital Marketing Agency",
    "Creative Digital Agency in Pakistan",
    "Software Development and Design Company",
    "Professional Digital Services Company",
    "About Firnas.tech",
  ],
  alternates: {
    canonical: "https://firnas-tech-seo.vercel.app/about",
  },
  openGraph: {
    title: "About Firnas.tech | Digital Agency in Abbottabad",
    description:
      "Discover Firnas.tech, a digital agency in Abbottabad offering software development, web development, digital marketing and creative design solutions.",
    url: "https://firnas-tech-seo.vercel.app/about",
    type: "website",
    images: [
      {
        url: "/about-team-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Firnas.tech digital agency team collaborative workspace in Abbottabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Firnas.tech | Digital Agency in Abbottabad",
    description:
      "Discover Firnas.tech, a digital agency in Abbottabad offering software development, web development, digital marketing and creative design solutions.",
    images: ["/about-team-hero.jpg"],
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Technical Excellence",
      desc: "We focus on selecting suitable technologies and development practices according to the requirements of each project.",
      icon: ShieldCheck,
    },
    {
      title: "Creative Thinking",
      desc: "We value creative ideas and thoughtful design that help businesses communicate their identity clearly.",
      icon: Lightbulb,
    },
    {
      title: "Client-Focused Solutions",
      desc: "We consider project objectives, business requirements, and user needs when planning digital solutions.",
      icon: Target,
    },
    {
      title: "Transparent Collaboration",
      desc: "We believe in clear communication, realistic expectations, and a structured approach throughout the project.",
      icon: HeartHandshake,
    },
    {
      title: "Continuous Improvement",
      desc: "We value learning, adapting, and improving our approach as technologies and digital requirements evolve.",
      icon: TrendingUp,
    },
  ];

  const businessSolutions = [
    {
      title: "Building Modern Business Websites",
      desc: "We develop website solutions designed around business requirements, usability, responsive layouts, and modern web technologies.",
      href: "/services/website-development",
      linkText: "Explore Website Development",
    },
    {
      title: "Developing Custom Software Solutions",
      desc: "We approach software projects by understanding their required functionality, user needs, and technical requirements.",
      href: "/services/custom-web-application-development",
      linkText: "Explore Custom Software",
    },
    {
      title: "Improving Organic Search Visibility",
      desc: "We consider search engine optimization as part of a website's digital presence, with attention to relevant content, on-page optimization, and technical SEO practices.",
      href: "/services/seo-services",
      linkText: "Explore SEO Services",
    },
    {
      title: "Creating Professional Brand Identities",
      desc: "We help businesses communicate their visual identity through graphic design and creative design solutions.",
      href: "/services/graphic-designing",
      linkText: "Explore Brand Identity Design",
    },
  ];

  const whyChooseUs = [
    {
      title: "Integrated Digital Services",
      desc: "Software development, digital marketing, and graphic design are brought together under one digital services platform.",
      icon: Layers,
    },
    {
      title: "Practical Technology Solutions",
      desc: "We consider project requirements before selecting technologies and development approaches.",
      icon: Cpu,
    },
    {
      title: "Creative and Strategic Thinking",
      desc: "We combine technical and creative perspectives when approaching digital projects.",
      icon: Sparkles,
    },
    {
      title: "Focus on Business Requirements",
      desc: "We aim to understand the purpose of each project and align our work with its intended requirements.",
      icon: Target,
    },
  ];

  const aboutFaqs = [
    {
      id: "about-1",
      question: "What is Firnas.tech?",
      answer:
        "Firnas.tech is a digital agency focused on software development, web development, digital marketing, and graphic design.",
      category: "General" as const,
    },
    {
      id: "about-2",
      question: "Where is Firnas.tech located?",
      answer: "Firnas.tech is based in Abbottabad, Pakistan.",
      category: "General" as const,
    },
    {
      id: "about-3",
      question: "What services does Firnas.tech offer?",
      answer:
        "Firnas.tech focuses on software development, web development, digital marketing, and graphic design services.",
      category: "Services" as const,
    },
    {
      id: "about-4",
      question: "Does Firnas.tech provide website development services?",
      answer:
        "Yes. Firnas.tech focuses on modern website development and web solutions based on project requirements.",
      category: "Services" as const,
    },
    {
      id: "about-5",
      question: "Does Firnas.tech offer SEO services?",
      answer:
        "Digital marketing and SEO are among the services offered by Firnas.tech. SEO work is planned and executed according to project requirements and industry best practices.",
      category: "Services" as const,
    },
    {
      id: "about-6",
      question: "Can startups and small businesses work with Firnas.tech?",
      answer:
        "Businesses can contact Firnas.tech to discuss their project requirements and determine suitable digital solutions.",
      category: "General" as const,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* ============================================================== */}
        {/* 1. HERO SECTION (H1) */}
        {/* ============================================================== */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>About Firnas.tech &bull; Abbottabad, Pakistan</span>
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                Who We Are — A Digital Agency in Abbottabad
              </h1>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Firnas.tech is a digital agency focused on software development, web development, digital marketing, and graphic design. We bring technology, creativity, and strategic thinking together to help businesses establish and improve their digital presence.
              </p>

              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Our approach is centered on understanding business requirements and developing practical digital solutions that support communication, functionality, and online growth.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button variant="primary" size="md" href="/services">
                  Our Services
                </Button>
                <Button variant="outline" size="md" href="/contact">
                  Start a Conversation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl border border-neutral-200/80 bg-neutral-900">
                <Image
                  src="/about-team-hero.jpg"
                  alt="Firnas.tech digital agency team collaborative workspace in Abbottabad"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. OUR STORY & VISION (H2) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
              Our Story and the Vision Behind Firnas.tech
            </h2>
            <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
              At Firnas.tech, we believe that technology and creative design play an important role in how businesses connect with people and present themselves online.
            </p>
            <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
              Our focus is to bring software development, digital marketing, and creative design together under one digital services platform. By understanding different business requirements, we aim to deliver solutions that are useful, accessible, and aligned with each project&apos;s objectives.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. MISSION & VISION (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
              Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
              Our Mission and Vision for Digital Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F07825] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-normal">
                Our mission is to provide practical digital solutions through software development, digital marketing, and graphic design. We aim to understand each project&apos;s requirements and approach them with a focus on quality, usability, and clear communication.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200/80 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F07825] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-normal">
                Our vision is to contribute to the digital development of businesses by making modern technology, creative design, and digital services more accessible and useful.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. CORE VALUES (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <SectionHeading
            badge="Our Foundation"
            title="Our Core Values and Working Principles"
            description="We maintain high standards across technology selection, client collaboration, and creative craftsmanship."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#F07825]/40 transition-all duration-300 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#F07825] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. OUR EXPERTISE IN SOFTWARE, SEO & DESIGN (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mt-3">
              Our Expertise in Software Development, SEO and Creative Design
            </h2>
            <p className="text-neutral-600 text-base mt-2">
              Combining software engineering rigor with search engine visibility and creative visual identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Software and Web Development
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We work on modern web development solutions, including business websites and custom web applications. Depending on project requirements, our development work can involve technologies such as Next.js, React, JavaScript, and TypeScript.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-200/70 mt-6">
                <Link
                  href="/services/web-development"
                  className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                >
                  <span>Explore Web Development Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Digital Marketing and SEO
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We focus on digital marketing and search engine optimization practices that help businesses improve their online presence. This includes relevant SEO strategies and website optimization based on project requirements.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-200/70 mt-6 flex flex-col gap-2">
                <Link
                  href="/services/seo-services"
                  className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                >
                  <span>Explore Technical & On-Page SEO</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
                <Link
                  href="/services/digital-marketing"
                  className="inline-flex items-center text-xs font-bold text-neutral-600 hover:text-[#F07825]"
                >
                  <span>Explore Digital Marketing</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-900">
                  Graphic Designing and Brand Identity
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We provide graphic design and visual identity solutions that help businesses communicate their brand message through consistent and thoughtful visual presentation.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-200/70 mt-6">
                <Link
                  href="/services/graphic-designing"
                  className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                >
                  <span>Explore Graphic Design Services</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. HOW WE HELP BUSINESSES BUILD THEIR DIGITAL PRESENCE (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <SectionHeading
            badge="Practical Solutions"
            title="How We Help Businesses Build Their Digital Presence"
            description="Targeted solutions to establish, optimize, and expand your digital operations online."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {businessSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 hover:border-[#F07825]/40 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F07825] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {sol.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-neutral-100">
                  <Link
                    href={sol.href}
                    className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                  >
                    <span>{sol.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. WHY CHOOSE FIRNAS.TECH (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-10">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF8C42] bg-[#F07825]/20 rounded-full">
                Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
                Why Choose Firnas.tech as Your Digital Partner?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-2">
                We bridge the gap between complex software engineering, search intent optimization, and brand aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-neutral-800/60 border border-neutral-700/60 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F07825]/20 text-[#FF8C42] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 8. SERVING BUSINESSES IN ABBOTTABAD & ACROSS PAKISTAN (H2) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-orange-50/60 border border-orange-200/80 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F07825]">
              <MapPin className="w-4 h-4" />
              <span>Regional Focus & Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Serving Businesses in Abbottabad and Across Pakistan
            </h2>
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
              Firnas.tech is positioned as a digital services provider in Abbottabad, Pakistan. Our services are intended to support businesses looking for software development, web development, digital marketing, and graphic design solutions.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center text-xs sm:text-sm font-bold text-[#F07825] hover:text-[#d96517]"
              >
                <span>View All Services Offered in Abbottabad & Pakistan</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 9. FREQUENTLY ASKED QUESTIONS (H2 & H3) */}
        {/* ============================================================== */}
        <section className="py-16 border-t border-neutral-200/80">
          <SectionHeading
            badge="Common Questions"
            title="Frequently Asked Questions About Firnas.tech"
            description="Clear answers regarding our agency background, services, location, and collaboration model."
          />

          <div className="max-w-3xl mx-auto pt-6">
            <FAQAccordion items={aboutFaqs} />
          </div>
        </section>

        {/* ============================================================== */}
        {/* 10. FINAL CTA SECTION */}
        {/* ============================================================== */}
        <CTASection
          badge="Start your journey"
          title="Let's Bring Your Vision to Life"
          description="Have a project or a digital idea in mind? Get in touch with Firnas.tech to discuss your requirements and explore suitable software development, digital marketing, or creative design solutions."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </div>
    </div>
  );
}
