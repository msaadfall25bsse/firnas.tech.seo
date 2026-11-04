import Button from "./Button";

interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  badge = "Ready to elevate your business?",
  title = "Have an Idea? Let's Build Something Amazing.",
  description = "Partner with Firnas.tech to create high-performance digital products, scale your organic search traffic, and design memorable brand identities.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-20 px-6 sm:px-8 bg-neutral-900 text-white rounded-3xl mx-4 sm:mx-8 lg:mx-auto max-w-7xl my-16 shadow-xl">
      {/* Subtle orange accent background radial */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F07825]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FF8C42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {badge && (
          <span className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF8C42] bg-[#F07825]/20 border border-[#F07825]/30 rounded-full mb-6">
            {badge}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={buttonHref}>
            {buttonText}
          </Button>
          <Button variant="outline" size="lg" href="/services" className="border-neutral-700 text-white hover:border-white hover:text-white">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}

