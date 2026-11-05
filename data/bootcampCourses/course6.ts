import { BootcampCourse } from "@/data/bootcampCourses";

export const course6: BootcampCourse = {
  slug: "type-safe-web-applications-with-typescript",
  title: "Type-Safe Web Applications with TypeScript",
  subtitle: "Eliminate Runtime Errors, Master Generics, and Build Robust Enterprise Web Apps",
  category: "TypeScript",
  difficulty: "Intermediate",
  duration: "4 Weeks (Strict Engineering Labs)",
  summary: "Transform JavaScript into a strictly-typed, scalable language. Learn TypeScript interfaces, type aliases, union & intersection types, generics, utility types, and runtime validation with Zod.",
  image: "/learning-typescript.jpg",
  publishedAt: "2026-03-12",
  primaryKeyword: "TypeScript Tutorial",
  secondaryKeywords: [
    "Learn TypeScript",
    "TypeScript for web development",
    "Type-safe web applications",
    "TypeScript interfaces",
    "TypeScript types",
    "TypeScript with React",
  ],
  overview: {
    about: "This comprehensive course guides you through static typing in modern web engineering. You will learn how TypeScript's compiler checks types at compile time, eliminating null pointer exceptions and type mismatch crashes before code is deployed.",
    whyItMatters: "Large codebases become fragile without static typing. TypeScript provides intelligent IDE autocompletion, self-documenting code, and refactoring confidence.",
    whoShouldLearn: [
      "JavaScript developers wanting to eliminate runtime bugs",
      "Full-stack engineers building robust APIs and frontends",
      "Team leads standardizing large multi-developer codebases",
    ],
    problemsSolved: [
      "Preventing 'undefined is not a function' runtime crashes",
      "Catching API contract mismatches immediately during development",
      "Refactoring complex object shapes across dozens of files safely",
    ],
    prerequisites: ["Solid foundation in modern JavaScript (ES6+ syntax and functions)"],
  },
  learningOutcomes: [
    "Understand TypeScript compilation, type annotations, and strict type checking",
    "Model business domains accurately using interfaces, type aliases, and unions",
    "Author reusable, flexible components and functions with Generics (<T>)",
    "Pair TypeScript types with Zod for end-to-end runtime validation",
  ],
  modules: [
    {
      id: "ts-m1",
      moduleNumber: "01",
      title: "TypeScript Foundations: Types & Interfaces",
      description: "Type annotations, interfaces vs type aliases, and narrowing.",
      lessons: [
        {
          id: "ts-m1-l1",
          title: "Interfaces, Type Aliases & Discriminated Unions",
          duration: "35 min",
          introduction: "Interfaces and type aliases define object structures, enforcing contractual consistency across your application.",
          objectives: [
            "Define strict object schemas using interfaces and type aliases",
            "Use discriminated union types for modeling state machines",
            "Understand why 'any' should be avoided in favor of 'unknown'",
          ],
          explanation: "TypeScript statically checks your code at compile time. By defining explicit contracts for objects, props, and API payloads, the editor immediately flags invalid property accesses.",
          concepts: ["Interfaces vs. Type Aliases", "Discriminated Unions", "Strict Mode in tsconfig.json"],
          codeSnippet: `type AsyncState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function renderState(state: AsyncState<string[]>) {
  if (state.status === "loading") return "Loading...";
  if (state.status === "error") return \`Error: \${state.error}\`;
  // TypeScript guarantees state.data exists here!
  return \`Found \${state.data.length} items\`;
}`,
          codeLanguage: "typescript",
          expectedOutput: "A type-safe state renderer where compiler guarantees only valid fields are accessed for each state variant.",
          commonMistakes: ["Using 'any' as a shortcut which disables type checking entirely"],
          exercise: "Create a discriminated union representing a customer support ticket (Open, Pending, Resolved) with appropriate metadata.",
          takeaways: ["Discriminated unions make illegal application states unrepresentable."],
        },
      ],
    },
    {
      id: "ts-m2",
      moduleNumber: "02",
      title: "Generics & Runtime Validation with Zod",
      description: "Writing flexible type-safe utilities and parsing external API inputs.",
      lessons: [
        {
          id: "ts-m2-l1",
          title: "Generics & Runtime Validation with Zod",
          duration: "40 min",
          introduction: "TypeScript types exist only at compile time. To validate runtime inputs (such as form data or API requests), combine TypeScript with Zod.",
          objectives: [
            "Write generic functions that maintain type identity across inputs",
            "Create runtime validation schemas using Zod",
            "Infer TypeScript types automatically from Zod schemas with z.infer",
          ],
          explanation: "Because external data from users or external APIs cannot be trusted blindly, Zod inspects payloads at runtime. If valid, it returns properly typed data; if invalid, it throws structured errors.",
          concepts: ["Generic Functions <T>", "Zod Schemas", "z.infer<typeof schema>"],
          codeSnippet: `import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

// Infer TypeScript type automatically!
export type ContactInput = z.infer<typeof ContactSchema>;`,
          codeLanguage: "typescript",
          expectedOutput: "A single source of truth providing both runtime form validation and compile-time TypeScript types.",
          commonMistakes: ["Duplicating TypeScript interfaces manually instead of inferring them directly from Zod schemas"],
          exercise: "Build a generic API client function fetchApi<T>(url: string): Promise<T> that parses JSON safely.",
          takeaways: ["Pairing TypeScript with Zod delivers true end-to-end type safety from client to server."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Type-Safe Full-Stack SaaS Dashboard",
    description: "Build a comprehensive SaaS dashboard featuring end-to-end type safety between frontend UI components, React Hook Form with Zod schema validation, and Next.js backend Route Handlers.",
    deliverables: [
      "Strict TypeScript codebase with zero 'any' casts and clean compile checks",
      "Complete Zod validation schema suite for all customer inputs",
      "Generic data-table component supporting type-safe column rendering and sorting",
    ],
  },
  relatedCourseSlugs: [
    "javascript-es6-and-asynchronous-patterns",
    "building-scalable-uis-with-react",
    "nextjs-app-router-and-server-components",
  ],
  relatedServiceLink: {
    title: "Custom Software Solutions in Abbottabad",
    href: "/services/web-development",
  },
};

