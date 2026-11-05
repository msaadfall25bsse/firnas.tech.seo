import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, CheckCircle2, ArrowLeft, ArrowRight, BookOpen, Layers, Award, Target, HelpCircle } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import CTASection from "@/components/shared/CTASection";
import CurriculumAccordion from "@/components/learning/CurriculumAccordion";
import { allBootcampCourses, getBootcampCourseBySlug } from "@/data/bootcampCourses/index";
import { siteConfig } from "@/data/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allBootcampCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getBootcampCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found | Firnas.tech",
    };
  }

  const title = `${course.title} — Complete Bootcamp Curriculum | Firnas.tech`;
  const description = `${course.summary} Learn ${course.primaryKeyword} through structured modules, practical projects, and code examples.`;

  return {
    title,
    description,
    keywords: [
      course.primaryKeyword,
      ...course.secondaryKeywords,
      "Firnas.tech Learning",
      "bootcamp curriculum",
    ],
    alternates: {
      canonical: `/learning/${course.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: course.publishedAt,
      url: `${siteConfig.url}/learning/${course.slug}`,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function BootcampCourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getBootcampCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Related courses
  const relatedCourses = allBootcampCourses
    .filter((c) => course.relatedCourseSlugs.includes(c.slug))
    .slice(0, 3);

  // Total lessons count
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

  // Educational Course JSON-LD Schema
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    provider: {
      "@type": "Organization",
      name: "Firnas.tech",
      sameAs: siteConfig.url,
    },
    educationalLevel: course.difficulty,
  };

  return (
    <article className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Learning Hub", href: "/learning" },
            { label: course.title },
          ]}
        />

        {/* ============================================================== */}
        {/* A. COURSE HERO SECTION */}
        {/* ============================================================== */}
        <section className="py-12 md:py-16 border-b border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                <span className="px-3.5 py-1 rounded-full bg-orange-100 text-[#F07825] uppercase tracking-wider font-bold">
                  {course.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-800">
                  {course.difficulty} Level
                </span>
                <span className="flex items-center text-neutral-500">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center text-neutral-500">
                  <Layers className="w-3.5 h-3.5 mr-1" />
                  {course.modules.length} Modules &bull; {totalLessons} Lessons
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
                {course.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#curriculum"
                  className="px-6 py-3.5 rounded-xl bg-[#F07825] text-white font-semibold text-sm hover:bg-[#d96517] transition-all shadow-sm active:scale-95 flex items-center"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="#overview"
                  className="px-6 py-3.5 rounded-xl border border-neutral-300 text-neutral-800 font-semibold text-sm hover:border-[#F07825] hover:text-[#F07825] transition-all"
                >
                  Explore Curriculum Overview
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-neutral-900 aspect-4/3">
                <Image
                  src={course.image}
                  alt={`${course.title} - Firnas.tech Bootcamp`}
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
        {/* B. COURSE OVERVIEW */}
        {/* ============================================================== */}
        <section id="overview" className="py-16 border-b border-neutral-200/80 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
                Course Overview
              </span>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                About This Educational Journey
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                {course.overview.about}
              </p>
              <div className="p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-2">
                  Why This Skill Matters in Today&apos;s Market
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {course.overview.whyItMatters}
                </p>
              </div>

              {/* Problems Solved */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  Key Technical Challenges You Will Solve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.overview.problemsSolved.map((prob, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-700 flex items-start space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0 mt-0.5" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Prerequisites & Audience */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Who Should Take This Course
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                  {course.overview.whoShouldLearn.map((who, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#F07825] mr-2 font-bold">&bull;</span>
                      <span>{who}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-3">
                  Course Prerequisites
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                  {course.overview.prerequisites.map((pre, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#F07825] mr-2 font-bold">&bull;</span>
                      <span>{pre}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* C. WHAT YOU WILL LEARN */}
        {/* ============================================================== */}
        <section className="py-16 border-b border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
              Learning Outcomes
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-3">
              What You Will Master in This Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.learningOutcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#F07825]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F07825] flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================== */}
        {/* D & E. COMPLETE COURSE CURRICULUM & DETAILED LESSON EXPERIENCE */}
        {/* ============================================================== */}
        <section className="py-16 border-b border-neutral-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
              Full Syllabus
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight mt-3">
              Comprehensive Course Curriculum
            </h2>
            <p className="text-neutral-600 text-sm mt-2">
              Click any module to expand its lessons, and click any lesson to open its interactive learning view below.
            </p>
          </div>

          <CurriculumAccordion modules={course.modules} courseTitle={course.title} />
        </section>

        {/* ============================================================== */}
        {/* F. PRACTICAL CAPSTONE PROJECT */}
        {/* ============================================================== */}
        <section className="py-16 border-b border-neutral-200/80">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF8C42] bg-[#F07825]/20 rounded-full">
                Hands-On Project
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-4 mb-3">
                {course.practicalProject.title}
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                {course.practicalProject.description}
              </p>
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Expected Deliverables
              </h3>
              <ul className="space-y-2">
                {course.practicalProject.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] mr-2 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* G. RELATED LEARNING RESOURCES & CONTEXTUAL SERVICE LINK */}
        {/* ============================================================== */}
        <section className="py-16 border-b border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F07825]">
                Expand Your Knowledge
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">
                Related Educational Programs
              </h2>
            </div>
            <Link
              href="/learning"
              className="text-sm font-semibold text-[#F07825] hover:underline"
            >
              Browse All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((rel) => (
              <div
                key={rel.slug}
                className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F07825]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 bg-neutral-100 overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-neutral-800 shadow-xs uppercase tracking-wider">
                        {rel.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#F07825] transition-colors line-clamp-2 mb-2">
                      <Link href={`/learning/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed line-clamp-3 mb-2">
                      {rel.summary}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-neutral-500">
                      {rel.difficulty} &bull; {rel.duration}
                    </span>
                    <Link
                      href={`/learning/${rel.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#F07825] hover:text-[#d96517]"
                    >
                      <span>Explore Course</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contextual Service Link */}
          {course.relatedServiceLink && (
            <div className="mt-8 p-6 rounded-2xl bg-orange-50/60 border border-orange-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-bold text-neutral-900">
                  Need Professional Implementation for Your Business?
                </h3>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Looking for custom development or digital marketing based on these technologies?
                </p>
              </div>
              <Button variant="outline" size="sm" href={course.relatedServiceLink.href}>
                {course.relatedServiceLink.title}
              </Button>
            </div>
          )}
        </section>

        {/* ============================================================== */}
        {/* H. FINAL CTA */}
        {/* ============================================================== */}
        <CTASection
          badge="Empower your technical capability"
          title="Ready to Apply These Skills to Real Projects?"
          description="Explore our full curriculum or consult directly with the Firnas.tech engineering team in Abbottabad."
          buttonText="Explore All Courses"
          buttonHref="/learning"
        />
      </div>
    </article>
  );
}
