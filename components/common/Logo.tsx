import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: number;
}

export default function Logo({ variant = "dark", className = "", size = 38 }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group transition-transform active:scale-95 ${className}`}>
      <div className="relative flex items-center justify-center shrink-0">
        <Image
          src="/logo.svg"
          alt="Zavera.Tech Logo"
          width={size}
          height={size}
          className="transition-transform duration-300 group-hover:rotate-6"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight text-xl leading-none ${
            variant === "light" ? "text-white" : "text-neutral-900"
          }`}
        >
          Zavera<span className="text-[#F07825]">.Tech</span>
        </span>
        <span className="text-[10px] tracking-wider uppercase font-medium text-neutral-400 mt-0.5">
          Where Ideas Find Wings
        </span>
      </div>
    </Link>
  );
}

