export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Process" | "Pricing";
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  impact: string;
  tags: string[];
  image: string;
  link?: string;
}

