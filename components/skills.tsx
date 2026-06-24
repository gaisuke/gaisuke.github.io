import { skills, languages } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 border border-zinc-200 text-zinc-500 rounded">
                        {skill}
                    </span>
                ))}
            </div>
            <div className="space-y-3">
                {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between border-t border-zinc-100 pt-3 first:border-t-0 first:pt-0">
                        <span className="text-sm text-zinc-600">{lang.name}</span>
                        <span className="text-xs text-zinc-400">{lang.level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
