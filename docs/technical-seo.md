# Zavera.Tech — Technical SEO & On-Page Preservation Guide

## 1. Overview & SEO Philosophy

Zavera.Tech operates with an intentional, high-authority On-Page SEO strategy targeted at both local dominance in Abbottabad, Khyber Pakhtunkhwa, and high-intent global software development queries across Pakistan and internationally.

This document serves as the permanent specification to prevent accidental dilution, degradation, or disruption of ranking factors during code refactoring or feature expansion.

---

## 2. Core Metadata & Keyword Architecture

### 2.1 Homepage Core Targets
- **Page Title**: `Zavera.Tech | Software House, IT & SEO Company in Abbottabad`
- **Meta Description**: `Premier software house, IT company, and digital agency in Abbottabad, Pakistan. We deliver modern web development, custom software engineering, and data-driven SEO.`
- **Primary Keywords**:
  - `Software House in Abbottabad`
  - `IT Company in Abbottabad`
  - `Web Development Abbottabad`
  - `SEO Services Abbottabad`
  - `Digital Marketing Agency Abbottabad`

### 2.2 Canonical URL Rules
- Base Domain: `https://zavera.tech`
- Every route declares a canonical URL pointing to its clean, trailing-slash-free path.
- Dynamic route segments (`/services/[slug]`, `/learning/[slug]`) inject dynamic canonical tags matching their exact slug.

---

## 3. Heading Hierarchy Requirements (H1, H2, H3)

Every page follows a single-H1 semantic tree:
1. **Single `<h1>`**: Must contain the primary geographic and service keyword (e.g. `Premier Web Development Company in Abbottabad, Pakistan`).
2. **`<h2>` Elements**: Outline major core capabilities, curriculum breakdowns, or technical benefits.
3. **`<h3>` Elements**: Feature descriptions, specific curriculum modules, and FAQ question items.

---

## 4. Structured Data (JSON-LD Schemas)

1. **`LocalBusiness` & `Organization`**:
   - Injected in root layout and service pages with accurate geographic coordinates (`latitude: 34.1688`, `longitude: 73.2215`), official brand logo, and address details for Abbottabad, KPK, Pakistan.
2. **`Service` Schema**:
   - Programmatically generated on each `/services/[slug]` route specifying service title, provider, and target service areas (`Abbottabad`, `Pakistan`).
3. **`Course` Schema**:
   - Injected on every `/learning/[slug]` course page containing course name, provider (`Zavera.Tech`), description, and educational level.
4. **`FAQPage` Schema**:
   - Injected wherever `FAQAccordion` is rendered, ensuring rich snippets eligibility on Google Search.

---

## 5. Indexing & Crawling Directives

- **`public/robots.txt`**:
  ```text
  User-agent: *
  Allow: /
  Disallow: /api/

  Sitemap: https://zavera.tech/sitemap.xml
  ```
- **`public/sitemap.xml`**:
  - Houses all 52 static routes with updated `lastmod` timestamps, `priority: 1.0` for core transactional pages, and `priority: 0.8` for dedicated service and bootcamp routes.
