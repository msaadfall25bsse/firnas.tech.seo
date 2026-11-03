import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, TrendingUp, Palette } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = () => {
    switch (service.category) {
      case "software":
        return <Code2 className="w-6 h-6 text-[#F07825]" />;
      case "marketing":
        return <TrendingUp className="w-6 h-6 text-[#F07825]" />;
      case "design":
        return <Palette className="w-6 h-6 text-[#F07825]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#F07825]" />;
    }
  };

  return (
    <div className="group relative bg-white border border-neutral-200 hover:border-[#F07825]/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 group-hover:bg-[#F07825] group-hover:text-white transition-colors duration-300">
          <div className="group-hover:text-white transition-colors [&>svg]:group-hover:text-white">
            {getIcon()}
          </div>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-[#F07825] transition-colors">
          {service.title}
        </h3>

        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          {service.subtitle}
        </p>

        <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 bg-neutral-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="pt-2 border-t border-neutral-100">
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center text-sm font-semibold text-[#F07825] hover:text-[#d96517] transition-colors group-hover:translate-x-1 duration-200"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </div>
  );
}

