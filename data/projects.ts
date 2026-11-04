export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "firnas-tech",
    name: "Firnas.tech",
    category: "Agency Platform & Software Architecture",
    description: "The official digital platform and interactive learning hub for Firnas.tech, built with Next.js, TypeScript, and modern SEO architecture.",
    image: "/project-firnas.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO Architecture"],
  },
  {
    id: "jobzeta",
    name: "Jobzeta",
    category: "Web Platform Development",
    description: "A specialized job discovery and recruitment web application focused on connecting talented job seekers with growing organizations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["Web App", "Frontend Development", "UI/UX", "Database"],
  },
  {
    id: "ecom-with-sami",
    name: "Ecom with Sami",
    category: "E-Commerce & Digital Branding",
    description: "A tailored digital commerce portal and educational brand showcase designed to guide entrepreneurs in online store scaling.",
    image: "/project-ecom.jpg",
    tags: ["E-Commerce", "Brand Strategy", "Content Delivery", "Responsive Design"],
  },
  {
    id: "moon-rabbit-tour",
    name: "Moon Rabbit Tour",
    category: "Travel & Hospitality Web Presence",
    description: "An engaging travel booking and tour discovery platform featuring responsive itinerary views, visual galleries, and customer inquiries.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    tags: ["Travel Platform", "Booking Flow", "Visual Identity", "SEO"],
  },
  {
    id: "jcdf",
    name: "JCDF",
    category: "Organization Portal & Community Hub",
    description: "A community and organization digital portal created to display initiatives, public service information, and community outreach programs.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    tags: ["Community Hub", "Accessible Web Design", "Information Architecture"],
  },
];

