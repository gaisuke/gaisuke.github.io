import { education } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="max-w-2xl mx-auto py-12 border-t border-zinc-100 scroll-mt-20">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Education</h2>
            <div className="flex justify-between items-baseline mb-1 gap-4">
                <h3 className="text-sm font-medium">{education.school}</h3>
                <span className="text-xs text-zinc-400 shrink-0">{education.period}</span>
            </div>
            <p className="text-xs text-zinc-400 mb-3">
                {education.degree} · {education.location}
            </p>
            <ul className="space-y-1.5">
                {education.details.map((detail) => (
                    <li key={detail} className="text-sm text-zinc-500 leading-relaxed flex gap-2">
                        <span className="text-zinc-300 shrink-0 select-none">·</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
