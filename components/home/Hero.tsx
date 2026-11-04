import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import Button from "../shared/Button";
import OrbitShowcase from "./OrbitShowcase";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-neutral-100">
      {/* Decorative gradient background blurs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 mb-6">
              <Sparkles className="w-4 h-4 text-[#F07825]" />
              <span className="text-xs font-semibold text-[#F07825] uppercase tracking-wider">
                Where Ideas Find Wings &bull; Abbottabad, Pakistan
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.14] mb-6">
              Your Trusted{" "}
              <span className="text-[#F07825]">IT Company in Abbottabad</span> for Digital Growth
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Firnas.tech is a premier IT company and software house in Abbottabad. We engineer high-performance web applications, drive organic search rankings, and craft memorable brand identities for businesses across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="/services" className="w-full sm:w-auto shadow-md">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="w-full sm:w-auto">
                Let&apos;s Talk
              </Button>
            </div>

            {/* Quality assurances badge */}
            <div className="pt-6 border-t border-neutral-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                <span>Technical SEO Ranking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                <span>Creative Visuals</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Rotating Technology Orbit */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <OrbitShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
