import type { Metadata } from "next";
import { BookOpen, Sparkles, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import BootcampExplorer from "@/components/learning/BootcampExplorer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/common/CTASection";
import { allBootcampCourses } from "@/data/bootcampCourses/index";

export const metadata: Metadata = {
  title: "Firnas.tech Learning Hub | Professional Bootcamp Curriculums & Tech Guides",
  description:
    "Explore professional bootcamp-style learning experiences: Modern Web Development, CSS Flexbox & Grid, JavaScript ES6, React, Next.js App Router, TypeScript, Technical SEO, Digital Marketing, and Brand Identity Design.",
  alternates: {
    canonical: "/learning",
  },
};

export default function LearningPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Learning Hub" }]} />

        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F07825] mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Firnas.tech Educational Academy
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
            Bootcamp-Style Curriculums for Modern Tech Disciplines
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Comprehensive, module-based educational roadmaps designed by senior software engineers, technical SEOs, and creative designers. From foundational HTML to Next.js App Router and Technical SEO audits.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto pt-2">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-bold text-[#F07825]">09</span>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">Complete Programs</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-bold text-[#F07825]">100%</span>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">Free & Open Source</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-bold text-[#F07825]">Labs</span>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">Hands-On Projects</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <span className="text-2xl font-bold text-[#F07825]">Clean</span>
              <p className="text-xs font-semibold text-neutral-700 mt-0.5">No Generic Fluff</p>
            </div>
          </div>
        </section>

        {/* Interactive Filterable Explorer */}
        <section className="py-8">
          <BootcampExplorer courses={allBootcampCourses} />
        </section>

        {/* Final CTA */}
        <CTASection
          badge="Ready to build scalable digital products?"
          title="Looking for Bespoke Engineering or Agency Services?"
          description="Beyond education, Firnas.tech designs and develops production web platforms, technical SEO campaigns, and creative brand identities for businesses across Abbottabad and worldwide."
          buttonText="Consult With Our Team"
          buttonHref="/contact"
        />
      </div>
    </div>
  );
}
