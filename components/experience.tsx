import { experiences } from "@/lib/data";

export default function Experience() {
    return (
        <section id="experience" className="max-w-2xl mx-auto py-12 border-t border-zinc-100 scroll-mt-20">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Experience</h2>
            <div className="space-y-10">
                {experiences.map((exp) => (
                    <div key={`${exp.company}-${exp.period}`}>
                        <div className="flex justify-between items-baseline mb-1 gap-4">
                            <h3 className="text-sm font-medium">
                                {exp.company} <span className="text-zinc-400 font-normal">· {exp.industry}</span>
                            </h3>
                            <span className="text-xs text-zinc-400 shrink-0">{exp.period}</span>
                        </div>
                        <p className="text-xs text-zinc-400 mb-3">
                            {exp.title} · {exp.type} · {exp.location}
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed mb-3">{exp.summary}</p>
                        <ul className="space-y-1.5 mb-3">
                            {exp.bullets.map((bullet) => (
                                <li key={bullet} className="text-sm text-zinc-500 leading-relaxed flex gap-2">
                                    <span className="text-zinc-300 shrink-0 select-none">·</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
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
