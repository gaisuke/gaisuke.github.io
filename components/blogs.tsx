import { reflections, profile } from "@/lib/data";

type Reflection = (typeof reflections)[number];

// Deterministic rotation: pick 3 articles that change daily, computed at
// build/render time so there is no client-side state and no layout shift.
function pickDaily(items: Reflection[], count: number) {
    const day = Math.floor(Date.now() / 86_400_000);
    const start = day % items.length;
    return Array.from(
        { length: Math.min(count, items.length) },
        (_, i) => items[(start + i) % items.length],
    );
}

export default function Blogs() {
    const displayedBlogs = pickDaily(reflections, 3);

    return (
        <section id="writing" className="max-w-2xl mx-auto py-12 border-t border-zinc-100 scroll-mt-20">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                REFLECTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {displayedBlogs.map((reflection) => (
                    <div key={reflection.title} className="group flex flex-col justify-between">
                        <div>
                            <div className="text-xs text-zinc-400 mb-2">
                                {reflection.date}
                            </div>
                            <h3 className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300 leading-snug mb-2">
                                {reflection.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                                {reflection.description}
                            </p>
                        </div>
                        <div>
                            <a
                                href={reflection.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1 underline-offset-4 hover:underline"
                            >
                                Read on Medium ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <a
                    href={`https://${profile.medium}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors underline-offset-4 hover:underline"
                >
                    See all articles on {profile.medium}
                </a>
            </div>
        </section>
    );
}
