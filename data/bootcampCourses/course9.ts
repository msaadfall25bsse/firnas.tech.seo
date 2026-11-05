import { BootcampCourse } from "@/data/bootcampCourses";

export const course9: BootcampCourse = {
  slug: "principles-of-impactful-brand-identity-design",
  title: "Principles of Impactful Brand Identity Design",
  subtitle: "Craft Distinctive Vector Logos, Harmonious Color Systems & Enduring Corporate Brand Guidelines",
  category: "Graphic Designing",
  difficulty: "Beginner",
  duration: "3 Weeks (Design Studio Labs)",
  summary: "Move beyond superficial decoration. Learn how professional design agencies build memorable brand identities: typography hierarchies, deliberate color psychology, geometric vector logos, and complete corporate style guidelines.",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-18",
  primaryKeyword: "Brand Identity Design",
  secondaryKeywords: [
    "Brand identity principles",
    "Branding design",
    "Visual brand identity",
    "Logo design principles",
    "Brand guidelines",
    "Business branding",
    "Graphic design for branding",
  ],
  overview: {
    about: "This comprehensive brand design course guides you through the strategic creation of visual identity systems. You will learn the science of color psychology, typographic contrast, vector logo craftsmanship in Adobe Illustrator/Figma, and professional brand guideline documentation.",
    whyItMatters: "A brand's visual identity is its immediate handshake with the world. A cohesive identity commands respect, builds customer confidence, and differentiates your company from competitors.",
    whoShouldLearn: [
      "Graphic designers transitioning to comprehensive brand identity systems",
      "Entrepreneurs creating or refreshing their company's visual identity",
      "Frontend developers wanting to understand design systems and typography",
    ],
    problemsSolved: [
      "Inconsistent branding across print, web, apparel, and social media",
      "Logos that become illegible or pixelated when scaled down to favicons",
      "Unbalanced typography hierarchies that hinder user scanning",
    ],
    prerequisites: ["Curiosity for visual design and familiarity with vector software (Figma or Adobe Illustrator)"],
  },
  learningOutcomes: [
    "Understand the core distinction between a logo, an identity system, and brand strategy",
    "Master typography pairing: serif, sans-serif, monospaced, scale ratios, and line heights",
    "Apply color theory and psychology to evoke trust, innovation, and brand recognition",
    "Craft scalable vector logos adhering to geometric balance and simplicity rules",
    "Assemble comprehensive brand guideline manuals covering clear space, misuse, and color codes",
  ],
  modules: [
    {
      id: "dsgn-m1",
      moduleNumber: "01",
      title: "Brand Strategy, Psychology & Typography",
      description: "Deconstructing visual perception, emotional color resonance, and typographic scale.",
      lessons: [
        {
          id: "dsgn-m1-l1",
          title: "Color Psychology & Typographic Hierarchy",
          duration: "35 min",
          introduction: "Colors and typography convey emotional subconscious cues long before words are consciously read.",
          objectives: [
            "Select primary, secondary, and neutral palettes with sufficient contrast ratios",
            "Establish a mathematical type scale (1.250 Major Third or 1.333 Perfect Fourth)",
            "Ensure accessibility compliance (WCAG AA 4.5:1 text-to-background contrast)",
          ],
          explanation: "In the Zavera.Tech design system, high-energy orange (#F07825) conveys innovation and forward momentum ('Where Ideas Find Wings'), grounded by clean white and deep charcoal (#171717) for readability and trust. Strict typographic hierarchies guide the human eye effortlessly.",
          concepts: ["Color Harmony & 60-30-10 Rule", "Modular Typographic Scales", "WCAG Contrast Ratios"],
          codeSnippet: `/* Zavera.Tech Design System Palette */
:root {
  --primary-orange: #F07825;    /* 10% Accents & CTAs */
  --neutral-dark: #171717;      /* 30% Headings & Body */
  --neutral-white: #FFFFFF;     /* 60% Canvas & Whitespace */
}`,
          codeLanguage: "css",
          expectedOutput: "A high-contrast visual system that ensures clarity across digital screens and print materials.",
          commonMistakes: ["Using too many competing vibrant colors, diluting brand recognition", "Insufficient contrast between text and background failing accessibility standards"],
          exercise: "Define a 3-color palette (Primary, Secondary, Neutral) for a technology company and verify its contrast on WebAIM Contrast Checker.",
          takeaways: ["Restraint and contrast are the foundational secrets of premium corporate design."],
        },
      ],
    },
    {
      id: "dsgn-m2",
      moduleNumber: "02",
      title: "Vector Logo Crafting & Brand Guidelines",
      description: "Precision vector execution, responsive logos, and brand manual documentation.",
      lessons: [
        {
          id: "dsgn-m2-l1",
          title: "Logo Scalability & Corporate Style Manuals",
          duration: "40 min",
          introduction: "A successful logo functions seamlessly as a 16px browser favicon, an app icon, an embroidered polo shirt, and a billboard.",
          objectives: [
            "Design logos with strong silhouette value that remain recognizable in black and white",
            "Establish exclusion zones and minimum reproduction sizes",
            "Document clear brand rules preventing logo distortion, improper color shifts, and drop shadows",
          ],
          explanation: "Professional brand design produces vector source files (SVG, AI, EPS) and documents clear operational rules. A Brand Guidelines manual ensures that whether an internal developer or a third-party printer uses the logo, the brand identity remains pristine.",
          concepts: ["The Silhouette Test", "Exclusion Zones (Clear Space)", "Brand Manual Structure"],
          codeSnippet: `<!-- Vector SVG Emblem Scalability -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="20" fill="#F07825"/>
  <path d="M25 28C38 28 50 34 60 42C70 50 75 62 75 72" stroke="white" stroke-width="8" stroke-linecap="round"/>
</svg>`,
          codeLanguage: "xml",
          expectedOutput: "A vector asset that scales infinitely to any resolution without loss of clarity or sharpness.",
          commonMistakes: ["Designing overly detailed logos with thin hair lines that disappear at small digital sizes"],
          exercise: "Design an exclusion zone specification around your logo using a relative unit (such as the height of the letter mark 'X').",
          takeaways: ["Simplicity ensures versatility, longevity, and instant memorability."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Complete Corporate Brand Identity System",
    description: "Conceive, craft, and present a complete corporate brand identity package for a modern business, including logo mark, responsive variants, typography hierarchy, color codes (HEX, RGB, CMYK), and a downloadable brand guidelines manual.",
    deliverables: [
      "Vector master logo files in SVG, AI, and EPS formats with black/white variants",
      "Comprehensive typography hierarchy and color system palette specifications",
      "8-page Brand Style Guide detailing clear space, correct applications, and prohibited misuse",
    ],
  },
  relatedCourseSlugs: [
    "introduction-to-modern-web-development",
    "crafting-sustainable-digital-marketing-strategies",
    "mastering-css-flexbox-and-grid",
  ],
  relatedServiceLink: {
    title: "Brand Identity Design Services in Abbottabad",
    href: "/services/brand-identity-design",
  },
};

