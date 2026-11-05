import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Target, Eye, ShieldCheck, HeartHandshake, Lightbulb, Compass, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CTASection from "@/components/shared/CTASection";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About Us | Leading Digital Agency in Abbottabad, Pakistan — Firnas.tech",
  description:
    "Learn about Firnas.tech, an Abbottabad-based software development, SEO, and creative digital agency dedicated to helping businesses build modern web applications and scale organic growth.",
  keywords: [
    "about Firnas.tech",
    "software house Abbottabad",
    "IT company in Abbottabad Pakistan",
    "web agency Abbottabad",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Technical Excellence",
      desc: "We prioritize robust architectures, maintainable code standards, strict typing, and high-performance execution over hasty workarounds.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Collaboration",
      desc: "We communicate openly with our clients at every stage. No hidden jargon, no false promises, and no opaque timelines.",
      icon: HeartHandshake,
    },
    {
      title: "Design with Purpose",
      desc: "Great design is not merely decoration; it is functional visual communication that guides the user and clarifies value.",
      icon: Lightbulb,
    },
    {
      title: "Measurable Impact",
      desc: "Whether optimizing search engine rankings or building web apps, we focus on genuine business metrics and user adoption.",
      icon: Target,
    },
  ];

  const expertiseList = [
    "Next.js & React App Architecture",
    "TypeScript & Scalable Component Design",
    "Full-Stack Web Application Engineering",
    "Comprehensive Technical & On-Page SEO",
    "Search Intent & Keyword Strategy",
    "Brand Visual Identity & Vector Systems",
    "User Interface & User Experience Design",
    "RESTful API & Database Integration",
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
                About Firnas.tech
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
                Empowering Businesses in Abbottabad & Beyond Through Modern Technology
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Firnas.tech is a technology and creative digital agency headquartered in Abbottabad, Khyber Pakhtunkhwa. We partner with founders, local enterprises, and growing organizations across Pakistan to engineer, design, and scale high-performing digital solutions.
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
                  alt="Firnas.tech team collaborative workspace in Abbottabad"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200/80">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F07825] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                To empower forward-thinking brands by delivering reliable, high-performance web applications, strategic organic marketing, and distinctive visual identities that drive measurable commercial growth.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200/80">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F07825] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                To be a trusted global digital agency recognized for technical integrity, creative clarity, and an unwavering commitment to helping business ideas reach their highest potential.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-16 border-t border-neutral-200/80">
          <SectionHeading
            badge="Our Foundation"
            title="Core Values That Guide Us"
            description="We build lasting client relationships by maintaining high ethical and technical standards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-[#F07825]/40 transition-all duration-300"
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
        </div>

        {/* Why Businesses Need Modern Digital Solutions */}
        <div className="py-16 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                  alt="Analytics and digital solutions growth analysis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100/70 rounded-full">
                Strategic Perspective
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                Why Businesses Need Modern Digital Solutions Today
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                In an era where first impressions happen online in fractions of a second, an outdated or slow website actively turns customers away. High bounce rates, declining organic visibility, and disjointed branding directly erode market share.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Modern digital platforms require rapid server responses, mobile-friendly layouts, clean SEO metadata, and intuitive interfaces. At Firnas.tech, we provide the technical architecture and creative foundation necessary to compete and win in crowded digital marketplaces.
              </p>
            </div>
          </div>
        </div>

        {/* Our Expertise & Working Philosophy */}
        <div className="py-16 border-t border-neutral-200/80">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF8C42] bg-[#F07825]/20 rounded-full">
                  Skillsets & Competencies
                </span>
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Engineering & Design Disciplines
                </h2>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  We maintain deep, hands-on proficiencies across frontend engineering, backend databases, search ranking mechanics, and visual branding systems.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertiseList.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2.5 bg-neutral-800/70 border border-neutral-700/60 rounded-xl px-3.5 py-2.5 text-xs font-medium text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <CTASection
          badge="Start your journey"
          title="Let's Bring Your Vision to Life"
          description="Speak directly with our team to discuss your project requirements, technical architecture, and timeline."
        />
      </div>
    </div>
  );
}

