import { credentials } from "@/lib/data";

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6">
            <h3 className="text-xs uppercase tracking-widest text-zinc-400 pt-0.5">{heading}</h3>
            <div className="space-y-1.5">{children}</div>
        </div>
    );
}

export default function Credentials() {
    return (
        <section id="credentials" className="max-w-2xl mx-auto py-12 border-t border-zinc-100 scroll-mt-20">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">Credentials</h2>
            <div className="space-y-6">
                <Block heading="Certifications">
                    {credentials.certifications.map((cert) => (
                        <p key={cert.name} className="text-sm text-zinc-500 leading-relaxed">
                            {cert.name} <span className="text-zinc-400">· {cert.issuer} · {cert.date}</span>
                        </p>
                    ))}
                </Block>
                <Block heading="Languages">
                    {credentials.languages.map((lang) => (
                        <p key={lang} className="text-sm text-zinc-500 leading-relaxed">
                            {lang}
                        </p>
                    ))}
                </Block>
                <Block heading="AI Engineering">
                    <div className="flex flex-wrap gap-2">
                        {credentials.aiEngineering.map((topic) => (
                            <span key={topic} className="text-xs px-2 py-1 border border-zinc-200 text-zinc-500 rounded">
                                {topic}
                            </span>
                        ))}
                    </div>
                </Block>
            </div>
        </section>
    );
}
