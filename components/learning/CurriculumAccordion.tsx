"use client";

import { useState } from "react";
import { ChevronDown, PlayCircle, BookOpen, Clock, CheckCircle2, AlertTriangle, Lightbulb, Code2 } from "lucide-react";
import { ModuleItem, LessonItem } from "@/data/bootcampCourses";
import { cn } from "@/lib/utils";

interface CurriculumAccordionProps {
  modules: ModuleItem[];
  courseTitle: string;
}

export default function CurriculumAccordion({ modules, courseTitle }: CurriculumAccordionProps) {
  const [openModuleId, setOpenModuleId] = useState<string>(modules[0]?.id || "");
  const [activeLesson, setActiveLesson] = useState<LessonItem | null>(modules[0]?.lessons[0] || null);

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? "" : id);
  };

  const handleSelectLesson = (lesson: LessonItem, moduleId: string) => {
    setActiveLesson(lesson);
    setOpenModuleId(moduleId);
    // Smooth scroll down to lesson detail view if on small screens
    const el = document.getElementById("active-lesson-view");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="curriculum" className="scroll-mt-24 space-y-8">
      {/* Curriculum Accordion List */}
      <div className="space-y-4">
        {modules.map((module) => {
          const isOpen = openModuleId === module.id;
          return (
            <div
              key={module.id}
              className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
            >
              {/* Module Header Bar */}
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-neutral-50/70 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-4">
                  <span className="w-9 h-9 rounded-xl bg-orange-100 text-[#F07825] font-black text-xs flex items-center justify-center shrink-0">
                    M{module.moduleNumber}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 leading-snug">
                      Module {module.moduleNumber} &mdash; {module.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                      {module.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 shrink-0">
                  <span className="text-xs font-semibold text-neutral-500 hidden sm:inline-block">
                    {module.lessons.length} {module.lessons.length === 1 ? "Lesson" : "Lessons"}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-neutral-400 transition-transform duration-200",
                      isOpen && "transform rotate-180 text-[#F07825]"
                    )}
                  />
                </div>
              </button>

              {/* Module Lessons Dropdown */}
              {isOpen && (
                <div className="border-t border-neutral-100 bg-neutral-50/50 p-3 sm:p-4 space-y-2">
                  {module.lessons.map((lesson, idx) => {
                    const isSelected = activeLesson?.id === lesson.id;
                    return (
                      <div
                        key={lesson.id}
                        onClick={() => handleSelectLesson(lesson, module.id)}
                        className={cn(
                          "flex items-center justify-between p-3.5 rounded-xl cursor-pointer transition-all border",
                          isSelected
                            ? "bg-white border-[#F07825] shadow-xs"
                            : "bg-white/70 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <PlayCircle
                            className={cn(
                              "w-4 h-4 shrink-0",
                              isSelected ? "text-[#F07825]" : "text-neutral-400"
                            )}
                          />
                          <div>
                            <span className="text-xs text-neutral-400 font-bold mr-2">
                              0{idx + 1}
                            </span>
                            <span
                              className={cn(
                                "text-sm font-semibold",
                                isSelected ? "text-[#F07825]" : "text-neutral-800"
                              )}
                            >
                              {lesson.title}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 text-xs text-neutral-500 shrink-0">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Detailed Lesson Experience */}
      {activeLesson && (
        <div
          id="active-lesson-view"
          className="mt-12 bg-white rounded-3xl border-2 border-orange-200 p-6 sm:p-10 shadow-lg scroll-mt-24"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-200">
            <div>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F07825] bg-orange-100 rounded-full">
                Interactive Lesson Experience
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-2">
                {activeLesson.title}
              </h3>
            </div>
            <div className="flex items-center text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 mr-1.5 text-[#F07825]" />
              <span>Duration: {activeLesson.duration}</span>
            </div>
          </div>

          {/* Introduction & Objectives */}
          <div className="py-6 space-y-6">
            <p className="text-base text-neutral-700 leading-relaxed font-medium">
              {activeLesson.introduction}
            </p>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <h4 className="text-sm font-bold text-neutral-900 mb-3 flex items-center">
                <BookOpen className="w-4 h-4 text-[#F07825] mr-2" />
                Lesson Learning Objectives
              </h4>
              <ul className="space-y-2">
                {activeLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F07825] mr-2 mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep Explanation */}
            <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <h4 className="text-lg font-bold text-neutral-900">
                Detailed Concept Breakdown
              </h4>
              <p>{activeLesson.explanation}</p>
            </div>

            {/* Key Concepts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {activeLesson.concepts.map((concept, i) => (
                <div
                  key={i}
                  className="bg-orange-50/50 border border-orange-200/60 p-3.5 rounded-xl text-xs font-semibold text-neutral-800 flex items-center space-x-2"
                >
                  <Lightbulb className="w-4 h-4 text-[#F07825] shrink-0" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>

            {/* Code / Visual Example Block */}
            {activeLesson.codeSnippet && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-bold text-neutral-500 uppercase">
                  <span className="flex items-center">
                    <Code2 className="w-4 h-4 mr-1 text-[#F07825]" />
                    Hands-On Code Example ({activeLesson.codeLanguage || "code"})
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-neutral-950 text-neutral-100 p-5 font-mono text-xs sm:text-sm shadow-inner overflow-x-auto">
                  <pre>{activeLesson.codeSnippet}</pre>
                </div>
                {activeLesson.expectedOutput && (
                  <div className="p-3.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700">
                    <strong className="text-neutral-900">Expected Result: </strong>
                    {activeLesson.expectedOutput}
                  </div>
                )}
              </div>
            )}

            {/* Common Mistakes */}
            {activeLesson.commonMistakes && activeLesson.commonMistakes.length > 0 && (
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-amber-900 flex items-center">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mr-2 shrink-0" />
                  Common Beginner Mistakes to Avoid
                </h4>
                <ul className="space-y-1.5">
                  {activeLesson.commonMistakes.map((mistake, i) => (
                    <li key={i} className="text-xs text-amber-800 leading-relaxed list-disc list-inside">
                      {mistake}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actionable Exercise */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-emerald-900 flex items-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                Practical Lab Exercise
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                {activeLesson.exercise}
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="pt-4 border-t border-neutral-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Key Lesson Takeaways
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeLesson.takeaways.map((point, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1.5 bg-neutral-100 text-neutral-800 rounded-lg"
                  >
                    &bull; {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

