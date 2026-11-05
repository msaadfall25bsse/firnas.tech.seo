import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-[#F07825] text-white hover:bg-[#d96517] focus:ring-[#F07825] shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900 shadow-sm active:scale-[0.98]",
    outline:
      "border-2 border-neutral-300 text-neutral-800 hover:border-[#F07825] hover:text-[#F07825] bg-transparent focus:ring-[#F07825]",
    white:
      "bg-white text-neutral-900 hover:bg-neutral-100 focus:ring-white shadow-sm hover:shadow",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

