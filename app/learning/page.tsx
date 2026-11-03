import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import LearningExplorer from "@/components/learning/LearningExplorer";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTASection from "@/components/shared/CTASection";
import { learningArticles } from "@/data/learning";

export const metadata: Metadata = {
  title: "Learning Hub | Guides on Web Development, SEO & Design",
  description:
    "Explore our educational resource center featuring original tutorials on HTML, CSS, JavaScript, React, Next.js, TypeScript, SEO strategies, and Graphic Design.",
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
        <div className="py-12 md:py-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-[#F07825] mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Educational Resource Center
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
            Firnas.tech Learning Portal
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Free, practical introductory guides written by our engineers and designers to help you master modern web technologies, SEO frameworks, and creative design principles.
          </p>
        </div>

        {/* Client-side filterable interactive explorer */}
        <LearningExplorer initialArticles={learningArticles} />

        {/* CTA */}
        <CTASection
          badge="Empower your team"
          title="Need Custom Technical Solutions?"
          description="Looking for bespoke software engineering or targeted SEO campaigns for your organization? Get in touch today."
        />
      </div>
    </div>
  );
}

