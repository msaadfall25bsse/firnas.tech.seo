export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  features: string[];
  href: string;
  keywords?: string[];
}

export interface SubServiceDetail {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  heroHeadline: string;
  heroDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortDesc: string;
  image: string;
  features: string[];
  deliverables: string[];
  techStack: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  services: SubServiceDetail[];
}

