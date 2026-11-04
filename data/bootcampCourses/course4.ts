import { BootcampCourse } from "@/data/bootcampCourses";

export const course4: BootcampCourse = {
  slug: "building-scalable-uis-with-react",
  title: "Building Scalable User Interfaces with React",
  subtitle: "Master Components, Props, State, Hooks, and Component Architecture for Production React Apps",
  category: "React.js",
  difficulty: "Intermediate",
  duration: "5 Weeks (Intensive Bootcamp Curriculum)",
  summary: "Transition from imperative DOM manipulation to declarative, component-driven UI engineering. Learn component lifecycle, useState, useEffect, custom reusable hooks, and scalable folder architectures.",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-08",
  primaryKeyword: "React JS Tutorial",
  secondaryKeywords: [
    "Learn React JS",
    "React components",
    "React hooks",
    "React UI development",
    "Reusable React components",
    "Scalable React applications",
  ],
  overview: {
    about: "This comprehensive React course guides you through declarative UI engineering. You will learn how the Virtual DOM works, compose reusable components, manage state effectively, and build fast, maintainable applications.",
    whyItMatters: "React powers modern web development from top digital agencies to global tech giants. It provides the foundation for Next.js, React Native, and design systems.",
    whoShouldLearn: [
      "JavaScript developers ready to master the leading frontend UI library",
      "Developers looking to modernize legacy web applications",
      "Engineers preparing for modern full-stack web development careers",
    ],
    problemsSolved: [
      "Preventing spaghetti code by breaking monolithic pages into modular components",
      "Managing complex interactive states with predictable data flow",
      "Encapsulating recurring business logic into reusable custom hooks",
    ],
    prerequisites: ["Good understanding of modern JavaScript (ES6+, destructuring, arrow functions, promises)"],
  },
  learningOutcomes: [
    "Understand JSX syntax and the declarative component model",
    "Master unidirectional data flow through props and component composition",
    "Manage local state with useState and handle side effects with useEffect",
    "Author custom reusable hooks to share business logic across components",
    "Architect clean, scalable React project structures ready for enterprise growth",
  ],
  modules: [
    {
      id: "react-m1",
      moduleNumber: "01",
      title: "React Fundamentals: JSX & Components",
      description: "Declarative UI rendering, component hierarchy, and unidirectional data flow.",
      lessons: [
        {
          id: "react-m1-l1",
          title: "Components, Props & JSX Composition",
          duration: "35 min",
          introduction: "React components are self-contained JavaScript functions that return JSX markup describing how the UI should appear.",
          objectives: [
            "Write valid JSX syntax and embed JavaScript expressions",
            "Pass data down component trees using props",
            "Compose small UI primitives into sophisticated composite screens",
          ],
          explanation: "In React, you build small, reusable components (like buttons, cards, avatars) and compose them together. Data flows down from parent to child through props, ensuring single-source-of-truth predictability.",
          concepts: ["JSX Rules (Single root parent, className, camelCase attributes)", "Props Destructuring", "Children Prop Composition"],
          codeSnippet: `interface BadgeProps {
  label: string;
  variant?: "primary" | "secondary";
}

export function StatusBadge({ label, variant = "primary" }: BadgeProps) {
  const colorClass = variant === "primary" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-700";
  return (
    <span className={\`px-2.5 py-1 text-xs font-semibold rounded-full \${colorClass}\`}>
      {label}
    </span>
  );
}`,
          codeLanguage: "tsx",
          expectedOutput: "A reusable badge component rendering custom labels with configurable color themes.",
          commonMistakes: ["Modifying props inside a child component (props must remain strictly read-only)"],
          exercise: "Create a reusable CourseCard component that accepts title, duration, difficulty, and an onEnroll callback prop.",
          takeaways: ["Keep component responsibilities small, focused, and pure."],
        },
      ],
    },
    {
      id: "react-m2",
      moduleNumber: "02",
      title: "State Management & React Hooks",
      description: "Local reactivity with useState, side effects with useEffect, and custom hooks.",
      lessons: [
        {
          id: "react-m2-l1",
          title: "useState & Predictable State Updates",
          duration: "40 min",
          introduction: "State represents data that changes over time based on user interactions like typing, clicking, or fetching data.",
          objectives: [
            "Initialize and update state variables with useState",
            "Use updater functions when new state depends on prior state",
            "Lift state up to common ancestors when sharing data across siblings",
          ],
          explanation: "When state changes, React schedules a re-render of the component and its children. Never modify state directly; always call the setter function provided by useState to trigger a clean re-render.",
          concepts: ["useState Hook", "Functional State Updates", "Lifting State Up"],
          codeSnippet: `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    // Functional updater guarantees fresh state value
    setCount((prev) => prev + 1);
  };

  return (
    <button onClick={increment} className="px-4 py-2 bg-orange-500 text-white rounded-lg">
      Count: {count}
    </button>
  );
}`,
          codeLanguage: "tsx",
          expectedOutput: "A reactive button that increments count on every click without page reloads.",
          commonMistakes: ["Directly mutating state variables instead of calling the setter function"],
          exercise: "Build a filterable product catalog where a search input state dynamically filters a list of displayed courses.",
          takeaways: ["State should live in the lowest common ancestor component that needs it."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Interactive Educational LMS Portal",
    description: "Build an interactive online course catalog complete with live search, category filtering, an interactive curriculum accordion, and progress bookmarking persisted in localStorage.",
    deliverables: [
      "Modular component hierarchy with separate presentation and container components",
      "Custom useLocalStorage hook for saving completed lessons",
      "Responsive layout styled with Tailwind CSS conforming to Firnas.tech design standards",
    ],
  },
  relatedCourseSlugs: [
    "javascript-es6-and-asynchronous-patterns",
    "nextjs-app-router-and-server-components",
    "type-safe-web-applications-with-typescript",
  ],
  relatedServiceLink: {
    title: "Web Development Services in Abbottabad",
    href: "/services/web-development",
  },
};

