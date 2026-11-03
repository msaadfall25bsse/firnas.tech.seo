import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Firnas.tech | Where Ideas Find Wings — Software Development, Digital Marketing & Design",
    template: "%s | Firnas.tech",
  },
  description: siteConfig.description,
  keywords: [
    "Firnas.tech",
    "Software Development",
    "Digital Marketing",
    "Graphic Designing",
    "SEO Agency",
    "Web Application Development",
    "Next.js Development",
    "Brand Identity",
    "Technology Agency",
  ],
  authors: [{ name: "Firnas.tech" }],
  creator: "Firnas.tech",
  publisher: "Firnas.tech",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Firnas.tech — Where Ideas Find Wings",
    description: siteConfig.description,
    siteName: "Firnas.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firnas.tech — Where Ideas Find Wings",
    description: siteConfig.description,
    creator: "@firnastech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: "18d37e43bd2808bb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Organization Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Firnas.tech",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.socials.github,
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: siteConfig.email,
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="18d37e43bd2808bb" />
        <meta name="google-site-verification" content="google18d37e43bd2808bb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#F07825] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
