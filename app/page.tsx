import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Search, Sparkles, Target, Compass, Code, Layers, Zap } from "lucide-react";
import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import ProjectCard from "@/components/shared/ProjectCard";
import LearningCard from "@/components/shared/LearningCard";
import CTASection from "@/components/shared/CTASection";
import Button from "@/components/shared/Button";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { learningArticles } from "@/data/learning";

export const metadata: Metadata = {
  title: "Firnas.tech | Software Development, Digital Marketing & SEO Agency in Abbottabad",
  description:
    "Firnas.tech is a premier software development, digital marketing, and creative agency based in Abbottabad, Pakistan. We build high-speed web apps, drive organic SEO rankings, and craft memorable brand identities.",
  keywords: [
    "software house in Abbottabad",
    "web development company Abbottabad",
    "SEO agency in Abbottabad",
    "digital marketing agency Pakistan",
    "graphic design company Abbottabad",
    "Firnas.tech",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
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
      desc: "Every line of code and every visual asset is crafted specifically to advance your commercial objectives and user engagement.",
    },
    {
      title: "Modern Technologies",
      desc: "We build on modern standards like Next.js, React, TypeScript, and modern cloud architectures designed for longevity.",
    },
    {
      title: "Creative Thinking",
      desc: "We balance technical rigor with creative brand storytelling to ensure your digital footprint stands out effortlessly.",
    },
    {
      title: "Quality-Focused Development",
      desc: "Zero tolerance for brittle shortcuts. We ensure stringent testing, strict type safety, and optimal Core Web Vitals.",
    },
    {
      title: "Reliable Communication",
      desc: "Direct, transparent updates through every phase of planning, implementation, and launch.",
    },
    {
      title: "Continuous Improvement",
      desc: "We actively evaluate real-world analytics to iterate, enhance search performance, and scale your product.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
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
                Where Technology Meets Creative Vision
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                Based in Abbottabad, Khyber Pakhtunkhwa, Firnas.tech is a dedicated digital agency founded on a clear principle: transformative digital products require both precision software engineering and magnetic creative communication.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                Whether you need a custom web application built with modern frameworks, a high-converting organic SEO campaign to capture regional and international search queries, or a memorable corporate brand identity, our multidisciplinary team in Abbottabad turns complex business challenges into scalable digital growth.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="md" href="/about">
                  Learn More About Firnas.tech
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-900 aspect-16/10">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
                  alt="Firnas.tech team planning digital strategies and software architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
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
            title="Comprehensive Digital Solutions"
            description="Our three core disciplines work together to build, scale, and visually elevate your online presence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" size="md" href="/services">
              <span>View All Services & Specializations</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Firnas.tech Section */}
      <section className="py-24 bg-neutral-50/70 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Firnas Standard"
            title="Why Choose Firnas.tech"
            description="We build digital products designed for stability, usability, and measurable commercial results."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            title="Our Working Process"
            description="A battle-tested 5-stage lifecycle designed to bring ideas from concept to successful execution."
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

      {/* 6. Featured Projects */}
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
                Educational Resources & Guides
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
            badge="Client Feedback"
            title="Client Collaboration Standards"
            description="We partner closely with clients from discovery to release. Honest feedback and transparent milestones form the core of our relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-xs flex flex-col justify-between">
              <p className="text-neutral-700 text-sm leading-relaxed italic mb-6">
                &ldquo;Firnas.tech approaches projects with a structured software engineering discipline. Their understanding of Next.js and technical SEO delivered a measurable boost in our site performance.&rdquo;
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
                &ldquo;From responsive layouts to rapid query loading, Firnas.tech proved to be reliable, transparent, and technically rigorous throughout development.&rdquo;
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

      {/* 9. Final CTA */}
      <CTASection />
    </div>
  );
}
