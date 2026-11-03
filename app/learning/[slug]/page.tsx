import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, CheckCircle2, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import LearningCard from "@/components/shared/LearningCard";
import Button from "@/components/shared/Button";
import { learningArticles, LearningArticle } from "@/data/learning";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/data/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return learningArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = learningArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Firnas.tech",
    };
  }

  return {
    title: `${article.title} | Firnas.tech Learning`,
    description: article.summary,
    alternates: {
      canonical: `/learning/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt,
      authors: ["Firnas.tech"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function LearningDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = learningArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (same category or others)
  const relatedArticles = learningArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Article JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: article.image,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: "Firnas.tech",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Firnas.tech",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.svg`,
      },
    },
  };

  return (
    <article className="py-12 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Learning Hub", href: "/learning" },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="py-8 space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-[#F07825]">
              {article.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700">
              {article.difficulty} Level
            </span>
            <span className="flex items-center text-neutral-500">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.duration}
            </span>
            <span className="flex items-center text-neutral-500">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {formatDate(article.publishedAt)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-neutral-600 leading-relaxed font-normal">
            {article.summary}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-12 shadow-md bg-neutral-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Main Readable Content Body */}
        <div className="prose prose-neutral max-w-none space-y-10 text-neutral-800 leading-relaxed">
          {/* Introduction */}
          <div className="text-lg text-neutral-700 bg-neutral-50 p-6 rounded-2xl border border-neutral-200/80 leading-relaxed">
            {article.content.introduction}
          </div>

          {/* Sections */}
          {article.content.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed">
                {sec.body}
              </p>
              {sec.codeSnippet && (
                <div className="my-4 rounded-xl overflow-hidden bg-neutral-950 text-neutral-200 p-5 text-sm font-mono shadow-inner overflow-x-auto">
                  <pre>{sec.codeSnippet}</pre>
                </div>
              )}
            </section>
          ))}

          {/* Key Takeaways */}
          <div className="p-7 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-4 my-10">
            <h3 className="text-lg font-bold text-neutral-900 flex items-center">
              <BookOpen className="w-5 h-5 text-[#F07825] mr-2" />
              Key Practical Takeaways
            </h3>
            <ul className="space-y-2.5">
              {article.content.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start text-sm text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#F07825] mr-2.5 mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-8 pb-16 border-t border-neutral-200 flex items-center justify-between">
          <Link
            href="/learning"
            className="inline-flex items-center text-sm font-semibold text-neutral-700 hover:text-[#F07825] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to All Tutorials</span>
          </Link>
          <Button variant="primary" size="sm" href="/contact">
            Request Custom Consultation
          </Button>
        </div>

        {/* Related Articles */}
        <div className="pt-12 border-t border-neutral-200/80">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Related Guides & Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <LearningCard key={rel.slug} article={rel} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

