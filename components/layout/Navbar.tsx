"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Code2, 
  Search, 
  TrendingUp, 
  Palette,
  Sparkles,
  ExternalLink
} from "lucide-react";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import { servicesCategoriesData } from "@/data/servicesCatalog";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Click outside to close services mega dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5 text-[#F07825]" />;
      case "Search":
        return <Search className="w-5 h-5 text-[#F07825]" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#F07825]" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-[#F07825]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#F07825]" />;
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200/80 py-3"
          : "bg-white py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className={cn(
                "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname === "/"
                  ? "text-[#F07825] bg-orange-50/70"
                  : "text-neutral-700 hover:text-[#F07825] hover:bg-neutral-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname.startsWith("/about")
                  ? "text-[#F07825] bg-orange-50/70"
                  : "text-neutral-700 hover:text-[#F07825] hover:bg-neutral-50"
              )}
            >
              About
            </Link>

            {/* SERVICES MEGA DROPDOWN (DESKTOP) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none",
                  pathname.startsWith("/services") || servicesDropdownOpen
                    ? "text-[#F07825] bg-orange-50/70"
                    : "text-neutral-700 hover:text-[#F07825] hover:bg-neutral-50"
                )}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    servicesDropdownOpen && "transform rotate-180"
                  )}
                />
              </button>

              {/* Mega Menu Dropdown Panel */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] max-w-[95vw] bg-white rounded-3xl border border-neutral-200 shadow-2xl p-6 lg:p-8 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                >
                  {/* Top Category Grid */}
                  <div className="grid grid-cols-4 gap-6 pb-6 border-b border-neutral-100">
                    {servicesCategoriesData.map((cat) => (
                      <div key={cat.id} className="space-y-3">
                        <div className="flex items-center space-x-2.5">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <div>
                            <Link
                              href={`/services/${cat.slug}`}
                              className="font-bold text-sm text-neutral-900 hover:text-[#F07825] transition-colors leading-tight block"
                            >
                              {cat.title}
                            </Link>
                          </div>
                        </div>

                        <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                          {cat.description}
                        </p>

                        {/* Sub-services link list */}
                        <ul className="space-y-1.5 pt-1">
                          {cat.subServices.slice(0, 7).map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                href={`/services/${sub.slug}`}
                                className="text-xs text-neutral-600 hover:text-[#F07825] transition-colors flex items-center group py-0.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#F07825] mr-2 shrink-0 transition-colors" />
                                <span className="truncate">{sub.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Mega Menu Footer Callout */}
                  <div className="pt-4 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <Link
                        href="/services"
                        className="font-bold text-[#F07825] hover:underline flex items-center"
                      >
                        <span>View All Services & Specializations</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <span className="text-neutral-300">|</span>
                      <span className="text-neutral-500">
                        Based in Abbottabad, serving clients worldwide
                      </span>
                    </div>

                    <Button variant="primary" size="sm" href="/contact" className="shadow-none py-1.5 text-xs">
                      Get a Free Quote
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/learning"
              className={cn(
                "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname.startsWith("/learning")
                  ? "text-[#F07825] bg-orange-50/70"
                  : "text-neutral-700 hover:text-[#F07825] hover:bg-neutral-50"
              )}
            >
              Learning
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors",
                pathname.startsWith("/contact")
                  ? "text-[#F07825] bg-orange-50/70"
                  : "text-neutral-700 hover:text-[#F07825] hover:bg-neutral-50"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm" href="/contact" className="shadow-none">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#F07825]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-6 pt-2 border-t border-neutral-100 flex flex-col space-y-2 animate-in fade-in duration-200">
            <Link
              href="/"
              className={cn(
                "px-4 py-2.5 text-base font-semibold rounded-xl transition-colors",
                pathname === "/" ? "text-[#F07825] bg-orange-50" : "text-neutral-800 hover:bg-neutral-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-4 py-2.5 text-base font-semibold rounded-xl transition-colors",
                pathname.startsWith("/about") ? "text-[#F07825] bg-orange-50" : "text-neutral-800 hover:bg-neutral-50"
              )}
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50/50">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full px-4 py-3 flex items-center justify-between text-base font-semibold text-neutral-900 focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-neutral-500 transition-transform",
                    mobileServicesOpen && "transform rotate-180 text-[#F07825]"
                  )}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-4 pb-4 space-y-4 border-t border-neutral-200/80 pt-3 bg-white">
                  {servicesCategoriesData.map((cat) => (
                    <div key={cat.id} className="space-y-1.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#F07825]">
                        {cat.title}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {cat.subServices.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/services/${sub.slug}`}
                            className="text-xs text-neutral-700 hover:text-[#F07825] py-1 px-2 rounded-lg hover:bg-neutral-50 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-neutral-100">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-[#F07825] hover:underline block"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/learning"
              className={cn(
                "px-4 py-2.5 text-base font-semibold rounded-xl transition-colors",
                pathname.startsWith("/learning") ? "text-[#F07825] bg-orange-50" : "text-neutral-800 hover:bg-neutral-50"
              )}
            >
              Learning
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2.5 text-base font-semibold rounded-xl transition-colors",
                pathname.startsWith("/contact") ? "text-[#F07825] bg-orange-50" : "text-neutral-800 hover:bg-neutral-50"
              )}
            >
              Contact
            </Link>

            <div className="pt-3">
              <Button variant="primary" size="md" href="/contact" className="w-full">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
