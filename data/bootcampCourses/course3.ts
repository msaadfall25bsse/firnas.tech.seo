import { BootcampCourse } from "@/data/bootcampCourses";

export const course3: BootcampCourse = {
  slug: "javascript-es6-and-asynchronous-patterns",
  title: "Modern JavaScript ES6+ & Asynchronous Mastery",
  subtitle: "Master Destructuring, Arrow Functions, Promises, Async/Await, and the Event Loop",
  category: "JavaScript",
  difficulty: "Intermediate",
  duration: "4 Weeks (Hands-on Coding Labs)",
  summary: "Upgrade your JavaScript skills from basic DOM scripting to professional ES6+ patterns, functional array methods, asynchronous data pipelines, and error handling for modern application engineering.",
  image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-05",
  primaryKeyword: "JavaScript ES6",
  secondaryKeywords: [
    "Modern JavaScript tutorial",
    "JavaScript ES6 features",
    "JavaScript asynchronous programming",
    "JavaScript promises",
    "Async await JavaScript",
    "JavaScript modules",
  ],
  overview: {
    about: "This comprehensive course dives into modern ECMAScript specifications, from immutable functional patterns (map, filter, reduce) to concurrency mechanics, asynchronous Promise pipelines, and native ES modules.",
    whyItMatters: "React, Next.js, and Node.js are built entirely upon modern ES6+ paradigms. Mastering these patterns is essential before advancing to component architectures and full-stack web applications.",
    whoShouldLearn: [
      "Developers wanting to transition from legacy jQuery to modern JavaScript",
      "Programmers preparing for React and Next.js frameworks",
      "Backend developers working with asynchronous Node.js servers",
    ],
    problemsSolved: [
      "Eliminating callback hell and unhandled Promise rejections",
      "Avoiding data mutation bugs using spread/rest and immutable array methods",
      "Structuring modular code across multiple files with ES Modules (import/export)",
    ],
    prerequisites: ["Basic understanding of JavaScript variables, functions, and conditionals"],
  },
  learningOutcomes: [
    "Master ES6 syntax: let/const scope, arrow functions, template literals, and destructuring",
    "Manipulate collections immutably using .map(), .filter(), .reduce(), and set operations",
    "Orchestrate asynchronous flows using Promises, async/await, and the Fetch API",
    "Understand the JavaScript Event Loop, Call Stack, Web APIs, and Microtask Queue",
  ],
  modules: [
    {
      id: "js-m1",
      moduleNumber: "01",
      title: "ES6 Syntax & Declarative Programming",
      description: "Scope, arrow functions, object destructuring, and spread/rest operators.",
      lessons: [
        {
          id: "js-m1-l1",
          title: "Destructuring, Spread & Rest Operators",
          duration: "30 min",
          introduction: "Destructuring and spread/rest operators allow you to unpack values and compose state objects cleanly with minimal boilerplate.",
          objectives: [
            "Extract object and array values directly into named variables",
            "Clone and merge objects without mutating the original state",
            "Use rest parameters to accept dynamic numbers of function arguments",
          ],
          explanation: "In React and modern JavaScript, mutating data directly causes subtle rendering bugs. The spread operator ({ ...user, active: true }) creates a shallow clone with updated properties, preserving immutability.",
          concepts: ["Object and Array Destructuring", "Spread Operator for Immuntability", "Rest Parameters for Variadic Functions"],
          codeSnippet: `const project = { id: 101, name: "Jobzeta", category: "Web App" };
// Destructuring
const { name, category } = project;

// Immutable update with Spread
const updatedProject = { ...project, status: "Deployed" };
console.log(updatedProject);`,
          codeLanguage: "javascript",
          expectedOutput: "{ id: 101, name: 'Jobzeta', category: 'Web App', status: 'Deployed' }",
          commonMistakes: ["Directly mutating an existing object (project.status = 'Deployed') which violates immutability rules"],
          exercise: "Write a function that accepts an object representing a user, extracts the email, and returns a new object with a verified: true flag without mutating the input.",
          takeaways: ["Immutable updates ensure predictable application state."],
        },
      ],
    },
    {
      id: "js-m2",
      moduleNumber: "02",
      title: "Asynchronous JavaScript: Promises & Async/Await",
      description: "Non-blocking I/O, the Event Loop, and graceful error handling.",
      lessons: [
        {
          id: "js-m2-l1",
          title: "Async / Await and Resilient Fetch Workflows",
          duration: "40 min",
          introduction: "Async/await provides clean, synchronous-looking syntax for resolving asynchronous Promises.",
          objectives: [
            "Consume REST APIs using fetch() and async/await",
            "Catch network and HTTP response errors gracefully with try/catch",
            "Manage loading and error states during data acquisition",
          ],
          explanation: "When you mark a function as async, it returns a Promise. The await keyword pauses function execution until the Promise settles, letting you handle the resolved payload naturally without nesting .then() callbacks.",
          concepts: ["Promises (Pending, Fulfilled, Rejected)", "try / catch / finally blocks", "Response.ok verification in Fetch API"],
          codeSnippet: `async function fetchCourseData(courseId) {
  try {
    const res = await fetch(\`/api/courses/\${courseId}\`);
    if (!res.ok) {
      throw new Error(\`Failed to fetch course: \${res.status}\`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Course fetch error:", error.message);
    return null;
  }
}`,
          codeLanguage: "javascript",
          expectedOutput: "Returns the course data object or null if the network request fails, without crashing the application.",
          commonMistakes: ["Assuming fetch() rejects on 404 or 500 status codes (it only rejects on network failures; you must check res.ok)"],
          exercise: "Build an asynchronous function that fetches GitHub user details for a given username and logs their public repository count.",
          takeaways: ["Always inspect response.ok and wrap await statements in try/catch blocks."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Real-Time Weather & Currency Conversion Dashboard",
    description: "Engineer an interactive single-page application that concurrently queries multiple external REST APIs, processes data with map/filter/reduce, and updates the UI dynamically with robust error feedback.",
    deliverables: [
      "Modular JavaScript code structured across multiple ES Modules (api.js, ui.js, app.js)",
      "Robust asynchronous data pipeline with loading spinners and friendly error messaging",
      "Full unit tests demonstrating immutable state transitions",
    ],
  },
  relatedCourseSlugs: [
    "introduction-to-modern-web-development",
    "building-scalable-uis-with-react",
    "type-safe-web-applications-with-typescript",
  ],
  relatedServiceLink: {
    title: "Custom Software Development in Abbottabad",
    href: "/services/web-development",
  },
};

