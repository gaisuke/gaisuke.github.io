import { education, certifications } from "@/lib/data";

export default function Education() {
    return (
        <section id="education" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Education</h2>
            <div className="space-y-8">
                {education.map((edu) => (
                    <div key={edu.school}>
                        <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-medium">{edu.school}</span>
                            <span className="text-xs text-zinc-400 shrink-0 ml-4">{edu.period}</span>
                        </div>
                        <p className="text-sm text-zinc-500 mb-2">{edu.degree} · {edu.location}</p>
                        <p className="text-sm text-zinc-500 leading-relaxed">{edu.details}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mt-12 mb-6">Certifications</h3>
            <div className="space-y-3">
                {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start justify-between border-t border-zinc-100 pt-3 first:border-t-0 first:pt-0">
                        <span className="text-sm text-zinc-600">{cert.name} · {cert.issuer}</span>
                        <span className="text-xs text-zinc-400 shrink-0 ml-4">{cert.date}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
