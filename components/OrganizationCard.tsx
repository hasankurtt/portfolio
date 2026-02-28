import { ExternalLink } from "lucide-react";
import { Organization } from "@/data/content";

interface OrganizationCardProps {
  organization: Organization;
}

export function OrganizationCard({ organization }: OrganizationCardProps) {
  return (
    <div className="group border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors duration-300 rounded-2xl p-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {organization.name}
            </h3>
            {organization.url && (
              <a
                href={organization.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-300 transition-colors"
                aria-label={`${organization.name} website`}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
          <p className="text-zinc-400 font-medium text-sm mb-3">
            {organization.role}
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm max-w-2xl">
            {organization.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {organization.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <span className="text-sm font-mono text-zinc-500 flex-shrink-0">
          {organization.period}
        </span>
      </div>
    </div>
  );
}
