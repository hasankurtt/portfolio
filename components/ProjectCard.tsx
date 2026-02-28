import { Github, Globe, BookOpen } from "lucide-react";
import { Project } from "@/data/content";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const titleHref = project.liveUrl ?? project.githubUrl;

  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:bg-zinc-900 transition-colors duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        {titleHref ? (
          <a
            href={titleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors hover:underline underline-offset-4 decoration-zinc-600"
          >
            {project.title}
          </a>
        ) : (
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
            {project.title}
          </h3>
        )}

        <div className="flex gap-2 ml-4 flex-shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              title="Live Project"
            >
              <Globe size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              title="Source Code"
            >
              <Github size={18} />
            </a>
          )}
          {project.mediumUrl && (
            <a
              href={project.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              title="Read Article"
            >
              <BookOpen size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-zinc-400 mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}