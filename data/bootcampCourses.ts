export interface LessonItem {
  id: string;
  title: string;
  duration: string;
  introduction: string;
  objectives: string[];
  explanation: string;
  concepts: string[];
  codeSnippet?: string;
  codeLanguage?: string;
  expectedOutput?: string;
  commonMistakes: string[];
  exercise: string;
  takeaways: string[];
}

export interface ModuleItem {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  lessons: LessonItem[];
}

export interface BootcampCourse {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  image: string;
  publishedAt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  overview: {
    about: string;
    whyItMatters: string;
    whoShouldLearn: string[];
    problemsSolved: string[];
    prerequisites: string[];
  };
  learningOutcomes: string[];
  modules: ModuleItem[];
  practicalProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  relatedCourseSlugs: string[];
  relatedServiceLink: {
    title: string;
    href: string;
  };
}

