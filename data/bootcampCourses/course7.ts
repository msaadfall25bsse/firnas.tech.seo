import { BootcampCourse } from "@/data/bootcampCourses";

export const course7: BootcampCourse = {
  slug: "actionable-technical-seo-for-modern-websites",
  title: "Actionable Technical SEO for Modern Websites",
  subtitle: "Master Crawlability, Core Web Vitals, Structured Data, Sitemaps & Search Console Optimization",
  category: "SEO",
  difficulty: "Intermediate",
  duration: "4 Weeks (Hands-on SEO Lab Curriculum)",
  summary: "A rigorous, step-by-step masterclass in technical search engine optimization. Learn how search spiders crawl websites, optimize Core Web Vitals, construct XML sitemaps, inject rich JSON-LD schema, and debug indexing in Google Search Console.",
  image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
  publishedAt: "2026-03-14",
  primaryKeyword: "Technical SEO",
  secondaryKeywords: [
    "Technical SEO guide",
    "Technical SEO checklist",
    "Website indexing",
    "Website crawlability",
    "Core Web Vitals",
    "XML sitemap SEO",
    "Robots.txt optimization",
    "Website speed optimization",
  ],
  overview: {
    about: "This comprehensive technical SEO course takes you deep into the infrastructure of organic search. You will master crawling mechanics, canonical link standards, XML sitemaps, schema structured data, and Google Core Web Vitals performance tuning.",
    whyItMatters: "Even the highest quality content fails if Google cannot crawl, render, and index your website. Technical SEO forms the essential foundation that enables all organic rankings.",
    whoShouldLearn: [
      "Web developers wanting to build search-engine-ready applications",
      "Digital marketers and SEO specialists seeking technical mastery",
      "Business owners wanting to diagnose and fix search indexing problems",
    ],
    problemsSolved: [
      "Resolving 'URL not allowed' and sitemap submission errors in Google Search Console",
      "Fixing slow page speed and layout shifts that damage Core Web Vitals scores",
      "Unlocking Google Rich Snippets with JSON-LD schema markup",
    ],
    prerequisites: ["Basic understanding of HTML, web hosting, and website URLs"],
  },
  learningOutcomes: [
    "Deconstruct Googlebot crawling, rendering (WRS), and indexing stages",
    "Structure valid XML sitemaps and configure robots.txt without blocking assets",
    "Implement canonical tags, 301 redirects, and meta robots tags properly",
    "Score 90+ on Core Web Vitals (LCP, INP, CLS) through image and asset optimization",
    "Inject valid schema.org structured data (Organization, LocalBusiness, Article, FAQ)",
  ],
  modules: [
    {
      id: "seo-m1",
      moduleNumber: "01",
      title: "Crawling, Indexing & Technical Architecture",
      description: "How search engines navigate the web, sitemaps, robots.txt, and canonicals.",
      lessons: [
        {
          id: "seo-m1-l1",
          title: "XML Sitemaps, Robots.txt & Google Search Console",
          duration: "35 min",
          introduction: "XML sitemaps provide search engine spiders with an explicit roadmap of your canonical content and update frequencies.",
          objectives: [
            "Construct standard XML sitemaps following sitemaps.org schemas",
            "Configure robots.txt rules to guide web crawlers responsibly",
            "Debug sitemap submission issues in Google Search Console",
          ],
          explanation: "Search engines discover pages through links and sitemaps. A sitemap tells Google which URLs are canonical and when they were last updated. The sitemap domain must strictly match the verified Google Search Console property domain to avoid 'URL not allowed' errors.",
          concepts: ["XML Sitemap Schema", "Robots.txt Directives (Allow, Disallow, Sitemap)", "Search Console Property Matching"],
          codeSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://firnas-tech-seo.vercel.app/</loc>
    <lastmod>2026-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`,
          codeLanguage: "xml",
          expectedOutput: "A valid XML document crawlable by Googlebot and readable by Search Console.",
          commonMistakes: ["Including 404 pages or redirected URLs inside the XML sitemap", "Mismatched domain URLs between Search Console and the sitemap"],
          exercise: "Validate an existing website's sitemap.xml for proper XML syntax, clean URLs, and lastmod timestamp accuracy.",
          takeaways: ["Keep your sitemap updated and ensure it lists only 200 OK canonical URLs."],
        },
      ],
    },
    {
      id: "seo-m2",
      moduleNumber: "02",
      title: "Structured Data & Core Web Vitals",
      description: "JSON-LD schema for rich snippets, and performance optimization for LCP and CLS.",
      lessons: [
        {
          id: "seo-m2-l1",
          title: "JSON-LD Schema Markup & Google Rich Snippets",
          duration: "40 min",
          introduction: "Structured data translates page content into unambiguous machine-readable entities using Schema.org vocabularies.",
          objectives: [
            "Implement Organization, LocalBusiness, Article, and FAQPage schemas",
            "Embed JSON-LD cleanly in Next.js Server Components and layout.tsx",
            "Validate structured data using Google's Rich Results Test tool",
          ],
          explanation: "Search engines use structured data to enrich search results with review stars, FAQs, event details, and breadcrumb trails. Google explicitly recommends JSON-LD embedded within a <script type='application/ld+json'> tag.",
          concepts: ["Schema.org Entities", "JSON-LD vs. Microdata", "Google Rich Results Eligibility"],
          codeSnippet: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Firnas.tech",
  "url": "https://firnas.tech",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Abbottabad",
    "addressRegion": "Khyber Pakhtunkhwa",
    "addressCountry": "PK"
  }
}
</script>`,
          codeLanguage: "html",
          expectedOutput: "Googlebot parses the structured data, linking the organization entity with its physical location in Abbottabad, Pakistan.",
          commonMistakes: ["Adding fake reviews or claims in schema markup, which triggers Google manual spam penalties"],
          exercise: "Write a complete FAQPage schema markup for 3 common client questions and validate it with Google's validator.",
          takeaways: ["JSON-LD schema gives search engines semantic clarity and unlocks high-CTR rich search snippets."],
        },
      ],
    },
  ],
  practicalProject: {
    title: "Capstone Project: Comprehensive Technical SEO Audit & Speed Optimization",
    description: "Conduct a complete technical SEO audit of a live web application. Identify and resolve crawl errors, canonical mismatches, sitemap configuration, missing schema markup, and Core Web Vitals bottlenecks.",
    deliverables: [
      "Technical SEO audit report detailing crawl errors and remediation steps",
      "Full JSON-LD structured data implementation (Organization, LocalBusiness, FAQ)",
      "Lighthouse performance score exceeding 90+ on mobile and desktop",
    ],
  },
  relatedCourseSlugs: [
    "nextjs-app-router-and-server-components",
    "crafting-sustainable-digital-marketing-strategies",
    "principles-of-impactful-brand-identity-design",
  ],
  relatedServiceLink: {
    title: "SEO Services in Abbottabad & Pakistan",
    href: "/services/seo-services",
  },
};

