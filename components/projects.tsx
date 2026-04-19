import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                Projects
            </h2>
            <div className="space-y-6">
                {projects.map((project) => (
                    <div key={project.name} className="group">
                        <div className="flex justify-between items-start mb-1">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium hover:underline underline-offset-4"
                            >
                                {project.name} ↗
                            </a>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 border border-zinc-200 text-zinc-500 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
}