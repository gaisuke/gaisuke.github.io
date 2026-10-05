import { profile } from "@/lib/data";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 max-w-2xl mx-auto px-0">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3">
                {profile.title}
            </p>
            <h1 className="text-3xl font-medium tracking-tight mb-4">{profile.name}</h1>
            <p className="text-zinc-500 mb-6 leading-relaxed text-sm">{profile.summary}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500">
                <span>{profile.location}</span>
                <a href="https://wa.me/6285172220597" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
                    {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`} className="hover:text-zinc-900 transition-colors">
                    {profile.email}
                </a>
                <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">
                    {profile.github}
                </a>
            </div>
        </section>
    );
}
