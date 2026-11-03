export interface NavItem {
  title: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Learning", href: "/learning" },
  { title: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Firnas.tech",
  tagline: "Where Ideas Find Wings",
  description:
    "At Firnas.tech, we combine technology, creativity, and digital strategy to help businesses build their online presence and grow in the digital world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://firnas.tech",
  email: "contact@firnas.tech",
  phone: "+92 300 0000000",
  whatsapp: "https://wa.me/923000000000",
  socials: {
    github: "https://github.com/msaadfall25bsse/firnas.tech.seo",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

