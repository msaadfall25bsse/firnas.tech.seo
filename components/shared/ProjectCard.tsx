import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        <div className="relative w-full h-52 bg-neutral-100 overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors" />
        </div>

        <div className="p-6">
          <div className="text-xs font-semibold text-[#F07825] uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#F07825] transition-colors">
            {project.name}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

