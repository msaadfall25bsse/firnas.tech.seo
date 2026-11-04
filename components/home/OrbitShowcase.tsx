"use client";

import Image from "next/image";
import { 
  Code2, 
  TrendingUp, 
  Palette, 
  Layers, 
  Cpu, 
  Globe, 
  Search, 
  Sparkles,
  ShoppingBag,
  Database
} from "lucide-react";

export default function OrbitShowcase() {
  return (
    <div className="relative w-full aspect-square max-w-[440px] sm:max-w-[480px] lg:max-w-[520px] mx-auto flex items-center justify-center select-none overflow-visible">
      {/* Glow Center Ambient Background */}
      <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#F07825]/25 via-[#FF8C42]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Outer Orbit Track (Radius: 210px) */}
      <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-dashed border-[#F07825]/30 animate-spin-slow pointer-events-none">
        {/* Node 1: Next.js / Web Dev */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 p-2.5 sm:p-3 bg-white rounded-2xl shadow-lg border border-orange-200/80 flex items-center gap-2 animate-reverse-spin">
          <Code2 className="w-4 h-4 text-[#F07825]" />
          <span className="text-[11px] font-bold text-neutral-800 hidden sm:inline-block">Next.js & Web</span>
        </div>

        {/* Node 2: SEO & Growth */}
        <div className="absolute top-1/2 -right-5 -translate-y-1/2 p-2.5 sm:p-3 bg-white rounded-2xl shadow-lg border border-orange-200/80 flex items-center gap-2 animate-reverse-spin">
          <Search className="w-4 h-4 text-[#F07825]" />
          <span className="text-[11px] font-bold text-neutral-800 hidden sm:inline-block">Technical SEO</span>
        </div>

        {/* Node 3: E-Commerce */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 p-2.5 sm:p-3 bg-white rounded-2xl shadow-lg border border-orange-200/80 flex items-center gap-2 animate-reverse-spin">
          <ShoppingBag className="w-4 h-4 text-[#F07825]" />
          <span className="text-[11px] font-bold text-neutral-800 hidden sm:inline-block">E-Commerce</span>
        </div>

        {/* Node 4: Brand Identity */}
        <div className="absolute top-1/2 -left-5 -translate-y-1/2 p-2.5 sm:p-3 bg-white rounded-2xl shadow-lg border border-orange-200/80 flex items-center gap-2 animate-reverse-spin">
          <Palette className="w-4 h-4 text-[#F07825]" />
          <span className="text-[11px] font-bold text-neutral-800 hidden sm:inline-block">Brand Design</span>
        </div>
      </div>

      {/* Middle Orbit Track (Radius: 135px - Reverse Rotation) */}
      <div className="absolute w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] rounded-full border border-neutral-300/60 animate-spin-reverse-medium pointer-events-none">
        {/* Node 5: React.js */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-2 sm:p-2.5 bg-neutral-900 text-white rounded-xl shadow-md border border-neutral-800 flex items-center gap-1.5 animate-counter-spin">
          <Layers className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span className="text-[10px] font-semibold hidden sm:inline-block">React</span>
        </div>

        {/* Node 6: Cloud & API */}
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-2 sm:p-2.5 bg-neutral-900 text-white rounded-xl shadow-md border border-neutral-800 flex items-center gap-1.5 animate-counter-spin">
          <Database className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span className="text-[10px] font-semibold hidden sm:inline-block">APIs</span>
        </div>

        {/* Node 7: Marketing */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-2 sm:p-2.5 bg-neutral-900 text-white rounded-xl shadow-md border border-neutral-800 flex items-center gap-1.5 animate-counter-spin">
          <TrendingUp className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span className="text-[10px] font-semibold hidden sm:inline-block">Growth</span>
        </div>

        {/* Node 8: TypeScript */}
        <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2 sm:p-2.5 bg-neutral-900 text-white rounded-xl shadow-md border border-neutral-800 flex items-center gap-1.5 animate-counter-spin">
          <Cpu className="w-3.5 h-3.5 text-[#FF8C42]" />
          <span className="text-[10px] font-semibold hidden sm:inline-block">TypeScript</span>
        </div>
      </div>

      {/* Inner Central Core: Firnas.tech Symbol & Brand Glow */}
      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#F07825] to-[#FF8C42] p-1 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
        <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center p-3 text-center shadow-inner">
          <Image
            src="/logo.svg"
            alt="Firnas.tech Core"
            width={40}
            height={40}
            className="animate-pulse"
          />
          <span className="text-[10px] font-black text-neutral-900 tracking-tight mt-1">
            Firnas<span className="text-[#F07825]">.tech</span>
          </span>
          <span className="text-[7px] text-neutral-400 font-bold uppercase tracking-wider">
            HQ Abbottabad
          </span>
        </div>
      </div>

      {/* Live Status Pill */}
      <div className="absolute -bottom-4 bg-white/95 backdrop-blur-md border border-neutral-200/90 rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 text-xs font-semibold text-neutral-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-emerald-500 absolute left-3.5" />
        <span className="pl-3 text-[11px]">Active Ecosystem &bull; Ready for Projects</span>
      </div>
    </div>
  );
}

