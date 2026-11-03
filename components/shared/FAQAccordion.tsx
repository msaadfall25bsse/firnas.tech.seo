"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={cn("space-y-4 max-w-3xl mx-auto", className)}>
      {items.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg text-neutral-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200",
                  isOpen && "transform rotate-180 text-[#F07825]"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

