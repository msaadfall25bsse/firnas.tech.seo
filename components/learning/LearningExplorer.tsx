"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { LearningArticle, learningCategories } from "@/data/learning";
import LearningCard from "@/components/shared/LearningCard";
import { cn } from "@/lib/utils";

interface LearningExplorerProps {
  initialArticles: LearningArticle[];
}

export default function LearningExplorer({ initialArticles }: LearningExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Search and Filters Bar */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 mb-12 shadow-sm space-y-6">
        {/* Search Input */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search tutorials, articles, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F07825] focus:border-transparent transition-all placeholder:text-neutral-400"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-neutral-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Categories Pills */}
        <div className="flex items-center justify-start md:justify-center flex-wrap gap-2 pt-2 border-t border-neutral-100 overflow-x-auto">
          {learningCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap",
                  isSelected
                    ? "bg-[#F07825] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-900"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Results */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <LearningCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-neutral-200 p-12 text-center max-w-md mx-auto">
          <p className="text-neutral-500 text-base mb-4">
            No educational articles match your current criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-sm font-semibold text-[#F07825] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

