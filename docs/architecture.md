# Zavera.Tech — System Architecture & Codebase Organization

## 1. Overview & Architectural Philosophy

Zavera.Tech is built on Next.js 16 (App Router) with React 19, TypeScript, and Tailwind CSS. The codebase adheres to the structured, domain-isolated architecture inspired by the Junglan Community Development Foundation reference project, ensuring strict separation of concerns, high maintainability, and clean type contracts.

---

## 2. Directory Hierarchy

```text
zavera.tech/
├── app/                  # Next.js App Router (File-based routing & server layouts)
│   ├── (site)/           # Core application routes
│   │   ├── about/        # Company narrative & team profile
│   │   ├── contact/      # Inquiry forms & direct communication
│   │   ├── learning/     # Educational academy hub & [slug] curriculum pages
│   │   ├── services/     # Category catalog & [slug] dedicated landing pages
│   │   └── api/          # Serverless route handlers (e.g. /api/contact)
│   ├── favicon.ico
│   ├── globals.css       # Minified production styles
│   ├── icon.svg
│   ├── layout.tsx        # Root HTML wrapper, metadata, global Navbar & Footer
│   ├── not-found.tsx     # Custom 404 handler
│   └── page.tsx          # Homepage
├── components/           # Component hierarchy organized by abstraction level
│   ├── ui/               # Foundational atomic primitives (Button, Breadcrumbs)
│   ├── common/           # Shared composite widgets (Logo, CTASection, FAQAccordion, Cards)
│   ├── layout/           # Global chrome components (Navbar, Footer)
│   ├── home/             # Homepage domain-specific sections
│   ├── learning/         # Academy explorer & accordion components
│   └── contact/          # Interactive contact forms & verification
├── data/                 # Static datasets, catalogs, and curricula
│   ├── bootcampCourses/  # Individual course modules (course1.ts - course9.ts)
│   ├── servicesCatalog/  # Deep catalog of 34 dedicated service landing specs
│   ├── navigation.ts     # Global navigation schema & site configuration
│   ├── faqs.ts           # Global FAQ content repository
│   └── projects.ts       # Portfolio case studies & technical impact data
├── types/                # Central TypeScript interfaces & domain models
│   ├── index.ts          # Barrel export for seamless imports
│   ├── navigation.ts     # Navigation & site metadata types
│   ├── services.ts       # Service catalog & detail specifications
│   ├── bootcamp.ts       # Curriculum, module, and lesson interfaces
│   └── contact.ts        # Form payload & general entity types
├── lib/                  # Shared utility functions and validation schemas
│   ├── utils.ts          # Tailwind class merger (clsx + twMerge)
│   └── validations.ts    # Zod schemas for contact form verification
├── docs/                 # Engineering architecture & technical guidelines
│   ├── architecture.md   # Architectural reference guide
│   └── technical-seo.md  # Comprehensive technical SEO specifications
└── public/               # Static assets, branding, vectors, and SEO files
    ├── robots.txt        # Web crawler directives
    ├── sitemap.xml       # Full XML index containing all 52 static routes
    └── ...               # Branded images and SVG vectors
```

---

## 3. Component Categorization Standards

1. **`components/ui/`**: Low-level foundational building blocks that do not hold business logic (e.g. `Button`, `Breadcrumbs`).
2. **`components/common/`**: Reusable multi-element compositions used across diverse routes (e.g. `CTASection`, `FAQAccordion`, `ServiceCard`, `LearningCard`, `ProjectCard`, `SectionHeading`).
3. **`components/layout/`**: Structural layout chrome rendered on all pages (`Navbar`, `Footer`).
4. **Domain Directories**: Route-specific components that are only utilized within their parent page scope (`components/home/`, `components/learning/`, `components/contact/`).

---

## 4. Production Build & Static Site Generation (SSG)

- Every marketing route, service detail page, and learning curriculum is pre-rendered at build time via `generateStaticParams()` and Server Components for optimal SEO and sub-second load times.
- Zero client-side bloat: interactive controls (`CurriculumAccordion`, `BootcampExplorer`, `ContactForm`) use the `"use client"` directive strictly where DOM interaction or state is mandatory.
