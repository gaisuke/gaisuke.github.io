import { experiences } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Experience</h2>
            <div className="space-y-8">
                {experiences.map((exp) => (
                    <div key={exp.company}>
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium">{exp.title}</span>
                            <span className="text-xs text-zinc-400 shrink-0 ml-4">{exp.period}</span>
                        </div>
                        <p className="text-sm text-zinc-500 mb-2">{exp.company} · {exp.type}</p>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {exp.stack.map((tech) => (
                                <span key={tech} className="text-xs px-2 py-1 border border-zinc-200 text-zinc-500 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}