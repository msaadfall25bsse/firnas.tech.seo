import { BootcampCourse } from "@/data/bootcampCourses";

export const course5: BootcampCourse = {
  slug: "nextjs-app-router-and-server-components",
  title: "Next.js App Router & Server Components Mastery",
  subtitle: "Architect Production Web Applications with React Server Components, Streaming, and Dynamic Routes",
  category: "Next.js",
  difficulty: "Advanced",
  duration: "5 Weeks (Production Full-Stack Curriculum)",
  summary: "Master the paradigm shift of modern web engineering. Learn the Next.js App Router, React Server Components (RSC), Client Component boundaries, data fetching, streaming, metadata SEO, and production deployment.",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-10",
  primaryKeyword: "Next.js App Router",
  secondaryKeywords: [
    "Next.js tutorial",
    "Next.js Server Components",
    "Next.js App Router tutorial",
    "React Server Components",
    "Next.js routing",
    "Next.js server-side rendering",
    "Next.js architecture",
  ],
  overview: {
    about: "This comprehensive course covers production engineering with Next.js App Router. You will explore Server Components by default, streaming with Suspense, dynamic route segments, metadata SEO APIs, route handlers, and performance optimization.",
    whyItMatters: "The App Router represents modern React architecture. Rendering components on the server reduces bundle sizes, delivers instant initial page loads, and enables optimal search engine indexing.",
    whoShouldLearn: [
      "React developers upgrading to modern Next.js App Router",
      "Full-stack developers building high-performance web applications",
      "Software architects designing scalable modern web systems",
    ],
    problemsSolved: [
      "Drastically reducing client JavaScript bundle sizes using React Server Components",
      "Eliminating waterfall API loading states using parallel fetching and Suspense streaming",
      "Automating SEO metadata, sitemaps, and canonical links natively",
    ],
    prerequisites: ["Strong familiarity with React, modern JavaScript (ES6+), and TypeScript fundamentals"],
  },
  learningOutcomes: [
    "Understand the distinction between React Server Components and Client Components",
    "Architect nested layouts, dynamic routes ([slug]), error boundaries, and not-found pages",
    "Leverage the native Next.js Metadata API for type-safe Open Graph, Twitter, and canonical SEO tags",
    "Build secure backend API Route Handlers (app/api/...) with request validation",
  ],
  modules: [
    {
      id: "next-m1",
      moduleNumber: "01",
      title: "App Router Fundamentals & Server Components",
      description: "Folder-based routing, nested layouts, and the 'use client' boundary.",
      lessons: [
        {
          id: "next-m1-l1",
          title: "Server Components by Default & 'use client'",
          duration: "40 min",
          introduction: "In Next.js App Router, every component is a React Server Component (RSC) by default unless explicitly tagged with 'use client'.",
          objectives: [
            "Explain why Server Components do not send JavaScript to the client browser",
            "Identify when to mark a component with 'use client'",
            "Push Client Component boundaries as deep down the component tree as possible",
          ],
          explanation: "Server Components run exclusively on the server during build time or request time. They have direct access to backend resources and databases. Client Components are only needed when using React state (useState), lifecycle hooks (useEffect), or browser event listeners (onClick, onChange).",
          concepts: ["Zero Client-Side JavaScript for Server Components", "Client Boundary ('use client')", "Composition of Server and Client Components"],
          codeSnippet: `// Server Component (Default in App Router)
import { db } from "@/lib/db";
import { InteractiveFilter } from "./InteractiveFilter"; // Client Component

export default async function CoursesPage() {
  const courses = await db.course.findMany(); // Direct server data access
  return (
    <div>
      <h1>Our Courses</h1>
      <InteractiveFilter courses={courses} />
    </div>
  );
}`,
          codeLanguage: "tsx",
          expectedOutput: "Renders on the server without shipping database client code or unnecessary runtime JS to the user's device.",
          commonMistakes: ["Placing 'use client' at the top of page.tsx instead of creating a focused leaf component"],
          exercise: "Refactor a monolithic React page into a Server Component parent that fetches data and passes props to a small Client Component button.",
          takeaways: ["Default to Server Components; use Client Components only for user interactivity."],
        },
      ],
    },
    {
      id: "next-m2",
      moduleNumber: "02",
      title: "Metadata, SEO & Production Deployment",
      description: "Dynamic metadata generation, Open Graph cards, sitemaps, and deployment on Vercel.",
      lessons: [
        {
          id: "next-m2-l1",
          title: "generateMetadata() for Dynamic SEO",
          duration: "35 min",
          introduction: "Next.js provides a native type-safe Metadata API for defining page titles, descriptions, canonical URLs, and Open Graph previews.",
          objectives: [
            "Export static and dynamic Metadata objects from layout.tsx and page.tsx",
            "Use generateMetadata({ params }) for dynamic routes like /learning/[slug]",
            "Generate sitemap.xml and robots.txt natively",
          ],
          explanation: "Search engines evaluate HTML <head> metadata to understand page topic and rank suitability. With generateMetadata(), Next.js automatically resolves async data before streaming headers, guaranteeing search crawlers receive complete meta tags.",
          concepts: ["Metadata Interface", "generateMetadata() for Dynamic Segments", "Open Graph and Twitter Card Previews"],
          codeSnippet: `import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  return {
    title: \`\${course.title} | Firnas.tech Learning\`,
    description: course.summary,
    alternates: {
      canonical: \`/learning/\${course.slug}\`,
    },
  };
}`,
          codeLanguage: "tsx",
          expectedOutput: "A fully formed HTML <head> containing unique title, meta description, and canonical link tags.",
          commonMistakes: ["Manually rendering <title> or <meta> tags inside JSX instead of using the Next.js Metadata API"],
          exercise: "Add dynamic Open Graph image generation metadata to a blog detail route.",
          takeaways: ["The Metadata API ensures optimal search engine indexing across all static and dynamic pages."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Production-Ready Multi-Route Agency Platform",
    description: "Build, optimize, and deploy a multi-route Next.js application with nested layouts, dynamic routes with generateStaticParams, API Route Handlers with Zod validation, and automated XML sitemaps.",
    deliverables: [
      "App Router architecture with verified zero console errors and 100% TypeScript type safety",
      "Dynamic generateMetadata implementation with canonical URLs and Open Graph tags",
      "Production deployment verified on Vercel with clean build logs",
    ],
  },
  relatedCourseSlugs: [
    "building-scalable-uis-with-react",
    "type-safe-web-applications-with-typescript",
    "actionable-technical-seo-for-modern-websites",
  ],
  relatedServiceLink: {
    title: "Web Development Services in Abbottabad",
    href: "/services/web-development",
  },
};

