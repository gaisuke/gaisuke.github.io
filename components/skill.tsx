import { skills } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="text-xs px-3 py-1.5 border border-zinc-200 text-zinc-500 rounded hover:border-zinc-400 hover:text-zinc-900 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}