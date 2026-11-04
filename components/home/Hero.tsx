import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-16 md:pb-28 border-b border-neutral-100">
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
                Where Ideas Find Wings
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.12] mb-6">
              Transforming Ideas Into{" "}
              <span className="text-[#F07825]">Powerful Digital</span> Experiences
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 max-w-2xl">
              At Firnas.tech, we combine technology, creativity, and digital strategy to help businesses build their online presence and grow in the digital world.
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
                <span>Data-Driven Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F07825] shrink-0" />
                <span>Creative Visuals</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Workspace */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern software engineering and creative digital workspace at Firnas.tech"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-white/40 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F07825]">
                      Engineering & Design Hub
                    </div>
                    <div className="text-sm font-semibold text-neutral-900">
                      High-converting digital architecture
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-[#F07825]">
                    <Code2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -top-4 -right-4 bg-white border border-neutral-200 rounded-xl px-4 py-2.5 shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-800">
                  Ready for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

