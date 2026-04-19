import { profile } from "@/lib/data";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 max-w-2xl mx-auto px-6`">
            <h1 className="text-3xl font-medium tracking-tight mb-3">{profile.title}</h1>
            <p className="text-zinc-500 mb-6 leading-relaxed">{profile.tagline}</p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400">
                <span>{profile.location}</span>
                <a href={`mailto:${profile.email}`} className="hover:text-zinc-900 transition-colors">{profile.email}</a>
                <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">{profile.github}</a>
            </div>
        </section>
    );
}