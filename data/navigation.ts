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
  name: "Zavera.Tech",
  tagline: "Where Ideas Find Wings",
  description:
    "At Zavera.Tech, we combine technology, creativity, and digital strategy to help businesses build their online presence and grow in the digital world.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zavera.tech",
  email: "contact@zavera.tech",
  phone: "+92 300 0000000",
  whatsapp: "https://wa.me/923000000000",
  location: "Abbottabad, Khyber Pakhtunkhwa, Pakistan",
  socials: {
    github: "https://github.com/msaadfall25bsse/firnas.tech.seo",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

