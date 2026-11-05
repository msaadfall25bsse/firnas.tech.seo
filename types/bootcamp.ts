export interface LessonItem {
  id: string;
  title: string;
  duration: string;
  description: string;
  conceptBreakdown: string[];
  codeExample?: {
    filename: string;
    language: string;
    code: string;
  };
  keyTakeaways: string[];
  commonPitfalls: string[];
}

export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: LessonItem[];
}

export interface BootcampCourse {
  id: string;
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
    problemsSolved: string[];
    prerequisites: string[];
    targetAudience: string[];
  };
  modules: ModuleItem[];
  practicalProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  relatedCourseSlugs: string[];
  relatedServiceLink?: {
    title: string;
    href: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface LearningArticle {
  slug: string;
  title: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  image: string;
  publishedAt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: string;
    }[];
    takeaways: string[];
  };
}

