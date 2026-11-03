import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-wider text-[#F07825] bg-orange-50 rounded-full">
          404 &mdash; Page Not Found
        </div>
        <h1 className="text-6xl font-black text-neutral-900 tracking-tight">
          4<span className="text-[#F07825]">0</span>4
        </h1>
        <p className="text-neutral-600 text-base leading-relaxed">
          The page or resource you are looking for has been moved or does not exist. Explore our agency services or return home.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="md" href="/">
            <Home className="w-4 h-4 mr-2" />
            <span>Return Home</span>
          </Button>
          <Button variant="outline" size="md" href="/services">
            <span>Explore Services</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

