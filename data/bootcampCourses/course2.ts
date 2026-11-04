import { BootcampCourse } from "@/data/bootcampCourses";

export const course2: BootcampCourse = {
  slug: "mastering-css-flexbox-and-grid",
  title: "Mastering CSS Flexbox and Grid Layouts",
  subtitle: "Build Complex, Responsive 1D and 2D Modern Web Layouts with CSS Flexbox, Grid & Subgrid",
  category: "HTML & CSS",
  difficulty: "Beginner",
  duration: "3 Weeks (Hands-on Lab Curriculum)",
  summary: "Stop struggling with broken layouts. Master one-dimensional alignments with Flexbox, two-dimensional page framing with CSS Grid, and responsive auto-fit cards that adapt effortlessly to any device screen.",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-03",
  primaryKeyword: "CSS Flexbox and Grid",
  secondaryKeywords: [
    "CSS Flexbox tutorial",
    "CSS Grid tutorial",
    "Responsive CSS layouts",
    "CSS layout techniques",
    "Flexbox vs Grid",
    "Responsive web design",
  ],
  overview: {
    about: "This comprehensive layout bootcamp takes you from CSS display basics to advanced grid template areas and responsive fluid cards without needing media query overrides everywhere.",
    whyItMatters: "Layout design is the direct visual handshake between user and software. Modern CSS layouts ensure content looks immaculate on a 4-inch smartphone or a 32-inch 4K monitor.",
    whoShouldLearn: [
      "Developers tired of float hacks and broken margins",
      "Frontend engineers wanting full layout predictability",
      "UI/UX designers implementing their own responsive prototypes",
    ],
    problemsSolved: [
      "Eliminating accidental horizontal scrollbars and overlapping columns",
      "Centering elements vertically and horizontally without fragile position hacks",
      "Building robust, auto-wrapping responsive card grids",
    ],
    prerequisites: ["Basic understanding of HTML and basic CSS selectors"],
  },
  learningOutcomes: [
    "Master the flex container and flex item properties (justify-content, align-items, flex-grow, flex-shrink)",
    "Architect full 2D page templates with CSS Grid using grid-template-columns and grid-template-areas",
    "Know precisely when to deploy Flexbox (1D linear) vs. CSS Grid (2D planar)",
    "Build auto-fit and auto-fill responsive grids using minmax() calculations",
  ],
  modules: [
    {
      id: "css-m1",
      moduleNumber: "01",
      title: "Flexbox Architecture (1D Linear Layouts)",
      description: "Mastering the main axis, cross axis, spacing, and dynamic item sizing.",
      lessons: [
        {
          id: "css-m1-l1",
          title: "Flex Container: Main Axis vs. Cross Axis",
          duration: "30 min",
          introduction: "Flexbox operates along two orthogonal axes: the Main Axis (determined by flex-direction) and the Cross Axis.",
          objectives: [
            "Understand how flex-direction dictates main axis orientation",
            "Align items along the main axis with justify-content",
            "Align items along the cross axis with align-items",
          ],
          explanation: "When you set display: flex on a parent container, its direct children transform into flex items. By default, flex-direction is row (left to right). justify-content aligns items horizontally, while align-items aligns them vertically.",
          concepts: ["Main Axis vs. Cross Axis", "justify-content (space-between, center, flex-start)", "align-items (center, stretch)"],
          codeSnippet: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
}`,
          codeLanguage: "css",
          expectedOutput: "A responsive navigation bar with logo on the far left and menu links on the far right, perfectly centered vertically.",
          commonMistakes: ["Trying to use justify-content for vertical centering when flex-direction is row"],
          exercise: "Build a hero call-to-action button group with two buttons aligned with 1rem gap between them.",
          takeaways: ["Flexbox makes 1-dimensional item spacing and centering effortless."],
        },
      ],
    },
    {
      id: "css-m2",
      moduleNumber: "02",
      title: "CSS Grid Architecture (2D Planar Layouts)",
      description: "Defining rows, columns, fractional units (fr), and responsive templates.",
      lessons: [
        {
          id: "css-m2-l1",
          title: "Grid Columns, Rows & minmax() Magic",
          duration: "35 min",
          introduction: "CSS Grid gives you the power to define vertical columns and horizontal rows simultaneously with mathematical precision.",
          objectives: [
            "Use fractional units (fr) to distribute remaining viewport space",
            "Create intrinsically responsive card grids with repeat(auto-fit, minmax(280px, 1fr))",
            "Apply gap property without dealing with messy margin overrides",
          ],
          explanation: "The magic formula repeat(auto-fit, minmax(280px, 1fr)) automatically calculates how many columns can fit in the current screen width. If the screen is small, cards collapse into a single column. As the screen expands, cards automatically form 2, 3, or 4 columns without writing a single media query.",
          concepts: ["Fractional Units (fr)", "repeat() and minmax()", "auto-fit vs. auto-fill"],
          codeSnippet: `.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}`,
          codeLanguage: "css",
          expectedOutput: "An auto-responsive card grid that automatically rearranges columns across mobile, tablet, and desktop screens.",
          commonMistakes: ["Using percentage widths with fixed margins inside Grid, causing unexpected horizontal scrolling"],
          exercise: "Build a responsive dashboard grid with a fixed 260px sidebar and an auto-expanding main content panel using 260px 1fr.",
          takeaways: ["CSS Grid eliminates dozens of redundant media queries when combined with repeat and minmax."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Responsive Magazine & Dashboard Layout",
    description: "Construct a complete modern editorial magazine homepage featuring a multi-column CSS Grid header hero, featured article grid with auto-fitting cards, and a sticky flexbox sidebar navigation.",
    deliverables: [
      "Master CSS Grid template with distinct header, main, and footer grid areas",
      "Responsive card grid utilizing repeat(auto-fit, minmax(280px, 1fr))",
      "Tested and verified zero horizontal overflow across 320px to 2560px screen widths",
    ],
  },
  relatedCourseSlugs: [
    "introduction-to-modern-web-development",
    "building-scalable-uis-with-react",
    "nextjs-app-router-and-server-components",
  ],
  relatedServiceLink: {
    title: "Web Development Services in Abbottabad",
    href: "/services/web-development",
  },
};

