import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { LearningArticle } from "@/data/learning";

interface LearningCardProps {
  article: LearningArticle;
}

export default function LearningCard({ article }: LearningCardProps) {
  const getBadgeColor = () => {
    switch (article.difficulty) {
      case "Beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Intermediate":
        return "bg-orange-50 text-[#F07825] border-orange-200";
      case "Advanced":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  return (
    <article className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-neutral-800 shadow-sm">
              {article.category}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
            <span
              className={`font-semibold px-2 py-0.5 rounded border text-[11px] ${getBadgeColor()}`}
            >
              {article.difficulty}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {article.duration}
            </span>
          </div>

          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#F07825] transition-colors leading-snug mb-2">
            <Link href={`/learning/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
            {article.summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
        <Link
          href={`/learning/${article.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#F07825] group-hover:text-[#d96517] transition-colors"
        >
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-neutral-400">
          <BookOpen className="w-4 h-4" />
        </span>
      </div>
    </article>
  );
}

