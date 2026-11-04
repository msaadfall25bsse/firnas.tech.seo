"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, Layers, ArrowRight, BookOpen, Sparkles, Filter } from "lucide-react";
import { BootcampCourse } from "@/data/bootcampCourses";
import { cn } from "@/lib/utils";

interface BootcampExplorerProps {
  courses: BootcampCourse[];
}

const CATEGORIES = [
  "All Categories",
  "Web Development",
  "HTML & CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "SEO",
  "Digital Marketing",
  "Graphic Designing",
];

const DIFFICULTIES = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function BootcampExplorer({ courses }: BootcampExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" || course.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === "All Levels" || course.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [courses, searchQuery, selectedCategory, selectedDifficulty]);

  return (
    <div className="space-y-12">
      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Live Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search bootcamps, technologies, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F07825] focus:border-transparent transition-all placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-neutral-400 shrink-0 hidden sm:block" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 rounded-2xl border border-neutral-200 text-sm font-semibold text-neutral-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#F07825]"
            >
              {DIFFICULTIES.map((diff) => (
                <option key={diff} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-neutral-100 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all",
                  isSelected
                    ? "bg-[#F07825] text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const totalLessons = course.modules.reduce((a, m) => a + m.lessons.length, 0);

            return (
              <article
                key={course.slug}
                className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#F07825]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-52 bg-neutral-100 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-neutral-800 shadow-xs">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7 space-y-4">
                    <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
                      <span className="px-2.5 py-0.5 rounded-md bg-orange-50 text-[#F07825] font-bold">
                        {course.difficulty}
                      </span>
                      <span className="flex items-center">
                        <Layers className="w-3.5 h-3.5 mr-1" />
                        {course.modules.length} Modules &bull; {totalLessons} Lessons
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#F07825] transition-colors leading-snug">
                      <Link href={`/learning/${course.slug}`}>{course.title}</Link>
                    </h3>

                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {course.summary}
                    </p>

                    {/* Featured Learning Outcome Preview */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700">
                      <span className="font-bold text-neutral-900">Key Outcome: </span>
                      {course.learningOutcomes[0]}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-7 pb-7 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center text-xs text-neutral-500 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#F07825]" />
                    <span>{course.duration}</span>
                  </div>

                  <Link
                    href={`/learning/${course.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#F07825] group-hover:text-[#d96517] transition-colors"
                  >
                    <span>Explore Bootcamp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-neutral-200 p-12 text-center max-w-md mx-auto">
          <BookOpen className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-neutral-900 mb-1">No Courses Match Your Query</h3>
          <p className="text-neutral-500 text-xs sm:text-sm mb-4">
            Try adjusting your search terms or reset the filters to view all available bootcamps.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Categories");
              setSelectedDifficulty("All Levels");
            }}
            className="px-4 py-2 rounded-xl bg-orange-100 text-[#F07825] font-semibold text-xs hover:bg-[#F07825] hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

