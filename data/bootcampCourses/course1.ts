import { BootcampCourse } from "@/data/bootcampCourses";

export const course1: BootcampCourse = {
  slug: "introduction-to-modern-web-development",
  title: "Modern Web Development Fundamentals",
  subtitle: "A Complete Beginner-to-Builder Roadmap to HTML5, CSS3, Modern JavaScript & Full-Stack Principles",
  category: "Web Development",
  difficulty: "Beginner",
  duration: "4 Weeks (Self-Paced Curriculum)",
  summary: "Master the foundational pillars of the web. Learn how the internet functions, write semantic HTML, style responsive layouts with modern CSS, program reactive logic with JavaScript, and deploy your first live web project.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-01",
  primaryKeyword: "Modern Web Development",
  secondaryKeywords: [
    "Introduction to web development",
    "Web development basics",
    "Modern web technologies",
    "Frontend and backend development",
    "Web development fundamentals",
    "Web development for beginners",
  ],
  overview: {
    about: "This comprehensive course demystifies the software engineering behind the modern web. From DNS resolution and browser rendering engines to modular code authoring in VS Code and version control with Git, you gain hands-on proficiency in building clean, responsive web pages from scratch.",
    whyItMatters: "Every digital agency, SaaS venture, and online enterprise relies on web standards. Understanding the core triad—HTML, CSS, and JavaScript—gives you the architectural clarity needed to master React, Next.js, and cloud platforms with confidence.",
    whoShouldLearn: [
      "Beginners taking their first steps into software engineering",
      "Designers wanting to understand how their UI prototypes are implemented in code",
      "Entrepreneurs looking to build, audit, and maintain their company web properties",
    ],
    problemsSolved: [
      "Overcoming confusion around how client browsers interact with backend servers",
      "Eliminating brittle, unresponsive layouts across smartphones and desktops",
      "Writing clean, accessible semantic HTML that search engines index effortlessly",
    ],
    prerequisites: [
      "A modern web browser (Chrome, Edge, or Firefox)",
      "A code editor (VS Code recommended)",
      "No prior coding experience required",
    ],
  },
  learningOutcomes: [
    "Understand the end-to-end request/response cycle of the internet, HTTP/HTTPS, and DNS lookup",
    "Author clean, accessible HTML5 documents using semantic tags, landmarks, and meta tags",
    "Craft responsive, modern CSS layouts using modern box-model principles and media queries",
    "Program reactive browser behaviors, DOM manipulation, and event handling with JavaScript",
    "Utilize Git and GitHub for version control, commits, branching, and remote collaboration",
    "Deploy live, production-ready static websites to modern hosting platforms like Vercel and Netlify",
  ],
  modules: [
    {
      id: "mod-1",
      moduleNumber: "01",
      title: "How the Web Works & Development Setup",
      description: "Deconstructing browser mechanics, HTTP client-server architecture, and local engineering tools.",
      lessons: [
        {
          id: "m1-l1",
          title: "What is Web Development & How the Internet Works",
          duration: "25 min",
          introduction: "Web development is the art and science of engineering applications that live on remote servers and render inside web browsers worldwide.",
          objectives: [
            "Explain the difference between the internet and the World Wide Web",
            "Trace what happens when you type a URL into a browser address bar",
            "Understand IP addresses, DNS lookup, and HTTP/HTTPS client-server handshakes",
          ],
          explanation: "When a user navigates to https://zavera.tech, the browser asks a DNS server to translate that human-readable domain into a machine IP address (e.g. 76.76.21.21). The browser then initiates an HTTP GET request over TCP/IP. The web server processes the request and streams back HTML, CSS, JavaScript, and image assets. The browser's layout engine parses the HTML to create the DOM (Document Object Model), attaches styles via the CSSOM, and runs the JavaScript engine.",
          concepts: [
            "Clients (Browsers) vs. Servers (Cloud Hosts)",
            "DNS (Domain Name System) as the internet's phonebook",
            "HTTP Status Codes (200 OK, 301 Redirect, 404 Not Found, 500 Server Error)",
          ],
          codeSnippet: `// Example of an HTTP Request Header
GET / HTTP/1.1
Host: zavera.tech
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
Accept: text/html,application/xhtml+xml`,
          codeLanguage: "http",
          expectedOutput: "The server responds with an HTTP/1.1 200 OK status followed by the HTML markup payload.",
          commonMistakes: [
            "Confusing the internet (physical global network of computers) with the web (software layer of hyperlinked documents)",
            "Assuming websites are installed on client computers rather than retrieved dynamically over HTTP",
          ],
          exercise: "Open Chrome DevTools (press F12), go to the Network tab, reload zavera.tech, and inspect the Status Code, Headers, and Response payload of the document request.",
          takeaways: [
            "Web browsers are rendering clients that translate code received from remote servers into visual pixels.",
            "HTTPS ensures all transmitted data between client and server is cryptographically encrypted.",
          ],
        },
        {
          id: "m1-l2",
          title: "Frontend vs. Backend vs. Full-Stack Development",
          duration: "30 min",
          introduction: "Modern software engineering separates concerns between client-side rendering (Frontend) and data persistence logic (Backend).",
          objectives: [
            "Distinguish client-side rendering duties from server-side databases",
            "Understand how full-stack developers connect UI components to RESTful APIs",
            "Identify the modern toolchain: Node.js, package managers, and bundlers",
          ],
          explanation: "Frontend developers craft the user experience: interactive buttons, responsive grids, color harmony, and accessibility using HTML, CSS, and modern frameworks like React and Next.js. Backend developers handle data validation, database schemas (PostgreSQL, MongoDB), authentication tokens, and server security using Node.js, Python, or Go. Full-stack developers understand both realms and build end-to-end solutions.",
          concepts: [
            "Client-Side execution inside the browser sandbox",
            "Server-Side execution on secure host servers with direct database access",
            "APIs (Application Programming Interfaces) as the secure communication bridge",
          ],
          codeSnippet: `// Simplified API communication flow
async function getCompanyServices() {
  const response = await fetch("https://zavera.tech/api/services");
  const data = await response.json();
  console.log("Services list:", data);
}`,
          codeLanguage: "javascript",
          expectedOutput: "A JSON array of services returned from the backend server to be rendered on the frontend.",
          commonMistakes: [
            "Trying to query private databases directly from client-side frontend code",
            "Neglecting backend validation assuming frontend form checks are sufficient",
          ],
          exercise: "Sketch a simple diagram illustrating how a user fills out a Contact Form, dispatches an API request, and receives a confirmation response.",
          takeaways: [
            "Frontend focuses on human interaction; backend focuses on data integrity, authentication, and business rules.",
          ],
        },
      ],
    },
    {
      id: "mod-2",
      moduleNumber: "02",
      title: "Semantic HTML5 & Document Architecture",
      description: "Structuring web content for optimal accessibility, screen readers, and search engine crawlers.",
      lessons: [
        {
          id: "m2-l1",
          title: "Semantic Elements & Accessibility (a11y)",
          duration: "35 min",
          introduction: "HTML is not just visual layout; it provides meaningful semantic context to search engine bots and assistive screen readers.",
          objectives: [
            "Master structural landmarks: <header>, <nav>, <main>, <article>, <section>, and <footer>",
            "Understand why replacing generic <div> tags with semantic tags improves SEO",
            "Implement accessible form inputs with paired <label> elements and ARIA attributes",
          ],
          explanation: "Semantic HTML uses tags that clearly describe their meaning to both the browser and the developer. A screen reader can jump directly to the <main> tag or skip to <nav>. Google crawlers use semantic nesting to understand which content constitutes the primary article versus supplementary sidebars.",
          concepts: [
            "Heading hierarchy (strict single <h1> per page, followed by logical <h2> and <h3>)",
            "Text formatting with <p>, <blockquote>, <ul>, <ol>, and <strong>",
            "Image accessibility using descriptive alt text",
          ],
          codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Page Architecture</title>
</head>
<body>
  <header>
    <nav aria-label="Main Navigation">
      <a href="/">Home</a>
    </nav>
  </header>
  <main>
    <article>
      <h1>Modern Web Development</h1>
      <p>Semantic markup makes the web accessible to everyone.</p>
    </article>
  </main>
  <footer>
    <p>&copy; 2026 Zavera.Tech</p>
  </footer>
</body>
</html>`,
          codeLanguage: "html",
          expectedOutput: "A fully valid semantic document structure readable by browsers, search engine spiders, and accessibility screen readers.",
          commonMistakes: [
            "Using multiple <h1> tags scattered throughout a single landing page",
            "Skipping alt attributes on <img> tags or using generic text like 'image.jpg'",
          ],
          exercise: "Build an accessible blog post layout containing a header, author bio section, article content, and footer with zero generic div tags.",
          takeaways: [
            "Semantic HTML is the backbone of technical SEO and web accessibility.",
          ],
        },
      ],
    },
    {
      id: "mod-3",
      moduleNumber: "03",
      title: "Responsive CSS3 & Visual Layout Engineering",
      description: "Mastering the box model, visual styling, responsive units, and fluid layout foundations.",
      lessons: [
        {
          id: "m3-l1",
          title: "The CSS Box Model & Fluid Units",
          duration: "40 min",
          introduction: "Every element on a web page is rendered as a rectangular box. Mastering the box model is the secret to pixel-perfect styling.",
          objectives: [
            "Deconstruct content, padding, border, and margin",
            "Understand why 'box-sizing: border-box' is standard across professional development",
            "Use responsive relative units: rem, em, %, vh, and vw instead of fixed pixels",
          ],
          explanation: "In the default content-box model, adding padding or border expands the element's rendered width beyond what you set. With box-sizing: border-box, the width includes padding and border, ensuring mathematical predictability in grid calculations.",
          concepts: [
            "Content Box vs. Border Box",
            "Margin collapsing and spacing discipline",
            "Root em (rem) based typography scaling for accessibility",
          ],
          codeSnippet: `*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #171717;
}

.card {
  padding: 1.5rem;
  border: 1px solid #E5E7EB;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
}`,
          codeLanguage: "css",
          expectedOutput: "A clean card container with controlled inner padding and outer spacing that never overflows its parent.",
          commonMistakes: [
            "Forgetting to set box-sizing: border-box on the universal selector",
            "Hardcoding fixed pixel heights on containers causing text overflow on mobile screens",
          ],
          exercise: "Create a 3-tier pricing card layout where cards scale fluidly from mobile viewport (100% width) to tablet (50%) and desktop (33.3%).",
          takeaways: [
            "Always reset margins and set box-sizing: border-box globally in your CSS.",
            "Use rem for typography and padding to respect user browser font size preferences.",
          ],
        },
      ],
    },
    {
      id: "mod-4",
      moduleNumber: "04",
      title: "JavaScript DOM Programming & Interactivity",
      description: "Adding dynamic behaviors, event listeners, and user interaction logic.",
      lessons: [
        {
          id: "m4-l1",
          title: "DOM Selection, Manipulation & Event Listeners",
          duration: "45 min",
          introduction: "JavaScript transforms static HTML and CSS into responsive, living web applications through the Document Object Model.",
          objectives: [
            "Query DOM nodes using document.querySelector and document.querySelectorAll",
            "Listen for user events: click, submit, keydown, and scroll",
            "Dynamically update styles, toggle classes, and render list items",
          ],
          explanation: "The browser parses HTML into a tree of JavaScript objects known as the DOM. JavaScript functions can query these elements, register event handlers, and update element contents without refreshing the entire browser window.",
          concepts: [
            "Event Listeners and Event Delegation",
            "Toggling CSS classes for animations and visibility",
            "Form submission interception using event.preventDefault()",
          ],
          codeSnippet: `const contactForm = document.querySelector("#contact-form");
const statusMessage = document.querySelector("#status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page reload
  statusMessage.textContent = "Thank you! Your inquiry is being sent...";
  statusMessage.classList.add("text-orange-600");
});`,
          codeLanguage: "javascript",
          expectedOutput: "Submitting the form instantly updates the status text without triggering a page reload.",
          commonMistakes: [
            "Forgetting event.preventDefault() in form submit listeners causing unwanted full page reloads",
            "Querying elements before the DOM has finished loading in the browser",
          ],
          exercise: "Build an interactive FAQ accordion where clicking a question expands the answer and collapses previously opened questions.",
          takeaways: [
            "The DOM allows JavaScript to inspect and mutate every aspect of an HTML page dynamically.",
          ],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Build & Deploy a Responsive Agency Landing Page",
    description: "Combine all skills learned in this course to build a multi-section digital agency landing page with semantic HTML5, responsive CSS flexbox/grid, an interactive mobile navigation menu, and a validated contact form.",
    deliverables: [
      "Semantic HTML5 document with structured landmarks and meta tags",
      "Mobile-first responsive CSS stylesheet styled with the Zavera.Tech orange & white theme",
      "JavaScript-powered mobile navigation toggle and interactive modal dialog",
      "Live deployment hosted on Vercel or GitHub Pages with verified zero console errors",
    ],
  },
  relatedCourseSlugs: [
    "mastering-css-flexbox-and-grid",
    "javascript-es6-and-asynchronous-patterns",
    "building-scalable-uis-with-react",
  ],
  relatedServiceLink: {
    title: "Web Development Services in Abbottabad",
    href: "/services/web-development",
  },
};

